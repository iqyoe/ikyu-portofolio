import { getProjectBySlug, getAllProjects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Mermaid from '@/components/Mermaid';

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
    <main className="mx-auto max-w-4xl px-6 py-12">
      <Link className="mb-8 inline-flex text-sm text-blue-600 hover:underline dark:text-blue-400" href="/iqbal-lukman">
        &larr; Back to Iqbal&apos;s portfolio
      </Link>

      <header className="mb-10 border-b border-gray-200 pb-8 dark:border-gray-800">
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          {project.meta.category}
        </span>
        <h1 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          {project.meta.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.meta.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
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
