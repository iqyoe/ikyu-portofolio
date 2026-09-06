import { getAllProjects } from '@/lib/projects';
import ProjectGrid from '@/components/ProjectGrid';
import SkillsMarquee from '@/components/SkillsMarquee';
import Timeline from '@/components/Timeline';

export default function HomePage() {
  const projects = getAllProjects();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
          Portfolio
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Hi, I&apos;m Ikyu.
        </h1>
        <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
          I build end-to-end data pipelines, analytics dashboards, web applications, and data stories that turn raw data into something useful.
        </p>
      </section>

      <SkillsMarquee />

      <Timeline />

      <section className="mt-16">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-600 dark:text-gray-300">
            Selected work that shows the technical side of the portfolio.
          </p>
        </div>

        <ProjectGrid projects={projects} />
      </section>
    </main>
  );
}