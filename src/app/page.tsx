import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';

const portfolios = [
  {
    href: '/iqbal-lukman',
    eyebrow: 'Documentation portfolio',
    title: 'Iqbal Lukman',
    description: 'Data engineering, analytics, and detailed project case studies.',
    action: 'Explore portfolio',
    className: 'border-blue-200 bg-blue-50/80 hover:border-blue-400 dark:border-blue-900/70 dark:bg-blue-950/30',
  },
  {
    href: '/ikyu-racer',
    eyebrow: 'Static portfolio',
    title: 'Ikyu Racer',
    description: 'A focused one-page racing identity with a bold visual direction.',
    action: 'Visit Ikyu Racer',
    className: 'border-orange-200 bg-orange-50/80 hover:border-orange-400 dark:border-orange-900/70 dark:bg-orange-950/30',
  },
  {
    href: '/nadya-racer',
    eyebrow: 'Static portfolio',
    title: 'Nadya Racer',
    description: 'A separate racing identity with its own story, style, and presence.',
    action: 'Visit Nadya Racer',
    className: 'border-fuchsia-200 bg-fuchsia-50/80 hover:border-fuchsia-400 dark:border-fuchsia-900/70 dark:bg-fuchsia-950/30',
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader label="Portfolio Hub" homeHref="/" />
      <main className="mx-auto max-w-6xl px-6 py-20">
        <section className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
            A collection of identities
          </p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Choose a portfolio.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Explore project documentation, technical work, and two distinct racing-focused portfolios.
          </p>
        </section>

        <section className="mt-14 grid gap-5 md:grid-cols-3" aria-label="Available portfolios">
          {portfolios.map((portfolio) => (
            <Link
              key={portfolio.href}
              href={portfolio.href}
              className={`group rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:text-white ${portfolio.className}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                {portfolio.eyebrow}
              </p>
              <h2 className="mt-8 text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                {portfolio.title}
              </h2>
              <p className="mt-4 min-h-20 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {portfolio.description}
              </p>
              <span className="mt-8 inline-flex text-sm font-semibold text-blue-600 dark:text-blue-400">
                {portfolio.action} <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
