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
    image: '/image/iqbal-lukman-profile.png',
    imageAlt: 'Portrait of Muhammad Iqbal Lukman wearing glasses and a dark blazer',
  },
  {
    href: '/ikyu-racer',
    eyebrow: 'Racing identity',
    title: 'IKYU',
    description: 'A focused karting portfolio built around precision, pace, and progression.',
    action: 'Visit IKYU',
    image: '/image/profile-racer-ikyu.png',
    imageAlt: 'Male racer wearing a racing helmet',
  },
  {
    href: '/nadya-racer',
    eyebrow: 'Racing identity',
    title: 'CHEZNADDZ',
    description: 'A separate racing story with its own style, voice, and trackside presence.',
    action: 'Visit CHEZNADDZ',
    image: '/image/profile-racer-cheznaddz.png',
    imageAlt: 'CHEZNADDZ racer portrait',
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader label="Sojitoy Team" homeHref="/" />
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-16">
        <section className="brand-hero relative flex flex-col justify-between gap-8 overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-7 shadow-sm sm:flex-row sm:items-end sm:p-10">
          <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[var(--accent-blue)]/10 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full border border-[var(--accent-blue)]/20" aria-hidden="true" />
          <Image src="/image/sojitoy-team-logo.png" alt="" width={560} height={560} priority className="brand-hero-mark pointer-events-none absolute -right-10 top-1/2 z-0 h-64 w-64 -translate-y-1/2 object-contain opacity-20 sm:-right-4 sm:h-96 sm:w-96" aria-hidden="true" />
          <div className="brand-hero-copy relative z-10 max-w-2xl rounded-[1.5rem] p-5 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--accent-blue)]">Brand identities / 2026</p>
            <h1 className="font-display mt-5 text-5xl font-semibold leading-[0.98] tracking-tight text-[var(--foreground)] sm:text-7xl">Sojitoy Team</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">Sojitoy Team brings together practical IT work and the discipline of racing — building reliable digital systems, exploring data and AI, and competing with focus, speed, and precision.</p>
          </div>
          <p className="relative z-10 max-w-xs text-sm leading-6 text-[var(--muted)] sm:text-right">Choose a path below. Each portfolio has its own visual language and point of view.</p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-12 md:auto-rows-[minmax(15rem,auto)]" aria-label="Available portfolios">
          <Link href={portfolios[0].href} className="brand-card group relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-7 shadow-sm transition-[border-color,box-shadow,transform] duration-300 ease-out active:scale-[0.99] hover:-translate-y-1 hover:border-[var(--accent-blue)] hover:shadow-xl hover:shadow-slate-900/10 md:col-span-6 md:row-span-2 sm:p-10">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--accent-blue)]/10 blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 right-[-1.5rem] h-72 w-64 rounded-t-full bg-[var(--accent-blue)]/10 ring-1 ring-[var(--accent-blue)]/20 sm:h-96 sm:w-80" aria-hidden="true" />
            <Image src={portfolios[0].image} alt={portfolios[0].imageAlt} width={896} height={1152} sizes="(min-width: 768px) 35vw, 70vw" className="absolute bottom-0 right-[-1rem] z-0 h-auto w-56 opacity-90 transition duration-500 group-hover:scale-[1.03] sm:right-4 sm:w-72" />
            <div className="relative z-10 max-w-md">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent-blue)]">01 / {portfolios[0].eyebrow}</p>
              <h2 className="font-display mt-5 text-4xl font-semibold leading-[0.98] tracking-tight text-[var(--foreground)] sm:text-6xl">{portfolios[0].title}</h2>
              <p className="mt-5 max-w-sm text-base leading-7 text-[var(--muted)]">{portfolios[0].description}</p>
              <span className="mt-8 inline-flex items-center text-sm font-semibold text-[var(--accent-blue)]">{portfolios[0].action}<span className="ml-2 transition-transform duration-200 ease-out group-hover:translate-x-1">↗</span></span>
            </div>
          </Link>

          <PortfolioCard portfolio={portfolios[1]} />
          <PortfolioCard portfolio={portfolios[2]} />

          <section className="flex flex-col justify-between gap-6 rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-7 md:col-span-12 sm:flex-row sm:items-end sm:p-8" aria-label="Portal utility">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-blue)]">Portal utility</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-[var(--foreground)] sm:text-3xl">Make the next connection easy.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">Create QR codes for URLs or short text and download them as PNG, JPEG, or PDF.</p>
            </div>
            <Link href="/qr-generator" className="inline-flex w-fit shrink-0 rounded-full bg-[var(--accent-blue)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--accent-blue)]/85">Open QR generator ↗</Link>
          </section>
        </section>
      </main>
    </>
  );
}

function PortfolioCard({ portfolio }: { portfolio: (typeof portfolios)[number] }) {
  const accent = 'text-[var(--accent-blue)]';

  return (
    <Link href={portfolio.href} className="brand-card group relative grid min-h-[18rem] grid-cols-[minmax(0,1fr)_9rem] items-stretch overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-8 transition-[border-color,box-shadow,transform] duration-300 ease-out active:scale-[0.99] hover:-translate-y-1 hover:border-[var(--accent-blue)] hover:shadow-xl hover:shadow-slate-900/10 md:col-span-6">
      <div className="relative z-10 flex min-w-0 flex-col items-start justify-between">
        <p className={`text-xs font-bold uppercase tracking-[0.25em] ${accent}`}>{portfolio.eyebrow}</p>
        <h2 className="font-display mt-4 text-3xl font-semibold leading-none tracking-tight text-[var(--foreground)]">{portfolio.title}</h2>
        <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{portfolio.description}</p>
        <span className={`mt-6 inline-flex text-sm font-semibold ${accent}`}>{portfolio.action}<span className="ml-2 transition-transform duration-200 ease-out group-hover:translate-x-1">↗</span></span>
      </div>
      <Image src={portfolio.image} alt={portfolio.imageAlt} width={373} height={468} sizes="(min-width: 768px) 20vw, 40vw" className="absolute bottom-0 right-[-0.5rem] h-auto w-40 opacity-90 transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
    </Link>
  );
}


