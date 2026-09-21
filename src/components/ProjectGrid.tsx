'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProjectMetadata } from '@/lib/projects';

interface ProjectGridProps {
  projects: ProjectMetadata[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const allTags = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

  const filteredProjects =
    selectedTag === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag));

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              selectedTag === tag
                ? 'border-blue-600 bg-blue-600 text-white'
                : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <article
            key={project.slug}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
          >
            {project.image && (
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}

            <div className="flex flex-1 flex-col p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                {project.category}
              </span>

              <h3 className="mt-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {project.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {project.hasCaseStudy && (
                <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-800">
                  <Link
                    href={`/iqbal-lukman/projects/${project.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Read Case Study &rarr;
                  </Link>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
