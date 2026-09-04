import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { type ReactNode } from 'react';
import { StudentProvider, useStudent } from '@/context/StudentContext';
import LandingPage from '@/pages/LandingPage';
import LoginPage from '@/pages/LoginPage';
import SignupPage from '@/pages/SignupPage';
import OnboardingPage from '@/pages/OnboardingPage';
import DashboardPage from '@/pages/DashboardPage';
import RecommendationsPage from '@/pages/RecommendationsPage';
import RoleDetailsPage from '@/pages/RoleDetailsPage';
import SkillGapPage from '@/pages/SkillGapPage';
import RoadmapPage from '@/pages/RoadmapPage';
import ResourcesPage from '@/pages/ResourcesPage';
import CertificationsPage from '@/pages/CertificationsPage';
import ProgressPage from '@/pages/ProgressPage';
import MentorPage from '@/pages/MentorPage';
import ProfilePage from '@/pages/ProfilePage';
import SettingsPage from '@/pages/SettingsPage';

function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink-200/50 px-6 text-center">
      <div>
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-brand-500/20 border-t-brand-600" />
        <p className="mt-4 font-display text-lg font-semibold text-ink-900">Loading your Skillora profile...</p>
        <p className="mt-1 text-sm text-ink-500">Restoring your saved learning journey.</p>
      </div>
    </div>
  );
}

function RequireAuth({ children }: { children: ReactNode }) {
  const { isAuthenticated, loading } = useStudent();
  const location = useLocation();
  if (loading) return <LoadingScreen />;
  if (!isAuthenticated) return <Navigate to="/login" state={{ from: location }} replace />;
  return <>{children}</>;
}

function RequireOnboarding({ children }: { children: ReactNode }) {
  const { isOnboarded, loading } = useStudent();
  if (loading) return <LoadingScreen />;
  if (!isOnboarded) return <Navigate to="/onboarding" replace />;
  return <>{children}</>;
}

function AppRoutes() {
  const { loading } = useStudent();
  if (loading) return <LoadingScreen />;

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/onboarding" element={<RequireAuth><OnboardingPage /></RequireAuth>} />
      <Route path="/app/dashboard" element={<RequireAuth><RequireOnboarding><DashboardPage /></RequireOnboarding></RequireAuth>} />
      <Route path="/app/recommendations" element={<RequireAuth><RequireOnboarding><RecommendationsPage /></RequireOnboarding></RequireAuth>} />
      <Route path="/app/role/:roleId" element={<RequireAuth><RequireOnboarding><RoleDetailsPage /></RequireOnboarding></RequireAuth>} />
      <Route path="/app/skill-gap" element={<RequireAuth><RequireOnboarding><SkillGapPage /></RequireOnboarding></RequireAuth>} />
      <Route path="/app/roadmap" element={<RequireAuth><RequireOnboarding><RoadmapPage /></RequireOnboarding></RequireAuth>} />
      <Route path="/app/resources" element={<RequireAuth><RequireOnboarding><ResourcesPage /></RequireOnboarding></RequireAuth>} />
      <Route path="/app/certifications" element={<RequireAuth><RequireOnboarding><CertificationsPage /></RequireOnboarding></RequireAuth>} />
      <Route path="/app/progress" element={<RequireAuth><RequireOnboarding><ProgressPage /></RequireOnboarding></RequireAuth>} />
      <Route path="/app/mentor" element={<RequireAuth><RequireOnboarding><MentorPage /></RequireOnboarding></RequireAuth>} />
      <Route path="/app/profile" element={<RequireAuth><RequireOnboarding><ProfilePage /></RequireOnboarding></RequireAuth>} />
      <Route path="/app/settings" element={<RequireAuth><RequireOnboarding><SettingsPage /></RequireOnboarding></RequireAuth>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;
