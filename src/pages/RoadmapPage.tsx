import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2, Lock, Play, ArrowRight, Clock, Zap, BookOpen,
  Trophy, ChevronDown, ChevronRight, X, Target, FileText, Code,
  Award, AlertCircle, RotateCcw, Lightbulb, ListChecks,
} from 'lucide-react';
import AppLayout from '@/layouts/AppLayout';
import { useStudent } from '@/context/StudentContext';
import { getCareerRole } from '@/data/careers';
import { getRoadmapProgress } from '@/utils/personalization';
import { getResourceByIds, getCertificationByIds } from '@/data/resources';
import { getTopicsWithProgress } from '@/utils/progress';
import { getPracticeItemsForTopic } from '@/data/topics';
import { getSubtopicContent } from '@/data/topicContent';
import { Card, Badge, PageHeader, ProgressBar, SectionTitle } from '@/components/ui';
import QuizComponent from '@/components/QuizComponent';
import type { RoadmapStatus, RoadmapTopic, TopicProgress, TopicLearningStatus, StudentProfile } from '@/types';

const STATUS_CONFIG: Record<RoadmapStatus, { icon: React.ComponentType<{ className?: string }>; color: string; label: string }> = {
  Completed: { icon: CheckCircle2, color: 'bg-accent-600 text-ink-950', label: 'Completed' },
  'In Progress': { icon: Play, color: 'bg-gradient-to-br from-brand-600 to-accent-600 text-ink-950', label: 'In Progress' },
  Next: { icon: ArrowRight, color: 'bg-amber-500/20 text-amber-400', label: 'Next' },
  Upcoming: { icon: Clock, color: 'bg-ink-300 text-ink-500', label: 'Upcoming' },
  Locked: { icon: Lock, color: 'bg-ink-200 text-ink-400', label: 'Locked' },
};

const TOPIC_STATUS_STYLES: Record<TopicLearningStatus, { color: string; label: string }> = {
  'Not Started': { color: 'text-ink-400', label: 'Not Started' },
  'In Progress': { color: 'text-brand-700', label: 'In Progress' },
  'Learning Content Completed': { color: 'text-amber-400', label: 'Ready for Quiz' },
  'Assessment Pending': { color: 'text-amber-400', label: 'Ready for Quiz' },
  'Mastered': { color: 'text-accent-700', label: 'Mastered' },
  'Needs Revision': { color: 'text-rose-400', label: 'Needs Revision' },
};

