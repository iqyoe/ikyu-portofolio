'use client';

import { useState } from 'react';
import type { ResumeSkillGroup } from '@/lib/resume';

const toneStyles = {
  blue: 'border-blue-400/50 bg-blue-500/10 text-blue-300',
  emerald: 'border-emerald-400/50 bg-emerald-400/10 text-emerald-300',
  violet: 'border-blue-400/30 bg-blue-500/10 text-blue-300',
} as const;

interface TechStackMatrixProps {
  groups: ResumeSkillGroup[];
}

export default function TechStackMatrix({ groups }: TechStackMatrixProps) {
  const [selectedGroup, setSelectedGroup] = useState('All');
  const visibleGroups = selectedGroup === 'All' ? groups : groups.filter((group) => group.label === selectedGroup);

  return (
    <section id="tech-stack" className="mt-6 scroll-mt-24 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm sm:p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-400">02 / Tech stack</p><h2 className="mt-2 text-2xl font-black tracking-tight text-white">Tools I use to move data.</h2></div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Technology categories">
          {['All', ...groups.map((group) => group.label)].map((group) => <button key={group} type="button" role="tab" aria-selected={selectedGroup === group} onClick={() => setSelectedGroup(group)} className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${selectedGroup === group ? 'border-blue-500 bg-blue-500 text-white hover:bg-pink-500' : 'border-slate-700 text-slate-400 hover:border-pink-500'}`}>{group}</button>)}
        </div>
      </div>
      <div className="mt-7 grid gap-5 md:grid-cols-3">
        {visibleGroups.map((group) => <div key={group.label}><p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{group.label}</p><div className="mt-3 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className={`rounded-xl border px-3 py-2 text-sm font-medium ${toneStyles[group.tone]}`}>{item}</span>)}</div></div>)}
      </div>
    </section>
  );
}
