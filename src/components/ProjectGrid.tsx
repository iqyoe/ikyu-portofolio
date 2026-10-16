'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProjectMetadata } from '@/lib/projects';

interface ProjectGridProps { projects: ProjectMetadata[]; }

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedTag, setSelectedTag] = useState('All');
  const allTags = ['All', ...Array.from(new Set(projects.flatMap((project) => project.tags)))];
  const filteredProjects = selectedTag === 'All' ? projects : projects.filter((project) => project.tags.includes(selectedTag));

  return <div><div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Project categories">{allTags.map((tag) => <button key={tag} type="button" role="tab" aria-selected={selectedTag === tag} onClick={() => setSelectedTag(tag)} className={`rounded-full border px-4 py-2 text-xs font-bold transition ${selectedTag === tag ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'}`}>{tag}</button>)}</div><div className="grid gap-5 md:grid-cols-2">{filteredProjects.map((project, index) => <article key={project.slug} className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/10 dark:border-slate-800 dark:bg-slate-900 ${index === 0 ? 'md:col-span-2 md:grid md:grid-cols-[0.85fr_1.15fr]' : ''}`}>{project.image && <div className={`relative min-h-52 overflow-hidden bg-slate-100 dark:bg-slate-800 ${index === 0 ? 'md:min-h-full' : 'aspect-[16/10]'}`}><Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" /></div>}<div className="flex flex-1 flex-col p-6 sm:p-7"><div className="flex items-center justify-between gap-4"><span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">{project.category}</span><span className="text-xs font-bold text-slate-400">0{index + 1}</span></div><h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">{project.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.summary}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">{tag}</span>)}</div>{project.hasCaseStudy && <div className="mt-7 border-t border-slate-100 pt-5 dark:border-slate-800"><Link href={`/iqbal-lukman/projects/${project.slug}`} className="inline-flex items-center text-sm font-bold text-blue-600 hover:underline dark:text-blue-400">View architecture spec <span className="ml-2 transition-transform group-hover:translate-x-1">↗</span></Link></div>}</div></article>)}</div></div>;
}
