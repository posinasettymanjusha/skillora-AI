import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  User, Mail, GraduationCap, Calendar, Clock, Target, Award,
  FolderGit2, CheckCircle2, X, Plus, Pencil, Trash2, ExternalLink,
  Search, Briefcase, Sparkles, Lightbulb, Code2,
} from 'lucide-react';
import AppLayout from '@/layouts/AppLayout';
import { useStudent } from '@/context/StudentContext';
import { getCareerRole } from '@/data/careers';
import { getRoadmapProgress, getSkillGapSummary } from '@/utils/personalization';
import { Card, Badge, PageHeader, ProgressBar, SectionTitle } from '@/components/ui';
import type { ProfileCertification, ProfileProject, SkillLevel } from '@/types';

const SKILL_LEVELS: SkillLevel[] = ['Beginner', 'Intermediate', 'Advanced'];
const AVAILABLE_ROLES = [
  'AI Engineer', 'Machine Learning Engineer', 'Data Scientist', 'Data Analyst',
  'Software Engineer', 'Full Stack Developer', 'Backend Developer', 'Frontend Developer',
  'Cloud Engineer', 'Cybersecurity Analyst',
];
const SUGGESTED_INTERESTS = [
  'Artificial Intelligence', 'Machine Learning', 'Data Science', 'Web Development',
  'Mobile Development', 'Cybersecurity', 'Cloud Computing', 'DevOps',
  'Software Development', 'UI/UX Design', 'Blockchain', 'Game Development',
  'Internet of Things', 'Robotics', 'Data Analytics',
];
const SUGGESTED_TECH_GROUPS: { label: string; items: string[] }[] = [
  { label: 'Programming Languages', items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'C', 'SQL'] },
  { label: 'Web Technologies', items: ['HTML', 'CSS', 'React', 'Node.js', 'Next.js', 'Angular'] },
  { label: 'AI / Data', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'] },
  { label: 'Cloud / DevOps', items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'] },
  { label: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'] },
];
const MAX_INTERESTS = 15;
const MAX_TECHNOLOGIES = 20;

export default function ProfilePage() {
  const {
    profile,
    updateProfile,
    updateSkill, addSkill, removeSkill,
    addCertification, updateCertification, removeCertification,
    addProject, updateProject, removeProject,
    addInterestedRole, removeInterestedRole,
  } = useStudent();

  const [newSkill, setNewSkill] = useState('');
  const [certForm, setCertForm] = useState<ProfileCertification | null>(null);
  const [projectForm, setProjectForm] = useState<ProfileProject | null>(null);
  const [roleSearch, setRoleSearch] = useState(false);
  const [roleQuery, setRoleQuery] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const roleSearchRef = useRef<HTMLDivElement>(null);

  // Interests editing state
  const [editingInterests, setEditingInterests] = useState(false);
  const [interestDraft, setInterestDraft] = useState<string[]>([]);
  const [newInterest, setNewInterest] = useState('');

  // Preferred technologies editing state
  const [editingTech, setEditingTech] = useState(false);
  const [techDraft, setTechDraft] = useState<string[]>([]);
  const [newTech, setNewTech] = useState('');

  useEffect(() => {
    if (!roleSearch) return;
    const handler = (e: MouseEvent) => {
      if (roleSearchRef.current && !roleSearchRef.current.contains(e.target as Node)) {
        setRoleSearch(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [roleSearch]);

  if (!profile) return null;

  const role = getCareerRole(profile.targetRoleId);
  const { overallProgress, completedCount, totalCount } = getRoadmapProgress(profile);
  const gapSummary = getSkillGapSummary(profile);

  const showFeedback = (msg: string) => {
    setFeedback(msg);
    setTimeout(() => setFeedback(null), 2500);
  };

  // ── Skills ──
  const handleAddSkill = () => {
    const name = newSkill.trim();
    if (!name) return;
    if (profile.skills.some((s) => s.name.toLowerCase() === name.toLowerCase())) {
      showFeedback('Skill already exists');
      return;
    }
    addSkill({ name, level: 'Beginner' });
    setNewSkill('');
    showFeedback('Skill added');
  };

  // ── Certifications ──
  const blankCert = (): ProfileCertification => ({
    id: crypto.randomUUID(), name: '', provider: '', category: '', completionDate: '', credentialUrl: '',
  });

  const handleSaveCert = () => {
    if (!certForm || !certForm.name.trim()) return;
    const exists = profile.existingCertifications.some((c) => c.id === certForm.id);
    if (exists) {
      updateCertification(certForm.id, certForm);
      showFeedback('Certification updated');
    } else {
      addCertification(certForm);
      showFeedback('Certification added');
    }
    setCertForm(null);
  };

  // ── Projects ──
  const blankProject = (): ProfileProject => ({
    id: crypto.randomUUID(), name: '', description: '', technologies: [], category: '', githubUrl: '', demoUrl: '',
  });

  const handleSaveProject = () => {
    if (!projectForm || !projectForm.name.trim()) return;
    const exists = profile.completedProjects.some((p) => p.id === projectForm.id);
    if (exists) {
      updateProject(projectForm.id, projectForm);
      showFeedback('Project updated');
    } else {
      addProject(projectForm);
      showFeedback('Project added');
    }
    setProjectForm(null);
  };

  // ── Interested Roles ──
  const filteredRoles = AVAILABLE_ROLES.filter(
    (r) => r.toLowerCase().includes(roleQuery.toLowerCase()) && !profile.interestedRoles.includes(r)
  );

  const handleAddRole = (r: string) => {
    addInterestedRole(r);
    showFeedback('Role added');
    setRoleQuery('');
  };

  // ── Interests ──
  const startEditInterests = () => {
    setInterestDraft([...profile.interests]);
    setEditingInterests(true);
    setNewInterest('');
  };
  const cancelEditInterests = () => {
    setEditingInterests(false);
    setInterestDraft([]);
  };
  const saveInterests = () => {
    updateProfile({ interests: interestDraft });
    setEditingInterests(false);
    setInterestDraft([]);
    showFeedback('Interests updated');
  };
  const addInterestToDraft = (val: string) => {
    const trimmed = val.trim();
    if (!trimmed) return;
    if (interestDraft.some((i) => i.toLowerCase() === trimmed.toLowerCase())) {
      showFeedback('Interest already added');
      return;
    }
    if (interestDraft.length >= MAX_INTERESTS) {
      showFeedback(`Maximum ${MAX_INTERESTS} interests`);
      return;
    }
    setInterestDraft([...interestDraft, trimmed]);
  };
  const removeInterestFromDraft = (val: string) => {
    setInterestDraft(interestDraft.filter((i) => i !== val));
  };
  const suggestedInterests = SUGGESTED_INTERESTS.filter(
    (s) => !interestDraft.some((i) => i.toLowerCase() === s.toLowerCase())
  );

  // ── Preferred Technologies ──
  const startEditTech = () => {
    setTechDraft([...profile.preferredTechnologies]);
    setEditingTech(true);
    setNewTech('');
  };
  const cancelEditTech = () => {
    setEditingTech(false);
    setTechDraft([]);
  };
  const saveTech = () => {
    updateProfile({ preferredTechnologies: techDraft });
    setEditingTech(false);
    setTechDraft([]);
    showFeedback('Preferred technologies updated');
  };
  const addTechToDraft = (val: string) => {
    const trimmed = val.trim();
    if (!trimmed) return;
    if (techDraft.some((t) => t.toLowerCase() === trimmed.toLowerCase())) {
      showFeedback('Technology already added');
      return;
    }
    if (techDraft.length >= MAX_TECHNOLOGIES) {
      showFeedback(`Maximum ${MAX_TECHNOLOGIES} technologies`);
      return;
    }
    setTechDraft([...techDraft, trimmed]);
  };
  const removeTechFromDraft = (val: string) => {
    setTechDraft(techDraft.filter((t) => t !== val));
  };

  return (
    <AppLayout>
      <PageHeader title="Profile" subtitle="Your student profile and career overview." />

      {feedback && (
        <div className="mb-4 flex items-center gap-2 rounded-xl bg-accent-500/10 px-4 py-2.5 text-sm font-medium text-accent-700">
          <CheckCircle2 className="h-4 w-4" /> {feedback}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left: Profile card */}
        <div className="space-y-6">
          <Card className="p-6 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-2xl font-bold text-ink-950">
              {profile.name.charAt(0).toUpperCase()}
            </div>
            <h2 className="mt-4 font-display text-xl font-bold text-ink-900">{profile.name}</h2>
            <p className="text-sm text-ink-500">{profile.email}</p>
            {role && (
              <div className="mt-3 rounded-xl bg-brand-500/10 p-3">
                <p className="text-xs text-ink-500">Career Goal</p>
                <p className="font-semibold text-brand-700">{role.title}</p>
              </div>
            )}
            <Link to="/app/settings" className="btn-secondary mt-4 w-full text-sm">Edit Profile</Link>
          </Card>

          <Card className="p-6">
            <SectionTitle>Quick Stats</SectionTitle>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-ink-500">Roadmap Progress</span>
                <span className="text-sm font-semibold text-ink-900">{overallProgress}%</span>
              </div>
              <ProgressBar value={overallProgress} size="sm" />
              <div className="flex justify-between text-sm">
                <span className="text-ink-500">Phases Completed</span>
                <span className="font-semibold text-ink-900">{completedCount}/{totalCount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-ink-500">Skill Coverage</span>
                <span className="font-semibold text-ink-900">{gapSummary.coverage}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-ink-500">Learning Streak</span>
                <span className="font-semibold text-ink-900">{profile.streak} days</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-ink-500">Resources Completed</span>
                <span className="font-semibold text-ink-900">{profile.completedResources.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-ink-500">Certifications Earned</span>
                <span className="font-semibold text-ink-900">{profile.earnedCertifications.length}</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Right: Details */}
        <div className="space-y-6 lg:col-span-2">
          {/* Basic Info */}
          <Card className="p-6">
            <SectionTitle>Basic Information</SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoItem icon={User} label="Name" value={profile.name} />
              <InfoItem icon={Mail} label="Email" value={profile.email} />
              <InfoItem icon={GraduationCap} label="Branch" value={profile.branch || 'Not set'} />
              <InfoItem icon={Calendar} label="Year" value={profile.year || 'Not set'} />
              <InfoItem icon={Clock} label="Hours/Week" value={`${profile.hoursPerWeek}h`} />
              <InfoItem icon={Target} label="Career Goal" value={role?.title || 'Not selected'} />
            </div>
          </Card>

          {/* Skills */}
          <Card className="p-6">
            <SectionTitle>Skills ({profile.skills.length})</SectionTitle>
            <div className="flex gap-2">
              <input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddSkill(); } }}
                placeholder="Add a new skill..."
                className="input flex-1"
              />
              <button onClick={handleAddSkill} className="btn-secondary">
                <Plus className="h-4 w-4" /> Add
              </button>
            </div>
            <div className="mt-4 space-y-2">
              {profile.skills.length > 0 ? profile.skills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between rounded-xl border border-ink-300/60 p-3">
                  <span className="font-medium text-ink-900">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {SKILL_LEVELS.map((level) => (
                        <button
                          key={level}
                          onClick={() => updateSkill(skill.name, level)}
                          className={`rounded-lg px-2.5 py-1 text-xs font-medium transition ${skill.level === level ? 'bg-gradient-to-br from-brand-600 to-accent-600 text-ink-950' : 'bg-ink-100 text-ink-600 hover:bg-ink-200'}`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                    <button onClick={() => { removeSkill(skill.name); showFeedback('Skill removed'); }} className="text-ink-400 hover:text-rose-400">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )) : (
                <p className="text-sm text-ink-400">No skills added yet. Add your first skill above.</p>
              )}
            </div>
          </Card>

          {/* Interests */}
          <Card className="p-6">
            <SectionTitle
              action={
                editingInterests ? undefined : (
                  <button onClick={startEditInterests} className="btn-ghost text-sm">
                    <Pencil className="h-3.5 w-3.5" /> Edit
                  </button>
                )
              }
            >
              Interests {editingInterests ? `(${interestDraft.length}/${MAX_INTERESTS})` : `(${profile.interests.length})`}
            </SectionTitle>

            {editingInterests ? (
              <div>
                <div className="flex flex-wrap gap-2">
                  {interestDraft.map((i) => (
                    <span key={i} className="chip bg-brand-500/15 text-brand-700">
                      {i}
                      <button onClick={() => removeInterestFromDraft(i)} className="ml-1 rounded-full hover:bg-brand-200">
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                  {interestDraft.length === 0 && <p className="text-sm text-ink-400">No interests yet. Add one below or pick from suggestions.</p>}
                </div>

                <div className="mt-3 flex gap-2">
                  <input
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addInterestToDraft(newInterest); setNewInterest(''); } }}
                    placeholder="Enter an interest..."
                    className="input flex-1"
                  />
                  <button onClick={() => { addInterestToDraft(newInterest); setNewInterest(''); }} className="btn-secondary">
                    <Plus className="h-4 w-4" /> Add
                  </button>
                </div>

                {suggestedInterests.length > 0 && (
                  <div className="mt-4">
                    <p className="mb-2 text-xs font-medium text-ink-500">Suggested interests</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedInterests.map((s) => (
                        <button
                          key={s}
                          onClick={() => addInterestToDraft(s)}
                          className="chip border border-ink-300/60 bg-ink-100 text-ink-600 hover:border-brand-500/30 hover:bg-brand-500/10 hover:text-brand-800"
                        >
                          <Lightbulb className="mr-1 h-3 w-3 text-amber-400" /> {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-4 flex gap-2">
                  <button onClick={saveInterests} className="btn-primary text-sm">
                    <CheckCircle2 className="h-4 w-4" /> Save Changes
                  </button>
                  <button onClick={cancelEditInterests} className="btn-secondary text-sm">Cancel</button>
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {profile.interests.length > 0 ? profile.interests.map((i) => <Badge key={i} variant="info">{i}</Badge>) : <p className="text-sm text-ink-400">No interests added yet. Click Edit to add some.</p>}
              </div>
            )}
          </Card>

          {/* Preferred Technologies */}
          <Card className="p-6">
            <SectionTitle
              action={
                editingTech ? undefined : (
                  <button onClick={startEditTech} className="btn-ghost text-sm">
                    <Pencil className="h-3.5 w-3.5" /> Edit
                  </button>
                )
              }
            >
              Preferred Technologies {editingTech ? `(${techDraft.length}/${MAX_TECHNOLOGIES})` : `(${profile.preferredTechnologies.length})`}
            </SectionTitle>

            {editingTech ? (
              <div>
                <div className="flex flex-wrap gap-2">
                  {techDraft.map((t) => (
                    <span key={t} className="chip bg-ink-100 text-ink-600">
                      {t}
                      <button onClick={() => removeTechFromDraft(t)} className="ml-1 rounded-full hover:bg-ink-200">
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                  {techDraft.length === 0 && <p className="text-sm text-ink-400">No technologies yet. Add one below or pick from suggestions.</p>}
                </div>

                <div className="mt-3 flex gap-2">
                  <input
                    value={newTech}
                    onChange={(e) => setNewTech(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addTechToDraft(newTech); setNewTech(''); } }}
                    placeholder="Enter a technology..."
                    className="input flex-1"
                  />
                  <button onClick={() => { addTechToDraft(newTech); setNewTech(''); }} className="btn-secondary">
                    <Plus className="h-4 w-4" /> Add
                  </button>
                </div>

                <div className="mt-4 space-y-3">
                  {SUGGESTED_TECH_GROUPS.map((group) => {
                    const available = group.items.filter((item) => !techDraft.some((t) => t.toLowerCase() === item.toLowerCase()));
                    if (available.length === 0) return null;
                    return (
                      <div key={group.label}>
                        <p className="mb-1.5 text-xs font-medium text-ink-500">{group.label}</p>
                        <div className="flex flex-wrap gap-2">
                          {available.map((item) => (
                            <button
                              key={item}
                              onClick={() => addTechToDraft(item)}
                              className="chip border border-ink-300/60 bg-ink-100 text-ink-600 hover:border-brand-500/30 hover:bg-brand-500/10 hover:text-brand-800"
                            >
                              <Code2 className="mr-1 h-3 w-3 text-brand-500" /> {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 flex gap-2">
                  <button onClick={saveTech} className="btn-primary text-sm">
                    <CheckCircle2 className="h-4 w-4" /> Save Changes
                  </button>
                  <button onClick={cancelEditTech} className="btn-secondary text-sm">Cancel</button>
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {profile.preferredTechnologies.length > 0 ? profile.preferredTechnologies.map((t) => <Badge key={t} variant="default">{t}</Badge>) : <p className="text-sm text-ink-400">No technologies added yet. Click Edit to add some.</p>}
              </div>
            )}
          </Card>

          {/* Career Goals */}
          {profile.careerGoals && (
            <Card className="p-6">
              <SectionTitle>Career Goals</SectionTitle>
              <p className="text-sm text-ink-700">{profile.careerGoals}</p>
            </Card>
          )}

          {/* Existing Certifications */}
          <Card className="p-6">
            <SectionTitle
              action={
                <button onClick={() => setCertForm(blankCert())} className="btn-ghost text-sm">
                  <Plus className="h-4 w-4" /> Add Certification
                </button>
              }
            >
              Existing Certifications
            </SectionTitle>

            {certForm && (
              <CertForm
                cert={certForm}
                onChange={setCertForm}
                onSave={handleSaveCert}
                onCancel={() => setCertForm(null)}
              />
            )}

            {profile.existingCertifications.length > 0 ? (
              <div className="space-y-3">
                {profile.existingCertifications.map((c) => (
                  <div key={c.id} className="rounded-xl border border-ink-300/60 p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2.5 min-w-0">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                          <Award className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-ink-900">{c.name}</p>
                          {c.provider && <p className="text-xs text-ink-500">Provider: {c.provider}</p>}
                          {c.category && <p className="text-xs text-ink-500">Category: {c.category}</p>}
                          {c.completionDate && <p className="text-xs text-ink-500">Completed: {c.completionDate}</p>}
                          {c.credentialUrl && (
                            <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 text-xs text-brand-700 hover:text-brand-800">
                              View Credential <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="flex shrink-0 gap-1">
                        <button onClick={() => setCertForm(c)} className="rounded-lg p-1.5 text-ink-400 hover:bg-ink-200/60 hover:text-ink-800">
                          <Pencil className="h-3.5 w-3.5" />
                        </button>
                        <button onClick={() => { removeCertification(c.id); showFeedback('Certification removed'); }} className="rounded-lg p-1.5 text-ink-400 hover:bg-rose-500/10 hover:text-rose-400">
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              !certForm && <p className="text-sm text-ink-400">No certifications added yet. Click "Add Certification" to get started.</p>
            )}
          </Card>

          {/* Completed Projects */}
          <Card className="p-6">
            <SectionTitle
              action={
                <button onClick={() => setProjectForm(blankProject())} className="btn-ghost text-sm">
                  <Plus className="h-4 w-4" /> Add Project
                </button>
              }
            >
              Completed Projects
            </SectionTitle>

            {projectForm && (
              <ProjectForm
                project={projectForm}
                onChange={setProjectForm}
                onSave={handleSaveProject}
                onCancel={() => setProjectForm(null)}
              />
            )}

            {profile.completedProjects.length > 0 ? (
              <div className="space-y-3">
                {profile.completedProjects.map((p) => (
                  <div key={p.id} className="rounded-xl border border-ink-300/60 p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2.5 min-w-0">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-700">
                          <FolderGit2 className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-ink-900">{p.name}</p>
                          {p.description && <p className="mt-0.5 text-sm text-ink-600">{p.description}</p>}
                          {p.technologies.length > 0 && (
                            <div className="mt-1.5 flex flex-wrap gap-1">
                              {p.technologies.map((t) => <span key={t} className="chip bg-ink-100 text-ink-600 text-xs">{t}</span>)}
                            </div>
                          )}
                          <div className="mt-1.5 flex flex-wrap gap-3 text-xs">
                            {p.category && <span className="text-ink-500">Category: {p.category}</span>}
                            {p.githubUrl && (
                              <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brand-700 hover:text-brand-800">
                                GitHub <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                            {p.demoUrl && (
                              <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brand-700 hover:text-brand-800">
                                Live Demo <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex shrink-0 gap-1">
                        <button onClick={() => setProjectForm(p)} className="rounded-lg p-1.5 text-ink-400 hover:bg-ink-200/60 hover:text-ink-800">
                          <Pencil className="h-3.5 w-3.5" />
                        </button>
                        <button onClick={() => { removeProject(p.id); showFeedback('Project removed'); }} className="rounded-lg p-1.5 text-ink-400 hover:bg-rose-500/10 hover:text-rose-400">
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              !projectForm && <p className="text-sm text-ink-400">No projects added yet. Click "Add Project" to showcase your work.</p>
            )}
          </Card>

          {/* Interested Roles */}
          <Card className="p-6">
            <SectionTitle>Interested Roles</SectionTitle>
            <div className="flex flex-wrap gap-2">
              {profile.interestedRoles.map((r) => (
                <span key={r} className="chip bg-brand-500/15 text-brand-700">
                  {r}
                  <button onClick={() => { removeInterestedRole(r); showFeedback('Role removed'); }} className="ml-1 rounded-full hover:bg-brand-200">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>

            <div className="relative mt-3" ref={roleSearchRef}>
              <button onClick={() => setRoleSearch(!roleSearch)} className="btn-ghost text-sm">
                <Plus className="h-4 w-4" /> Add Role
              </button>
              {roleSearch && (
                <div className="absolute z-20 mt-2 w-full max-w-sm rounded-xl border border-ink-300/60 bg-ink-100 p-3 shadow-lg">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                    <input
                      autoFocus
                      value={roleQuery}
                      onChange={(e) => setRoleQuery(e.target.value)}
                      placeholder="Search roles..."
                      className="input pl-10"
                    />
                  </div>
                  <div className="mt-2 max-h-48 overflow-y-auto scrollbar-thin">
                    {filteredRoles.length > 0 ? filteredRoles.map((r) => (
                      <button
                        key={r}
                        onClick={() => handleAddRole(r)}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-ink-700 hover:bg-brand-500/10"
                      >
                        <Briefcase className="h-3.5 w-3.5 text-ink-400" /> {r}
                      </button>
                    )) : (
                      <p className="py-3 text-center text-sm text-ink-400">No roles found.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}

// ── Sub-components ──

function InfoItem({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-ink-300/60 p-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ink-100 text-ink-500">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-ink-500">{label}</p>
        <p className="truncate text-sm font-semibold text-ink-900">{value}</p>
      </div>
    </div>
  );
}

function CertForm({
  cert, onChange, onSave, onCancel,
}: {
  cert: ProfileCertification;
  onChange: (c: ProfileCertification) => void;
  onSave: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="mb-4 rounded-xl border border-brand-500/20 bg-brand-500/30 p-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="label">Certification Name *</label>
          <input
            autoFocus
            value={cert.name}
            onChange={(e) => onChange({ ...cert, name: e.target.value })}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); onSave(); } }}
            placeholder="e.g. IBM AI Engineering"
            className="input"
          />
        </div>
        <div>
          <label className="label">Provider / Platform</label>
          <input
            value={cert.provider}
            onChange={(e) => onChange({ ...cert, provider: e.target.value })}
            placeholder="e.g. IBM, Coursera, Google"
            className="input"
          />
        </div>
        <div>
          <label className="label">Related Skill / Category</label>
          <input
            value={cert.category}
            onChange={(e) => onChange({ ...cert, category: e.target.value })}
            placeholder="e.g. Artificial Intelligence"
            className="input"
          />
        </div>
        <div>
          <label className="label">Completion Date</label>
          <input
            type="month"
            value={cert.completionDate || ''}
            onChange={(e) => onChange({ ...cert, completionDate: e.target.value })}
            className="input"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="label">Credential URL / ID</label>
          <input
            value={cert.credentialUrl || ''}
            onChange={(e) => onChange({ ...cert, credentialUrl: e.target.value })}
            placeholder="e.g. https://coursera.org/verify/ABC123"
            className="input"
          />
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={onSave} disabled={!cert.name.trim()} className="btn-primary text-sm">
          <CheckCircle2 className="h-4 w-4" /> Save
        </button>
        <button onClick={onCancel} className="btn-secondary text-sm">Cancel</button>
      </div>
    </div>
  );
}

function ProjectForm({
  project, onChange, onSave, onCancel,
}: {
  project: ProfileProject;
  onChange: (p: ProfileProject) => void;
  onSave: () => void;
  onCancel: () => void;
}) {
  const [techInput, setTechInput] = useState(project.technologies.join(', '));

  return (
    <div className="mb-4 rounded-xl border border-brand-500/20 bg-brand-500/30 p-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="label">Project Name *</label>
          <input
            autoFocus
            value={project.name}
            onChange={(e) => onChange({ ...project, name: e.target.value })}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); onSave(); } }}
            placeholder="e.g. Skillora AI"
            className="input"
          />
        </div>
        <div>
          <label className="label">Category</label>
          <input
            value={project.category}
            onChange={(e) => onChange({ ...project, category: e.target.value })}
            placeholder="e.g. Web App, ML Model, Mobile"
            className="input"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="label">Short Description</label>
          <textarea
            value={project.description}
            onChange={(e) => onChange({ ...project, description: e.target.value })}
            placeholder="Brief description of what the project does..."
            rows={2}
            className="input resize-none"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="label">Technologies / Skills (comma-separated)</label>
          <input
            value={techInput}
            onChange={(e) => { setTechInput(e.target.value); onChange({ ...project, technologies: e.target.value.split(',').map((t) => t.trim()).filter(Boolean) }); }}
            placeholder="e.g. React, TypeScript, Python, FastAPI"
            className="input"
          />
        </div>
        <div>
          <label className="label">GitHub URL</label>
          <input
            value={project.githubUrl || ''}
            onChange={(e) => onChange({ ...project, githubUrl: e.target.value })}
            placeholder="https://github.com/username/repo"
            className="input"
          />
        </div>
        <div>
          <label className="label">Live Demo URL</label>
          <input
            value={project.demoUrl || ''}
            onChange={(e) => onChange({ ...project, demoUrl: e.target.value })}
            placeholder="https://myproject.com"
            className="input"
          />
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={onSave} disabled={!project.name.trim()} className="btn-primary text-sm">
          <CheckCircle2 className="h-4 w-4" /> Save
        </button>
        <button onClick={onCancel} className="btn-secondary text-sm">Cancel</button>
      </div>
    </div>
  );
}
