'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const activeTheme = mounted ? resolvedTheme ?? theme ?? 'dark' : 'dark';
  const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      {activeTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
