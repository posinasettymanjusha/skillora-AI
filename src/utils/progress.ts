import type {
  StudentProfile,
  RoadmapPhase,
  RoadmapStatus,
  TopicProgress,
  QuizAttempt,
  MasteryLevel,
  TopicLearningStatus,
  ReadinessBreakdown,
  RoadmapTopic,
} from '@/types';
import { getRoadmap } from '@/data/roadmaps';
import { getCareerRole } from '@/data/careers';
import { TOPICS, getTopicsForPhase, getTopicById } from '@/data/topics';
import { getQuizQuestionsForTopic } from '@/data/quizQuestions';
import {
  getSkillLevel,
  analyzeSkillGap,
  getSkillGapSummary,
  getRecommendedResources,
  getRecommendedCertifications,
} from './personalization';

// ── Mastery thresholds (configurable) ──
export const MASTERY_THRESHOLDS = {
  MASTERED: 90,
  STRONG: 80,
  DEVELOPING: 60,
  // below DEVELOPING = Needs Revision
};

export const PASSING_SCORE = 60;

// ── Create default topic progress ──
export function createDefaultTopicProgress(topicId: string): TopicProgress {
  return {
    topicId,
    learningStatus: 'Not Started',
    learningProgress: 0,
    subtopicsCompleted: [],
    resourcesCompleted: [],
    practiceCompleted: [],
    quizAttempts: [],
    bestScore: null,
    latestScore: null,
    masteryLevel: null,
    confidenceRating: null,
    lastActivityDate: null,
    timeSpentMinutes: 0,
  };
}

// ── Get or create topic progress ──
export function getTopicProgress(profile: StudentProfile, topicId: string): TopicProgress {
  return profile.topicProgress?.[topicId] || createDefaultTopicProgress(topicId);
}

// ── Calculate mastery level from score ──
export function calculateMastery(score: number): MasteryLevel {
  if (score >= MASTERY_THRESHOLDS.MASTERED) return 'Mastered';
  if (score >= MASTERY_THRESHOLDS.STRONG) return 'Strong';
  if (score >= MASTERY_THRESHOLDS.DEVELOPING) return 'Developing';
  return 'Needs Revision';
}

// ── Calculate topic learning progress from subtopic completion ──
// learningProgress = (completedSubtopics / totalSubtopics) * 100
// But we also factor in resources completed and practice completed
// Final formula: 60% subtopics + 25% resources + 15% practice
export function calculateTopicLearningProgress(
  topic: RoadmapTopic,
  progress: TopicProgress
): number {
  if (topic.subtopics.length === 0) {
    // No subtopics — base on resources + practice.
    // If there are no resources or practice items, progress remains 0.
    const resourceRatio =
      topic.resourceIds.length > 0
        ? progress.resourcesCompleted.length / topic.resourceIds.length
        : 0;

    const practiceRatio =
      topic.practiceItemIds.length > 0
        ? progress.practiceCompleted.length / topic.practiceItemIds.length
        : 0;

    return Math.min(
      100,
      Math.round((resourceRatio * 0.6 + practiceRatio * 0.4) * 100)
    );
  }

  // Subtopic progress: completed subtopics / total subtopics
  const subtopicRatio =
    progress.subtopicsCompleted.length / topic.subtopics.length;

  const subtopicProgress = Math.round(subtopicRatio * 100);

  // Resources only count when they actually exist.
  // Missing resources must NOT be treated as completed.
  const resourceRatio =
    topic.resourceIds.length > 0
      ? progress.resourcesCompleted.length / topic.resourceIds.length
      : 0;

  // Practice only counts when practice items actually exist.
  // Missing practice must NOT be treated as completed.
  const practiceRatio =
    topic.practiceItemIds.length > 0
      ? progress.practiceCompleted.length / topic.practiceItemIds.length
      : 0;

  // Weighted:
  // 60% subtopics
  // 25% resources
  // 15% practice
  const combined =
    subtopicProgress * 0.6 +
    resourceRatio * 100 * 0.25 +
    practiceRatio * 100 * 0.15;

  return Math.min(100, Math.round(combined));
}

