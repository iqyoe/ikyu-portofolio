import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  Image,
  renderToBuffer,
} from '@react-pdf/renderer';
import QRCode from 'qrcode';
import type { ResumeCertification, ResumeData, ResumeEducation, ResumeExperience, ResumeProject } from '@/lib/resume';

const colors = {
  ink: '#172033',
  muted: '#526071',
  blue: '#2563eb',
  paleBlue: '#eff6ff',
  line: '#dbe4ef',
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingBottom: 38,
    paddingHorizontal: 0,
    color: colors.ink,
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    lineHeight: 1.35,
  },
  header: {
    backgroundColor: colors.blue,
    marginTop: -30,
    paddingTop: 38,
    paddingBottom: 20,
    paddingHorizontal: 42,
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerDetails: {
    flex: 1,
    paddingRight: 18,
  },
  qrCode: {
    width: 64,
    height: 64,
    backgroundColor: '#ffffff',
    padding: 3,
  },
  qrCodeBlock: {
    width: 82,
    alignItems: 'center',
  },
  qrCodeText: {
    color: '#ffffff',
    fontSize: 5.5,
    lineHeight: 1.2,
    marginTop: 4,
    textAlign: 'center',
  },
  name: {
    color: '#ffffff',
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 0.3,
    lineHeight: 1.15,
  },
  headline: {
    color: '#dbeafe',
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    marginTop: 7,
  },
  contact: {
    color: '#ffffff',
    fontSize: 8.5,
    marginTop: 7,
  },
  summary: {
    color: colors.muted,
    paddingHorizontal: 42,
    paddingTop: 18,
    marginBottom: 14,
    fontSize: 10,
    lineHeight: 1.45,
  },
  section: {
    marginHorizontal: 42,
    marginBottom: 14,
  },
  sectionTitle: {
    color: colors.blue,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    paddingBottom: 4,
    marginBottom: 8,
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  experience: {
    marginBottom: 11,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  role: {
    color: colors.ink,
    fontFamily: 'Helvetica-Bold',
    fontSize: 10.5,
  },
  company: {
    color: colors.blue,
    fontFamily: 'Helvetica-Bold',
    fontSize: 9.5,
    marginLeft: 4,
  },
  period: {
    color: colors.muted,
    fontSize: 8.5,
  },
  body: {
    color: colors.muted,
    marginTop: 3,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  tag: {
    color: colors.blue,
    backgroundColor: colors.paleBlue,
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 4,
    marginBottom: 3,
    fontSize: 7.5,
  },
  project: {
    marginBottom: 9,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  projectTitle: {
    color: colors.ink,
    fontFamily: 'Helvetica-Bold',
    fontSize: 9.5,
    flex: 1,
  },
  projectCategory: {
    color: colors.blue,
    fontSize: 8,
    marginLeft: 10,
  },
  projectNumber: {
    color: colors.blue,
    fontFamily: 'Helvetica-Bold',
    fontSize: 8,
    marginLeft: 10,
  },
  bullet: {
    flexDirection: 'row',
    marginTop: 2,
    paddingLeft: 4,
  },
  bulletMark: {
    width: 10,
    color: colors.blue,
    fontFamily: 'Helvetica-Bold',
  },
  bulletText: {
    flex: 1,
    color: colors.muted,
  },
  columns: {
    flexDirection: 'row',
    gap: 18,
    marginHorizontal: 42,
  },
  column: {
    flex: 1,
  },
  columnSection: {
    marginHorizontal: 0,
  },
  skillGroup: {
    marginBottom: 6,
  },
  skillLabel: {
    color: colors.ink,
    fontFamily: 'Helvetica-Bold',
    fontSize: 8.5,
  },
  skillItems: {
    color: colors.muted,
    marginTop: 2,
    fontSize: 8.5,
  },
  education: {
    marginBottom: 6,
  },
  educationTitle: {
    color: colors.ink,
    fontFamily: 'Helvetica-Bold',
  },
  educationDetail: {
    color: colors.muted,
    marginTop: 2,
  },
  subsection: {
    marginTop: 10,
  },
  certification: {
    marginBottom: 7,
  },
  certificationTitle: {
    color: colors.ink,
    fontFamily: 'Helvetica-Bold',
  },
  certificationDetail: {
    color: colors.muted,
    marginTop: 2,
    fontSize: 8.5,
  },
  pageNumber: {
    position: 'absolute',
    bottom: 18,
    right: 42,
    color: colors.muted,
    fontSize: 8,
  },
});

function toPdfText(value: string) {
  return value
    .replace(/[\u2012\u2013\u2014\u2212]/g, '-')
    .replace(/\u00a0/g, ' ')
    .replace(/[\u{1F300}-\u{1FAFF}]/gu, '');
}

function Tags({ tags }: { tags: string[] }) {
  return <View style={styles.tags}>{tags.map((tag) => <Text key={tag} style={styles.tag}>{toPdfText(tag)}</Text>)}</View>;
}

function ExperienceItem({ item }: { item: ResumeExperience }) {
  return <View style={styles.experience} wrap={false}>
    <View style={styles.experienceHeader}>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <Text style={styles.role}>{toPdfText(item.title)}</Text>
        <Text style={styles.company}>| {toPdfText(item.company)}</Text>
      </View>
      <Text style={styles.period}>{toPdfText(item.period)}</Text>
    </View>
    <Text style={styles.body}>{toPdfText(item.description)}</Text>
    <Tags tags={item.tags} />
  </View>;
}

function ProjectItem({ project }: { project: ResumeProject }) {
  const bullets = project.contributions.length > 0 ? project.contributions : [project.summary];

  return <View style={styles.project} wrap={false}>
    <View style={styles.projectHeader}>
      <Text style={styles.projectTitle}>{toPdfText(project.title)}</Text>
      <Text style={styles.projectNumber}>#{String(project.projectNumber).padStart(2, '0')}</Text>
      <Text style={styles.projectCategory}>{toPdfText(project.category)}</Text>
    </View>
    {bullets.map((bullet) => <View key={bullet} style={styles.bullet}><Text style={styles.bulletMark}>-</Text><Text style={styles.bulletText}>{toPdfText(bullet)}</Text></View>)}
    <Tags tags={project.tags} />
  </View>;
}

function EducationItem({ item }: { item: ResumeEducation }) {
  return <View style={styles.education} wrap={false}>
    <Text style={styles.educationTitle}>{toPdfText(item.title)}</Text>
    <Text style={styles.educationDetail}>{toPdfText(item.detail)}</Text>
  </View>;
}

function CertificationItem({ item }: { item: ResumeCertification }) {
  return <View style={styles.certification} wrap={false}>
    <Text style={styles.certificationTitle}>{toPdfText(item.title)}</Text>
    <Text style={styles.certificationDetail}>{toPdfText(item.issuer)} | Issued {toPdfText(item.issued)} | Expires {toPdfText(item.expires)}</Text>
    <Text style={styles.certificationDetail}>Credential ID {toPdfText(item.credentialId)}</Text>
  </View>;
}

export function ResumeDocument({ resume, qrCodeDataUrl }: { resume: ResumeData; qrCodeDataUrl?: string }) {
  const websiteUrl = resume.contact.website;
  const contactValues = [
    resume.contact.email,
    resume.contact.phone,
    resume.contact.location,
    resume.contact.linkedin,
    resume.contact.github,
  ].filter((value): value is string => Boolean(value));

  return <Document title={`${resume.name} Resume`} author={resume.name} subject="Professional resume">
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.headerDetails}>
          <Text style={styles.name}>{toPdfText(resume.name)}</Text>
          <Text style={styles.headline}>{toPdfText(resume.headline)}</Text>
          {contactValues.length > 0 && <Text style={styles.contact}>{contactValues.map(toPdfText).join(' | ')}</Text>}
        </View>
        {websiteUrl && <View style={styles.qrCodeBlock}>
          {/* eslint-disable-next-line jsx-a11y/alt-text -- React-PDF Image has no HTML alt prop. */}
          {qrCodeDataUrl && <Image src={qrCodeDataUrl} style={styles.qrCode} />}
          <Text style={styles.qrCodeText}>{toPdfText(websiteUrl)}</Text>
        </View>}
      </View>

      <Text style={styles.summary}>{toPdfText(resume.summary)}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {resume.experience.map((item) => <ExperienceItem key={`${item.company}-${item.title}-${item.period}`} item={item} />)}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Selected projects</Text>
        {resume.projects.map((project) => <ProjectItem key={project.slug} project={project} />)}
      </View>

      <View style={styles.columns}>
        <View style={[styles.column, styles.section, styles.columnSection]}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {resume.skillGroups.map((group) => <View key={group.label} style={styles.skillGroup} wrap={false}>
            <Text style={styles.skillLabel}>{toPdfText(group.label)}</Text>
            <Text style={styles.skillItems}>{group.items.map(toPdfText).join(' | ')}</Text>
          </View>)}
        </View>
        <View style={[styles.column, styles.section, styles.columnSection]}>
          <Text style={styles.sectionTitle}>Education</Text>
          {resume.education.map((item) => <EducationItem key={item.title} item={item} />)}
          {resume.certifications.length > 0 && <View style={styles.subsection}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {resume.certifications.map((item) => <CertificationItem key={item.credentialId} item={item} />)}
          </View>}
        </View>
      </View>

      <Text style={styles.pageNumber} fixed render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </Page>
  </Document>;
}

export async function renderResumePdf(resume: ResumeData) {
  const websiteUrl = resume.contact.website;
  const qrCodeDataUrl = websiteUrl
    ? await QRCode.toDataURL(websiteUrl, {
        errorCorrectionLevel: 'M',
        margin: 2,
        width: 256,
        color: { dark: '#172033', light: '#ffffff' },
      })
    : undefined;

  return renderToBuffer(<ResumeDocument resume={resume} qrCodeDataUrl={qrCodeDataUrl} />);
}
