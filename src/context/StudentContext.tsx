import { createContext, useContext, useState, useEffect, useCallback, useRef, type ReactNode } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import type {
  StudentProfile,
  StudentSkill,
  SkillLevel,
  RoadmapStatus,
  ActivityEntry,
  ProfileCertification,
  ProfileProject,
  TopicProgress,
  QuizAttempt,
  ConfidenceRating,
  WeeklyCheckIn,
} from '@/types';
import { getRoadmap } from '@/data/roadmaps';
import { getCareerRole } from '@/data/careers';
import { computeRoadmapStatuses } from '@/utils/personalization';
import { getTopicById } from '@/data/topics';
import { getQuizQuestionsForTopic } from '@/data/quizQuestions';
import {
  createDefaultTopicProgress,
  calculateTopicLearningProgress,
  determineTopicStatus,
  calculateMastery,
  PASSING_SCORE,
} from '@/utils/progress';

function createEmptyProfile(): StudentProfile {
  return {
    id: '',
    name: '',
    email: '',
    college: '',
    branch: '',
    year: '',
    skills: [],
    interests: [],
    preferredTechnologies: [],
    careerGoals: '',
    interestedRoles: [],
    hoursPerWeek: 10,
    existingCertifications: [],
    completedProjects: [],
    targetRoleId: null,
    roadmapProgress: {},
    completedResources: [],
    earnedCertifications: [],
    topicProgress: {},
    weeklyCheckIns: [],
    activity: [],
    streak: 1,
    lastActiveDate: new Date().toISOString().split('T')[0],
    weeklyActivity: [],
    createdAt: new Date().toISOString(),
    onboarded: false,
  };
}

function makeActivityEntry(action: string, detail: string, icon = 'CheckCircle'): ActivityEntry {
  return {
    id: Math.random().toString(36).substring(7),
    action,
    detail,
    date: new Date().toISOString(),
    icon,
  };
}

// ── Database row shape ──
interface ProfileRow {
  id: string;
  user_id: string;
  name: string;
  email: string;
  college: string;
  branch: string;
  year: string;
  skill_level: string;
  onboarding_completed: boolean;
  data: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

function rowToProfile(row: ProfileRow): StudentProfile {
  const data = row.data || {};
  const base = createEmptyProfile();
  const merged = { ...base, ...data } as StudentProfile;
  merged.id = row.id;
  merged.email = row.email || merged.email;
  merged.name = row.name || merged.name;
  merged.college = row.college || merged.college;
  merged.branch = row.branch || merged.branch;
  merged.year = row.year || merged.year;
  merged.onboarded = row.onboarding_completed;
  // Ensure topicProgress entries have subtopicsCompleted
  if (merged.topicProgress) {
    for (const key of Object.keys(merged.topicProgress)) {
      if (!merged.topicProgress[key].subtopicsCompleted) {
        merged.topicProgress[key].subtopicsCompleted = [];
      }
    }
  }
  return merged;
}

function profileToRowData(profile: StudentProfile): Record<string, unknown> {
  // Strip fields that live in dedicated columns; keep everything else in data
  const { id, email, name, college, branch, year, onboarded, ...rest } = profile;
  void id; void email; void name; void college; void branch; void year; void onboarded;
  return rest as unknown as Record<string, unknown>;
}

interface StudentContextValue {
  profile: StudentProfile | null;
  authUser: User | null;
  isAuthenticated: boolean;
  isOnboarded: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (updates: Partial<StudentProfile>) => void;
  setProfile: (profile: StudentProfile) => void;
  completeOnboarding: (profile: StudentProfile) => void;
  selectTargetRole: (roleId: string) => void;
  updateSkill: (skill: string, level: SkillLevel) => void;
  addSkill: (skill: StudentSkill) => void;
  removeSkill: (skill: string) => void;
  addCertification: (cert: ProfileCertification) => void;
  updateCertification: (id: string, updates: Partial<ProfileCertification>) => void;
  removeCertification: (id: string) => void;
  addProject: (project: ProfileProject) => void;
  updateProject: (id: string, updates: Partial<ProfileProject>) => void;
  removeProject: (id: string) => void;
  addInterestedRole: (role: string) => void;
  removeInterestedRole: (role: string) => void;
  markRoadmapPhase: (phaseId: string, status: RoadmapStatus) => void;
  toggleResourceComplete: (resourceId: string) => void;
  toggleCertificationEarned: (certId: string) => void;
  addActivity: (action: string, detail: string, icon?: string) => void;
  resetProfile: () => void;
  toggleSubtopic: (topicId: string, subtopicId: string) => void;
  toggleTopicResource: (topicId: string, resourceId: string) => void;
  togglePracticeItem: (topicId: string, practiceItemId: string) => void;
  recordQuizAttempt: (topicId: string, attempt: Omit<QuizAttempt, 'id' | 'date' | 'topicId'>) => void;
  setTopicConfidence: (topicId: string, rating: ConfidenceRating) => void;
  resetTopicProgress: (topicId: string) => void;
  resetAllTopicProgress: () => void;
  addWeeklyCheckIn: (checkIn: Omit<WeeklyCheckIn, 'id' | 'date'>) => WeeklyCheckIn;
  devCompleteAllSubtopics: (topicId: string) => void;
  devSimulateQuizScore: (topicId: string, score: number) => void;
}

const StudentContext = createContext<StudentContextValue | null>(null);

export function StudentProvider({ children }: { children: ReactNode }) {
  const [profile, setProfileState] = useState<StudentProfile | null>(null);
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Fetch profile from database for a given user ──
  const fetchProfile = useCallback(async (user: User): Promise<StudentProfile | null> => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', user.id)
      .maybeSingle();

    if (error) {
      console.error('Error fetching profile:', error.message);
      return null;
    }

    if (!data) {
      // No profile yet — return a fresh empty one tied to this user's email
      return { ...createEmptyProfile(), email: user.email || '', name: '' };
    }

    return rowToProfile(data as ProfileRow);
  }, []);

