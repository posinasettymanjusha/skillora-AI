import { useState, useMemo } from 'react';
import { Award, Clock, ExternalLink, Trophy, CheckCircle2, Search, Target } from 'lucide-react';
import AppLayout from '@/layouts/AppLayout';
import { useStudent } from '@/context/StudentContext';
import { CERTIFICATIONS } from '@/data/resources';
import { getCareerRole } from '@/data/careers';
import { getRecommendedCertifications } from '@/utils/personalization';
import { Card, Badge, PageHeader, EmptyState } from '@/components/ui';
import type { ResourceDifficulty } from '@/types';

const DIFFICULTIES: (ResourceDifficulty | 'All')[] = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function CertificationsPage() {
  const { profile, toggleCertificationEarned } = useStudent();
  const [difficulty, setDifficulty] = useState<ResourceDifficulty | 'All'>('All');
  const [onlyFree, setOnlyFree] = useState(false);
  const [search, setSearch] = useState('');
  if (!profile) return null;

  const role = getCareerRole(profile.targetRoleId);
  const recommended = getRecommendedCertifications(profile, 100);
  const recommendedIds = new Set(recommended.map((c) => c.id));

  const filtered = useMemo(() => {
    let result = CERTIFICATIONS;
    if (difficulty !== 'All') result = result.filter((c) => c.difficulty === difficulty);
    if (onlyFree) result = result.filter((c) => c.free);
    if (search) result = result.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.skill.toLowerCase().includes(search.toLowerCase()));
    return result;
  }, [difficulty, onlyFree, search]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const aRec = recommendedIds.has(a.id) ? 0 : 1;
      const bRec = recommendedIds.has(b.id) ? 0 : 1;
      return aRec - bRec;
    });
  }, [filtered, recommendedIds]);

  return (
    <AppLayout>
      <PageHeader
        title="Free Certifications"
        subtitle="Boost your resume with certifications matched to your career path."
      />

      {role && recommended.length > 0 && (
        <Card className="mb-6 p-4">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-brand-700" />
            <p className="text-sm text-ink-700">
              Certifications tagged with <Badge variant="info">For You</Badge> align with your {role.title} career path.
            </p>
          </div>
        </Card>
      )}

      {/* Filters */}
      <Card className="mb-6 p-4">
        <div className="relative mb-4">
          <Search className="absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-400" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search certifications..." className="input pl-11" />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-ink-500">Level:</span>
          {DIFFICULTIES.map((d) => (
            <button key={d} onClick={() => setDifficulty(d)} className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${difficulty === d ? 'bg-gradient-to-br from-brand-600 to-accent-600 text-ink-950' : 'bg-ink-100 text-ink-600 hover:bg-ink-200'}`}>
              {d}
            </button>
          ))}
          <button onClick={() => setOnlyFree(!onlyFree)} className={`ml-2 rounded-lg px-3 py-1.5 text-xs font-medium transition ${onlyFree ? 'bg-accent-600 text-ink-950' : 'bg-ink-100 text-ink-600 hover:bg-ink-200'}`}>
            Free Only
          </button>
        </div>
      </Card>

      {sorted.length === 0 ? (
        <EmptyState icon={Award} title="No certifications found" description="Try adjusting your filters." />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((cert) => {
            const isEarned = profile.earnedCertifications.includes(cert.id);
            const isRecommended = recommendedIds.has(cert.id);
            return (
              <Card key={cert.id} hover className="flex flex-col p-5">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {isRecommended && <Badge variant="info">For You</Badge>}
                    {cert.free ? <Badge variant="success">Free</Badge> : <Badge variant="default">Paid</Badge>}
                  </div>
                </div>
                <h3 className="mt-3 font-semibold text-ink-900">{cert.name}</h3>
                <p className="text-xs text-ink-500">{cert.provider}</p>
                <p className="mt-2 text-sm text-ink-600 flex-1">{cert.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <Badge variant="default">{cert.skill}</Badge>
                  <Badge variant={cert.difficulty === 'Beginner' ? 'success' : cert.difficulty === 'Intermediate' ? 'warning' : 'danger'}>
                    {cert.difficulty}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs text-ink-400"><Clock className="h-3 w-3" /> {cert.duration}</span>
                </div>
                <div className="mt-4 flex gap-2">
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 text-sm">
                    View <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <button
                    onClick={() => toggleCertificationEarned(cert.id)}
                    className={`btn text-sm px-3 ${isEarned ? 'bg-accent-500/15 text-accent-700' : 'bg-ink-100 text-ink-600 hover:bg-ink-200'}`}
                  >
                    {isEarned ? <Trophy className="h-4 w-4 text-accent-700" /> : <CheckCircle2 className="h-4 w-4" />}
                  </button>
                </div>
                {isEarned && <p className="mt-2 text-center text-xs font-medium text-accent-700">Earned!</p>}
              </Card>
            );
          })}
        </div>
      )}
    </AppLayout>
  );
}
