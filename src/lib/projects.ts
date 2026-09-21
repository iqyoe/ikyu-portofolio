import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content', 'iqbal-lukman');

export interface ProjectMetadata {
  slug: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  hasCaseStudy: boolean;
  image?: string; //
}

export interface ProjectCaseStudy {
  meta: ProjectMetadata;
  content: string;
  frontmatter: Record<string, unknown>;
}

interface ProjectFrontmatter {
  title?: string;
  category?: string;
  [key: string]: unknown;
}

// 1. Get all project summaries from projects.json
export function getAllProjects(): ProjectMetadata[] {
  const filePath = path.join(contentDirectory, 'projects.json');
  if (!fs.existsSync(filePath)) return [];
  
  const fileData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileData);
}

// 2. Get detailed MDX case study by slug
export function getProjectBySlug(slug: string): ProjectCaseStudy | null {
  const mdxPath = path.join(contentDirectory, 'projects', `${slug}.mdx`);
  
  if (!fs.existsSync(mdxPath)) return null;

  const fileData = fs.readFileSync(mdxPath, 'utf8');
  const { data, content } = matter(fileData);
  const frontmatter = data as ProjectFrontmatter;

  const allProjects = getAllProjects();
  const meta = allProjects.find((p) => p.slug === slug) || {
    slug,
    title: frontmatter.title || slug,
    category: frontmatter.category || 'General',
    summary: '',
    tags: [],
    hasCaseStudy: true,
  };

  return {
    meta,
    content,
    frontmatter,
  };
}
