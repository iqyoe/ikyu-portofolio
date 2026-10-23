import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content', 'iqbal-lukman');

export interface ProjectMetadata {
  projectNumber: number;
  slug: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  hasCaseStudy: boolean;
  featured?: boolean;
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
  const records = JSON.parse(fileData) as Array<Omit<ProjectMetadata, 'projectNumber'> & { projectNumber?: unknown }>;
  const explicitNumbers = records
    .map((project) => project.projectNumber)
    .filter((projectNumber): projectNumber is number => typeof projectNumber === 'number' && Number.isInteger(projectNumber) && projectNumber > 0);
  const invalidProjectNumber = records.find((project) => project.projectNumber !== undefined && (
    typeof project.projectNumber !== 'number' || !Number.isInteger(project.projectNumber) || project.projectNumber < 1
  ));

  if (invalidProjectNumber) {
    throw new Error(`Project number must be a positive integer: ${invalidProjectNumber.slug}`);
  }

  if (new Set(explicitNumbers).size !== explicitNumbers.length) {
    throw new Error('Project numbers must be unique.');
  }

  let nextProjectNumber = Math.max(0, ...explicitNumbers) + 1;

  const projects = records.map((project) => {
    const projectNumber = typeof project.projectNumber === 'number' && Number.isInteger(project.projectNumber) && project.projectNumber > 0
      ? project.projectNumber
      : nextProjectNumber++;

    return { ...project, projectNumber } as ProjectMetadata;
  });

  return projects.sort((a, b) => b.projectNumber - a.projectNumber);
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
    projectNumber: 0,
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
