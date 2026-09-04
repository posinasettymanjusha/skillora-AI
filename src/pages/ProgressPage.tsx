import { Link } from 'react-router-dom';
import {
  TrendingUp, Flame, Trophy, BookOpen, Award, Target, ArrowRight,
  CheckCircle2, Play, Zap,
} from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, Legend,
} from 'recharts';
import AppLayout from '@/layouts/AppLayout';
import { useStudent } from '@/context/StudentContext';
import { getCareerRole } from '@/data/careers';
import { getRoadmapProgress, getSkillGapSummary, getCareerReadiness } from '@/utils/personalization';
import { Card, Badge, PageHeader, ProgressBar, StatCard, SectionTitle } from '@/components/ui';

const PIE_COLORS = ['#10b981', '#3366ff', '#f59e0b', '#f43f5e'];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CheckCircle: CheckCircle2, Trophy, Play, Target, BookOpen, Award,
};

export default function ProgressPage() {
  const { profile } = useStudent();
  if (!profile) return null;

  const role = getCareerRole(profile.targetRoleId);
  const { phases, learningProgress, knowledgeMastery, completedCount, totalCount } = getRoadmapProgress(profile);
  const gapSummary = getSkillGapSummary(profile);

  const weeklyData = profile.weeklyActivity.length > 0
    ? profile.weeklyActivity
    : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => ({ day, minutes: 0 }));

  const skillProgress = phases.map((p) => ({
    name: p.skill.length > 12 ? p.skill.slice(0, 10) + '…' : p.skill,
    progress: p.learningProgress,
  }));

  const pieData = [
    { name: 'Strong', value: gapSummary.strong.length },
    { name: 'Developing', value: gapSummary.developing.length },
    { name: 'Needs Improvement', value: gapSummary.needsImprovement.length },
    { name: 'Missing', value: gapSummary.missing.length },
  ].filter((d) => d.value > 0);

  return (
    <AppLayout>
      <PageHeader title="Progress Tracker" subtitle="Track your learning journey and celebrate milestones." />

      {/* Stats */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={TrendingUp} label="Learning Progress" value={`${learningProgress}%`} color="brand" />
        <StatCard icon={Target} label="Knowledge Mastery" value={`${knowledgeMastery}%`} color="accent" />
        <StatCard icon={Flame} label="Learning Streak" value={`${profile.streak} days`} color="rose" />
        <StatCard icon={Trophy} label="Milestones" value={`${completedCount}/${totalCount}`} color="amber" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Weekly Activity */}
        <Card className="p-6">
          <SectionTitle>Weekly Learning Activity</SectionTitle>
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#dfe3ea" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#6b7589' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: '#9aa3b5' }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ borderRadius: '12px', border: '1px solid #dfe3ea', fontSize: '12px' }}
                  formatter={(v: unknown) => [`${v ?? 0} min`, 'Learning']}
                />
                <Bar dataKey="minutes" fill="#3366ff" radius={[6, 6, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Skill Distribution */}
        <Card className="p-6">
          <SectionTitle>Skill Distribution</SectionTitle>
          {pieData.length > 0 ? (
            <div className="h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3}>
                    {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #dfe3ea', fontSize: '12px' }} />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <p className="py-12 text-center text-sm text-ink-400">Select a career goal to see skill distribution.</p>
          )}
        </Card>

        {/* Skill Progress Bars */}
        <Card className="p-6 lg:col-span-2">
          <SectionTitle action={<Link to="/app/roadmap" className="text-sm text-brand-700 hover:text-brand-800">View Roadmap</Link>}>
            Skill Progress
          </SectionTitle>
          {skillProgress.length > 0 ? (
            <div className="space-y-4">
              {skillProgress.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-ink-900">{s.name}</span>
                    <span className="text-ink-500">{s.progress}%</span>
                  </div>
                  <ProgressBar value={s.progress} className="mt-1.5" />
                </div>
              ))}
            </div>
          ) : (
            <p className="py-8 text-center text-sm text-ink-400">Select a career goal to track skill progress.</p>
          )}
        </Card>
      </div>

      {/* Achievements / Milestones */}
      <Card className="mt-6 p-6">
        <SectionTitle>Milestones & Achievements</SectionTitle>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map((phase) => {
            const isComplete = phase.status === 'Completed';
            return (
              <div key={phase.id} className={`flex items-center gap-3 rounded-xl border p-3.5 ${isComplete ? 'border-accent-500/20 bg-accent-500/50' : 'border-ink-300/60'}`}>
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${isComplete ? 'bg-accent-600 text-ink-950' : 'bg-ink-100 text-ink-400'}`}>
                  {isComplete ? <Trophy className="h-4 w-4" /> : <span className="text-xs font-bold">{phase.phase}</span>}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink-900">{phase.title}</p>
                  <p className="text-xs text-ink-500">{isComplete ? 'Completed' : phase.status}</p>
                </div>
                {isComplete && <CheckCircle2 className="ml-auto h-4 w-4 text-accent-700" />}
              </div>
            );
          })}
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="mt-6 p-6">
        <SectionTitle>Recent Activity</SectionTitle>
        <div className="space-y-3">
          {profile.activity.length > 0 ? profile.activity.map((act) => {
            const Icon = iconMap[act.icon] || CheckCircle2;
            return (
              <div key={act.id} className="flex items-start gap-3 border-b border-ink-300/50 pb-3 last:border-0">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ink-100">
                  <Icon className="h-4 w-4 text-ink-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-ink-900">{act.action}</p>
                  <p className="text-xs text-ink-500">{act.detail}</p>
                </div>
                <p className="text-xs text-ink-400">{new Date(act.date).toLocaleDateString()}</p>
              </div>
            );
          }) : (
            <div className="py-8 text-center">
              <p className="text-sm text-ink-400">No activity yet. Start your roadmap to see your progress here!</p>
              {role && <Link to="/app/roadmap" className="btn-primary mt-4 text-sm">Go to Roadmap <ArrowRight className="h-3.5 w-3.5" /></Link>}
            </div>
          )}
        </div>
      </Card>
    </AppLayout>
  );
}
