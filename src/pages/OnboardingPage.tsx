import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Check, ArrowRight, ArrowLeft, Search, Plus, X } from 'lucide-react';
import { useStudent } from '@/context/StudentContext';
import { ALL_SKILLS, BRANCHES, YEARS, INTERESTS, PREFERRED_TECHNOLOGIES, CAREER_ROLES } from '@/data/careers';
import type { StudentSkill, SkillLevel, ProfileCertification, ProfileProject } from '@/types';
import { getWeeklyActivity } from '@/utils/personalization';

const STEPS = ['Basic Info', 'Skills', 'Interests', 'Career', 'Availability', 'Review'];

const SKILL_LEVELS: SkillLevel[] = ['Beginner', 'Intermediate', 'Advanced'];

export default function OnboardingPage() {
  const navigate = useNavigate();
  const { profile, completeOnboarding } = useStudent();

  const [step, setStep] = useState(0);
  const [name, setName] = useState(profile?.name || '');
  const [college, setCollege] = useState(profile?.college || '');
  const [branch, setBranch] = useState(profile?.branch || '');
  const [year, setYear] = useState(profile?.year || '');
  const [skills, setSkills] = useState<StudentSkill[]>([]);
  const [skillSearch, setSkillSearch] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [preferredTechnologies, setPreferredTechnologies] = useState<string[]>([]);
  const [careerGoals, setCareerGoals] = useState('');
  const [interestedRoles, setInterestedRoles] = useState<string[]>([]);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [existingCertifications, setExistingCertifications] = useState<ProfileCertification[]>([]);
  const [completedProjects, setCompletedProjects] = useState<ProfileProject[]>([]);
  const [certInput, setCertInput] = useState('');
  const [projectInput, setProjectInput] = useState('');
  const [analyzing, setAnalyzing] = useState(false);

  const canProceed = () => {
    if (step === 0) return name && college && branch && year;
    if (step === 1) return skills.length > 0;
    if (step === 2) return interests.length > 0;
    if (step === 3) return interestedRoles.length > 0;
    return true;
  };

  const filteredSkills = ALL_SKILLS.filter(
    (s) =>
      s.toLowerCase().includes(skillSearch.toLowerCase()) &&
      !skills.find((sk) => sk.name === s)
  ).slice(0, 8);

  const addSkill = (skillName: string) => {
    setSkills([...skills, { name: skillName, level: 'Beginner' }]);
    setSkillSearch('');
  };

  const updateSkillLevel = (skillName: string, level: SkillLevel) => {
    setSkills(skills.map((s) => (s.name === skillName ? { ...s, level } : s)));
  };

  const removeSkill = (skillName: string) => {
    setSkills(skills.filter((s) => s.name !== skillName));
  };

  const toggle = (arr: string[], setArr: (v: string[]) => void, value: string) => {
    if (arr.includes(value)) setArr(arr.filter((v) => v !== value));
    else setArr([...arr, value]);
  };

  const handleFinish = () => {
    setAnalyzing(true);
    setTimeout(() => {
      completeOnboarding({
        ...(profile!),
        name,
        college,
        branch,
        year,
        skills,
        interests,
        preferredTechnologies,
        careerGoals,
        interestedRoles,
        hoursPerWeek,
        existingCertifications,
        completedProjects,
        weeklyActivity: getWeeklyActivity(),
        id: profile?.id || crypto.randomUUID(),
        email: profile?.email || '',
        targetRoleId: null,
        roadmapProgress: {},
        completedResources: [],
        earnedCertifications: [],
        activity: [],
        streak: 1,
        lastActiveDate: new Date().toISOString().split('T')[0],
        createdAt: new Date().toISOString(),
        onboarded: true,
      });
      navigate('/app/recommendations');
    }, 2800);
  };

  if (analyzing) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-ink-200/50">
        <div className="text-center">
          <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center">
            <div className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-200" />
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-600 text-ink-950">
              <Sparkles className="h-10 w-10 animate-pulse" />
            </div>
          </div>
          <h2 className="font-display text-2xl font-bold text-ink-900">Analyzing your profile...</h2>
          <p className="mt-2 text-ink-500">
            Matching your skills and interests to the best career paths
          </p>
          <div className="mt-6 flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-2 w-2 animate-bounce rounded-full bg-brand-500"
                style={{ animationDelay: `${i * 150}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink-200/50">
      {/* Header */}
      <div className="border-b border-ink-300/50 bg-ink-100">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-accent-600 text-ink-950">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-display font-bold text-ink-900">Skillora AI</span>
          </div>
          <span className="text-sm text-ink-500">Step {step + 1} of {STEPS.length}</span>
        </div>
      </div>

      {/* Progress */}
      <div className="mx-auto max-w-3xl px-4 pt-6">
        <div className="flex items-center gap-2">
          {STEPS.map((s, i) => (
            <div key={s} className="flex flex-1 items-center gap-2">
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                  i < step
                    ? 'bg-accent-600 text-ink-950'
                    : i === step
                    ? 'bg-gradient-to-br from-brand-600 to-accent-600 text-ink-950'
                    : 'bg-ink-200 text-ink-400'
                }`}
              >
                {i < step ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              {i < STEPS.length - 1 && (
                <div className={`h-0.5 flex-1 rounded-full ${i < step ? 'bg-accent-500' : 'bg-ink-200'}`} />
              )}
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between px-0">
          {STEPS.map((s, i) => (
            <span key={s} className={`flex-1 text-center text-xs ${i === step ? 'font-semibold text-brand-700' : 'text-ink-400'}`}>
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="card p-6 lg:p-8">
          {step === 0 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-2xl font-bold text-ink-900">Let's get to know you</h2>
              <p className="mt-1.5 text-ink-500">Tell us a bit about yourself to get started.</p>
              <div className="mt-6 space-y-4">
                <div>
                  <label className="label">Full Name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Arjun Sharma" className="input" />
                </div>
                <div>
                  <label className="label">College</label>
                  <input value={college} onChange={(e) => setCollege(e.target.value)} placeholder="Your college or university" className="input" />
                </div>
                <div>
                  <label className="label">Engineering Branch</label>
                  <select value={branch} onChange={(e) => setBranch(e.target.value)} className="input">
                    <option value="">Select your branch</option>
                    {BRANCHES.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label">Year of Study</label>
                  <div className="flex flex-wrap gap-2">
                    {YEARS.map((y) => (
                      <button
                        key={y}
                        onClick={() => setYear(y)}
                        className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
                          year === y
                            ? 'border-brand-500 bg-brand-500/10 text-brand-700'
                            : 'border-ink-300/60 bg-ink-100 text-ink-600 hover:border-ink-300'
                        }`}
                      >
                        {y}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-2xl font-bold text-ink-900">What skills do you have?</h2>
              <p className="mt-1.5 text-ink-500">Search and add your technical skills with your current level.</p>
              <div className="relative mt-6">
                <Search className="absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-400" />
                <input
                  value={skillSearch}
                  onChange={(e) => setSkillSearch(e.target.value)}
                  placeholder="Search skills (e.g. Python, React, SQL)..."
                  className="input pl-11"
                />
                {skillSearch && filteredSkills.length > 0 && (
                  <div className="absolute z-10 mt-1 w-full rounded-xl border border-ink-300/60 bg-ink-100 shadow-pop">
                    {filteredSkills.map((s) => (
                      <button
                        key={s}
                        onClick={() => addSkill(s)}
                        className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm hover:bg-ink-200/50"
                      >
                        <Plus className="h-4 w-4 text-brand-500" />
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-4 space-y-2">
                {skills.length === 0 && (
                  <p className="py-8 text-center text-sm text-ink-400">No skills added yet. Search above to add your first skill.</p>
                )}
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between rounded-xl border border-ink-300/60 bg-ink-100 p-3">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-ink-900">{skill.name}</span>
                      <button onClick={() => removeSkill(skill.name)} className="text-ink-400 hover:text-rose-400">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex gap-1.5">
                      {SKILL_LEVELS.map((level) => (
                        <button
                          key={level}
                          onClick={() => updateSkillLevel(skill.name, level)}
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                            skill.level === level
                              ? 'bg-gradient-to-br from-brand-600 to-accent-600 text-ink-950'
                              : 'bg-ink-100 text-ink-600 hover:bg-ink-200'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-2xl font-bold text-ink-900">What are you interested in?</h2>
              <p className="mt-1.5 text-ink-500">Select areas that excite you. This helps us recommend the right careers.</p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {INTERESTS.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => toggle(interests, setInterests, interest)}
                    className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
                      interests.includes(interest)
                        ? 'border-brand-500 bg-brand-500/10 text-brand-700'
                        : 'border-ink-300/60 bg-ink-100 text-ink-600 hover:border-ink-300'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-2xl font-bold text-ink-900">Career preferences</h2>
              <p className="mt-1.5 text-ink-500">Which roles interest you? What technologies do you prefer?</p>
              <div className="mt-6 space-y-5">
                <div>
                  <label className="label">Interested Roles</label>
                  <div className="flex flex-wrap gap-2">
                    {CAREER_ROLES.map((role) => (
                      <button
                        key={role.id}
                        onClick={() => toggle(interestedRoles, setInterestedRoles, role.title)}
                        className={`rounded-xl border px-3.5 py-2 text-sm font-medium transition ${
                          interestedRoles.includes(role.title)
                            ? 'border-brand-500 bg-brand-500/10 text-brand-700'
                            : 'border-ink-300/60 bg-ink-100 text-ink-600 hover:border-ink-300'
                        }`}
                      >
                        {role.title}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="label">Preferred Technologies</label>
                  <div className="flex flex-wrap gap-2">
                    {PREFERRED_TECHNOLOGIES.map((tech) => (
                      <button
                        key={tech}
                        onClick={() => toggle(preferredTechnologies, setPreferredTechnologies, tech)}
                        className={`rounded-xl border px-3.5 py-2 text-sm font-medium transition ${
                          preferredTechnologies.includes(tech)
                            ? 'border-brand-500 bg-brand-500/10 text-brand-700'
                            : 'border-ink-300/60 bg-ink-100 text-ink-600 hover:border-ink-300'
                        }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="label">Career Goals (optional)</label>
                  <textarea
                    value={careerGoals}
                    onChange={(e) => setCareerGoals(e.target.value)}
                    placeholder="e.g. I want to become an AI Engineer at a top tech company..."
                    className="input min-h-[80px] resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-2xl font-bold text-ink-900">Learning availability</h2>
              <p className="mt-1.5 text-ink-500">How much time can you dedicate to learning each week?</p>
              <div className="mt-6">
                <label className="label">Hours per week: <span className="text-brand-700">{hoursPerWeek}h</span></label>
                <input
                  type="range"
                  min="2"
                  max="40"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="mt-2 w-full accent-brand-600"
                />
                <div className="mt-1 flex justify-between text-xs text-ink-400">
                  <span>2h/week</span>
                  <span>20h/week</span>
                  <span>40h/week</span>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="label">Existing Certifications</label>
                  <div className="flex gap-2">
                    <input
                      value={certInput}
                      onChange={(e) => setCertInput(e.target.value)}
                      placeholder="e.g. AWS Cloud Practitioner"
                      className="input"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && certInput.trim()) {
                          e.preventDefault();
                          setExistingCertifications([...existingCertifications, { id: crypto.randomUUID(), name: certInput.trim(), provider: '', category: '' }]);
                          setCertInput('');
                        }
                      }}
                    />
                    <button
                      onClick={() => { if (certInput.trim()) { setExistingCertifications([...existingCertifications, { id: crypto.randomUUID(), name: certInput.trim(), provider: '', category: '' }]); setCertInput(''); } }}
                      className="btn-secondary"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {existingCertifications.map((c) => (
                      <span key={c.id} className="chip bg-ink-100 text-ink-600">
                        {c.name}
                        <button onClick={() => setExistingCertifications(existingCertifications.filter((x) => x.id !== c.id))}>
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="label">Completed Projects</label>
                  <div className="flex gap-2">
                    <input
                      value={projectInput}
                      onChange={(e) => setProjectInput(e.target.value)}
                      placeholder="e.g. Movie Recommender System"
                      className="input"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && projectInput.trim()) {
                          e.preventDefault();
                          setCompletedProjects([...completedProjects, { id: crypto.randomUUID(), name: projectInput.trim(), description: '', technologies: [], category: '' }]);
                          setProjectInput('');
                        }
                      }}
                    />
                    <button
                      onClick={() => { if (projectInput.trim()) { setCompletedProjects([...completedProjects, { id: crypto.randomUUID(), name: projectInput.trim(), description: '', technologies: [], category: '' }]); setProjectInput(''); } }}
                      className="btn-secondary"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {completedProjects.map((p) => (
                      <span key={p.id} className="chip bg-ink-100 text-ink-600">
                        {p.name}
                        <button onClick={() => setCompletedProjects(completedProjects.filter((x) => x.id !== p.id))}>
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="animate-fade-in">
              <h2 className="font-display text-2xl font-bold text-ink-900">Review your profile</h2>
              <p className="mt-1.5 text-ink-500">Make sure everything looks right before we analyze your profile.</p>
              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-ink-300/60 p-4">
                  <h3 className="text-sm font-semibold text-ink-500">Basic Info</h3>
                  <p className="mt-1 text-ink-900">{name} • {college} • {branch} • {year}</p>
                </div>
                <div className="rounded-xl border border-ink-300/60 p-4">
                  <h3 className="text-sm font-semibold text-ink-500">Skills ({skills.length})</h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {skills.map((s) => (
                      <span key={s.name} className="chip bg-brand-500/10 text-brand-700">{s.name} • {s.level}</span>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-ink-300/60 p-4">
                  <h3 className="text-sm font-semibold text-ink-500">Interests ({interests.length})</h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {interests.map((i) => (
                      <span key={i} className="chip bg-accent-500/10 text-accent-700">{i}</span>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-ink-300/60 p-4">
                  <h3 className="text-sm font-semibold text-ink-500">Career Preferences</h3>
                  <p className="mt-1 text-sm text-ink-900"><span className="font-medium">Roles:</span> {interestedRoles.join(', ') || 'None selected'}</p>
                  <p className="mt-1 text-sm text-ink-900"><span className="font-medium">Technologies:</span> {preferredTechnologies.join(', ') || 'None selected'}</p>
                  {careerGoals && <p className="mt-1 text-sm text-ink-900"><span className="font-medium">Goals:</span> {careerGoals}</p>}
                </div>
                <div className="rounded-xl border border-ink-300/60 p-4">
                  <h3 className="text-sm font-semibold text-ink-500">Availability</h3>
                  <p className="mt-1 text-ink-900">{hoursPerWeek} hours/week</p>
                  {existingCertifications.length > 0 && <p className="mt-1 text-sm text-ink-900"><span className="font-medium">Certs:</span> {existingCertifications.map((c) => c.name).join(', ')}</p>}
                  {completedProjects.length > 0 && <p className="mt-1 text-sm text-ink-900"><span className="font-medium">Projects:</span> {completedProjects.map((p) => p.name).join(', ')}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={() => setStep(step - 1)}
              disabled={step === 0}
              className="btn-secondary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            {step < STEPS.length - 1 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="btn-primary"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button onClick={handleFinish} className="btn-primary">
                Analyze My Profile
                <Sparkles className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
