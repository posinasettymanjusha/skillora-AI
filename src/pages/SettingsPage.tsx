import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Clock, Target, Trash2, ArrowRight, Check } from 'lucide-react';
import AppLayout from '@/layouts/AppLayout';
import { useStudent } from '@/context/StudentContext';
import { Card, PageHeader } from '@/components/ui';
import type { SkillLevel } from '@/types';

const SKILL_LEVELS: SkillLevel[] = ['Beginner', 'Intermediate', 'Advanced'];

export default function SettingsPage() {
  const { profile, updateProfile, updateSkill, addSkill, removeSkill, resetProfile } = useStudent();
  const navigate = useNavigate();
  const [name, setName] = useState(profile?.name || '');
  const [hours, setHours] = useState(profile?.hoursPerWeek || 10);
  const [newSkill, setNewSkill] = useState('');
  const [saved, setSaved] = useState(false);
  if (!profile) return null;

  const handleSave = () => {
    updateProfile({ name, hoursPerWeek: hours });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      addSkill({ name: newSkill.trim(), level: 'Beginner' });
      setNewSkill('');
    }
  };

  const handleReset = () => {
    if (confirm('This will delete your profile and all progress. Are you sure?')) {
      resetProfile();
      navigate('/');
    }
  };

  return (
    <AppLayout>
      <PageHeader title="Settings" subtitle="Manage your profile and learning preferences." />

      <div className="mx-auto max-w-2xl space-y-6">
        {/* Basic Settings */}
        <Card className="p-6">
          <h2 className="font-display text-lg font-bold text-ink-900">Account Settings</h2>
          <div className="mt-4 space-y-4">
            <div>
              <label className="label">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-400" />
                <input value={name} onChange={(e) => setName(e.target.value)} className="input pl-11" />
              </div>
            </div>
            <div>
              <label className="label">Email</label>
              <input value={profile.email} disabled className="input opacity-60" />
            </div>
            <div>
              <label className="label">Learning Availability: <span className="text-brand-700">{hours}h/week</span></label>
              <input type="range" min="2" max="40" value={hours} onChange={(e) => setHours(Number(e.target.value))} className="mt-2 w-full accent-brand-600" />
            </div>
          </div>
          <button onClick={handleSave} className="btn-primary mt-4">
            {saved ? <><Check className="h-4 w-4" /> Saved!</> : <>Save Changes</>}
          </button>
        </Card>

        {/* Skills Management */}
        <Card className="p-6">
          <h2 className="font-display text-lg font-bold text-ink-900">Manage Skills</h2>
          <p className="mt-1 text-sm text-ink-500">Add, remove, or update your skill levels.</p>
          <div className="mt-4 flex gap-2">
            <input
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddSkill(); } }}
              placeholder="Add a new skill..."
              className="input flex-1"
            />
            <button onClick={handleAddSkill} className="btn-secondary">Add</button>
          </div>
          <div className="mt-4 space-y-2">
            {profile.skills.map((skill) => (
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
                  <button onClick={() => removeSkill(skill.name)} className="text-ink-400 hover:text-rose-400">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="border-rose-500/20 p-6">
          <h2 className="font-display text-lg font-bold text-rose-400">Danger Zone</h2>
          <p className="mt-1 text-sm text-ink-500">Delete your profile and start over. This cannot be undone.</p>
          <button onClick={handleReset} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-rose-500/10 px-5 py-2.5 text-sm font-semibold text-rose-400 transition hover:bg-rose-500/15">
            <Trash2 className="h-4 w-4" /> Delete Profile & Reset
          </button>
        </Card>
      </div>
    </AppLayout>
  );
}
