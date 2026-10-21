# Timeline Project Case Study Guide

Use this guide when turning a project from the Iqbal Lukman experience timeline into a documented portfolio case study.

The goal is to connect three things clearly:

1. The business problem
2. The work performed and solution built
3. The outcome or value created

Keep the writing professional, direct, and friendly. Explain technical work in terms of what it helped people do.

## 1. Gather the project facts

Before writing, collect the following details. Do not invent missing metrics, tools, client names, or outcomes.

### Context

- Company, role, and dates
- Industry or business area
- Client or audience, anonymized when necessary
- Business goal or decision the work supported

### Problem

- What process was difficult, slow, manual, unclear, or inconsistent?
- Where did the data or information come from?
- What limitations affected the work?
- Who needed the result and how did they use it?

### Contribution

- What did you personally own?
- Did you gather requirements or join workshops?
- Did you prepare data, write queries, build dashboards, or create an application?
- Did you present findings or work directly with stakeholders?

### Solution

- What was the flow from source data to final output?
- What data preparation or transformation was required?
- What were the main delivery formats or tools?
- Was the solution a production deliverable, a prototype, or a demonstration?

### Outcome

- What manual work or time was reduced?
- What was delivered and how often?
- What decisions or next steps did the result support?
- Was there a measured result or only a qualitative improvement?

### Reflection

- What did the project teach you about data, products, users, or collaboration?
- What would you improve if you worked on it again?

## 2. Create the project files

For a new Iqbal project, create both files using the same slug:

- `content/iqbal-lukman/projects.json` — summary used by the project card and route discovery
- `content/iqbal-lukman/projects/<slug>.mdx` — full case study

Use a short, readable slug such as `consumer-behavior-dashboard`.

The JSON record should include:

```json
{
  "slug": "project-slug",
  "title": "Clear Project Title",
  "category": "Data Engineering & Analytics",
  "summary": "One sentence describing the problem, solution, and value.",
  "tags": ["Python", "SQL", "Power BI"],
  "featured": false,
  "hasCaseStudy": true,
  "image": "/image/projects/project-slug.jpg"
}
```

The matching MDX frontmatter should include:

```yaml
---
title: "Clear Project Title"
date: "YYYY-MM-DD"
author: "Muhammad Iqbal Lukman"
category: "Data Engineering & Analytics"
---
```

## 3. Use this case-study structure

### Project overview

Explain the role, business context, and project purpose in two or three short paragraphs.

Good pattern:

> During my [role] at [company], I supported [team or client] on [business area]. My work covered [two or three responsibilities]. I also developed [solution] to help [user or business outcome].

### The problem

Describe the situation before the project. Focus on business impact before technical details.

Good questions to answer:

- What made the existing process difficult?
- What information was missing or hard to use?
- Why did the client or team need a better approach?

### My contribution

Use three to five bullets. Start each bullet with an action verb:

- Mapped...
- Prepared...
- Built...
- Designed...
- Presented...
- Collaborated...

Separate your contribution from the team’s overall result. This makes your role clear without overstating ownership.

### Solution

Describe the solution from input to output. For data projects, explain the flow in business-friendly language:

`Source data → preparation → curated dataset or datamart → dashboard, application, or report → business discussion`

If there are multiple outputs, explain each one separately. Clearly label whether each output was:

- The main client deliverable
- A supporting report
- A prototype or proof of concept
- A demonstration of a possible future solution

Add a Mermaid diagram only when it makes the flow easier to understand. Keep labels short and use business terms where possible.

### Technical implementation

List only tools that were actually used. Group them by purpose rather than presenting a long technology list:

- **Languages:** Python, SQL, JavaScript
- **Data preparation:** ETL, SQL queries, datamart design
- **Applications:** Flask, Django, or another framework
- **Visualization:** Power BI, Tableau, Plotly
- **Data sources:** SQL Server, Firebase, Splunk, or other confirmed sources

Explain an unfamiliar tool briefly if a business reader may not recognize its purpose.

### Outcome and lessons learned

State what changed after the work. Include time, frequency, adoption, decision support, or workflow improvement when known.

Good pattern:

> The project helped [team or client] to [specific improvement]. It was delivered [frequency or format] and supported [decision or next step]. The process changed from [old process] to [new process], reducing [manual effort, delay, or confusion] where this was confirmed.

If there is no numerical result, use a precise qualitative outcome instead of inventing a metric.

### Reflection

End with one or two paragraphs about what you learned. Connect the lesson to future work:

- Accurate analysis needs to fit the user’s workflow.
- A clear data structure makes reporting easier to reuse.
- Good requirements help connect technical work to business decisions.
- A dashboard is valuable when it supports a conversation or action.

## 4. Keep the language business-friendly

Prefer:

- “prepared a consistent dataset” over “normalized heterogeneous sources”
- “reduced manual preparation” over “optimized the data pipeline”
- “helped the client compare results” over “enabled comparative analysis”
- “dashboard updated weekly” over “implemented recurring dashboard refreshes”

Technical terms are appropriate when they identify real work, but explain their purpose the first time they appear. Avoid repeating the same tool name when the reader already understands the workflow.

## 5. Add the timeline reference

After the case study exists, update the matching entry in `src/components/Timeline.tsx`.

Keep the timeline description to one or two sentences. Include:

- The business or industry context
- The main work performed
- The most important deliverable or outcome

If the timeline entry should link directly to the case study, add a project slug to the experience data and render a link such as:

```tsx
<Link href={`/iqbal-lukman/projects/${item.projectSlug}`}>
  View project ↗
</Link>
```

Only add the link when the matching JSON record and MDX file are both present.

## 6. Add project imagery when available

Use a descriptive filename in `public/image/projects/`, for example:

`public/image/projects/customer-funnel-dashboard.jpg`

Then add the same path to the JSON `image` field. If the image helps explain the case study, include it in the MDX with useful alternative text:

```md
![Customer funnel dashboard visualization](/image/projects/customer-funnel-dashboard.jpg)
```

Do not include confidential client data, sensitive identifiers, or unapproved screenshots.

## 7. Final review checklist

Before considering the project complete:

- The JSON slug and MDX filename match.
- The project summary is accurate and concise.
- The case study contains no draft notes or placeholder brackets.
- The main deliverable is clearly distinguished from prototypes or demonstrations.
- All technologies and outcomes are confirmed facts.
- The business problem and value are understandable without technical background.
- The timeline entry uses the same project language as the case study.
- Any image path exists under `public/`.
- Run `npm.cmd run lint` and `npm.cmd run build` when practical.
- Review the project page visually, including the Mermaid diagram if one is used.
