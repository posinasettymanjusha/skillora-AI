import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen, Video, FileText, Code2, FolderGit2, Award, Clock, Target,
  CheckCircle2, ExternalLink, Search,
} from 'lucide-react';
import AppLayout from '@/layouts/AppLayout';
import { useStudent } from '@/context/StudentContext';
import { RESOURCES } from '@/data/resources';
import { getCareerRole } from '@/data/careers';
import { getRoadmapProgress, getResourceRecommendationReason } from '@/utils/personalization';
import { Card, Badge, PageHeader, EmptyState } from '@/components/ui';
import type { ResourceDifficulty, ResourceType, LearningResource } from '@/types';

const TYPE_ICONS: Record<ResourceType, React.ComponentType<{ className?: string }>> = {
  Course: BookOpen,
  Video: Video,
  Documentation: FileText,
  Practice: Code2,
  Project: FolderGit2,
  Certification: Award,
};

const DIFFICULTIES: (ResourceDifficulty | 'All')[] = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const TYPES: (ResourceType | 'All')[] = ['All', 'Course', 'Video', 'Documentation', 'Practice', 'Project', 'Certification'];

export default function ResourcesPage() {
  const { profile, toggleResourceComplete } = useStudent();
  const [difficulty, setDifficulty] = useState<ResourceDifficulty | 'All'>('All');
  const [type, setType] = useState<ResourceType | 'All'>('All');
  const [search, setSearch] = useState('');
  if (!profile) return null;

  const role = getCareerRole(profile.targetRoleId);
  const { currentPhase } = getRoadmapProgress(profile);

  const filtered = useMemo(() => {
    let result = RESOURCES;
    if (difficulty !== 'All') result = result.filter((r) => r.difficulty === difficulty);
    if (type !== 'All') result = result.filter((r) => r.type === type);
    if (search) result = result.filter((r) => r.title.toLowerCase().includes(search.toLowerCase()) || r.skill.toLowerCase().includes(search.toLowerCase()));
    return result;
  }, [difficulty, type, search]);

  // Sort: recommended first
  const sorted = useMemo(() => {
    if (!currentPhase) return filtered;
    return [...filtered].sort((a, b) => {
      const aInPhase = currentPhase.resourceIds.includes(a.id) ? 0 : 1;
      const bInPhase = currentPhase.resourceIds.includes(b.id) ? 0 : 1;
      return aInPhase - bInPhase;
    });
  }, [filtered, currentPhase]);

  return (
    <AppLayout>
      <PageHeader
        title="Learning Resources"
        subtitle="Curated resources matched to your level and current roadmap phase."
      />

      {currentPhase && (
        <Card className="mb-6 p-4">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-brand-700" />
            <p className="text-sm text-ink-700">
              Resources tagged with <Badge variant="info">Recommended</Badge> are selected for your current phase: <span className="font-semibold">{currentPhase.title}</span>
            </p>
          </div>
        </Card>
      )}

      {/* Filters */}
      <Card className="mb-6 p-4">
        <div className="relative mb-4">
          <Search className="absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-400" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search resources..." className="input pl-11" />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-ink-500">Level:</span>
          {DIFFICULTIES.map((d) => (
            <button key={d} onClick={() => setDifficulty(d)} className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${difficulty === d ? 'bg-gradient-to-br from-brand-600 to-accent-600 text-ink-950' : 'bg-ink-100 text-ink-600 hover:bg-ink-200'}`}>
              {d}
            </button>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-ink-500">Type:</span>
          {TYPES.map((t) => (
            <button key={t} onClick={() => setType(t)} className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${type === t ? 'bg-gradient-to-br from-brand-600 to-accent-600 text-ink-950' : 'bg-ink-100 text-ink-600 hover:bg-ink-200'}`}>
              {t}
            </button>
          ))}
        </div>
      </Card>

      {sorted.length === 0 ? (
        <EmptyState icon={BookOpen} title="No resources found" description="Try adjusting your filters or search query." />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((resource) => {
            const Icon = TYPE_ICONS[resource.type];
            const isComplete = profile.completedResources.includes(resource.id);
            const isRecommended = currentPhase?.resourceIds.includes(resource.id);
            return (
              <Card key={resource.id} hover className="flex flex-col p-5">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-100 text-ink-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {isRecommended && <Badge variant="info">Recommended</Badge>}
                    {resource.free && <Badge variant="success">Free</Badge>}
                  </div>
                </div>
                <h3 className="mt-3 font-semibold text-ink-900">{resource.title}</h3>
                <p className="text-xs text-ink-500">{resource.provider}</p>
                <p className="mt-2 text-sm text-ink-600 flex-1">{resource.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <Badge variant="default">{resource.skill}</Badge>
                  <Badge variant={resource.difficulty === 'Beginner' ? 'success' : resource.difficulty === 'Intermediate' ? 'warning' : 'danger'}>
                    {resource.difficulty}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs text-ink-400"><Clock className="h-3 w-3" /> {resource.duration}</span>
                </div>
                {isRecommended && (
                  <p className="mt-3 rounded-lg bg-brand-500/10 p-2 text-xs text-ink-600">
                    {getResourceRecommendationReason(resource, profile)}
                  </p>
                )}
                <div className="mt-4 flex gap-2">
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 text-sm">
                    Open <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <button
                    onClick={() => toggleResourceComplete(resource.id)}
                    className={`btn text-sm px-3 ${isComplete ? 'bg-accent-500/15 text-accent-700' : 'bg-ink-100 text-ink-600 hover:bg-ink-200'}`}
                  >
                    <CheckCircle2 className={`h-4 w-4 ${isComplete ? 'text-accent-700' : ''}`} />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </AppLayout>
  );
}
