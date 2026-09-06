import { getProjectBySlug, getAllProjects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Mermaid from '@/components/Mermaid';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

type CodeProps = React.ComponentPropsWithoutRef<'code'>;

// Define custom components available inside MDX files
const mdxComponents = {
  // Option A: Use a custom <Mermaid chart="..." /> component in MDX
  Mermaid,
  
  // Option B: Intercept standard ```mermaid code blocks
  code: ({ className, children, ...props }: CodeProps) => {
    const isMermaid = className === 'language-mermaid';
    
    if (isMermaid) {
      return <Mermaid chart={String(children).trim()}/>;
    }
    
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* ⬅️ Back Navigation */}
      <Link className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline mb-8" href="/">
        &larr; Back to all projects
      </Link>

      {/* 🏷️ Header Information */}
      <header className="mb-10 border-b border-gray-200 dark:border-gray-800 pb-8">
        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
          {project.meta.category}
        </span>
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-2 sm:text-4xl">
          {project.meta.title}
        </h1>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.meta.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* 📝 Rendered MDX Case Study Content */}
      <article className="prose dark:prose-invert max-w-none">
        <MDXRemote components={mdxComponents} source={project.content}/>
      </article>
    </main>
  );
}
