import type { ReactNode } from 'react';

export function ProgressBar({
  value,
  className = '',
  showLabel = false,
  size = 'md',
}: {
  value: number;
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}) {
  const heights = { sm: 'h-1.5', md: 'h-2.5', lg: 'h-3.5' };
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`flex-1 rounded-full bg-ink-300 ${heights[size]}`}>
        <div
          className={`rounded-full bg-gradient-to-r from-brand-600 to-accent-600 transition-all duration-700 ease-out ${heights[size]}`}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-sm font-semibold text-ink-700 tabular-nums">{value}%</span>
      )}
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink-900 lg:text-3xl">{title}</h1>
        {subtitle && <p className="mt-1 text-ink-500">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

export function Card({
  children,
  className = '',
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return <div className={`card ${hover ? 'card-hover' : ''} ${className}`}>{children}</div>;
}

export function StatCard({
  icon: Icon,
  label,
  value,
  sublabel,
  color = 'brand',
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string | number;
  sublabel?: string;
  color?: 'brand' | 'accent' | 'amber' | 'rose';
}) {
  const colors = {
    brand: 'bg-brand-500/15 text-brand-700',
    accent: 'bg-accent-500/15 text-accent-700',
    amber: 'bg-amber-500/15 text-amber-400',
    rose: 'bg-rose-500/15 text-rose-400',
  };
  return (
    <Card className="p-5">
      <div className="flex items-center gap-3">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${colors[color]}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-sm text-ink-500">{label}</p>
          <p className="font-display text-xl font-bold text-ink-900">{value}</p>
        </div>
      </div>
      {sublabel && <p className="mt-3 text-xs text-ink-500/80">{sublabel}</p>}
    </Card>
  );
}

export function Badge({
  children,
  variant = 'default',
}: {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
}) {
  const variants = {
    default: 'bg-ink-300 text-ink-600',
    success: 'bg-accent-500/15 text-accent-700',
    warning: 'bg-amber-500/15 text-amber-400',
    danger: 'bg-rose-500/15 text-rose-400',
    info: 'bg-brand-500/15 text-brand-700',
  };
  return <span className={`chip ${variants[variant]}`}>{children}</span>;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-ink-200">
        <Icon className="h-8 w-8 text-ink-500" />
      </div>
      <h3 className="font-display text-lg font-semibold text-ink-900">{title}</h3>
      <p className="mt-1.5 max-w-sm text-sm text-ink-500">{description}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export function SectionTitle({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="font-display text-lg font-bold text-ink-900">{children}</h2>
      {action}
    </div>
  );
}
