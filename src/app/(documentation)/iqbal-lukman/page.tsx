import Link from 'next/link';
import Image from 'next/image';
import { getAllProjects } from '@/lib/projects';
import ProjectGrid from '@/components/ProjectGrid';
import TechStackMatrix from '@/components/TechStackMatrix';
import Timeline from '@/components/Timeline';

export const metadata = {
  title: 'Iqbal Lukman',
  description: 'Data engineering projects, case studies, and analytics work by Iqbal Lukman.',
};

export default function IqbalLukmanPage() {
  const projects = getAllProjects();

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-14">
      <section className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="relative min-h-[34rem] overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 p-7 text-white shadow-xl shadow-blue-950/10 sm:min-h-[32rem] sm:p-10">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-10 right-[-2rem] h-72 w-72 rounded-full bg-blue-500/10 ring-1 ring-blue-400/20 sm:h-96 sm:w-96" aria-hidden="true" />
          <Image
            src="/image/iqbal-lukman-profile.png"
            alt="Portrait of Muhammad Iqbal Lukman wearing glasses and a dark blazer"
            width={896}
            height={1152}
            priority
            sizes="(min-width: 640px) 24rem, 18rem"
            className="absolute bottom-0 right-[-1rem] z-0 h-auto w-60 opacity-90 sm:right-3 sm:w-80"
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px] shadow-emerald-400" />Open to data engineering roles</span>
            <p className="mt-16 text-xs font-bold uppercase tracking-[0.3em] text-blue-300">01 / Muhammad Iqbal Lukman</p>
            <h1 className="mt-4 max-w-2xl text-5xl font-black tracking-tight sm:text-7xl">Building systems that make data useful.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">Data engineer focused on reliable pipelines, datamarts, monitoring systems, and analytics products across fintech and professional services.</p>
            <div className="relative z-10 mt-8 flex flex-wrap gap-3"><Link href="#projects" className="rounded-full bg-blue-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-400">Explore projects ↗</Link><Link href="#experience" className="rounded-full border border-slate-700 px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-slate-400">View experience</Link></div>
          </div>
        </div>

        <aside className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-3xl border border-[#b5d2e6] bg-[#b5d2e6]/45 p-6 dark:border-blue-900/70 dark:bg-blue-950/30"><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#326080] dark:text-blue-300">Quick highlights</p><div className="mt-6 grid grid-cols-2 gap-3"><Metric value="6+" label="Years in data" /><Metric value="3" label="Core domains" /><Metric value="2" label="Cloud platforms" /><Metric value="1" label="Case study" /></div></div>
          <div className="rounded-3xl border border-[#fff1e7] bg-[#fff1e7] p-6 dark:border-amber-900/70 dark:bg-amber-950/30"><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#805232] dark:text-amber-300">Primary focus</p><ul className="mt-5 space-y-4 text-sm font-semibold text-slate-800 dark:text-slate-200"><li className="flex gap-3"><span className="text-[#805232]">⚡</span>Data platform &amp; infrastructure</li><li className="flex gap-3"><span className="text-[#805232]">◈</span>Analytics-ready datamarts</li><li className="flex gap-3"><span className="text-[#805232]">✦</span>AI-assisted operations</li></ul></div>
        </aside>
      </section>

      <TechStackMatrix />
      <Timeline />

      <section id="projects" className="mt-6 scroll-mt-24">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-600 dark:text-blue-400">04 / Featured projects</p><h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 dark:text-white">Selected work, documented.</h2></div><p className="max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">Technical context, trade-offs, and architecture behind the work.</p></div>
        <ProjectGrid projects={projects} />
      </section>

      <section id="contact" className="mt-6 grid gap-5 scroll-mt-24 lg:grid-cols-[0.8fr_1.2fr]"><div className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900/70"><p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-600 dark:text-blue-400">05 / Education</p><h2 className="mt-3 text-2xl font-black text-slate-950 dark:text-white">Foundations matter.</h2><div className="mt-7 space-y-5 text-sm"><InfoRow icon="🎓" title="President University" detail="Bachelor of Science in Information Technology · 2015–2019" /><InfoRow icon="🌐" title="EF SET English Certificate" detail="Advanced / CEFR C1 · Score 68/100" /><InfoRow icon="✦" title="Workshop speaker" detail="MIT App Inventor workshop · 2016" /></div></div><div className="rounded-3xl border border-slate-800 bg-slate-950 p-7 text-white sm:p-9"><p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-300">06 / Contact &amp; connect</p><h2 className="mt-4 max-w-xl text-3xl font-black tracking-tight sm:text-5xl">Have a data problem worth solving?</h2><p className="mt-5 max-w-xl leading-7 text-slate-300">For now, explore the documented work above. A direct contact link can be added when the preferred professional channel is confirmed.</p><Link href="#projects" className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-blue-100">Start with the case study ↗</Link></div></section>
    </main>
  );
}

function Metric({ value, label }: { value: string; label: string }) { return <div className="rounded-2xl border border-blue-200/80 bg-white/70 p-4 dark:border-blue-900/50 dark:bg-slate-900/40"><p className="text-2xl font-black text-slate-950 dark:text-white">{value}</p><p className="mt-1 text-xs font-medium leading-4 text-slate-500 dark:text-slate-400">{label}</p></div>; }
function InfoRow({ icon, title, detail }: { icon: string; title: string; detail: string }) { return <div className="flex gap-3"><span className="text-xl" aria-hidden="true">{icon}</span><div><p className="font-bold text-slate-900 dark:text-white">{title}</p><p className="mt-1 leading-5 text-slate-500 dark:text-slate-400">{detail}</p></div></div>; }
