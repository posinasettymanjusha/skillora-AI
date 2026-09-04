import { useParams, useNavigate, Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowLeft, ArrowRight, Clock, TrendingUp, Briefcase, CheckCircle2, AlertCircle, Target } from 'lucide-react';
import AppLayout from '@/layouts/AppLayout';
import { useStudent } from '@/context/StudentContext';
import { getCareerRole } from '@/data/careers';
import { getRecommendations } from '@/utils/personalization';
import { Card, Badge, PageHeader, ProgressBar } from '@/components/ui';

export default function RoleDetailsPage() {
  const { roleId } = useParams<{ roleId: string }>();
  const navigate = useNavigate();
  const { profile, selectTargetRole } = useStudent();
  if (!profile || !roleId) return null;

  const role = getCareerRole(roleId);
  if (!role) {
    return (
      <AppLayout>
        <p>Role not found.</p>
      </AppLayout>
    );
  }

  const rec = getRecommendations(profile).find((r) => r.role.id === roleId)!;
  const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[role.icon] || Briefcase;

  const handleSelect = () => {
    selectTargetRole(roleId);
    navigate('/app/skill-gap');
  };

  return (
    <AppLayout>
      <Link to="/app/recommendations" className="mb-4 inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-950">
        <ArrowLeft className="h-4 w-4" /> Back to Recommendations
      </Link>

      <PageHeader
        title={role.title}
        subtitle={role.shortDescription}
        action={
          <button onClick={handleSelect} className="btn-primary">
            {profile.targetRoleId === roleId ? 'Selected as Goal' : 'Select as Career Goal'}
            {profile.targetRoleId !== roleId && <ArrowRight className="h-4 w-4" />}
          </button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {/* Match Overview */}
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-700">
                <Icon className="h-8 w-8" />
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold text-brand-700">{rec.matchPercentage}%</span>
                  <span className="text-ink-500">match</span>
                </div>
                <p className="text-sm text-ink-500">Based on your profile</p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-ink-200/50 p-3">
                <Clock className="h-4 w-4 text-ink-400" />
                <p className="mt-1.5 text-xs text-ink-500">Learning Time</p>
                <p className="font-semibold text-ink-900">{role.learningEstimate}</p>
              </div>
              <div className="rounded-xl bg-ink-200/50 p-3">
                <TrendingUp className="h-4 w-4 text-ink-400" />
                <p className="mt-1.5 text-xs text-ink-500">Salary Range</p>
                <p className="font-semibold text-ink-900">{role.averageSalary}</p>
              </div>
              <div className="rounded-xl bg-ink-200/50 p-3">
                <Briefcase className="h-4 w-4 text-ink-400" />
                <p className="mt-1.5 text-xs text-ink-500">Market Demand</p>
                <p className="font-semibold text-ink-900">{role.marketDemand}</p>
              </div>
            </div>
          </Card>

          {/* Why it matches */}
          <Card className="p-6">
            <h2 className="font-display text-lg font-bold text-ink-900">Why this career matches you</h2>
            <ul className="mt-4 space-y-2.5">
              {rec.matchReasons.map((reason, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-700" />
                  {reason}
                </li>
              ))}
            </ul>
          </Card>

          {/* Required Skills */}
          <Card className="p-6">
            <h2 className="font-display text-lg font-bold text-ink-900">Required Core Skills</h2>
            <p className="mt-1 text-sm text-ink-500">Skills you need to master for this role.</p>
            <div className="mt-4 space-y-3">
              {role.coreSkills.map((req) => {
                const studentSkill = profile.skills.find((s) => s.name === req.skill);
                const has = studentSkill && (['Beginner', 'Intermediate', 'Advanced'].indexOf(studentSkill.level) >= ['Beginner', 'Intermediate', 'Advanced'].indexOf(req.requiredLevel));
                return (
                  <div key={req.skill} className="rounded-xl border border-ink-300/60 p-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-ink-900">{req.skill}</span>
                        {has ? <Badge variant="success">You have this</Badge> : studentSkill ? <Badge variant="warning">Developing</Badge> : <Badge variant="danger">Missing</Badge>}
                      </div>
                      <Badge variant={req.priority === 'High' ? 'danger' : req.priority === 'Medium' ? 'warning' : 'default'}>
                        {req.priority} priority
                      </Badge>
                    </div>
                    <p className="mt-1.5 text-xs text-ink-500">{req.importance}</p>
                    <div className="mt-2 flex items-center gap-4 text-xs">
                      <span className="text-ink-500">Your level: <span className="font-medium text-ink-700">{studentSkill?.level || 'Not Started'}</span></span>
                      <span className="text-ink-500">Required: <span className="font-medium text-ink-700">{req.requiredLevel}</span></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-display font-bold text-ink-900">Career Description</h3>
            <p className="mt-2 text-sm text-ink-600">{role.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {role.tags.map((tag) => (
                <span key={tag} className="chip bg-brand-500/10 text-brand-700 text-xs">{tag}</span>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-display font-bold text-ink-900">Your Readiness</h3>
            <div className="mt-3">
              <div className="flex justify-between text-sm">
                <span className="text-ink-500">Skill Coverage</span>
                <span className="font-semibold text-ink-900">{rec.matchPercentage}%</span>
              </div>
              <ProgressBar value={rec.matchPercentage} className="mt-1.5" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-accent-500/10 p-3 text-center">
                <p className="font-display text-2xl font-bold text-accent-700">{rec.hasSkills.length}</p>
                <p className="text-xs text-ink-500">Skills you have</p>
              </div>
              <div className="rounded-lg bg-amber-500/10 p-3 text-center">
                <p className="font-display text-2xl font-bold text-amber-400">{rec.needsSkills.length}</p>
                <p className="text-xs text-ink-500">Skills to develop</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-brand-700" />
              <h3 className="font-display font-bold text-ink-900">Ready to commit?</h3>
            </div>
            <p className="mt-2 text-sm text-ink-600">Select this as your career goal to unlock your personalized roadmap and skill gap analysis.</p>
            <button onClick={handleSelect} className="btn-primary mt-4 w-full">
              Set as Career Goal
              <ArrowRight className="h-4 w-4" />
            </button>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