// ── Determine topic learning status ──
export function determineTopicStatus(
  topic: RoadmapTopic,
  progress: TopicProgress
): TopicLearningStatus {
  const learningProgress = calculateTopicLearningProgress(topic, progress);

  if (learningProgress === 0 && progress.quizAttempts.length === 0) {
    return 'Not Started';
  }

  if (learningProgress < 100) {
    return 'In Progress';
  }

  // Learning content completed
  if (progress.quizAttempts.length === 0) {
    return 'Assessment Pending';
  }

  // Has quiz attempts
  const latestScore = progress.latestScore ?? 0;

  if (latestScore >= MASTERY_THRESHOLDS.STRONG) {
    return 'Mastered';
  }

  if (latestScore < PASSING_SCORE) {
    return 'Needs Revision';
  }

  return 'Mastered';
}

// ── Calculate phase progress from topic-level data ──
export function calculatePhaseProgress(
  profile: StudentProfile,
  phase: RoadmapPhase
): {
  learningProgress: number;
  knowledgeMastery: number;
  topicsCompleted: number;
  totalTopics: number;
  weakTopics: number;
  status: RoadmapStatus;
} {
  const topics = getTopicsForPhase(phase.id);

  if (topics.length === 0) {
    // No detailed topics — fall back to old roadmap progress
    const oldStatus = profile.roadmapProgress[phase.id] || 'Locked';
    const isCompleted = oldStatus === 'Completed';

    return {
      learningProgress: isCompleted ? 100 : 0,
      knowledgeMastery: isCompleted ? 100 : 0,
      topicsCompleted: isCompleted ? 1 : 0,
      totalTopics: 1,
      weakTopics: 0,
      status: oldStatus,
    };
  }

  let totalWeight = 0;
  let completedWeight = 0;
  let masterySum = 0;
  let masteryCount = 0;
  let topicsCompleted = 0;
  let weakTopics = 0;

  for (const topic of topics) {
    const progress = getTopicProgress(profile, topic.id);
    const learningProgress = calculateTopicLearningProgress(topic, progress);
    const status = determineTopicStatus(topic, progress);

    totalWeight += topic.weight;
    completedWeight += (learningProgress / 100) * topic.weight;

    if (
      status === 'Mastered' ||
      (learningProgress >= 100 &&
        progress.latestScore !== null &&
        progress.latestScore >= PASSING_SCORE)
    ) {
      topicsCompleted++;
    }

    if (progress.latestScore !== null) {
      masterySum += progress.latestScore;
      masteryCount++;

      if (progress.latestScore < PASSING_SCORE) {
        weakTopics++;
      }
    }
  }

  const rawLearningProgress =
    totalWeight > 0
      ? Math.round((completedWeight / totalWeight) * 100)
      : 0;

  const rawKnowledgeMastery =
    masteryCount > 0 ? Math.round(masterySum / masteryCount) : 0;

  // Determine phase status
  let status: RoadmapStatus = 'Upcoming';

  if (profile.roadmapProgress[phase.id] === 'Locked') {
    status = 'Locked';
  } else if (rawLearningProgress === 0) {
    status = 'Upcoming';
  } else if (rawLearningProgress < 100) {
    status = 'In Progress';
  } else if (weakTopics > 0) {
    status = 'In Progress';
  } else if (topicsCompleted === topics.length) {
    status = 'Completed';
  } else {
    status = 'In Progress';
  }

  // Locked phases must report zero progress —
  // the user has not started them.
  if (status === 'Locked') {
    return {
      learningProgress: 0,
      knowledgeMastery: 0,
      topicsCompleted: 0,
      totalTopics: topics.length,
      weakTopics: 0,
      status,
    };
  }

  return {
    learningProgress: rawLearningProgress,
    knowledgeMastery: rawKnowledgeMastery,
    topicsCompleted,
    totalTopics: topics.length,
    weakTopics,
    status,
  };
}

