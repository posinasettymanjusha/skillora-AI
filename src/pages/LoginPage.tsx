import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Mail,
  Lock,
  ArrowRight,
  Loader2,
  Eye,
  EyeOff,
} from 'lucide-react';
import { useStudent } from '@/context/StudentContext';

function mapAuthError(error: unknown): string {
  if (error && typeof error === 'object' && 'message' in error) {
    const msg = String((error as { message: string }).message).toLowerCase();

    if (
      msg.includes('email not confirmed') ||
      msg.includes('email_not_confirmed')
    ) {
      return 'Please confirm your email address before signing in. Check your inbox for the verification email.';
    }

    if (msg.includes('invalid login credentials')) {
      return 'Incorrect email or password. Please try again.';
    }

    if (
      msg.includes('user not found') ||
      msg.includes('not registered') ||
      msg.includes('no user found')
    ) {
      return 'Account not found. Please check your email address or sign up first.';
    }

    if (msg.includes('email') && msg.includes('invalid')) {
      return 'Please enter a valid email address.';
    }

    if (
      msg.includes('network') ||
      msg.includes('fetch') ||
      msg.includes('timeout') ||
      msg.includes('connection')
    ) {
      return 'Unable to connect right now. Please check your internet and try again.';
    }
  }

  return 'Unable to sign in right now. Please try again later.';
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useStudent();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() && !password.trim()) {
      setError('Please enter your email address and password.');
      return;
    }

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!password.trim()) {
      setError('Please enter your password.');
      return;
    }

    setLoading(true);

    try {
      const onboarded = await login(email.trim().toLowerCase(), password);

      navigate(onboarded ? '/app/dashboard' : '/onboarding');
    } catch (err) {
      setError(mapAuthError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-surface px-4">
      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-600/8 blur-3xl" />
      <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-ai-600/6 blur-3xl" />

      <div className="relative w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 text-ink-950 shadow-glow">
            <Sparkles className="h-5 w-5" />
          </div>

          <span className="font-display text-xl font-bold text-ink-950">
            Skillora AI
          </span>
        </Link>

        <div className="card p-8">
          <h1 className="font-display text-2xl font-bold text-ink-950">
            Welcome back
          </h1>

          <p className="mt-1.5 text-ink-500">
            Sign in to continue your career journey.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="label">Email</label>

              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-500" />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="you@example.com"
                  className="input pl-11"
                  disabled={loading}
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label className="label">Password</label>

              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-500" />

                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="••••••••"
                  className="input pl-11 pr-11"
                  disabled={loading}
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-500 hover:text-ink-700"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="h-4.5 w-4.5" />
                  ) : (
                    <Eye className="h-4.5 w-4.5" />
                  )}
                </button>
              </div>
            </div>

            {error && <p className="text-sm text-rose-400">{error}</p>}

            <button
              type="submit"
              className="btn-primary w-full py-3"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-ink-500">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="font-semibold text-brand-700 hover:text-brand-800"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
