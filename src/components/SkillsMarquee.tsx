const skills = [
  'data engineering',
  'Apache Airflow',
  'Google Cloud Platform',
  'AWS',
  'Apache Spark',
  'BigQuery',
  'Python',
  'Power BI',
  'Tableau',
  'dbt',
];

export default function SkillsMarquee() {
  return (
    <section className="mt-10">
      <div className="overflow-hidden border-y border-gray-200/80 bg-white/70 py-3 dark:border-gray-800/80 dark:bg-gray-950/70">
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap px-6 text-sm font-medium uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
          {[...skills, ...skills].map((skill, index) => (
            <span key={`${skill}-${index}`} className="shrink-0">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
