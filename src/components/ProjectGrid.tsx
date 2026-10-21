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

  return <div><div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Project categories">{allTags.map((tag) => <button key={tag} type="button" role="tab" aria-selected={selectedTag === tag} onClick={() => setSelectedTag(tag)} className={`rounded-full border px-4 py-2 text-xs font-bold transition ${selectedTag === tag ? 'border-blue-500 bg-blue-500 text-white hover:bg-pink-500' : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-pink-500'}`}>{tag}</button>)}</div><div className="columns-1 gap-5 md:columns-2">{filteredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></div>;
}

function ProjectCard({ project, index }: { project: ProjectMetadata; index: number }) {
  return <article className="group mb-5 flex min-h-[26rem] break-inside-avoid flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-pink-500 hover:shadow-xl hover:shadow-blue-950/10">{project.image && <div className="relative aspect-[16/10] min-h-52 overflow-hidden bg-slate-800"><Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" /></div>}<div className="flex flex-1 flex-col p-6 sm:p-7"><div className="flex items-center justify-between gap-4"><span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">{project.category}</span><span className="text-xs font-bold text-slate-400">{String(index + 1).padStart(2, '0')}</span></div><h3 className="mt-3 text-2xl font-black tracking-tight text-white transition-colors group-hover:text-pink-500">{project.title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">{tag}</span>)}</div>{project.hasCaseStudy && <div className="mt-7 border-t border-slate-800 pt-5"><Link href={`/iqbal-lukman/projects/${project.slug}`} className="inline-flex items-center text-sm font-bold text-blue-400 hover:text-pink-500 hover:underline">View architecture spec <span className="ml-2 transition-transform group-hover:translate-x-1">↗</span></Link></div>}</div></article>;
}
