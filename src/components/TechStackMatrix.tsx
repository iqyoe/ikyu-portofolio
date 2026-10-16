'use client';

import { useState } from 'react';

const stackGroups = [
  { label: 'Cloud & Processing', tone: 'blue', items: ['Apache Spark', 'PySpark', 'BigQuery', 'Google Cloud Platform', 'AWS'] },
  { label: 'Orchestration & SQL', tone: 'emerald', items: ['Apache Airflow', 'Hive', 'Spark SQL', 'SQL Server', 'dbt'] },
  { label: 'AI & Analytics', tone: 'violet', items: ['Python', 'LLM automation', 'Power BI', 'Tableau', 'Django'] },
] as const;

const toneStyles = {
  blue: 'border-[#b5d2e6] bg-[#b5d2e6]/45 text-[#326080] dark:border-blue-900/70 dark:bg-blue-950/30 dark:text-blue-300',
  emerald: 'border-[#fff1e7] bg-[#fff1e7] text-[#805232] dark:border-amber-900/70 dark:bg-amber-950/30 dark:text-amber-300',
  violet: 'border-[#326080]/30 bg-[#326080]/10 text-[#326080] dark:border-violet-900/70 dark:bg-violet-950/30 dark:text-violet-300',
} as const;

export default function TechStackMatrix() {
  const [selectedGroup, setSelectedGroup] = useState('All');
  const visibleGroups = selectedGroup === 'All' ? stackGroups : stackGroups.filter((group) => group.label === selectedGroup);

  return (
    <section id="tech-stack" className="mt-6 scroll-mt-24 rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 sm:p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-600 dark:text-blue-400">02 / Tech stack</p><h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 dark:text-white">Tools I use to move data.</h2></div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Technology categories">
          {['All', ...stackGroups.map((group) => group.label)].map((group) => <button key={group} type="button" role="tab" aria-selected={selectedGroup === group} onClick={() => setSelectedGroup(group)} className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${selectedGroup === group ? 'border-slate-950 bg-slate-950 text-white dark:border-white dark:bg-white dark:text-slate-950' : 'border-slate-200 text-slate-500 hover:border-slate-400 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-500'}`}>{group}</button>)}
        </div>
      </div>
      <div className="mt-7 grid gap-5 md:grid-cols-3">
        {visibleGroups.map((group) => <div key={group.label}><p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{group.label}</p><div className="mt-3 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className={`rounded-xl border px-3 py-2 text-sm font-medium ${toneStyles[group.tone]}`}>{item}</span>)}</div></div>)}
      </div>
    </section>
  );
}
