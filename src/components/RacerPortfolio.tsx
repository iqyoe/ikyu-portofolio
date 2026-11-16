'use client';

import type { CSSProperties, ReactNode } from 'react';
import { useState } from 'react';
import ImageCrossfade from '@/components/ImageCrossfade';
import DriverGallery from '@/components/DriverGallery';
import SectionRail from '@/components/SectionRail';
import type { DriverProfile } from '@/lib/drivers';

type RacerTheme = 'orange' | 'fuchsia';
const themeStyles = { orange: '#ff6b35', fuchsia: '#65b5ff' } as const;

export default function RacerPortfolio({ driver, theme }: { driver: DriverProfile; theme: RacerTheme }) {
  const accent = themeStyles[theme];
  const railText = `${driver.displayName} · ${driver.displayName}`;
  return <main style={{ '--racer-accent': accent } as CSSProperties} className="overflow-hidden bg-[#090b10] text-white">
    <SectionRail accent={accent} sections={[{ id: 'racer-overview', label: 'Overview' }, { id: 'about', label: 'About' }, { id: 'race-record', label: 'Race record' }, { id: 'contact', label: 'Contact' }]} />
    <section id="racer-overview" className="relative isolate min-h-[calc(100svh-73px)] overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 -z-20"><ImageCrossfade images={driver.heroImages} alt={`${driver.displayName} racing on track`} sizes="100vw" priority className="brightness-[0.42]" /></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#090b10]/95 via-[#090b10]/65 to-[#090b10]/35" />
      <div className="relative mx-auto flex min-h-[calc(100svh-73px)] max-w-6xl items-center px-6 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-y-10 left-2 hidden items-stretch gap-3 overflow-hidden opacity-75 lg:flex" aria-hidden="true">
          <span className="racer-name-rail racer-name-rail-forward text-[clamp(5rem,12vw,12rem)] font-black uppercase leading-none tracking-[-0.08em] text-white/80 [writing-mode:vertical-rl]">{railText}</span>
          <span className="racer-name-rail racer-name-rail-reverse mt-24 text-[clamp(5rem,12vw,12rem)] font-black uppercase leading-none tracking-[-0.08em] text-white/25 [writing-mode:vertical-lr]">{railText}</span>
        </div>
        <div className="ml-auto w-full max-w-3xl lg:pr-10">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--racer-accent)]">Karting driver · 🇮🇩 Indonesia</p>
          <h1 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl"><span className={driver.fullName ? 'block text-[0.5em] tracking-[0.04em]' : 'block'}>{driver.fullName ?? driver.displayName}</span>{driver.fullName ? <span className="mt-2 block text-[var(--racer-accent)]">{driver.displayName}</span> : null}</h1>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/85 sm:text-2xl">{driver.shortBio ?? 'Driver profile details coming soon.'}</p>
          <button type="button" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="hero-scroll-cta mt-12 inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.28em] text-white/80 transition-colors hover:text-[var(--racer-accent)]"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-lg text-[var(--racer-accent)]">↓</span><span>Scroll to driver overview</span></button>
        </div>
      </div>
    </section>

    <section id="about" className="scroll-mt-20 border-y border-white/10 bg-[#10131a] px-6 py-24 sm:py-32"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="01 / Driver overview" title="The driver behind the lap." />
      <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:grid-rows-2">
        <div className="relative min-h-[28rem] overflow-hidden border border-white/10 bg-black/20 lg:col-span-4 lg:row-span-2"><ImageCrossfade images={driver.profileImages} alt={`${driver.displayName} driver portrait`} sizes="(min-width: 1024px) 33vw, 100vw" priority /></div>
        <InfoCard title="Driver bio" className="lg:col-span-8"><p className="text-base leading-7 text-slate-300">{driver.shortBio ?? 'Driver profile details coming soon.'}</p><div className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-4">{[['DOB', driver.dob ?? '—'], ['Domicile', driver.domicile ?? '—'], ['Nationality', driver.nationality ?? '—'], ['Total race', driver.totalRaces?.toString() ?? '—']].map(([label, value]) => <div key={label}><p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-slate-500">{label}</p><p className="mt-2 font-semibold text-white">{value}</p></div>)}</div></InfoCard>
        <InfoCard title="Competition joined" className="lg:col-span-4"><p className="text-5xl font-black text-[var(--racer-accent)]">{driver.competitionsJoined ?? '—'}</p><p className="mt-2 text-sm text-slate-400">series and events</p><p className="mt-5 border-t border-white/10 pt-4 text-sm text-slate-300">Current team: {driver.currentTeam ?? 'Details coming soon.'}</p></InfoCard>
        <InfoCard title="Latest best performance" className="lg:col-span-4"><div className="flex items-end justify-between gap-4"><p className="text-5xl font-black text-[var(--racer-accent)]">{driver.latestBest?.position ?? 'Best'}</p><p className="text-right text-5xl font-bold text-white">{driver.latestBest?.lapTime ?? '—'}<span className="block text-xs font-normal uppercase tracking-widest text-slate-500">lap time</span></p></div><p className="mt-5 font-semibold text-white">{driver.latestBest?.trackName ?? 'Performance details coming soon.'}</p><p className="mt-1 text-sm text-slate-400">{driver.latestBest?.trackLocation ?? ''}</p><p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-500">Updated {driver.latestBest?.lastUpdated ?? '—'}</p></InfoCard>
      </div>
    </div></section>

    <RaceRecord driver={driver} />
    <section id="gallery" className="scroll-mt-20 border-t border-white/10 bg-[#10131a] px-6 py-24 sm:py-32"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="03 / Gallery" title="Trackside, in focus." /><div className="mt-12"><DriverGallery driverName={driver.displayName} images={driver.heroImages} /></div></div></section>
    <section id="contact" className="scroll-mt-20 bg-[#1b2d50] px-6 py-24 sm:py-32"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.32em] text-slate-300">Let’s talk racing.</p><h2 className="mt-5 max-w-xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-7xl">Build the next lap.</h2></div><div className="divide-y divide-white/20 border-y border-white/20">{[['Email', `mailto:${driver.contact.email}`, driver.contact.email], ['Instagram', `https://instagram.com/${driver.contact.instagram.replace('@', '')}`, driver.contact.instagram], ['TikTok', `https://tiktok.com/@${driver.contact.tiktok.replace(/^@/, '').split(/\s+/)[0]}`, driver.contact.tiktok]].map(([label, href, value]) => <a key={label} href={href} className="flex items-center justify-between gap-4 py-4 text-sm transition-colors hover:text-[var(--racer-accent)]"><span className="text-xs uppercase tracking-[0.2em] text-slate-300">{label}</span><span className="font-semibold text-white">{value}</span></a>)}</div></div></section>
    <footer className="flex flex-col gap-3 px-6 py-8 text-xs uppercase tracking-[0.16em] text-slate-500 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 {driver.displayName}</span><span>SOJI TEAM · Driver profile</span></footer>
  </main>;
}

