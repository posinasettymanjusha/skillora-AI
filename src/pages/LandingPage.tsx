import { Link } from 'react-router-dom';
import {
  Sparkles, ArrowRight, BrainCircuit, Target, Map, MessageSquare,
  TrendingUp, Award, Compass, CheckCircle2,
} from 'lucide-react';

const features = [
  { icon: Compass, title: 'Personalized Career Recommendations', desc: 'AI matches you to the best career paths based on your skills, interests, and goals.' },
  { icon: Target, title: 'Skill Gap Analysis', desc: 'See exactly where you stand vs. where you need to be, with prioritized skill gaps.' },
  { icon: Map, title: 'Adaptive Learning Roadmaps', desc: 'Step-by-step roadmaps that adapt as you progress, unlocking the right next step.' },
  { icon: TrendingUp, title: 'Progress Tracking', desc: 'Track your streak, milestones, and weekly activity with beautiful visualizations.' },
  { icon: Award, title: 'Curated Resources & Certifications', desc: 'Hand-picked free courses and certifications matched to your current level.' },
  { icon: MessageSquare, title: 'AI Career Mentor', desc: 'Chat with an AI mentor that knows your profile and gives contextual guidance.' },
];

const stats = [
  { value: '10+', label: 'Career Paths' },
  { value: '60+', label: 'Resources' },
  { value: '20+', label: 'Certifications' },
  { value: '100%', label: 'Personalized' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface text-ink-900">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-ink-300/50 bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 lg:px-8">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 text-ink-950 shadow-glow">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-display text-lg font-bold text-ink-950">Skillora AI</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login" className="btn-ghost text-sm">Sign In</Link>
            <Link to="/signup" className="btn-primary text-sm">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 via-transparent to-transparent" />
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-600/10 blur-3xl" />
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-ai-600/8 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-700">
              <BrainCircuit className="h-4 w-4" />
              Your Personal AI Career Copilot
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-ink-950 lg:text-6xl">
              Go from student to{' '}
              <span className="text-gradient-brand">job-ready</span> with AI-guided career paths
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-600">
              Skillora AI analyzes your skills, interests, and goals to build a personalized learning
              roadmap — then guides you every step of the way with an AI mentor that actually knows your story.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/signup" className="btn-primary px-7 py-3 text-base">
                Start Your Journey
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/login" className="btn-secondary px-7 py-3 text-base">
                Sign In
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-3xl font-bold text-gradient-brand">{s.value}</p>
                  <p className="mt-1 text-sm text-ink-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-ink-950 lg:text-4xl">
            Everything you need to become job-ready
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-ink-600">
            One connected platform that adapts to your progress and keeps you on track.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="card card-hover p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-700">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink-900">{f.title}</h3>
              <p className="mt-2 text-sm text-ink-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-ink-100 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-ink-950 lg:text-4xl">How it works</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: '01', title: 'Tell us about you', desc: 'Share your skills, interests, and career goals through a guided onboarding.' },
              { step: '02', title: 'Get your roadmap', desc: 'AI recommends career paths, analyzes skill gaps, and builds an adaptive roadmap.' },
              { step: '03', title: 'Learn & track', desc: 'Follow your roadmap, chat with your AI mentor, and watch your progress grow.' },
            ].map((s) => (
              <div key={s.step} className="relative">
                <div className="mb-3 font-display text-4xl font-bold text-brand-500/30">{s.step}</div>
                <h3 className="font-display text-xl font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-2 text-ink-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-brand-500/20 bg-gradient-to-br from-ink-200 to-ink-100 px-8 py-12 text-center lg:px-16 lg:py-16">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-600/15 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-accent-600/10 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-ink-950 lg:text-4xl">
              Ready to start your career journey?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-500">
              Join Skillora AI today and get a personalized roadmap to your dream career.
            </p>
            <Link to="/signup" className="btn-primary mt-8 px-8 py-3 text-base">
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-ink-500">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent-700" /> Free to start</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent-700" /> No credit card</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink-300/50 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 lg:flex-row lg:px-8">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-accent-600 text-ink-950">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-display font-bold text-ink-950">Skillora AI</span>
          </div>
          <p className="text-sm text-ink-500">Your Personal AI Career Copilot</p>
        </div>
      </footer>
    </div>
  );
}
