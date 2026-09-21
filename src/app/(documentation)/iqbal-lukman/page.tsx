import { getAllProjects } from '@/lib/projects';
import ProjectGrid from '@/components/ProjectGrid';
import SkillsMarquee from '@/components/SkillsMarquee';
import Timeline from '@/components/Timeline';

export const metadata = {
  title: 'Iqbal Lukman',
  description: 'Data engineering projects, case studies, and analytics work by Iqbal Lukman.',
};

export default function IqbalLukmanPage() {
  const projects = getAllProjects();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
          Documentation portfolio
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Hi, I&apos;m Muhammad Iqbal Lukman.
        </h1>
        <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
          I&apos;m a data engineer with experience building reliable pipelines, datamarts, monitoring systems, and analytics products across fintech and professional services.
        </p>
      </section>

      <SkillsMarquee />
      <Timeline />

      <section className="mt-16">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-600 dark:text-gray-300">
            Selected work with the technical context and documentation behind it.
          </p>
        </div>
        <ProjectGrid projects={projects} />
      </section>
    </main>
  );
}
