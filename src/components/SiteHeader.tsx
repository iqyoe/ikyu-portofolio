import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function SiteHeader() {
  return (
    <header className="border-b border-gray-200/80 bg-white/80 backdrop-blur dark:border-gray-800/80 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-wide text-gray-900 dark:text-white">
          Ikyu Portfolio
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
