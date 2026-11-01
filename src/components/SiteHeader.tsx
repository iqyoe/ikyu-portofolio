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
}: SiteHeaderProps) {
  return (
    <header className="border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href={homeHref} className="font-display text-sm font-semibold tracking-wide text-[var(--foreground)]">
          {label}
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-5 text-sm text-[var(--muted)] sm:flex" aria-label="Primary navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-[var(--accent-pink)]">
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
