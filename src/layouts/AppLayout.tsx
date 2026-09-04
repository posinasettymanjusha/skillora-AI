import { useState, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Award,
  BookOpen,
  ChevronDown,
  Compass,
  LayoutDashboard,
  LogOut,
  Map,
  Menu,
  MessageSquare,
  Settings,
  Sparkles,
  Target,
  User,
  X,
} from 'lucide-react';
import { useStudent } from '@/context/StudentContext';
import { getCareerRole } from '@/data/careers';
import { getGreeting, getRoadmapProgress } from '@/utils/personalization';

const navItems = [
  { to: '/app/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/app/recommendations', label: 'Career', icon: Compass },
  { to: '/app/skill-gap', label: 'Skill Gap', icon: Target },
  { to: '/app/roadmap', label: 'Roadmap', icon: Map },
  { to: '/app/resources', label: 'Learning', icon: BookOpen },
  { to: '/app/certifications', label: 'Certifications', icon: Award },
  { to: '/app/mentor', label: 'AI Mentor', icon: MessageSquare },
];

export default function AppLayout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { profile, logout } = useStudent();
  const location = useLocation();
  const role = getCareerRole(profile?.targetRoleId || null);
  const progress = profile ? getRoadmapProgress(profile).overallProgress : 0;
  const initials = profile?.name?.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase() || 'S';

  const isActive = (to: string) => location.pathname === to || location.pathname.startsWith(`${to}/`);

  return (
    <div className="min-h-screen bg-surface text-ink-900">
      <header className="sticky top-0 z-40 border-b border-ink-300/50 bg-surface/80 shadow-[0_1px_16px_rgba(0,0,0,0.3)] backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center gap-5 px-4 sm:px-6 lg:px-8">
          <Link to="/app/dashboard" className="flex shrink-0 items-center gap-2.5" onClick={() => setProfileOpen(false)}>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 text-ink-950 shadow-glow">
              <Sparkles className="h-[18px] w-[18px]" />
            </span>
            <span className="hidden font-display text-[17px] font-extrabold tracking-tight text-ink-950 sm:block">SKILLORA</span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:flex" aria-label="Main navigation">
            {navItems.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`group relative flex items-center gap-2 rounded-xl px-3 py-2 text-[13px] font-semibold transition-colors ${isActive(to) ? 'text-brand-700' : 'text-ink-500 hover:bg-ink-200/60 hover:text-ink-800'}`}
              >
                <Icon className={`h-4 w-4 ${isActive(to) ? 'text-brand-700' : 'text-ink-500 group-hover:text-ink-700'}`} />
                {label}
                {isActive(to) && <span className="absolute inset-x-3 -bottom-[22px] h-0.5 rounded-full bg-gradient-to-r from-brand-600 to-accent-600" />}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <button className="hidden rounded-xl p-2.5 text-ink-500 transition hover:bg-ink-200/60 hover:text-ink-800 sm:block" aria-label="Open settings">
              <Settings className="h-[18px] w-[18px]" />
            </button>
            <div className="relative hidden sm:block">
              <button onClick={() => setProfileOpen((open) => !open)} className="flex items-center gap-2 rounded-xl p-1.5 pr-2 transition hover:bg-ink-200/60" aria-expanded={profileOpen}>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-600 text-xs font-bold text-ink-950">{initials}</span>
                <ChevronDown className={`h-4 w-4 text-ink-500 transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
              </button>
              {profileOpen && (
                <div className="absolute right-0 top-12 w-48 animate-scale-in rounded-2xl border border-ink-300/60 bg-ink-100 p-1.5 shadow-pop">
                  <div className="border-b border-ink-300/50 px-3 py-2.5">
                    <p className="truncate text-sm font-bold text-ink-900">{profile?.name || 'Student'}</p>
                    <p className="truncate text-xs text-ink-500">{role?.title || 'Set a career goal'}</p>
                  </div>
                  <Link to="/app/profile" onClick={() => setProfileOpen(false)} className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-600 hover:bg-ink-200/60"><User className="h-4 w-4" /> Profile</Link>
                  <Link to="/app/settings" onClick={() => setProfileOpen(false)} className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-600 hover:bg-ink-200/60"><Settings className="h-4 w-4" /> Settings</Link>
                  <button onClick={logout} className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-rose-400 hover:bg-rose-500/10"><LogOut className="h-4 w-4" /> Sign out</button>
                </div>
              )}
            </div>
            <button onClick={() => setMobileOpen((open) => !open)} className="rounded-xl p-2.5 text-ink-600 transition hover:bg-ink-200/60 xl:hidden" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}>
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="border-t border-ink-300/50 bg-ink-100 px-4 py-3 shadow-card xl:hidden">
            <nav className="grid gap-1 sm:grid-cols-2" aria-label="Mobile navigation">
              {navItems.map(({ to, label, icon: Icon }) => (
                <Link key={to} to={to} onClick={() => setMobileOpen(false)} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold ${isActive(to) ? 'bg-brand-500/15 text-brand-700' : 'text-ink-600 hover:bg-ink-200/60'}`}>
                  <Icon className="h-4 w-4" /> {label}
                </Link>
              ))}
              <Link to="/app/profile" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-ink-600 hover:bg-ink-200/60"><User className="h-4 w-4" /> Profile</Link>
              <button onClick={logout} className="flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold text-rose-400 hover:bg-rose-500/10"><LogOut className="h-4 w-4" /> Sign out</button>
            </nav>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-[1440px] px-4 py-7 sm:px-6 lg:px-8 lg:py-9">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-brand-700">{getGreeting()}, {profile?.name?.split(' ')[0] || 'there'}</p>
            {role && <p className="mt-1 text-sm text-ink-500">Building toward <span className="font-semibold text-ink-700">{role.title}</span> <span className="mx-1 text-ink-400">·</span> {progress}% journey progress</p>}
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-ink-300/60 bg-ink-100 px-3 py-1.5 text-xs font-semibold text-ink-500 sm:flex"><span className="h-2 w-2 rounded-full bg-accent-600 animate-glow-pulse" /> Journey synced</div>
        </div>
        {children}
      </main>
    </div>
  );
}
