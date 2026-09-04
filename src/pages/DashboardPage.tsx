import { Link } from 'react-router-dom';
import {
  TrendingUp, Target, Map, ArrowRight, CheckCircle2, AlertCircle,
  BookOpen, Award, MessageSquare, Flame, Zap, Trophy, Play,
  Lightbulb, Sparkles,
} from 'lucide-react';
import AppLayout from '@/layouts/AppLayout';
import { useStudent } from '@/context/StudentContext';
import { getCareerRole } from '@/data/careers';
import {
  getRoadmapProgress, getSkillGapSummary, getRecommendedResources,
  getRecommendedCertifications, getCareerReadiness, getGreeting,
  getResourceRecommendationReason,
} from '@/utils/personalization';
import {
  getTotalTopicsCount, identifyWeakTopics, identifyStrongTopics, getNextAction,
} from '@/utils/progress';
import { Card, StatCard, ProgressBar, SectionTitle, Badge } from '@/components/ui';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CheckCircle: CheckCircle2, Trophy, Play, Target, BookOpen, Award,
};

const NEXT_ACTION_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  learn: BookOpen,
  practice: Zap,
  quiz: Award,
  review: Lightbulb,
  'start-phase': Play,
  'select-role': Target,
};

export default function DashboardPage() {
  const { profile } = useStudent();
  if (!profile) return null;

  const role = getCareerRole(profile.targetRoleId);
  const { learningProgress, knowledgeMastery, currentPhase, phases } = getRoadmapProgress(profile);
  const gapSummary = getSkillGapSummary(profile);
  const readiness = getCareerReadiness(profile);
  const resources = getRecommendedResources(profile, 3);
  const certifications = getRecommendedCertifications(profile, 2);
  const greeting = getGreeting();
  const topicCounts = getTotalTopicsCount(profile);
  const weakTopics = identifyWeakTopics(profile);
  const strongTopics = identifyStrongTopics(profile);
  const nextAction = getNextAction(profile);

  if (!role) {
    return (
      <AppLayout>
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500/15">
            <Target className="h-8 w-8 text-brand-700" />
          </div>
          <h2 className="font-display text-xl font-bold text-ink-950">Select your career goal</h2>
          <p className="mt-1.5 max-w-sm text-ink-500">
            Choose a target career role to unlock your personalized roadmap, skill gap analysis, and recommendations.
          </p>
          <Link to="/app/recommendations" className="btn-primary mt-6">
            View Career Recommendations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </AppLayout>
    );
  }

  const NextIcon = NEXT_ACTION_ICONS[nextAction.type] || ArrowRight;

  return (
    <AppLayout>
      <section className="relative mb-6 overflow-hidden rounded-[28px] border border-ink-300/50 bg-ink-100 p-6 shadow-card sm:p-8 lg:p-10">
        <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-brand-600/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-40 w-40 rounded-full bg-ai-600/10 blur-3xl" />
        <div className="absolute -left-20 top-0 h-60 w-60 rounded-full bg-accent-600/8 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_280px] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1.5 text-xs font-semibold text-brand-700"><Sparkles className="h-3.5 w-3.5" /> Your career command center</div>
            <p className="text-sm font-medium text-ink-500">{greeting}, {profile.name.split(' ')[0]}</p>
            <h1 className="mt-2 max-w-xl font-display text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">Your journey to becoming an {role.title}</h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-ink-600">{role.shortDescription}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link to={currentPhase ? '/app/roadmap' : '/app/recommendations'} className="btn-primary">Continue learning <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/app/skill-gap" className="rounded-xl border border-ink-300/60 px-4 py-2.5 text-sm font-semibold text-ink-800 transition hover:bg-ink-200/60 hover:border-brand-500/30">View skill gaps</Link>
            </div>
          </div>
          <div className="rounded-3xl border border-ink-300/50 bg-ink-200/60 p-5 backdrop-blur-sm">
            <div className="flex items-end justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">Career readiness</p><p className="mt-2 font-display text-5xl font-extrabold text-gradient-brand">{readiness}%</p></div><Target className="mb-2 h-7 w-7 text-brand-700" /></div>
            <div className="mt-5 h-2 rounded-full bg-ink-300"><div className="h-2 rounded-full bg-gradient-to-r from-brand-600 to-accent-600 transition-all duration-700" style={{ width: `${readiness}%` }} /></div>
            <p className="mt-3 text-xs text-ink-500">Based on your target skills and current profile</p>
          </div>
        </div>
      </section>

      <div className="mb-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={TrendingUp} label="Learning progress" value={`${learningProgress}%`} sublabel={`${topicCounts.completed}/${topicCounts.total} topics completed`} color="brand" />
        <StatCard icon={Award} label="Knowledge mastery" value={`${knowledgeMastery}%`} sublabel={`${strongTopics.length} strong, ${weakTopics.length} to review`} color="accent" />
        <StatCard icon={Map} label="Current phase" value={currentPhase ? `Phase ${currentPhase.phase}` : 'Complete'} sublabel={currentPhase?.title || 'All phases done'} color="amber" />
        <StatCard icon={Flame} label="Learning streak" value={`${profile.streak} days`} sublabel="Consistency compounds" color="rose" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column */}
        <div className="space-y-6 lg:col-span-2">
          {/* Next Action */}
          <Card className="p-6">
            <SectionTitle>Your Next Step</SectionTitle>
            <div className="rounded-xl border border-brand-500/20 bg-brand-500/8 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/15">
                  <NextIcon className="h-5 w-5 text-brand-700" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-base font-bold text-ink-950">{nextAction.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-ink-600">{nextAction.description}</p>
                  <p className="mt-2 text-xs font-medium text-ink-500">Recommended from your current roadmap and skill-gap data.</p>
                  <Link to={nextAction.actionLink} className="btn-primary mt-3 text-sm">
                    {nextAction.actionLabel}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Card>

          {/* Weak Topics */}
          {weakTopics.length > 0 && (
            <Card className="p-6">
              <SectionTitle action={<Link to="/app/progress" className="text-sm text-brand-700 hover:text-brand-800">View Details</Link>}>
                Areas Needing Review
              </SectionTitle>
              <div className="space-y-2">
                {weakTopics.slice(0, 3).map((wt) => (
                  <div key={wt.topic.id} className="flex items-start gap-3 rounded-xl border border-rose-500/20 bg-rose-500/8 p-3">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-ink-900">{wt.topic.name}</span>
                        <Badge variant="danger">{wt.score}%</Badge>
                      </div>
                      <p className="mt-0.5 text-xs text-ink-500">{wt.recommendation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Skill Gap Snapshot */}
          <Card className="p-6">
            <SectionTitle action={<Link to="/app/skill-gap" className="text-sm text-brand-700 hover:text-brand-800">View Details</Link>}>
              Skill Gap Snapshot
            </SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-accent-500/20 bg-accent-500/8 p-4">
                <div className="flex items-center gap-2 text-accent-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="text-sm font-semibold">Strong Skills</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {gapSummary.strong.length > 0 ? gapSummary.strong.map((s) => (
                    <span key={s.skill} className="chip bg-accent-500/15 text-accent-700 text-xs">{s.skill}</span>
                  )) : <span className="text-xs text-ink-500">None yet</span>}
                </div>
              </div>
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/8 p-4">
                <div className="flex items-center gap-2 text-amber-400">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm font-semibold">Needs Work</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {gapSummary.needsImprovement.length > 0 ? gapSummary.needsImprovement.map((s) => (
                    <span key={s.skill} className="chip bg-amber-500/15 text-amber-400 text-xs">{s.skill}</span>
                  )) : <span className="text-xs text-ink-500">None</span>}
                </div>
              </div>
              <div className="rounded-xl border border-ink-300/60 bg-ink-200/40 p-4">
                <div className="flex items-center gap-2 text-ink-600">
                  <Play className="h-4 w-4" />
                  <span className="text-sm font-semibold">Developing</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {gapSummary.developing.length > 0 ? gapSummary.developing.map((s) => (
                    <span key={s.skill} className="chip bg-ink-300 text-ink-600 text-xs">{s.skill}</span>
                  )) : <span className="text-xs text-ink-500">None</span>}
                </div>
              </div>
              <div className="rounded-xl border border-rose-500/20 bg-rose-500/8 p-4">
                <div className="flex items-center gap-2 text-rose-400">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm font-semibold">Missing Skills</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {gapSummary.missing.length > 0 ? gapSummary.missing.map((s) => (
                    <span key={s.skill} className="chip bg-rose-500/15 text-rose-400 text-xs">{s.skill}</span>
                  )) : <span className="text-xs text-ink-500">None</span>}
                </div>
              </div>
            </div>
            <p className="mt-4 rounded-lg bg-ink-200/50 p-3 text-sm text-ink-600">{gapSummary.summary}</p>
          </Card>

          {/* Roadmap Progress */}
          <Card className="p-6">
            <SectionTitle action={<Link to="/app/roadmap" className="text-sm text-brand-700 hover:text-brand-800">Full Roadmap</Link>}>
              Roadmap Progress
            </SectionTitle>
            <div className="space-y-3">
              {phases.slice(0, 5).map((phase) => (
                <div key={phase.id} className="flex items-center gap-3">
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                    phase.status === 'Completed' ? 'bg-accent-600 text-ink-950' :
                    phase.status === 'In Progress' ? 'bg-brand-600 text-ink-950' :
                    phase.status === 'Next' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-ink-300 text-ink-500'
                  }`}>
                    {phase.status === 'Completed' ? <CheckCircle2 className="h-4 w-4" /> : phase.phase}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-ink-900">{phase.title}</span>
                      <span className="text-xs text-ink-500">{phase.learningProgress}%</span>
                    </div>
                    <ProgressBar value={phase.learningProgress} size="sm" className="mt-1.5" />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Ask Skillora AI */}
          <Card className="overflow-hidden">
            <div className="relative overflow-hidden bg-gradient-to-br from-ai-600/30 via-brand-600/20 to-accent-600/15 p-5">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ai-600/20 blur-2xl" />
              <div className="relative flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-ai-800" />
                <h3 className="font-display font-semibold text-ink-950">Ask Skillora AI</h3>
              </div>
              <p className="mt-1.5 relative text-sm text-ink-700">Your personal AI career mentor is ready to help.</p>
            </div>
            <div className="p-5">
              <Link to="/app/mentor" className="btn-primary w-full">
                Start Chatting
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Card>

          {/* Recommended Resources */}
          <Card className="p-6">
            <SectionTitle action={<Link to="/app/resources" className="text-sm text-brand-700 hover:text-brand-800">All Resources</Link>}>
              Recommended Resources
            </SectionTitle>
            <div className="space-y-3">
              {resources.map((resource) => (
                <a
                  key={resource.id}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-ink-300/60 p-3 transition hover:border-brand-500/30 hover:bg-brand-500/5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-ink-900">{resource.title}</p>
                      <p className="text-xs text-ink-500">{resource.provider} • {resource.duration}</p>
                    </div>
                    {resource.free && <Badge variant="success">Free</Badge>}
                  </div>
                  <p className="mt-1.5 text-xs text-ink-500">{getResourceRecommendationReason(resource, profile).slice(0, 80)}...</p>
                </a>
              ))}
            </div>
          </Card>

          {/* Certifications for You */}
          <Card className="p-6">
            <SectionTitle action={<Link to="/app/certifications" className="text-sm text-brand-700 hover:text-brand-800">All Certs</Link>}>
              Certifications for You
            </SectionTitle>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.id} className="rounded-xl border border-ink-300/60 p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-ink-900">{cert.name}</p>
                      <p className="text-xs text-ink-500">{cert.provider}</p>
                    </div>
                    {cert.free && <Badge variant="success">Free</Badge>}
                  </div>
                  <p className="mt-1 text-xs text-ink-500">{cert.duration} • {cert.difficulty}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="p-6">
            <SectionTitle>Recent Activity</SectionTitle>
            <div className="space-y-3">
              {profile.activity.length > 0 ? profile.activity.slice(0, 5).map((act) => {
                const Icon = iconMap[act.icon] || CheckCircle2;
                return (
                  <div key={act.id} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-ink-200">
                      <Icon className="h-3.5 w-3.5 text-ink-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink-900">{act.action}</p>
                      <p className="truncate text-xs text-ink-500">{act.detail}</p>
                      <p className="text-xs text-ink-500/80">{new Date(act.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                );
              }) : (
                <p className="text-sm text-ink-500">No activity yet. Start learning to see your progress here!</p>
              )}
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
