import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = process.cwd();
const contentRoot = path.join(root, 'content', 'iqbal-lukman');
const resumePath = path.join(contentRoot, 'resume.json');
const projectsPath = path.join(contentRoot, 'projects.json');

const resume = JSON.parse(fs.readFileSync(resumePath, 'utf8'));
const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));
const projectSlugs = new Set();
const projectNumbers = new Set();
let projectsWithoutNumber = 0;

for (const project of projects) {
  if (!project.slug || projectSlugs.has(project.slug)) {
    throw new Error(`Project slugs must be present and unique: ${project.slug || '<missing>'}`);
  }

  projectSlugs.add(project.slug);
  if (project.projectNumber === undefined) {
    projectsWithoutNumber += 1;
  } else if (!Number.isInteger(project.projectNumber) || project.projectNumber < 1 || projectNumbers.has(project.projectNumber)) {
    throw new Error(`Project numbers must be unique positive integers: ${project.slug}`);
  } else {
    projectNumbers.add(project.projectNumber);
  }
  const mdxPath = path.join(contentRoot, 'projects', `${project.slug}.mdx`);
  if (!fs.existsSync(mdxPath)) {
    throw new Error(`Missing MDX case study for project: ${project.slug}`);
  }

  const { data } = matter(fs.readFileSync(mdxPath, 'utf8'));
  if (data.resume !== undefined && typeof data.resume !== 'object') {
    throw new Error(`The resume frontmatter for ${project.slug} must be an object.`);
  }
}

for (const experience of resume.experience || []) {
  for (const slug of experience.projectSlugs || []) {
    if (!projectSlugs.has(slug)) {
      throw new Error(`Experience references unknown project slug: ${slug}`);
    }
  }
}

if (!resume.name || !resume.headline || !resume.summary) {
  throw new Error('Resume requires name, headline, and summary.');
}

if (resume.contact?.website && !/^https?:\/\//.test(resume.contact.website)) {
  throw new Error('Resume website must be an absolute HTTP(S) URL.');
}

for (const certification of resume.certifications || []) {
  if (!certification.title || !certification.issuer || !certification.issued || !certification.expires || !certification.credentialId) {
    throw new Error('Each resume certification requires title, issuer, issued, expires, and credentialId.');
  }
}

const generatedNumberMessage = projectsWithoutNumber > 0
  ? ` ${projectsWithoutNumber} project number(s) will be generated from the current maximum.`
  : '';
console.log(`Resume content is valid: ${projects.length} projects, ${resume.experience.length} experience entries.${generatedNumberMessage}`);