  // ── Persist profile to database (debounced) ──
  const persistProfile = useCallback(async (p: StudentProfile, userId: string, onboardingCompleted: boolean) => {
    const rowPayload = {
      user_id: userId,
      name: p.name,
      email: p.email,
      college: p.college || '',
      branch: p.branch || '',
      year: p.year || '',
      skill_level: '',
      onboarding_completed: onboardingCompleted,
      data: profileToRowData(p),
      updated_at: new Date().toISOString(),
    };

    // Try update first; if no row exists, insert
    const { data: existing } = await supabase
      .from('profiles')
      .select('id')
      .eq('user_id', userId)
      .maybeSingle();

    if (existing) {
      const { error } = await supabase
        .from('profiles')
        .update(rowPayload)
        .eq('user_id', userId);
      if (error) console.error('Error updating profile:', error.message);
    } else {
      const { error } = await supabase
        .from('profiles')
        .insert(rowPayload);
      if (error) console.error('Error inserting profile:', error.message);
    }
  }, []);

  // ── Debounced save on profile change ──
  useEffect(() => {
    if (!profile || !authUser) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      persistProfile(profile, authUser.id, profile.onboarded);
    }, 800);
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, [profile, authUser, persistProfile]);

  // ── Session restoration on mount + auth state listener ──
  useEffect(() => {
    let mounted = true;

    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!mounted) return;

      if (session?.user) {
        setAuthUser(session.user);
        const p = await fetchProfile(session.user);
        if (!mounted) return;
        setProfileState(p);
      }
      setLoading(false);
    })();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!mounted) return;
      (async () => {
        if (event === 'SIGNED_OUT' || !session) {
          setAuthUser(null);
          setProfileState(null);
          setLoading(false);
          return;
        }
        if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED' || event === 'INITIAL_SESSION') {
          setAuthUser(session.user);
          const p = await fetchProfile(session.user);
          if (!mounted) return;
          setProfileState(p);
          setLoading(false);
        }
      })();
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [fetchProfile]);

  // ── Auth methods ──
  const login = useCallback(async (email: string, password: string): Promise<boolean> => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      throw error;
    }
    let onboarded = false;
    if (data.user) {
      setAuthUser(data.user);
      const p = await fetchProfile(data.user);
      setProfileState(p);
      onboarded = !!p?.onboarded;
    }
    return onboarded;
  }, [fetchProfile]);

  const signup = useCallback(async (name: string, email: string, password: string): Promise<void> => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      throw error;
    }
    if (data.user) {
      setAuthUser(data.user);
      const empty = { ...createEmptyProfile(), email, name };
      setProfileState(empty);
    }
  }, []);

  const logout = useCallback(async (): Promise<void> => {
    await supabase.auth.signOut();
    setAuthUser(null);
    setProfileState(null);
  }, []);

  // ── Profile mutation helpers ──
  const updateProfile = useCallback((updates: Partial<StudentProfile>) => {
    setProfileState((prev) => (prev ? { ...prev, ...updates } : null));
  }, []);

  const setProfile = useCallback((newProfile: StudentProfile) => {
    setProfileState(newProfile);
  }, []);

  const completeOnboarding = useCallback((completedProfile: StudentProfile) => {
    setProfileState({ ...completedProfile, onboarded: true });
  }, []);

  const addActivity = useCallback((action: string, detail: string, icon = 'CheckCircle') => {
    setProfileState((prev) => {
      if (!prev) return prev;
      const entry = makeActivityEntry(action, detail, icon);
      return { ...prev, activity: [entry, ...prev.activity].slice(0, 20) };
    });
  }, []);

  const selectTargetRole = useCallback((roleId: string) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      const role = getCareerRole(roleId);
      const newProfile = { ...prev, targetRoleId: roleId };
      const phases = getRoadmap(roleId);
      const statuses = computeRoadmapStatuses(newProfile);
      const roadmapProgress: Record<string, RoadmapStatus> = {};
      for (const phase of phases) {
        roadmapProgress[phase.id] = statuses[phase.id] || 'Locked';
      }
      const entry = makeActivityEntry('Selected target role', role?.title || roleId, 'Target');
      return {
        ...newProfile,
        roadmapProgress,
        activity: [entry, ...prev.activity].slice(0, 20),
      };
    });
  }, []);

  const updateSkill = useCallback((skill: string, level: SkillLevel) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      const existing = prev.skills.find((s) => s.name === skill);
      const newSkills = existing
        ? prev.skills.map((s) => (s.name === skill ? { ...s, level } : s))
        : [...prev.skills, { name: skill, level }];
      return { ...prev, skills: newSkills };
    });
  }, []);

  const addSkill = useCallback((skill: StudentSkill) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      const existing = prev.skills.find((s) => s.name === skill.name);
      const newSkills = existing
        ? prev.skills.map((s) => (s.name === skill.name ? skill : s))
        : [...prev.skills, skill];
      return { ...prev, skills: newSkills };
    });
  }, []);

  const removeSkill = useCallback((skill: string) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      return { ...prev, skills: prev.skills.filter((s) => s.name !== skill) };
    });
  }, []);

  const addCertification = useCallback((cert: ProfileCertification) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      return { ...prev, existingCertifications: [...prev.existingCertifications, cert] };
    });
  }, []);

  const updateCertification = useCallback((id: string, updates: Partial<ProfileCertification>) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        existingCertifications: prev.existingCertifications.map((c) =>
          c.id === id ? { ...c, ...updates } : c
        ),
      };
    });
  }, []);

  const removeCertification = useCallback((id: string) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      return { ...prev, existingCertifications: prev.existingCertifications.filter((c) => c.id !== id) };
    });
  }, []);

  const addProject = useCallback((project: ProfileProject) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      return { ...prev, completedProjects: [...prev.completedProjects, project] };
    });
  }, []);

  const updateProject = useCallback((id: string, updates: Partial<ProfileProject>) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        completedProjects: prev.completedProjects.map((p) =>
          p.id === id ? { ...p, ...updates } : p
        ),
      };
    });
  }, []);

  const removeProject = useCallback((id: string) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      return { ...prev, completedProjects: prev.completedProjects.filter((p) => p.id !== id) };
    });
  }, []);

  const addInterestedRole = useCallback((role: string) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      if (prev.interestedRoles.includes(role)) return prev;
      return { ...prev, interestedRoles: [...prev.interestedRoles, role] };
    });
  }, []);

  const removeInterestedRole = useCallback((role: string) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      return { ...prev, interestedRoles: prev.interestedRoles.filter((r) => r !== role) };
    });
  }, []);

  const markRoadmapPhase = useCallback((phaseId: string, status: RoadmapStatus) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      if (status === 'Completed') return prev;
      const newRoadmapProgress = { ...prev.roadmapProgress, [phaseId]: status };
      const entry = makeActivityEntry('Started roadmap phase', phaseId, 'Play');
      return {
        ...prev,
        roadmapProgress: newRoadmapProgress,
        activity: [entry, ...prev.activity].slice(0, 20),
      };
    });
  }, []);

  const toggleResourceComplete = useCallback((resourceId: string) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      const isComplete = prev.completedResources.includes(resourceId);
      const completedResources = isComplete
        ? prev.completedResources.filter((id) => id !== resourceId)
        : [...prev.completedResources, resourceId];
      const newActivity = isComplete ? prev.activity : [
        makeActivityEntry('Completed resource', resourceId, 'BookOpen'),
        ...prev.activity,
      ].slice(0, 20);
      return { ...prev, completedResources, activity: newActivity };
    });
  }, []);

  const toggleCertificationEarned = useCallback((certId: string) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      const isEarned = prev.earnedCertifications.includes(certId);
      const earnedCertifications = isEarned
        ? prev.earnedCertifications.filter((id) => id !== certId)
        : [...prev.earnedCertifications, certId];
      const newActivity = isEarned ? prev.activity : [
        makeActivityEntry('Earned certification', certId, 'Award'),
        ...prev.activity,
      ].slice(0, 20);
      return { ...prev, earnedCertifications, activity: newActivity };
    });
  }, []);

  // ── Topic-level progress tracking ──

  const updateTopicProgress = useCallback((
    prev: StudentProfile,
    topicId: string,
    updater: (tp: TopicProgress) => TopicProgress
  ): StudentProfile => {
    const topic = getTopicById(topicId);
    if (!topic) return prev;
    const current = prev.topicProgress[topicId] || createDefaultTopicProgress(topicId);
    const updated = updater({ ...current });
    updated.learningProgress = calculateTopicLearningProgress(topic, updated);
    updated.learningStatus = determineTopicStatus(topic, updated);
    if (updated.latestScore !== null) {
      updated.masteryLevel = calculateMastery(updated.latestScore);
    }
    updated.lastActivityDate = new Date().toISOString();
    return {
      ...prev,
      topicProgress: { ...prev.topicProgress, [topicId]: updated },
    };
  }, []);

  const toggleSubtopic = useCallback((topicId: string, subtopicId: string) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      const topic = getTopicById(topicId);
      if (!topic) return prev;
      const current = prev.topicProgress[topicId] || createDefaultTopicProgress(topicId);
      const isCompleted = current.subtopicsCompleted.includes(subtopicId);
      const subtopicsCompleted = isCompleted
        ? current.subtopicsCompleted.filter((id) => id !== subtopicId)
        : [...current.subtopicsCompleted, subtopicId];
      const subtopicName = topic.subtopics.find((s) => s.id === subtopicId)?.name || subtopicId;
      const newProfile = updateTopicProgress(prev, topicId, (tp) => ({
        ...tp,
        subtopicsCompleted,
      }));
      const entry = makeActivityEntry(
        isCompleted ? 'Uncompleted subtopic' : 'Completed subtopic',
        `${subtopicName} (${topic.name})`,
        'CheckCircle'
      );
      return { ...newProfile, activity: [entry, ...prev.activity].slice(0, 20) };
    });
  }, [updateTopicProgress]);

  const toggleTopicResource = useCallback((topicId: string, resourceId: string) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      const newProfile = updateTopicProgress(prev, topicId, (tp) => {
        const isCompleted = tp.resourcesCompleted.includes(resourceId);
        const resourcesCompleted = isCompleted
          ? tp.resourcesCompleted.filter((id) => id !== resourceId)
          : [...tp.resourcesCompleted, resourceId];
        return { ...tp, resourcesCompleted };
      });
      const isGlobalComplete = prev.completedResources.includes(resourceId);
      const completedResources = isGlobalComplete
        ? prev.completedResources
        : [...prev.completedResources, resourceId];
      const entry = makeActivityEntry('Completed resource', resourceId, 'BookOpen');
      return {
        ...newProfile,
        completedResources,
        activity: [entry, ...newProfile.activity].slice(0, 20),
      };
    });
  }, [updateTopicProgress]);

  const togglePracticeItem = useCallback((topicId: string, practiceItemId: string) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      const newProfile = updateTopicProgress(prev, topicId, (tp) => {
        const isCompleted = tp.practiceCompleted.includes(practiceItemId);
        const practiceCompleted = isCompleted
          ? tp.practiceCompleted.filter((id) => id !== practiceItemId)
          : [...tp.practiceCompleted, practiceItemId];
        return { ...tp, practiceCompleted };
      });
      const entry = makeActivityEntry('Completed practice exercise', practiceItemId, 'Code');
      return { ...newProfile, activity: [entry, ...newProfile.activity].slice(0, 20) };
    });
  }, [updateTopicProgress]);

  const recordQuizAttempt = useCallback((
    topicId: string,
    attempt: Omit<QuizAttempt, 'id' | 'date' | 'topicId'>
  ) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      const topic = getTopicById(topicId);
      if (!topic) return prev;

      const fullAttempt: QuizAttempt = {
        ...attempt,
        id: Math.random().toString(36).substring(7),
        date: new Date().toISOString(),
        topicId,
      };

      const newProfile = updateTopicProgress(prev, topicId, (tp) => {
        const quizAttempts = [...tp.quizAttempts, fullAttempt];
        const allScores = quizAttempts.map((a) => a.score);
        const bestScore = Math.max(...allScores);
        const latestScore = attempt.score;
        return {
          ...tp,
          quizAttempts,
          bestScore,
          latestScore,
          masteryLevel: calculateMastery(latestScore),
        };
      });

      const entry = makeActivityEntry(
        'Completed quiz',
        `${topic.name} — Score: ${attempt.score}%`,
        attempt.score >= PASSING_SCORE ? 'Award' : 'AlertCircle'
      );
      return { ...newProfile, activity: [entry, ...newProfile.activity].slice(0, 20) };
    });
  }, [updateTopicProgress]);

  const setTopicConfidence = useCallback((topicId: string, rating: ConfidenceRating) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      return updateTopicProgress(prev, topicId, (tp) => ({
        ...tp,
        confidenceRating: rating,
      }));
    });
  }, [updateTopicProgress]);

  const resetTopicProgress = useCallback((topicId: string) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      const newTopicProgress = { ...prev.topicProgress };
      delete newTopicProgress[topicId];
      return { ...prev, topicProgress: newTopicProgress };
    });
  }, []);

  const resetAllTopicProgress = useCallback(() => {
    setProfileState((prev) => {
      if (!prev) return prev;
      return { ...prev, topicProgress: {} };
    });
  }, []);

  const addWeeklyCheckIn = useCallback((checkIn: Omit<WeeklyCheckIn, 'id' | 'date'>): WeeklyCheckIn => {
    const fullCheckIn: WeeklyCheckIn = {
      ...checkIn,
      id: Math.random().toString(36).substring(7),
      date: new Date().toISOString(),
    };
    setProfileState((prev) => {
      if (!prev) return prev;
      const entry = makeActivityEntry('Weekly check-in', 'Submitted weekly reflection', 'Calendar');
      return {
        ...prev,
        weeklyCheckIns: [...prev.weeklyCheckIns, fullCheckIn],
        activity: [entry, ...prev.activity].slice(0, 20),
      };
    });
    return fullCheckIn;
  }, []);

  // ── Dev test helpers ──

  const devCompleteAllSubtopics = useCallback((topicId: string) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      const topic = getTopicById(topicId);
      if (!topic) return prev;
      const allSubtopicIds = topic.subtopics.map((s) => s.id);
      const allResourceIds = topic.resourceIds;
      const allPracticeIds = topic.practiceItemIds;
      const newProfile = updateTopicProgress(prev, topicId, (tp) => ({
        ...tp,
        subtopicsCompleted: allSubtopicIds,
        resourcesCompleted: allResourceIds,
        practiceCompleted: allPracticeIds,
      }));
      const entry = makeActivityEntry('DEV: Completed all subtopics', topic.name, 'Zap');
      return { ...newProfile, activity: [entry, ...newProfile.activity].slice(0, 20) };
    });
  }, [updateTopicProgress]);

  const devSimulateQuizScore = useCallback((topicId: string, score: number) => {
    setProfileState((prev) => {
      if (!prev) return prev;
      const topic = getTopicById(topicId);
      if (!topic) return prev;
      const questions = getQuizQuestionsForTopic(topicId);
      const totalQ = questions.length || 5;
      const correctCount = Math.round((score / 100) * totalQ);
      const answers = questions.slice(0, totalQ).map((q) => ({
        questionId: q.id,
        selectedAnswer: q.correctAnswer,
        isCorrect: true,
      }));
      const wrongCount = totalQ - correctCount;
      for (let i = 0; i < wrongCount && i < answers.length; i++) {
        answers[i] = {
          questionId: answers[i].questionId,
          selectedAnswer: '__wrong__',
          isCorrect: false,
        };
      }
      const fullAttempt: QuizAttempt = {
        id: Math.random().toString(36).substring(7),
        date: new Date().toISOString(),
        topicId,
        score,
        totalQuestions: totalQ,
        correctAnswers: correctCount,
        answers,
        weakSubtopicIds: score < PASSING_SCORE
          ? topic.subtopics.slice(0, Math.ceil(topic.subtopics.length * 0.3)).map((s) => s.id)
          : [],
        strongSubtopicIds: score >= PASSING_SCORE
          ? topic.subtopics.slice(0, Math.ceil(topic.subtopics.length * 0.5)).map((s) => s.id)
          : [],
      };
      const newProfile = updateTopicProgress(prev, topicId, (tp) => {
        const quizAttempts = [...tp.quizAttempts, fullAttempt];
        const allScores = quizAttempts.map((a) => a.score);
        const bestScore = Math.max(...allScores);
        return {
          ...tp,
          quizAttempts,
          bestScore,
          latestScore: score,
          masteryLevel: calculateMastery(score),
        };
      });
      const entry = makeActivityEntry('DEV: Simulated quiz', `${topic.name} — Score: ${score}%`, 'Zap');
      return { ...newProfile, activity: [entry, ...newProfile.activity].slice(0, 20) };
    });
  }, [updateTopicProgress]);

  const resetProfile = useCallback(async () => {
    if (authUser) {
      await supabase.from('profiles').delete().eq('user_id', authUser.id);
    }
    await supabase.auth.signOut();
    setAuthUser(null);
    setProfileState(null);
  }, [authUser]);

  const isAuthenticated = !!authUser;
  const isOnboarded = !!profile?.onboarded;

  const value: StudentContextValue = {
    profile,
    authUser,
    isAuthenticated,
    isOnboarded,
    loading,
    login,
    signup,
    logout,
    updateProfile,
    setProfile,
    completeOnboarding,
    selectTargetRole,
    updateSkill,
    addSkill,
    removeSkill,
    addCertification,
    updateCertification,
    removeCertification,
    addProject,
    updateProject,
    removeProject,
    addInterestedRole,
    removeInterestedRole,
    markRoadmapPhase,
    toggleResourceComplete,
    toggleCertificationEarned,
    addActivity,
    resetProfile,
    toggleSubtopic,
    toggleTopicResource,
    togglePracticeItem,
    recordQuizAttempt,
    setTopicConfidence,
    resetTopicProgress,
    resetAllTopicProgress,
    addWeeklyCheckIn,
    devCompleteAllSubtopics,
    devSimulateQuizScore,
  };

  return <StudentContext.Provider value={value}>{children}</StudentContext.Provider>;
}

export function useStudent() {
  const ctx = useContext(StudentContext);
  if (!ctx) throw new Error('useStudent must be used within StudentProvider');
  return ctx;
}