function RaceRecord({ driver }: { driver: DriverProfile }) {
  const [category, setCategory] = useState<'SWS' | 'Other'>('SWS');
  const years = [2026, 2025];
  return <section id="race-record" className="scroll-mt-20 px-6 py-24 sm:py-32"><div className="mx-auto max-w-5xl"><SectionHeading eyebrow="02 / Race record" title="Every race leaves a mark." /><div className="mt-10 flex gap-2" role="tablist" aria-label="Race record category"><CategoryButton category="SWS" selected={category === 'SWS'} onClick={() => setCategory('SWS')} /><CategoryButton category="Other" selected={category === 'Other'} onClick={() => setCategory('Other')} /></div><div className="mt-12 space-y-12">{years.map((year) => { const yearRows = driver.raceRecords.filter((record) => record.category === category && record.year === year); return <div key={year}><h3 className="mb-5 text-3xl font-black tracking-tight text-white">{year}</h3><div className="relative border-l border-white/20 pl-7">{yearRows.length ? yearRows.map((row) => <article key={`${row.event}-${row.date}-${row.result}`} className="relative pb-8 last:pb-0"><span className="absolute -left-[2.02rem] top-1 h-3 w-3 rounded-full bg-[var(--racer-accent)] ring-4 ring-[#090b10]" /><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{row.date}</p><div className="mt-2 border border-white/10 bg-[#10131a] p-5 sm:p-6"><div className="flex min-w-0 flex-row items-start justify-between gap-3 sm:gap-5"><div className="min-w-0 flex-1"><h4 className="truncate text-base font-bold text-white sm:text-lg">{row.event}</h4><p className="mt-1 truncate text-sm text-slate-400">{row.series}</p><p className="mt-4 text-sm text-slate-300">{row.track}</p></div><RaceResultDetails result={row.result} /></div></div></article>) : <p className="py-2 text-sm text-slate-500">No recorded results in {category} for {year}.</p>}</div></div>; })}</div></div></section>;
}

function CategoryButton({ category, selected, onClick }: { category: 'SWS' | 'Other'; selected: boolean; onClick: () => void }) { return <button type="button" role="tab" aria-selected={selected} onClick={onClick} className={`rounded-full border px-5 py-2 text-sm font-bold transition-colors ${selected ? 'border-[var(--racer-accent)] bg-[var(--racer-accent)] text-black' : 'border-white/20 text-slate-400 hover:border-white/50'}`}>{category}</button>; }
function RaceResultDetails({ result }: { result?: string }) { if (!result) return null; const details = result.split(' · ').map((part) => { const match = part.match(/^(Qualifying|Grid|Reverse(?: Grid)?)\s+(P\d+)/i); return match ? { label: match[1].replace(/^Reverse$/i, 'Reverse Grid'), position: match[2].toUpperCase() } : { label: 'Result', position: part.match(/P\d+/i)?.[0]?.toUpperCase() ?? part }; }); return <div className="flex min-w-0 shrink-0 flex-nowrap gap-2">{details.map((detail) => <div key={`${detail.label}-${detail.position}`} className="min-w-[4.25rem] border border-white/10 bg-white/[0.03] px-2 py-2 text-right sm:min-w-[4.75rem]"><p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-slate-500">{detail.label}</p><p className="mt-1 text-lg font-black text-[var(--racer-accent)]">{detail.position}</p></div>)}</div>; }
function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) { return <div><p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--racer-accent)]">{eyebrow}</p><h2 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl">{title}</h2></div>; }
function InfoCard({ title, children, className = '' }: { title: string; children: ReactNode; className?: string }) { return <article className={`border border-white/10 bg-[#151922] p-6 sm:p-8 ${className}`}><p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">{title}</p><div className="mt-5">{children}</div></article>; }