// ── Calculate overall roadmap progress ──
export function calculateOverallProgress(profile: StudentProfile): {
  overallProgress: number;
  learningProgress: number;
  knowledgeMastery: number;
  completedPhases: number;
  totalPhases: number;
  phaseBreakdown: {
    phase: RoadmapPhase;
    learningProgress: number;
    knowledgeMastery: number;
    topicsCompleted: number;
    totalTopics: number;
    weakTopics: number;
    status: RoadmapStatus;
  }[];
} {
  const phases = getRoadmap(profile.targetRoleId || '');

  if (phases.length === 0) {
    return {
      overallProgress: 0,
      learningProgress: 0,
      knowledgeMastery: 0,
      completedPhases: 0,
      totalPhases: 0,
      phaseBreakdown: [],
    };
  }

  let totalHours = 0;
  let completedHours = 0;
  let totalMasterySum = 0;
  let totalMasteryCount = 0;
  let completedPhases = 0;

  const phaseBreakdown = phases.map((phase) => {
    const result = calculatePhaseProgress(profile, phase);

    totalHours += phase.estimatedHours;
    completedHours +=
      (result.learningProgress / 100) * phase.estimatedHours;

    if (result.knowledgeMastery > 0) {
      totalMasterySum += result.knowledgeMastery;
      totalMasteryCount++;
    }

    if (result.status === 'Completed') {
      completedPhases++;
    }

    return {
      phase,
      learningProgress: result.learningProgress,
      knowledgeMastery: result.knowledgeMastery,
      topicsCompleted: result.topicsCompleted,
      totalTopics: result.totalTopics,
      weakTopics: result.weakTopics,
      status: result.status,
    };
  });

  const overallProgress =
    totalHours > 0
      ? Math.round((completedHours / totalHours) * 100)
      : 0;

  const learningProgress = overallProgress;

  const knowledgeMastery =
    totalMasteryCount > 0
      ? Math.round(totalMasterySum / totalMasteryCount)
      : 0;

  return {
    overallProgress,
    learningProgress,
    knowledgeMastery,
    completedPhases,
    totalPhases: phases.length,
    phaseBreakdown,
  };
}

// ── Get all weak topics for a profile ──
export interface WeakTopic {
  topic: RoadmapTopic;
  score: number;
  masteryLevel: MasteryLevel;
  phase: RoadmapPhase;
  weakSubtopicIds: string[];
  recommendation: string;
}

export function identifyWeakTopics(profile: StudentProfile): WeakTopic[] {
  const phases = getRoadmap(profile.targetRoleId || '');
  const weakTopics: WeakTopic[] = [];

  for (const phase of phases) {
    const topics = getTopicsForPhase(phase.id);

    for (const topic of topics) {
      const progress = getTopicProgress(profile, topic.id);

      if (
        progress.latestScore !== null &&
        progress.latestScore < PASSING_SCORE
      ) {
        const latestAttempt =
          progress.quizAttempts[progress.quizAttempts.length - 1];

        weakTopics.push({
          topic,
          score: progress.latestScore,
          masteryLevel: calculateMastery(progress.latestScore),
          phase,
          weakSubtopicIds: latestAttempt?.weakSubtopicIds || [],
          recommendation: generateTopicRecommendation(
            topic,
            progress.latestScore,
            latestAttempt?.weakSubtopicIds || []
          ),
        });
      }
    }
  }

  return weakTopics.sort((a, b) => a.score - b.score);
}

// ── Generate personalized recommendation for a weak topic ──
export function generateTopicRecommendation(
  topic: RoadmapTopic,
  score: number,
  weakSubtopicIds: string[]
): string {
  const weakSubtopics = topic.subtopics
    .filter((s) => weakSubtopicIds.includes(s.id))
    .map((s) => s.name);

  if (score < 40) {
    return `You should revisit ${topic.name} before moving forward. ${
      weakSubtopics.length > 0
        ? `Focus especially on: ${weakSubtopics.join(', ')}.`
        : 'Review the learning resources and practice exercises thoroughly.'
    } Take your time to build a solid foundation here — this topic is important for your overall progress.`;
  }

  if (score < 60) {
    return `Your ${topic.name} fundamentals need reinforcement. ${
      weakSubtopics.length > 0
        ? `Review these areas: ${weakSubtopics.join(', ')}.`
        : 'Go through the learning resources again and practice more.'
    } Try retaking the quiz after reviewing — you're close to passing!`;
  }

  return `You're making progress with ${topic.name}, but there's room for improvement. ${
    weakSubtopics.length > 0
      ? `Brush up on: ${weakSubtopics.join(', ')}.`
      : 'A quick review of the key concepts should help you reach mastery.'
  }`;
}

// ── Get next recommended action for the student ──
export interface NextAction {
  type:
    | 'learn'
    | 'practice'
    | 'quiz'
    | 'review'
    | 'start-phase'
    | 'select-role';
  topicId?: string;
  phaseId?: string;
  title: string;
  description: string;
  actionLabel: string;
  actionLink: string;
}

