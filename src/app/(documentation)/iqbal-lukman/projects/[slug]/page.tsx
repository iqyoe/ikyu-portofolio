import { getProjectBySlug, getAllProjects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Mermaid from '@/components/Mermaid';
import ProjectImageLightbox from '@/components/ProjectImageLightbox';

type CodeProps = React.ComponentPropsWithoutRef<'code'>;

const mdxComponents = {
  Mermaid,
  code: ({ className, children, ...props }: CodeProps) => {
    if (className === 'language-mermaid') {
      return <Mermaid chart={String(children).trim()} />;
    }

    return <code className={className} {...props}>{children}</code>;
  },
};

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: PageProps<'/iqbal-lukman/projects/[slug]'>) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="iqbal-doc mx-auto max-w-4xl px-6 py-12 text-[var(--foreground)]">
      <Link className="mb-8 inline-flex text-sm text-blue-600 hover:underline dark:text-blue-400" href="/iqbal-lukman">
        &larr; Back to Iqbal&apos;s portfolio
      </Link>

      {project.meta.image && (
        <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900">
          <ProjectImageLightbox
            src={project.meta.image}
            alt={`${project.meta.title} project overview`}
            title={project.meta.title}
            sizes="(min-width: 1024px) 896px, 100vw"
            priority
          />
        </div>
      )}

      <header className="mb-10 border-b border-[var(--line)] pb-8">
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          {project.meta.category}
        </span>
        <h1 className="mt-2 text-3xl font-extrabold text-[var(--foreground)] sm:text-4xl">
          {project.meta.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.meta.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-[var(--surface-strong)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
              #{tag}
            </span>
          ))}
        </div>
      </header>

      <article className="prose max-w-none dark:prose-invert">
        <MDXRemote components={mdxComponents} source={project.content} />
      </article>
    </main>
  );
}
