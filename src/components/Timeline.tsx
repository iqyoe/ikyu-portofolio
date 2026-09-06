const resumeSections = [
  {
    label: 'Work Experience',
    items: [
      {
        title: 'Data Engineering Portfolio',
        meta: 'Personal Project',
        period: '2024 - Present',
        description:
          'Building a portfolio site to showcase data engineering case studies, MDX content, and visual storytelling.',
      },
      {
        title: 'Data Analytics & Automation',
        meta: 'Freelance / Projects',
        period: '2023 - 2024',
        description:
          'Worked on dashboards, reporting flows, and automation workflows for data-driven decision making.',
      },
    ],
  },
  {
    label: 'Academic',
    items: [
      {
        title: 'Relevant Study',
        meta: 'Academic Background',
        period: 'Ongoing',
        description:
          'Focused on data, systems, analysis, and practical web development skills.',
      },
    ],
  },
  {
    label: 'Awards',
    items: [
      {
        title: 'Portfolio Milestone',
        meta: 'Personal Achievement',
        period: '2026',
        description:
          'Built and structured a data engineering portfolio with reusable content and case study support.',
      },
    ],
  },
];

export default function Timeline() {
  return (
    <section className="mt-16">
      <div className="mb-6 max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Resume
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Work experience, academic background, and selected achievements.
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
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {section.label}
              </h3>
            </div>

            <div className="space-y-6">
              {section.items.map((item) => (
                <article key={`${item.title}-${item.period}`}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                    {item.meta}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}