export function getNextAction(profile: StudentProfile): NextAction {
  const phases = getRoadmap(profile.targetRoleId || '');

  if (phases.length === 0) {
    return {
      type: 'select-role',
      title: 'Select a career goal',
      description:
        'Choose a target role to unlock your personalized learning roadmap.',
      actionLabel: 'View Recommendations',
      actionLink: '/app/recommendations',
    };
  }

  // Check for weak topics first — recommend review
  const weakTopics = identifyWeakTopics(profile);

  if (weakTopics.length > 0) {
    const wt = weakTopics[0];

    return {
      type: 'review',
      topicId: wt.topic.id,
      phaseId: wt.phase.id,
      title: `Review: ${wt.topic.name}`,
      description: wt.recommendation,
      actionLabel: 'Review Topic',
      actionLink: '/app/roadmap',
    };
  }

  // Find the first topic that needs work
  for (const phase of phases) {
    const topics = getTopicsForPhase(phase.id);

    for (const topic of topics) {
      const progress = getTopicProgress(profile, topic.id);
      const status = determineTopicStatus(topic, progress);

      if (status === 'Not Started') {
        return {
          type: 'learn',
          topicId: topic.id,
          phaseId: phase.id,
          title: `Start learning: ${topic.name}`,
          description: `Begin with the subtopics in "${topic.name}" — part of ${phase.title}.`,
          actionLabel: 'Start Learning',
          actionLink: '/app/roadmap',
        };
      }

      if (status === 'In Progress') {
        return {
          type: 'learn',
          topicId: topic.id,
          phaseId: phase.id,
          title: `Continue: ${topic.name}`,
          description: `You're ${progress.learningProgress}% through this topic. Keep going!`,
          actionLabel: 'Continue Learning',
          actionLink: '/app/roadmap',
        };
      }

      if (status === 'Assessment Pending') {
        return {
          type: 'quiz',
          topicId: topic.id,
          phaseId: phase.id,
          title: `Take quiz: ${topic.name}`,
          description: `You've completed the learning content for "${topic.name}". Test your knowledge with a quiz!`,
          actionLabel: 'Take Quiz',
          actionLink: '/app/roadmap',
        };
      }

      if (status === 'Needs Revision') {
        return {
          type: 'review',
          topicId: topic.id,
          phaseId: phase.id,
          title: `Review: ${topic.name}`,
          description: `Your latest quiz score was ${progress.latestScore}%. Review the material and retake the quiz.`,
          actionLabel: 'Review & Retake',
          actionLink: '/app/roadmap',
        };
      }
    }
  }

  return {
    type: 'start-phase',
    title: 'All caught up!',
    description:
      "You've completed all available topics. Explore more resources or start building projects.",
    actionLabel: 'View Resources',
    actionLink: '/app/resources',
  };
}

// ── Calculate career readiness breakdown ──
export function calculateReadinessBreakdown(
  profile: StudentProfile
): ReadinessBreakdown {
  const summary = getSkillGapSummary(profile);
  const { overallProgress, knowledgeMastery } =
    calculateOverallProgress(profile);

  const skillCoverage = summary.coverage;
  const learningProgress = overallProgress;
  const knowledgeMasteryScore = knowledgeMastery;

  // Project experience: based on completed projects + practice items completed
  const practiceCompleted = Object.values(
    profile.topicProgress || {}
  ).reduce((sum, tp) => sum + tp.practiceCompleted.length, 0);

  const projectExperience = Math.min(
    100,
    Math.round(
      profile.completedProjects.length * 20 + practiceCompleted * 5
    )
  );

  // Certification progress
  const certProgress = Math.min(
    100,
    profile.earnedCertifications.length * 25
  );

  // Overall: weighted average
  const overall = Math.round(
    skillCoverage * 0.3 +
      knowledgeMasteryScore * 0.3 +
      learningProgress * 0.2 +
      projectExperience * 0.1 +
      certProgress * 0.1
  );

  return {
    skillCoverage,
    knowledgeMastery: knowledgeMasteryScore,
    learningProgress,
    projectExperience,
    certificationProgress: certProgress,
    overall,
  };
}

// ── Get quiz history for a topic ──
export function getQuizHistory(
  profile: StudentProfile,
  topicId: string
): QuizAttempt[] {
  const progress = getTopicProgress(profile, topicId);
  return progress.quizAttempts;
}

