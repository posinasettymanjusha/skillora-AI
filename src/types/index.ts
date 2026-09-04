export type SkillLevel = 'Not Started' | 'Beginner' | 'Intermediate' | 'Advanced';

export type ResourceDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type ResourceType =
  | 'Course'
  | 'Video'
  | 'Documentation'
  | 'Practice'
  | 'Project'
  | 'Certification';

export type RoadmapStatus = 'Completed' | 'In Progress' | 'Next' | 'Upcoming' | 'Locked';

export type SkillStatus = 'Strong' | 'Developing' | 'Needs Improvement' | 'Missing';

export type Priority = 'High' | 'Medium' | 'Low';

export interface SkillRequirement {
  skill: string;
  requiredLevel: SkillLevel;
  priority: Priority;
  importance: string;
}

export interface CareerRole {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  difficulty: ResourceDifficulty;
  averageSalary: string;
  marketDemand: string;
  coreSkills: SkillRequirement[];
  learningEstimate: string;
  tags: string[];
}

export interface StudentSkill {
  name: string;
  level: SkillLevel;
}

export interface RoadmapPhase {
  id: string;
  phase: number;
  title: string;
  skill: string;
  description: string;
  difficulty: ResourceDifficulty;
  estimatedHours: number;
  prerequisites: string[];
  resourceIds: string[];
  certificationIds: string[];
  topicIds: string[];
}

// ── Topic-level learning structures ──

export interface Subtopic {
  id: string;
  name: string;
}

export interface SubtopicContent {
  title: string;
  definition: string;
  explanation: string;
  example: string;
  keyTakeaways: string[];
  commonMistakes: string[];
  whenToUse: string;
  interviewTip?: string;
  tryYourself?: string;
}

export interface RoadmapTopic {
  id: string;
  phaseId: string;
  name: string;
  skill: string;
  difficulty: ResourceDifficulty;
  estimatedHours: number;
  weight: number;
  subtopics: Subtopic[];
  resourceIds: string[];
  practiceItemIds: string[];
  quizQuestionIds: string[];
}

export interface PracticeItem {
  id: string;
  title: string;
  description: string;
  difficulty: ResourceDifficulty;
  type: 'exercise' | 'coding' | 'project';
  topicId: string;
  hint?: string;
  externalUrl?: string;
}

// ── Quiz system ──

export type QuestionType = 'multiple-choice' | 'multiple-select' | 'true-false' | 'short-answer';

export interface QuizQuestion {
  id: string;
  topicId: string;
  subtopicId: string;
  difficulty: ResourceDifficulty;
  type: QuestionType;
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  conceptTags: string[];
}

export type ConfidenceRating = 'Not Confident' | 'Somewhat Confident' | 'Confident' | 'Very Confident';

export type TopicLearningStatus =
  | 'Not Started'
  | 'In Progress'
  | 'Learning Content Completed'
  | 'Assessment Pending'
  | 'Mastered'
  | 'Needs Revision';

export type MasteryLevel = 'Mastered' | 'Strong' | 'Developing' | 'Needs Revision';

export interface QuizAttempt {
  id: string;
  topicId: string;
  date: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  answers: { questionId: string; selectedAnswer: string | string[]; isCorrect: boolean }[];
  weakSubtopicIds: string[];
  strongSubtopicIds: string[];
}

export interface TopicProgress {
  topicId: string;
  learningStatus: TopicLearningStatus;
  learningProgress: number;
  subtopicsCompleted: string[];
  resourcesCompleted: string[];
  practiceCompleted: string[];
  quizAttempts: QuizAttempt[];
  bestScore: number | null;
  latestScore: number | null;
  masteryLevel: MasteryLevel | null;
  confidenceRating: ConfidenceRating | null;
  lastActivityDate: string | null;
  timeSpentMinutes: number;
}

export interface WeeklyCheckIn {
  id: string;
  date: string;
  topicsLearned: string;
  timeSpentHours: number;
  difficultTopics: string;
  resourcesCompleted: string;
  completedProject: boolean;
  earnedCertification: boolean;
  confidenceLevel: ConfidenceRating;
  report?: WeeklyReport;
}

export interface WeeklyReport {
  learningTimeHours: number;
  topicsCompleted: number;
  practiceActivities: number;
  averageQuizScore: number;
  strongestArea: string | null;
  needsAttention: string | null;
  focusAreas: string[];
  summary: string;
}

export interface ReadinessBreakdown {
  skillCoverage: number;
  knowledgeMastery: number;
  learningProgress: number;
  projectExperience: number;
  certificationProgress: number;
  overall: number;
}

export interface LearningResource {
  id: string;
  title: string;
  provider: string;
  skill: string;
  difficulty: ResourceDifficulty;
  type: ResourceType;
  duration: string;
  url: string;
  free: boolean;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  skill: string;
  difficulty: ResourceDifficulty;
  duration: string;
  url: string;
  free: boolean;
  description: string;
}

export interface CompletedItem {
  id: string;
  title: string;
  type: 'roadmap' | 'resource' | 'certification';
  date: string;
}

export interface ActivityEntry {
  id: string;
  action: string;
  detail: string;
  date: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'mentor';
  content: string;
  timestamp: string;
}

export interface ProfileCertification {
  id: string;
  name: string;
  provider: string;
  category: string;
  completionDate?: string;
  credentialUrl?: string;
}

export interface ProfileProject {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface StudentProfile {
  id: string;
  name: string;
  email: string;
  college: string;
  branch: string;
  year: string;
  skills: StudentSkill[];
  interests: string[];
  preferredTechnologies: string[];
  careerGoals: string;
  interestedRoles: string[];
  hoursPerWeek: number;
  existingCertifications: ProfileCertification[];
  completedProjects: ProfileProject[];
  targetRoleId: string | null;
  roadmapProgress: Record<string, RoadmapStatus>;
  completedResources: string[];
  earnedCertifications: string[];
  topicProgress: Record<string, TopicProgress>;
  weeklyCheckIns: WeeklyCheckIn[];
  activity: ActivityEntry[];
  streak: number;
  lastActiveDate: string;
  weeklyActivity: { day: string; minutes: number }[];
  createdAt: string;
  onboarded: boolean;
}

export interface CareerRecommendation {
  role: CareerRole;
  matchPercentage: number;
  matchReasons: string[];
  hasSkills: string[];
  needsSkills: string[];
}
