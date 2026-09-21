const resumeSections = [
  {
    label: 'Work Experience',
    items: [
      {
        title: 'Data Engineer',
        meta: 'Grab',
        period: 'Oct 2023 - Present',
        description:
          'Maintaining lending and payment data pipelines across GCP and AWS with Airflow, Spark, and Hive. Built data-quality sensors, LLM-assisted root-cause summaries, and improved lending pipeline performance by migrating workloads from Presto to Spark.',
      },
      {
        title: 'Business Intelligence / Data Analyst',
        meta: 'Grab',
        period: 'Jan 2022 - Oct 2023',
        description:
          'Built regulatory, lending, and customer-service datamarts using BigQuery, Airflow, and Spark SQL. Delivered Tableau and Power BI dashboards for compliance monitoring, lending lifecycle reporting, CSAT, and contact-per-transaction metrics.',
      },
      {
        title: 'Data Analytics Associate',
        meta: 'PwC Indonesia',
        period: 'Sep 2019 - Jan 2022',
        description:
          'Delivered audit analytics and data infrastructure modernization across banking, insurance, travel, and oil and gas. Used SQL Server, SSIS, MySQL, Power BI, Python, and Django to turn fragmented operational data into reliable reporting systems.',
      },
      {
        title: 'Engineering Intern',
        meta: 'PT Mattel Indonesia',
        period: 'Jan 2019 - May 2019',
        description:
          'Created real-time OEE monitoring using desktop SCADA and web applications, and helped develop an IIoT flow from manufacturing equipment data to operational insights.',
      },
      {
        title: 'Technology Intern',
        meta: 'Accenture',
        period: 'May 2018 - Sep 2018',
        description:
          'Analyzed customer behavior for product and user-experience improvements and developed a Python-based web dashboard for consumer behavior visualization.',
      },
    ],
  },
  {
    label: 'Academic',
    items: [
      {
        title: 'Bachelor of Science in Information Technology',
        meta: 'President University',
        period: '2015 - 2019',
        description:
          'Studied information technology with a focus on practical systems, data, and software development foundations.',
      },
    ],
  },
  {
    label: 'Certifications & Publications',
    items: [
      {
        title: 'EF SET English Certificate',
        meta: 'Advanced / CEFR C1',
        period: 'Score 68/100',
        description:
          'English proficiency certification. Additional Google Cloud certificates cover data innovation, business transformation, and infrastructure and application modernization.',
      },
      {
        title: 'MIT App Inventor Workshop Speaker',
        meta: 'Compsphere',
        period: '2016',
        description:
          'Delivered workshop material introducing MIT App Inventor.',
      },
    ],
  },
];

export default function Timeline() {
  return (
    <section className="mt-16">
      <div className="mb-6 max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          A consolidated view of data engineering, analytics, education, and selected achievements.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        {resumeSections.map((section, index) => (
          <div
            key={section.label}
            className={`grid gap-6 px-6 py-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10 ${
              index !== 0 ? 'border-t border-gray-200 dark:border-gray-800' : ''
            }`}
          >
            <div className="lg:sticky lg:top-24 lg:self-start">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{section.label}</h3>
            </div>

            <div className="space-y-6">
              {section.items.map((item) => (
                <article key={`${item.title}-${item.period}`}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">{item.meta}</p>
                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
