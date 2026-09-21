import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';

const portfolios = [
  {
    href: '/iqbal-lukman',
    eyebrow: 'Documentation portfolio',
    title: 'Iqbal Lukman',
    description: 'Data engineering, analytics, and detailed project case studies.',
    action: 'Explore portfolio',
    image: '/image/profile-racer-male.png',
    imageAlt: 'Profile portrait for Iqbal Lukman',
    className: 'border-blue-200 bg-blue-50/80 hover:border-blue-400 dark:border-blue-900/70 dark:bg-blue-950/30',
  },
  {
    href: '/ikyu-racer',
    eyebrow: 'Static portfolio',
    title: 'Ikyu Racer',
    description: 'A focused one-page racing identity with a bold visual direction.',
    action: 'Visit Ikyu Racer',
    image: '/image/profile-racer-male.png',
    imageAlt: 'Male racer wearing a racing helmet',
    className: 'border-orange-200 bg-orange-50/80 hover:border-orange-400 dark:border-orange-900/70 dark:bg-orange-950/30',
  },
  {
    href: '/nadya-racer',
    eyebrow: 'Static portfolio',
    title: 'Nadya Racer',
    description: 'A separate racing identity with its own story, style, and presence.',
    action: 'Visit Nadya Racer',
    image: '/image/profile-racer-femal.png',
    imageAlt: 'Female racer wearing a racing helmet',
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

        <section className="mt-32 grid gap-20 md:grid-cols-3 md:gap-6" aria-label="Available portfolios">
          {portfolios.map((portfolio) => (
            <Link
              key={portfolio.href}
              href={portfolio.href}
              className={`group relative mt-14 flex min-h-[22rem] flex-col items-center rounded-3xl border px-7 pb-8 pt-24 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:text-white ${portfolio.className}`}
            >
              <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
                <div className="absolute inset-0 rounded-full bg-white shadow-lg shadow-slate-900/10 ring-1 ring-slate-200 dark:bg-slate-100 dark:ring-slate-300" />
                <Image
                  src={portfolio.image}
                  alt={portfolio.imageAlt}
                  width={220}
                  height={277}
                  sizes="160px"
                  className="absolute bottom-0 left-1/2 z-10 h-auto w-full max-w-none -translate-x-1/2"
                />
              </div>
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
