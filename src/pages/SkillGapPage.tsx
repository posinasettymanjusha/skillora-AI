import { Link } from 'react-router-dom';
import {
  Radar, CheckCircle2, AlertCircle, Play, Target, ArrowRight, TrendingUp,
} from 'lucide-react';
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Radar as RechartsRadar,
} from 'recharts';
import AppLayout from '@/layouts/AppLayout';
import { useStudent } from '@/context/StudentContext';
import { getCareerRole } from '@/data/careers';
import { analyzeSkillGap, getSkillGapSummary } from '@/utils/personalization';
import { Card, Badge, PageHeader, ProgressBar, StatCard } from '@/components/ui';
import type { SkillGap } from '@/utils/personalization';

const LEVEL_VALUES: Record<string, number> = { 'Not Started': 0, Beginner: 1, Intermediate: 2, Advanced: 3 };

const STATUS_CONFIG: Record<string, { color: string; bg: string; icon: React.ComponentType<{ className?: string }> }> = {
  Strong: { color: 'text-accent-700', bg: 'bg-accent-500/10 border-accent-500/20', icon: CheckCircle2 },
  Developing: { color: 'text-ink-600', bg: 'bg-ink-200/50 border-ink-300/60', icon: Play },
  'Needs Improvement': { color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20', icon: AlertCircle },
  Missing: { color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20', icon: AlertCircle },
};

export default function SkillGapPage() {
  const { profile } = useStudent();
  if (!profile) return null;

  const role = getCareerRole(profile.targetRoleId);
  const gaps = analyzeSkillGap(profile);
  const summary = getSkillGapSummary(profile);

  if (!role) {
    return (
      <AppLayout>
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Target className="mb-4 h-12 w-12 text-ink-300" />
          <h2 className="font-display text-xl font-bold text-ink-900">Select a career goal first</h2>
          <p className="mt-1.5 text-ink-500">Choose a target role to see your skill gap analysis.</p>
          <Link to="/app/recommendations" className="btn-primary mt-6">View Recommendations</Link>
        </div>
      </AppLayout>
    );
  }

  const chartData = gaps.map((g) => ({
    skill: g.skill.length > 12 ? g.skill.slice(0, 10) + '…' : g.skill,
    current: LEVEL_VALUES[g.currentLevel],
    required: LEVEL_VALUES[g.requiredLevel],
  }));

  return (
    <AppLayout>
      <PageHeader
        title="Skill Gap Analysis"
        subtitle={`Your current skills vs. what's needed for ${role.title}`}
        action={<Link to="/app/roadmap" className="btn-primary">View Roadmap <ArrowRight className="h-4 w-4" /></Link>}
      />

      {/* Stats */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={TrendingUp} label="Skill Coverage" value={`${summary.coverage}%`} color="accent" />
        <StatCard icon={CheckCircle2} label="Strong Skills" value={summary.strong.length} color="accent" />
        <StatCard icon={AlertCircle} label="Missing Skills" value={summary.missing.length} color="rose" />
        <StatCard icon={Target} label="High Priority Gaps" value={summary.highPriority.length} color="amber" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Radar Chart */}
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center gap-2">
            <Radar className="h-5 w-5 text-brand-700" />
            <h2 className="font-display text-lg font-bold text-ink-900">Skill Comparison</h2>
          </div>
          <p className="mt-1 text-sm text-ink-500">Your current level vs. required level for each skill.</p>
          <div className="mt-4 h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={chartData}>
                <PolarGrid stroke="#1e2433" />
                <PolarAngleAxis dataKey="skill" tick={{ fontSize: 11, fill: '#8b95a9' }} />
                <PolarRadiusAxis domain={[0, 3]} tick={{ fontSize: 10, fill: '#6b7589' }} tickCount={4} />
                <RechartsRadar name="Current" dataKey="current" stroke="#c99a3e" fill="#c99a3e" fillOpacity={0.3} />
                <RechartsRadar name="Required" dataKey="required" stroke="#d05a35" fill="#d05a35" fillOpacity={0.15} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 flex justify-center gap-6 text-sm">
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full bg-brand-500" /> Your Level</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full bg-accent-500" /> Required Level</span>
          </div>
        </Card>

        {/* Summary */}
        <Card className="p-6">
          <h2 className="font-display text-lg font-bold text-ink-900">Analysis Summary</h2>
          <div className="mt-4 rounded-xl bg-brand-500/10 p-4">
            <p className="text-sm text-ink-700">{summary.summary}</p>
          </div>
          {summary.nextSkill && (
            <div className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
              <p className="flex items-center gap-1.5 text-sm font-semibold text-amber-400">
                <Target className="h-4 w-4" /> Recommended Next Skill
              </p>
              <p className="mt-1 text-lg font-bold text-ink-900">{summary.nextSkill.skill}</p>
              <p className="text-xs text-ink-500">{summary.nextSkill.importance}</p>
              <Link to="/app/roadmap" className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-brand-700 hover:text-brand-800">
                Start learning <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}
        </Card>
      </div>

      {/* Detailed Skill List */}
      <Card className="mt-6 p-6">
        <h2 className="mb-4 font-display text-lg font-bold text-ink-900">Detailed Skill Breakdown</h2>
        <div className="space-y-3">
          {gaps.map((gap: SkillGap) => {
            const config = STATUS_CONFIG[gap.status];
            const Icon = config.icon;
            return (
              <div key={gap.skill} className={`rounded-xl border p-4 ${config.bg}`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${config.color}`} />
                    <span className="font-semibold text-ink-900">{gap.skill}</span>
                    <Badge variant={gap.priority === 'High' ? 'danger' : gap.priority === 'Medium' ? 'warning' : 'default'}>
                      {gap.priority}
                    </Badge>
                  </div>
                  <Badge variant={gap.status === 'Strong' ? 'success' : gap.status === 'Missing' ? 'danger' : gap.status === 'Needs Improvement' ? 'warning' : 'default'}>
                    {gap.status}
                  </Badge>
                </div>
                <p className="mt-1.5 text-xs text-ink-500">{gap.importance}</p>
                <div className="mt-3 grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-ink-500">Current</p>
                    <p className="font-semibold text-ink-900">{gap.currentLevel}</p>
                    <ProgressBar value={(LEVEL_VALUES[gap.currentLevel] / 3) * 100} size="sm" className="mt-1" />
                  </div>
                  <div>
                    <p className="text-xs text-ink-500">Required</p>
                    <p className="font-semibold text-ink-900">{gap.requiredLevel}</p>
                    <ProgressBar value={(LEVEL_VALUES[gap.requiredLevel] / 3) * 100} size="sm" className="mt-1" />
                  </div>
                  <div>
                    <p className="text-xs text-ink-500">Gap</p>
                    <p className={`font-semibold ${gap.gap > 0 ? 'text-rose-400' : 'text-accent-700'}`}>
                      {gap.gap > 0 ? `${gap.gap} level${gap.gap > 1 ? 's' : ''}` : 'No gap'}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </AppLayout>
  );
}