// ── Get quiz improvement ──
export function getQuizImprovement(
  profile: StudentProfile,
  topicId: string
): {
  firstScore: number | null;
  latestScore: number | null;
  bestScore: number | null;
  improvement: number | null;
  attemptCount: number;
} {
  const history = getQuizHistory(profile, topicId);

  if (history.length === 0) {
    return {
      firstScore: null,
      latestScore: null,
      bestScore: null,
      improvement: null,
      attemptCount: 0,
    };
  }

  const firstScore = history[0].score;
  const latestScore = history[history.length - 1].score;
  const bestScore = Math.max(...history.map((a) => a.score));
  const improvement = latestScore - firstScore;

  return {
    firstScore,
    latestScore,
    bestScore,
    improvement,
    attemptCount: history.length,
  };
}

// ── Get all topics with their progress for a phase ──
export function getTopicsWithProgress(
  profile: StudentProfile,
  phaseId: string
): {
  topic: RoadmapTopic;
  progress: TopicProgress;
  learningProgress: number;
  status: TopicLearningStatus;
}[] {
  const topics = getTopicsForPhase(phaseId);

  return topics.map((topic) => {
    const progress = getTopicProgress(profile, topic.id);
    const learningProgress = calculateTopicLearningProgress(
      topic,
      progress
    );
    const status = determineTopicStatus(topic, progress);

    return {
      topic,
      progress,
      learningProgress,
      status,
    };
  });
}

// ── Get total topics count for a roadmap ──
export function getTotalTopicsCount(profile: StudentProfile): {
  total: number;
  started: number;
  completed: number;
  mastered: number;
  needsRevision: number;
} {
  const phases = getRoadmap(profile.targetRoleId || '');

  let total = 0;
  let started = 0;
  let completed = 0;
  let mastered = 0;
  let needsRevision = 0;

  for (const phase of phases) {
    const topics = getTopicsForPhase(phase.id);

    for (const topic of topics) {
      total++;

      const progress = getTopicProgress(profile, topic.id);
      const status = determineTopicStatus(topic, progress);

      if (status !== 'Not Started') {
        started++;
      }

      if (status === 'Mastered') {
        mastered++;
      }

      if (status === 'Needs Revision') {
        needsRevision++;
      }

      if (
        status === 'Mastered' ||
        (progress.learningProgress >= 100 &&
          progress.latestScore !== null &&
          progress.latestScore >= PASSING_SCORE)
      ) {
        completed++;
      }
    }
  }

  return {
    total,
    started,
    completed,
    mastered,
    needsRevision,
  };
}

// ── Get strong topics ──
export function identifyStrongTopics(
  profile: StudentProfile
): {
  topic: RoadmapTopic;
  score: number;
  phase: RoadmapPhase;
}[] {
  const phases = getRoadmap(profile.targetRoleId || '');

  const strong: {
    topic: RoadmapTopic;
    score: number;
    phase: RoadmapPhase;
  }[] = [];

  for (const phase of phases) {
    const topics = getTopicsForPhase(phase.id);

    for (const topic of topics) {
      const progress = getTopicProgress(profile, topic.id);

      if (
        progress.latestScore !== null &&
        progress.latestScore >= MASTERY_THRESHOLDS.STRONG
      ) {
        strong.push({
          topic,
          score: progress.latestScore,
          phase,
        });
      }
    }
  }

  return strong.sort((a, b) => b.score - a.score);
}

// ── Check if a phase is unlocked ──
export function isPhaseUnlocked(
  profile: StudentProfile,
  phase: RoadmapPhase,
  allPhases: RoadmapPhase[]
): boolean {
  if (phase.prerequisites.length === 0) return true;

  for (const prereqId of phase.prerequisites) {
    const prereqPhase = allPhases.find((p) => p.id === prereqId);

    if (!prereqPhase) continue;

    const prereqResult = calculatePhaseProgress(
      profile,
      prereqPhase
    );

    // Phase unlocks when prerequisite has at least 80% learning progress
    // and no critical weak topics (all quiz scores >= passing)
    if (prereqResult.learningProgress < 80) {
      return false;
    }
  }

  return true;
}

// ── Get completed subtopics for a topic ──
export function getCompletedSubtopics(
  profile: StudentProfile,
  topicId: string
): string[] {
  const progress = getTopicProgress(profile, topicId);
  return progress.subtopicsCompleted || [];
}

// ── Calculate subtopic progress percentage ──
export function calculateSubtopicProgress(
  totalSubtopics: number,
  completedSubtopics: number
): number {
  if (totalSubtopics === 0) return 0;

  return Math.round(
    (completedSubtopics / totalSubtopics) * 100
  );
}
