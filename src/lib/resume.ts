import fs from 'fs';
import path from 'path';
import resumeContent from '../../content/iqbal-lukman/resume.json';
import { getAllProjects, getProjectBySlug } from '@/lib/projects';

export type ResumeSkillTone = 'blue' | 'emerald' | 'violet';

export interface ResumeContact {
  email?: string;
  phone?: string;
  location?: string;
  website?: string;
  linkedin?: string;
  github?: string;
}

export interface ResumeExperience {
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  projectSlugs: string[];
}

export interface ResumeSkillGroup {
  label: string;
  tone: ResumeSkillTone;
  items: string[];
}

export interface ResumeEducation {
  icon: string;
  title: string;
  detail: string;
}

export interface ResumeCertification {
  title: string;
  issuer: string;
  issued: string;
  expires: string;
  credentialId: string;
}

export interface ResumeProject {
  projectNumber: number;
  slug: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  date?: string;
  contributions: string[];
}

export interface ResumeData {
  name: string;
  headline: string;
  summary: string;
  contact: ResumeContact;
  experience: ResumeExperience[];
  skillGroups: ResumeSkillGroup[];
  education: ResumeEducation[];
  certifications: ResumeCertification[];
  projects: ResumeProject[];
}

interface ResumeContentFile {
  name: string;
  headline: string;
  summary: string;
  contact?: ResumeContact;
  experience: ResumeExperience[];
  skillGroups: ResumeSkillGroup[];
  education: ResumeEducation[];
  certifications: ResumeCertification[];
}

interface ResumeFrontmatter {
  include?: boolean;
  summary?: string;
  contributions?: string[];
  skills?: string[];
}

const contentDirectory = path.join(process.cwd(), 'content', 'iqbal-lukman');

function parseResumeFrontmatter(value: unknown): ResumeFrontmatter {
  if (!value || typeof value !== 'object') return {};

  const frontmatter = value as Record<string, unknown>;
  return {
    include: typeof frontmatter.include === 'boolean' ? frontmatter.include : undefined,
    summary: typeof frontmatter.summary === 'string' ? frontmatter.summary : undefined,
    contributions: Array.isArray(frontmatter.contributions)
      ? frontmatter.contributions.filter((item): item is string => typeof item === 'string')
      : undefined,
    skills: Array.isArray(frontmatter.skills)
      ? frontmatter.skills.filter((item): item is string => typeof item === 'string')
      : undefined,
  };
}

function readProjectResumeData(slug: string): { date?: string; resume: ResumeFrontmatter } {
  const project = getProjectBySlug(slug);
  if (!project) return { resume: {} };

  return {
    date: typeof project.frontmatter.date === 'string' ? project.frontmatter.date : undefined,
    resume: parseResumeFrontmatter(project.frontmatter.resume),
  };
}

function validateResumeData(data: ResumeData) {
  const projectSlugs = new Set(data.projects.map((project) => project.slug));
  const missingExperienceProjects = data.experience.flatMap((item) =>
    item.projectSlugs.filter((slug) => !projectSlugs.has(slug)),
  );

  if (missingExperienceProjects.length > 0) {
    throw new Error(`Resume references unknown project slugs: ${missingExperienceProjects.join(', ')}`);
  }
}

export function getResumeData(): ResumeData {
  const content = resumeContent as ResumeContentFile;
  const projects = getAllProjects()
    .map((project) => {
      const { date, resume } = readProjectResumeData(project.slug);
      if (resume.include === false) return null;

      return {
        projectNumber: project.projectNumber,
        slug: project.slug,
        title: project.title,
        category: project.category,
        summary: resume.summary || project.summary,
        tags: resume.skills?.length ? resume.skills : project.tags,
        date,
        contributions: resume.contributions || [],
      };
    })
    .filter((project): project is NonNullable<typeof project> => project !== null)
    .sort((a, b) => b.projectNumber - a.projectNumber);

  const data: ResumeData = {
    name: content.name,
    headline: content.headline,
    summary: content.summary,
    contact: content.contact || {},
    experience: content.experience,
    skillGroups: content.skillGroups,
    education: content.education,
    certifications: content.certifications,
    projects,
  };

  validateResumeData(data);
  return data;
}

export function validateResumeContentFile() {
  const resumePath = path.join(contentDirectory, 'resume.json');
  if (!fs.existsSync(resumePath)) {
    throw new Error(`Missing resume content file: ${resumePath}`);
  }

  getResumeData();
  return true;
}