export default function RoadmapPage() {
  const { profile, markRoadmapPhase, toggleSubtopic, toggleTopicResource, togglePracticeItem } = useStudent();
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  const [quizTopic, setQuizTopic] = useState<RoadmapTopic | null>(null);
  const [detailPhase, setDetailPhase] = useState<ReturnType<typeof getRoadmapProgress>['phases'][number] | null>(null);
  const [learningSubtopic, setLearningSubtopic] = useState<{ id: string; name: string; topicId: string } | null>(null);

  if (!profile) return null;

  const role = getCareerRole(profile.targetRoleId);
  const { phases, overallProgress, learningProgress, knowledgeMastery, completedCount, totalCount } = getRoadmapProgress(profile);

  if (!role) {
    return (
      <AppLayout>
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Target className="mb-4 h-12 w-12 text-ink-300" />
          <h2 className="font-display text-xl font-bold text-ink-900">Select a career goal first</h2>
          <p className="mt-1.5 text-ink-500">Choose a target role to unlock your personalized roadmap.</p>
          <Link to="/app/recommendations" className="btn-primary mt-6">View Recommendations</Link>
        </div>
      </AppLayout>
    );
  }

  const togglePhase = (phaseId: string, status: RoadmapStatus) => {
    if (status === 'Locked') return;
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
    setExpandedTopic(null);
  };

  return (
    <AppLayout>
      <PageHeader
        title="Your Learning Roadmap"
        subtitle={`${role.title} • ${completedCount} of ${totalCount} phases completed`}
      />

      {/* Overall progress */}
      <Card className="mb-6 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">Overall Progress</h2>
            <p className="text-sm text-ink-500">You're {overallProgress}% through your {role.title} roadmap</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-display text-3xl font-bold text-brand-700">{learningProgress}%</p>
              <p className="text-xs text-ink-500">Learning</p>
            </div>
            <div className="h-12 w-px bg-ink-200" />
            <div className="text-right">
              <p className="font-display text-3xl font-bold text-accent-700">{knowledgeMastery}%</p>
              <p className="text-xs text-ink-500">Mastery</p>
            </div>
            <div className="h-12 w-px bg-ink-200" />
            <div className="text-right">
              <p className="font-display text-3xl font-bold text-amber-400">{completedCount}</p>
              <p className="text-xs text-ink-500">phases done</p>
            </div>
          </div>
        </div>
        <ProgressBar value={overallProgress} size="lg" className="mt-4" />
      </Card>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-ink-200" />
        <div className="space-y-4">
          {phases.map((phase) => {
            const config = STATUS_CONFIG[phase.status];
            const Icon = config.icon;
            const isClickable = phase.status !== 'Locked';
            const isExpanded = expandedPhase === phase.id;
            const topicsWithProgress = isExpanded ? getTopicsWithProgress(profile, phase.id) : [];

            return (
              <div key={phase.id} className="relative pl-16">
                <div className={`absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-full ${config.color} ring-4 ring-ink-100`}>
                  <Icon className="h-5 w-5" />
                </div>

                <Card hover={isClickable} className={`p-5 ${phase.status === 'Locked' ? 'opacity-60' : ''}`}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <Badge variant={phase.status === 'Completed' ? 'success' : phase.status === 'In Progress' ? 'info' : phase.status === 'Next' ? 'warning' : 'default'}>
                          Phase {phase.phase}
                        </Badge>
                        <Badge variant="default">{phase.status}</Badge>
                      </div>
                      <h3 className="mt-2 font-display text-lg font-bold text-ink-900">{phase.title}</h3>
                      <p className="mt-1 text-sm text-ink-600">{phase.description}</p>
                      <div className="mt-3 flex flex-wrap gap-3 text-xs text-ink-500">
                        <span className="flex items-center gap-1"><Zap className="h-3.5 w-3.5" /> {phase.difficulty}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {phase.estimatedHours}h</span>
                        <span className="flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" /> {phase.topicsCompleted}/{phase.totalTopics} topics</span>
                        {phase.weakTopics > 0 && (
                          <span className="flex items-center gap-1 text-rose-400"><AlertCircle className="h-3.5 w-3.5" /> {phase.weakTopics} need review</span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {phase.status === 'Next' && (
                        <button
                          onClick={() => markRoadmapPhase(phase.id, 'In Progress')}
                          className="btn-primary text-sm"
                        >
                          <Play className="h-3.5 w-3.5" /> Start Phase
                        </button>
                      )}
                      {isClickable && (
                        <button
                          onClick={() => togglePhase(phase.id, phase.status)}
                          className="btn-ghost text-sm"
                        >
                          {isExpanded ? 'Hide' : 'View'} Topics
                          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                      <button
                        onClick={() => setDetailPhase(phase)}
                        className="btn-ghost text-sm"
                      >
                        Details
                      </button>
                    </div>
                  </div>

                  {/* Phase progress bar — hidden for locked phases */}
                  {phase.status !== 'Locked' && (
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs text-ink-500 mb-1">
                      <span>Learning: {phase.learningProgress}%</span>
                      {phase.knowledgeMastery > 0 && <span>Mastery: {phase.knowledgeMastery}%</span>}
                    </div>
                    <ProgressBar value={phase.learningProgress} size="sm" />
                  </div>
                  )}

                  {/* Expanded topics */}
                  {isExpanded && (
                    <div className="mt-4 space-y-3 border-t border-ink-300/50 pt-4">
                      {topicsWithProgress.length === 0 ? (
                        <p className="text-sm text-ink-400 py-2">No detailed topics for this phase yet.</p>
                      ) : (
                        topicsWithProgress.map(({ topic, progress, learningProgress: lp, status }) => (
                          <TopicCard
                            key={topic.id}
                            topic={topic}
                            progress={progress}
                            learningProgress={lp}
                            status={status}
                            isExpanded={expandedTopic === topic.id}
                            onToggleExpand={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
                            onToggleSubtopic={(subtopicId) => toggleSubtopic(topic.id, subtopicId)}
                            onToggleResource={(resourceId) => toggleTopicResource(topic.id, resourceId)}
                            onTogglePractice={(practiceId) => togglePracticeItem(topic.id, practiceId)}
                            onTakeQuiz={() => setQuizTopic(topic)}
                            onOpenLearning={(subtopic) => setLearningSubtopic({ id: subtopic.id, name: subtopic.name, topicId: topic.id })}
                          />
                        ))
                      )}
                    </div>
                  )}
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Phase Detail Modal */}
      {detailPhase && (
        <PhaseDetailModal
          phase={detailPhase}
          phases={phases}
          roadmapProgress={profile.roadmapProgress}
          onClose={() => setDetailPhase(null)}
        />
      )}

      {/* Subtopic Learning Modal */}
      {learningSubtopic && (
        <SubtopicLearningModal
          subtopicId={learningSubtopic.id}
          subtopicName={learningSubtopic.name}
          topicId={learningSubtopic.topicId}
          profile={profile}
          onMarkComplete={() => {
            toggleSubtopic(learningSubtopic.topicId, learningSubtopic.id);
            setLearningSubtopic(null);
          }}
          onClose={() => setLearningSubtopic(null)}
        />
      )}

      {/* Quiz Modal */}
      {quizTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setQuizTopic(null)} />
          <div className="relative z-10 w-full max-w-2xl animate-scale-in">
            <Card className="max-h-[85vh] overflow-y-auto scrollbar-thin">
              <div className="sticky top-0 flex items-center justify-between border-b border-ink-300/60 bg-ink-100 px-6 py-4">
                <div>
                  <Badge variant="info">Quiz</Badge>
                  <h2 className="mt-1 font-display text-xl font-bold text-ink-900">{quizTopic.name}</h2>
                </div>
                <button onClick={() => setQuizTopic(null)} className="rounded-lg p-2 hover:bg-ink-200/60">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6">
                <QuizComponent
                  topic={quizTopic}
                  onComplete={() => setQuizTopic(null)}
                  onClose={() => setQuizTopic(null)}
                />
              </div>
            </Card>
          </div>
        </div>
      )}
    </AppLayout>
  );
}

// ── Topic Card ──
interface TopicCardProps {
  topic: RoadmapTopic;
  progress: TopicProgress;
  learningProgress: number;
  status: TopicLearningStatus;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onToggleSubtopic: (subtopicId: string) => void;
  onToggleResource: (resourceId: string) => void;
  onTogglePractice: (practiceId: string) => void;
  onTakeQuiz: () => void;
  onOpenLearning: (subtopic: { id: string; name: string }) => void;
}

function TopicCard({ topic, progress, learningProgress, status, isExpanded, onToggleExpand, onToggleSubtopic, onToggleResource, onTogglePractice, onTakeQuiz, onOpenLearning }: TopicCardProps) {
  const style = TOPIC_STATUS_STYLES[status];
  const completedSubtopics = progress.subtopicsCompleted.length;
  const totalSubtopics = topic.subtopics.length;
  const completedResources = progress.resourcesCompleted.length;
  const totalResources = topic.resourceIds.length;
  const completedPractice = progress.practiceCompleted.length;
  const totalPractice = topic.practiceItemIds.length;
  const practiceItems = getPracticeItemsForTopic(topic.id);
  const resources = getResourceByIds(topic.resourceIds);

  const canTakeQuiz = learningProgress >= 100 || progress.quizAttempts.length > 0;

  return (
    <div className="rounded-xl border border-ink-300/60 bg-ink-100">
      {/* Topic header */}
      <button
        onClick={onToggleExpand}
        className="flex w-full items-center justify-between p-4 text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <ChevronRight className={`h-4 w-4 shrink-0 text-ink-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-ink-900">{topic.name}</span>
              <span className={`text-xs font-medium ${style.color}`}>{style.label}</span>
            </div>
            <div className="mt-0.5 flex items-center gap-3 text-xs text-ink-500">
              <span>{completedSubtopics}/{totalSubtopics} subtopics</span>
              {progress.bestScore !== null && (
                <span className="flex items-center gap-0.5">
                  <Award className="h-3 w-3" /> Best: {progress.bestScore}%
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs text-ink-500">{learningProgress}%</span>
          <div className="w-16">
            <ProgressBar value={learningProgress} size="sm" />
          </div>
        </div>
      </button>

      {/* Topic expanded content */}
      {isExpanded && (
        <div className="border-t border-ink-300/50 p-4">
          {/* Subtopics */}
          {topic.subtopics.length > 0 && (
            <div className="mb-4">
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-500">Subtopics</h4>
              <div className="space-y-1.5">
                {topic.subtopics.map((subtopic) => {
                  const isDone = progress.subtopicsCompleted.includes(subtopic.id);
                  const hasContent = getSubtopicContent(subtopic.id) !== null;
                  return (
                    <div
                      key={subtopic.id}
                      className="flex w-full items-center gap-2 rounded-lg p-2 text-left text-sm transition hover:bg-ink-200/50"
                    >
                      <button
                        onClick={() => onToggleSubtopic(subtopic.id)}
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition ${
                          isDone ? 'border-accent-500 bg-accent-600 text-ink-950' : 'border-ink-300'
                        }`}
                      >
                        {isDone && <CheckCircle2 className="h-3 w-3" />}
                      </button>
                      <span className={isDone ? 'text-ink-400 line-through' : 'text-ink-700'}>{subtopic.name}</span>
                      {hasContent && (
                        <button
                          onClick={() => onOpenLearning(subtopic)}
                          className="ml-auto flex items-center gap-1 rounded-md bg-brand-500/10 px-2 py-1 text-xs font-medium text-brand-700 transition hover:bg-brand-500/15"
                        >
                          <BookOpen className="h-3 w-3" /> Learn
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Resources */}
          {resources.length > 0 && (
            <div className="mb-4">
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-500">
                Learning Resources ({completedResources}/{totalResources})
              </h4>
              <div className="space-y-1.5">
                {resources.map((resource) => {
                  const isDone = progress.resourcesCompleted.includes(resource.id);
                  return (
                    <div key={resource.id} className="flex items-center gap-2 rounded-lg border border-ink-300/60 p-2.5">
                      <button
                        onClick={() => onToggleResource(resource.id)}
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition ${
                          isDone ? 'border-accent-500 bg-accent-600 text-ink-950' : 'border-ink-300'
                        }`}
                      >
                        {isDone && <CheckCircle2 className="h-3 w-3" />}
                      </button>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center gap-2 min-w-0 text-sm text-ink-700 hover:text-brand-800"
                      >
                        <FileText className="h-3.5 w-3.5 text-ink-400 shrink-0" />
                        <span className="truncate">{resource.title}</span>
                        <span className="text-xs text-ink-400 shrink-0">{resource.provider}</span>
                      </a>
                      {resource.free && <Badge variant="success">Free</Badge>}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Practice Items */}
          {practiceItems.length > 0 && (
            <div className="mb-4">
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-500">
                Practice Exercises ({completedPractice}/{totalPractice})
              </h4>
              <div className="space-y-1.5">
                {practiceItems.map((item) => {
                  const isDone = progress.practiceCompleted.includes(item.id);
                  return (
                    <div key={item.id} className="flex items-center gap-2 rounded-lg border border-ink-300/60 p-2.5">
                      <button
                        onClick={() => onTogglePractice(item.id)}
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition ${
                          isDone ? 'border-accent-500 bg-accent-600 text-ink-950' : 'border-ink-300'
                        }`}
                      >
                        {isDone && <CheckCircle2 className="h-3 w-3" />}
                      </button>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <Code className="h-3.5 w-3.5 text-ink-400 shrink-0" />
                          <span className="text-sm text-ink-700">{item.title}</span>
                        </div>
                        <p className="text-xs text-ink-500">{item.description}</p>
                      </div>
                      {item.externalUrl && (
                        <a
                          href={item.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost text-xs"
                        >
                          Open <ArrowRight className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quiz Section */}
          <div className="rounded-lg bg-brand-500/50 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-brand-700" />
                <span className="text-sm font-semibold text-ink-900">Knowledge Quiz</span>
              </div>
              <button
                onClick={onTakeQuiz}
                disabled={!canTakeQuiz}
                className={canTakeQuiz ? 'btn-primary text-sm' : 'btn-secondary text-sm opacity-50 cursor-not-allowed'}
              >
                {progress.quizAttempts.length > 0 ? (
                  <><RotateCcw className="h-3.5 w-3.5" /> Retake Quiz</>
                ) : (
                  <><Play className="h-3.5 w-3.5" /> Take Quiz</>
                )}
              </button>
            </div>
            {!canTakeQuiz && (
              <p className="mt-1.5 text-xs text-ink-500">Complete all subtopics, resources, and practice items to unlock the quiz.</p>
            )}
            {progress.quizAttempts.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                <span className="text-ink-500">Attempts: {progress.quizAttempts.length}</span>
                <span className="text-ink-500">Best: {progress.bestScore}%</span>
                <span className="text-ink-500">Latest: {progress.latestScore}%</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Phase Detail Modal ──
interface PhaseDetailModalProps {
  phase: ReturnType<typeof getRoadmapProgress>['phases'][number];
  phases: ReturnType<typeof getRoadmapProgress>['phases'];
  roadmapProgress: Record<string, RoadmapStatus>;
  onClose: () => void;
}

function PhaseDetailModal({ phase, phases, roadmapProgress, onClose }: PhaseDetailModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl animate-scale-in">
        <Card className="max-h-[85vh] overflow-y-auto scrollbar-thin">
          <div className="sticky top-0 flex items-center justify-between border-b border-ink-300/60 bg-ink-100 px-6 py-4">
            <div>
              <Badge variant="info">Phase {phase.phase}</Badge>
              <h2 className="mt-1 font-display text-xl font-bold text-ink-900">{phase.title}</h2>
            </div>
            <button onClick={onClose} className="rounded-lg p-2 hover:bg-ink-200/60">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-6">
            <p className="text-ink-600">{phase.description}</p>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-ink-200/50 p-3">
                <Zap className="h-4 w-4 text-ink-400" />
                <p className="mt-1 text-xs text-ink-500">Difficulty</p>
                <p className="font-semibold text-ink-900">{phase.difficulty}</p>
              </div>
              <div className="rounded-lg bg-ink-200/50 p-3">
                <Clock className="h-4 w-4 text-ink-400" />
                <p className="mt-1 text-xs text-ink-500">Est. Time</p>
                <p className="font-semibold text-ink-900">{phase.estimatedHours}h</p>
              </div>
              <div className="rounded-lg bg-ink-200/50 p-3">
                <BookOpen className="h-4 w-4 text-ink-400" />
                <p className="mt-1 text-xs text-ink-500">Topics</p>
                <p className="font-semibold text-ink-900">{phase.topicsCompleted}/{phase.totalTopics}</p>
              </div>
            </div>

            {phase.prerequisites.length > 0 && (
              <div className="mt-5">
                <h3 className="text-sm font-semibold text-ink-700">Prerequisites</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {phase.prerequisites.map((p) => {
                    const prereqPhase = phases.find((ph) => ph.id === p);
                    return <Badge key={p} variant={roadmapProgress[p] === 'Completed' ? 'success' : 'default'}>
                      {prereqPhase?.title || p}
                    </Badge>;
                  })}
                </div>
              </div>
            )}

            <div className="mt-5">
              <SectionTitle>Recommended Resources</SectionTitle>
              <div className="space-y-2">
                {getResourceByIds(phase.resourceIds).map((resource) => (
                  <a
                    key={resource.id}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-ink-300/60 p-3 hover:border-brand-500/30 hover:bg-brand-500/30"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-ink-900">{resource.title}</p>
                      <p className="text-xs text-ink-500">{resource.provider} • {resource.duration} • {resource.difficulty}</p>
                    </div>
                    {resource.free && <Badge variant="success">Free</Badge>}
                  </a>
                ))}
              </div>
            </div>

            {phase.certificationIds.length > 0 && (
              <div className="mt-5">
                <SectionTitle>Related Certifications</SectionTitle>
                <div className="space-y-2">
                  {getCertificationByIds(phase.certificationIds).map((cert) => (
                    <div key={cert.id} className="flex items-center justify-between rounded-xl border border-ink-300/60 p-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-ink-900">{cert.name}</p>
                        <p className="text-xs text-ink-500">{cert.provider} • {cert.duration}</p>
                      </div>
                      {cert.free && <Badge variant="success"><Trophy className="h-3 w-3" /> Free</Badge>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6">
              <button onClick={onClose} className="btn-secondary w-full">Close</button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

// ── Subtopic Learning Modal ──
interface SubtopicLearningModalProps {
  subtopicId: string;
  subtopicName: string;
  topicId: string;
  profile: StudentProfile;
  onMarkComplete: () => void;
  onClose: () => void;
}

function SubtopicLearningModal({ subtopicId, subtopicName, topicId, profile, onMarkComplete, onClose }: SubtopicLearningModalProps) {
  const content = getSubtopicContent(subtopicId);
  const topicProgress = profile.topicProgress[topicId];
  const isCompleted = topicProgress?.subtopicsCompleted?.includes(subtopicId) ?? false;

  if (!content) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/70" onClick={onClose} />
        <div className="relative z-10 w-full max-w-lg animate-scale-in">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-bold text-ink-900">{subtopicName}</h2>
              <button onClick={onClose} className="rounded-lg p-2 hover:bg-ink-200/60">
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-3 text-sm text-ink-500">Learning content for this topic is coming soon.</p>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl animate-scale-in">
        <Card className="max-h-[85vh] overflow-y-auto scrollbar-thin">
          {/* Header */}
          <div className="sticky top-0 flex items-center justify-between border-b border-ink-300/60 bg-ink-100 px-6 py-4">
            <div>
              <Badge variant="info">Learning</Badge>
              <h2 className="mt-1 font-display text-xl font-bold text-ink-900">{content.title}</h2>
            </div>
            <button onClick={onClose} className="rounded-lg p-2 hover:bg-ink-200/60">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-5 p-6">
            {/* Definition */}
            <section>
              <h3 className="flex items-center gap-1.5 text-sm font-semibold text-ink-900">
                <BookOpen className="h-4 w-4 text-brand-700" /> Definition
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{content.definition}</p>
            </section>

            {/* Explanation */}
            <section>
              <h3 className="flex items-center gap-1.5 text-sm font-semibold text-ink-900">
                <Lightbulb className="h-4 w-4 text-amber-400" /> Explanation
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{content.explanation}</p>
            </section>

            {/* Example */}
            <section>
              <h3 className="flex items-center gap-1.5 text-sm font-semibold text-ink-900">
                <Code className="h-4 w-4 text-accent-700" /> Example
              </h3>
              <pre className="mt-1.5 overflow-x-auto rounded-lg bg-ink-900 p-4 text-xs leading-relaxed text-ink-100">
                <code>{content.example}</code>
              </pre>
            </section>

            {/* Key Takeaways */}
            <section>
              <h3 className="flex items-center gap-1.5 text-sm font-semibold text-ink-900">
                <ListChecks className="h-4 w-4 text-accent-700" /> Key Takeaways
              </h3>
              <ul className="mt-1.5 space-y-1.5">
                {content.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-ink-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-700" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Mark as Completed */}
            <div className="border-t border-ink-300/50 pt-4">
              <button
                onClick={onMarkComplete}
                disabled={isCompleted}
                className={isCompleted ? 'btn-secondary w-full opacity-60' : 'btn-primary w-full'}
              >
                {isCompleted ? (
                  <><CheckCircle2 className="h-4 w-4" /> Completed</>
                ) : (
                  <><CheckCircle2 className="h-4 w-4" /> Mark as Completed</>
                )}
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
