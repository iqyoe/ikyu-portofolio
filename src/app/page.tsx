import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';
import HomeHero from '@/components/HomeHero';

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
    eyebrow: 'Driver Profile',
    title: 'IKYU',
    description: 'A focused karting portfolio built around precision, pace, and progression.',
    action: 'View driver profile',
    image: '/image/ikyu-driver-profile.png',
    imageAlt: 'Male racer wearing a racing helmet',
  },
  {
    href: '/nadya-racer',
    eyebrow: 'Driver Profile',
    title: 'CHEZNADDZ',
    description: 'A separate racing story with its own style, voice, and trackside presence.',
    action: 'Visit CHEZNADDZ',
    image: '/image/profile-racer-cheznaddz.png',
    imageAlt: 'CHEZNADDZ racer portrait',
  },
];

const portalTools = [
  {
    href: '/qr-generator',
    title: 'QR code generator',
    description: 'Create a QR code from a URL or short text and export it as PNG, JPEG, or PDF.',
    action: 'Open generator',
    mark: 'QR',
  },
  {
    href: '/iqbal-lukman/resume',
    title: 'Resume preview',
    description: 'Review the generated resume PDF before downloading a copy.',
    action: 'Preview resume',
    mark: 'PDF',
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader label="SOJI TEAM" homeHref="/" />
      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-16">
        <HomeHero />

        <section id="portfolios" className="mt-12 grid scroll-mt-24 gap-4 md:grid-cols-12 md:auto-rows-[minmax(15rem,auto)]" aria-label="Available portfolios">
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

        </section>

        <section className="mt-16" aria-labelledby="portal-utility-title">
          <div className="mb-6 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-blue)]">Portal utility</p>
            <h2 id="portal-utility-title" className="mt-3 text-2xl font-black tracking-tight text-[var(--foreground)] sm:text-3xl">Small tools for the next step.</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Open a focused utility when you need to share a link or review the portfolio details.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2" aria-label="Portal tools">
            {portalTools.map((tool) => <PortalToolCard key={tool.href} tool={tool} />)}
          </div>
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

function PortalToolCard({ tool }: { tool: (typeof portalTools)[number] }) {
  return (
    <Link href={tool.href} className="group flex min-h-56 flex-col rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-sm transition-[border-color,box-shadow,transform] duration-300 ease-out active:scale-[0.99] hover:-translate-y-1 hover:border-[var(--accent-blue)] hover:shadow-xl hover:shadow-slate-900/10 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--background)] text-xs font-black tracking-[0.12em] text-[var(--accent-blue)]" aria-hidden="true">{tool.mark}</div>
        <span className="text-sm font-semibold text-[var(--accent-blue)] transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true">↗</span>
      </div>
      <div className="mt-auto pt-8">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)]">{tool.title}</h3>
        <p className="mt-3 max-w-md text-sm leading-6 text-[var(--muted)]">{tool.description}</p>
        <span className="mt-5 inline-flex min-h-11 items-center rounded-full bg-[var(--accent-blue)] px-5 py-3 text-sm font-bold text-white transition group-hover:bg-[var(--accent-blue)]/85">{tool.action}</span>
      </div>
    </Link>
  );
}


