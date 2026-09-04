import { Link, useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Sparkles, ArrowRight, CheckCircle2, AlertCircle, TrendingUp, Clock, Briefcase } from 'lucide-react';
import AppLayout from '@/layouts/AppLayout';
import { useStudent } from '@/context/StudentContext';
import { getRecommendations } from '@/utils/personalization';
import { Card, Badge, PageHeader } from '@/components/ui';

export default function RecommendationsPage() {
  const { profile, selectTargetRole } = useStudent();
  const navigate = useNavigate();
  if (!profile) return null;

  const recommendations = getRecommendations(profile);
  const top3 = recommendations.slice(0, 3);

  const handleSelect = (roleId: string) => {
    selectTargetRole(roleId);
    navigate('/app/skill-gap');
  };

  return (
    <AppLayout>
      <PageHeader
        title="Career Recommendations"
        subtitle="Based on your skills, interests, and goals — here are the best career paths for you."
      />

      <Card className="mb-6 overflow-hidden">
        <div className="flex items-center gap-3 bg-gradient-to-r from-brand-50 to-accent-50 p-4">
          <Sparkles className="h-5 w-5 text-brand-700" />
          <p className="text-sm text-ink-700">
            We analyzed your profile ({profile.skills.length} skills, {profile.interests.length} interests, {profile.interestedRoles.length} preferred roles) to generate these matches.
          </p>
        </div>
      </Card>

      <div className="space-y-5">
        {top3.map((rec, idx) => {
          const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[rec.role.icon] || Briefcase;
          const matchColor = rec.matchPercentage >= 85 ? 'accent' : rec.matchPercentage >= 70 ? 'brand' : 'amber';
          const matchBg = rec.matchPercentage >= 85 ? 'bg-accent-500/10 text-accent-700' : rec.matchPercentage >= 70 ? 'bg-brand-500/10 text-brand-700' : 'bg-amber-500/10 text-amber-400';

          return (
            <Card key={rec.role.id} hover className="overflow-hidden">
              <div className="flex flex-col gap-4 p-6 lg:flex-row">
                {/* Rank + Icon */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink-950 font-display text-xl font-bold text-ink-950">
                    {idx + 1}
                  </div>
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${matchBg}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl font-bold text-ink-900">{rec.role.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`font-display text-2xl font-bold ${matchBg.includes('accent') ? 'text-accent-700' : matchBg.includes('brand') ? 'text-brand-700' : 'text-amber-400'}`}>
                        {rec.matchPercentage}%
                      </span>
                      <span className="text-sm text-ink-500">match</span>
                    </div>
                    <Badge variant="info">{rec.role.difficulty}</Badge>
                    <Badge variant={rec.role.marketDemand === 'Very High' || rec.role.marketDemand === 'High' ? 'success' : 'default'}>
                      {rec.role.marketDemand} demand
                    </Badge>
                  </div>

                  <p className="mt-2 text-sm text-ink-600">{rec.role.description}</p>

                  {/* Why it matches */}
                  <div className="mt-4 rounded-xl bg-ink-200/50 p-4">
                    <h4 className="flex items-center gap-1.5 text-sm font-semibold text-ink-700">
                      <Sparkles className="h-4 w-4 text-brand-500" />
                      Why this matches you
                    </h4>
                    <ul className="mt-2 space-y-1.5">
                      {rec.matchReasons.map((reason, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-ink-600">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-700" />
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills breakdown */}
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-accent-500/20 bg-accent-500/50 p-3">
                      <p className="flex items-center gap-1.5 text-xs font-semibold text-accent-700">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Skills You Have
                      </p>
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {rec.hasSkills.length > 0 ? rec.hasSkills.map((s) => (
                          <span key={s} className="chip bg-accent-500/15 text-accent-700 text-xs">{s}</span>
                        )) : <span className="text-xs text-ink-400">Building from scratch</span>}
                      </div>
                    </div>
                    <div className="rounded-xl border border-amber-500/20 bg-amber-500/50 p-3">
                      <p className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                        <AlertCircle className="h-3.5 w-3.5" /> Skills to Develop
                      </p>
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {rec.needsSkills.map((s) => (
                          <span key={s} className="chip bg-amber-500/15 text-amber-400 text-xs">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Meta + Action */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-4 text-xs text-ink-500">
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {rec.role.learningEstimate}</span>
                      <span className="flex items-center gap-1"><TrendingUp className="h-3.5 w-3.5" /> {rec.role.averageSalary}</span>
                      <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {rec.role.coreSkills.length} core skills</span>
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/app/role/${rec.role.id}`} className="btn-ghost text-sm">View Details</Link>
                      <button onClick={() => handleSelect(rec.role.id)} className="btn-primary text-sm">
                        {profile.targetRoleId === rec.role.id ? 'Selected' : 'Select as Goal'}
                        {profile.targetRoleId !== rec.role.id && <ArrowRight className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Other roles */}
      <div className="mt-8">
        <h2 className="mb-4 font-display text-lg font-bold text-ink-900">Other Career Paths</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recommendations.slice(3).map((rec) => {
            const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[rec.role.icon] || Briefcase;
            return (
              <Card key={rec.role.id} hover className="p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-100 text-ink-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-900">{rec.role.title}</h3>
                    <p className="text-xs text-ink-500">{rec.matchPercentage}% match</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-ink-600 line-clamp-2">{rec.role.shortDescription}</p>
                <div className="mt-4 flex gap-2">
                  <Link to={`/app/role/${rec.role.id}`} className="btn-ghost text-xs">Details</Link>
                  <button onClick={() => handleSelect(rec.role.id)} className="btn-secondary text-xs ml-auto">Select</button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
