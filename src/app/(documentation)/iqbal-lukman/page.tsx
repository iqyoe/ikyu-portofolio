import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { getAllProjects } from '@/lib/projects';
import { getResumeData } from '@/lib/resume';
import ProjectGrid from '@/components/ProjectGrid';
import TechStackMatrix from '@/components/TechStackMatrix';
import Timeline from '@/components/Timeline';

export const metadata = {
  title: 'Iqbal Lukman',
  description: 'Data engineering projects, case studies, and analytics work by Iqbal Lukman.',
};

export default function IqbalLukmanPage() {
  const projects = getAllProjects();
  const resume = getResumeData();

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-14">
      <section className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="relative min-h-[34rem] overflow-hidden rounded-3xl border border-blue-400/30 bg-[#0D0D0D] p-7 text-white shadow-xl shadow-blue-950/10 sm:min-h-[32rem] sm:p-10">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-10 right-[-2rem] h-72 w-72 rounded-full bg-blue-500/10 ring-1 ring-blue-400/20 sm:h-96 sm:w-96" aria-hidden="true" />
          <Image
            src="/image/iqbal-lukman-profile.png"
            alt={`Portrait of ${resume.name} wearing glasses and a dark blazer`}
            width={896}
            height={1152}
            priority
            sizes="(min-width: 640px) 24rem, 18rem"
            className="absolute bottom-0 right-[-1rem] z-0 h-auto w-60 opacity-90 sm:right-3 sm:w-80"
          />
          <div className="relative">
            <p className="mt-16 text-xs font-bold uppercase tracking-[0.3em] text-blue-300">01 / {resume.name}</p>
            <p className="mt-4 text-lg font-bold text-emerald-300 sm:text-xl">{resume.headline}</p>
            <h1 className="mt-2 max-w-2xl text-5xl font-black tracking-tight sm:text-7xl">Building systems that make data useful.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">{resume.summary}</p>
            <div className="mt-5 flex max-w-2xl flex-wrap gap-x-4 gap-y-2 text-sm text-slate-300">
              {resume.contact.phone && <a href={`tel:${resume.contact.phone.replace(/\s/g, '')}`} className="transition hover:text-white">{resume.contact.phone}</a>}
              {resume.contact.email && <a href={`mailto:${resume.contact.email}`} className="transition hover:text-white">{resume.contact.email}</a>}
              {resume.contact.linkedin && <a href={resume.contact.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn ↗</a>}
            </div>
            <div className="relative z-10 mt-8 flex flex-wrap gap-3"><Link href="#projects" className="rounded-full bg-blue-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-400">Explore projects ↗</Link><Link href="#experience" className="button-outline-primary rounded-full px-5 py-3 text-sm font-bold transition">View experience</Link><Link href="/iqbal-lukman/resume" className="rounded-full border border-emerald-400/60 bg-emerald-400/10 px-5 py-3 text-sm font-bold text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-400/20">Preview resume ↗</Link></div>
          </div>
        </div>

        <aside className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-3xl border border-blue-400/40 bg-blue-500/10 p-6"><p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">Quick highlights</p><div className="mt-6 grid grid-cols-2 gap-3"><Metric value="6+" label="Years in data" /><Metric value="3" label="Core domains" /><Metric value="2" label="Cloud platforms" /><Metric value="1" label="Case study" /></div></div>
          <div className="rounded-3xl border border-emerald-400/40 bg-emerald-400/10 p-6"><p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">Primary focus</p><ul className="mt-5 space-y-4 text-sm font-semibold text-white"><li className="flex gap-3"><span className="text-emerald-300">⚡</span>Data platform &amp; infrastructure</li><li className="flex gap-3"><span className="text-emerald-300">◈</span>Analytics-ready datamarts</li><li className="flex gap-3"><span className="text-emerald-300">✦</span>AI-assisted operations</li></ul></div>
        </aside>
      </section>

      <TechStackMatrix groups={resume.skillGroups} />
      <Timeline experience={resume.experience} projects={projects} />

      <section id="projects" className="mt-6 scroll-mt-24">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-600 dark:text-blue-400">04 / Featured projects</p><h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 dark:text-white">Selected work, documented.</h2></div><p className="max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">Technical context, trade-offs, and architecture behind the work.</p></div>
        <ProjectGrid projects={projects} />
      </section>

      <section id="contact" className="mt-6 grid gap-5 scroll-mt-24 lg:grid-cols-[0.8fr_1.2fr]"><div className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900/70"><p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-600 dark:text-blue-400">05 / Education</p><h2 className="mt-3 text-2xl font-black text-slate-950 dark:text-white">Foundations matter.</h2><div className="mt-7 space-y-5 text-sm">{resume.education.map((item) => <InfoRow key={item.title} icon={item.icon} title={item.title} detail={item.title.startsWith('Pemberi Materi') ? <a href="https://www.liputan6.com/citizen6/read/2655681/president-university-kenalkan-industri-digital-pada-siswa-sma" target="_blank" rel="noreferrer" className="text-blue-600 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-500 dark:text-blue-400 dark:decoration-blue-700 dark:hover:text-blue-300">View publication ↗</a> : item.detail} />)}</div>{resume.certifications.length > 0 && <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800"><p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">Certifications</p><div className="mt-4 space-y-4">{resume.certifications.map((item) => <div key={item.credentialId} className="flex gap-3"><span className="text-xl" aria-hidden="true">☁</span><div><p className="font-bold text-slate-900 dark:text-white">{item.title}</p><p className="mt-1 text-slate-500 dark:text-slate-400">{item.issuer}</p><p className="mt-1 leading-5 text-slate-500 dark:text-slate-400">Issued {item.issued} · Expires {item.expires}</p><p className="mt-1 text-slate-500 dark:text-slate-400">Credential ID {item.credentialId}</p></div></div>)}</div></div>}</div><div className="rounded-3xl border border-slate-800 bg-slate-950 p-7 text-white sm:p-9"><p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-300">06 / Contact &amp; connect</p><h2 className="mt-4 max-w-xl text-3xl font-black tracking-tight sm:text-5xl">Have a data problem worth solving?</h2><p className="mt-5 max-w-xl leading-7 text-slate-300">For now, explore the documented work above. A direct contact link can be added when the preferred professional channel is confirmed.</p><Link href="#projects" className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-blue-100">Start with the case study ↗</Link></div></section>
    </main>
  );
}

function Metric({ value, label }: { value: string; label: string }) { return <div className="rounded-2xl border border-blue-200/80 bg-white/70 p-4 dark:border-blue-900/50 dark:bg-slate-900/40"><p className="text-2xl font-black text-slate-950 dark:text-white">{value}</p><p className="mt-1 text-xs font-medium leading-4 text-slate-500 dark:text-slate-400">{label}</p></div>; }
function InfoRow({ icon, title, detail }: { icon: string; title: string; detail: ReactNode }) { return <div className="flex gap-3"><span className="text-xl" aria-hidden="true">{icon}</span><div><p className="font-bold text-slate-900 dark:text-white">{title}</p><p className="mt-1 leading-5 text-slate-500 dark:text-slate-400">{detail}</p></div></div>; }
