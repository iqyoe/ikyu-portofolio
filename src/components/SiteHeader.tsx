import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

interface SiteHeaderProps {
  label: string;
  homeHref: string;
  links?: Array<{ href: string; label: string }>;
  tone?: 'default' | 'racer';
}

export default function SiteHeader({
  label,
  homeHref,
  links = [],
  tone = 'default',
}: SiteHeaderProps) {
  const isRacer = tone === 'racer';

  return (
    <header className={isRacer
      ? 'border-b border-slate-200/80 bg-slate-50/85 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/85'
      : 'border-b border-gray-200/80 bg-white/80 backdrop-blur dark:border-gray-800/80 dark:bg-gray-950/80'}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href={homeHref} className="text-sm font-semibold tracking-wide text-gray-900 dark:text-white">
          {label}
        </Link>
        <div className="flex items-center gap-5">
          <nav className="hidden items-center gap-5 text-sm text-gray-600 dark:text-gray-300 sm:flex" aria-label="Primary navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
