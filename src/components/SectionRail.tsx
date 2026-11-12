'use client';

import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';

export interface SectionRailItem {
  id: string;
  label: string;
}

interface SectionRailProps {
  sections: SectionRailItem[];
  accent?: string;
}

export default function SectionRail({ sections, accent = 'var(--accent-blue)' }: SectionRailProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '');

  useEffect(() => {
    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-24% 0px -58% 0px', threshold: [0, 0.15, 0.5] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sections]);

  const active = sections.find((section) => section.id === activeId) ?? sections[0];
  if (!active) return null;

  return (
    <aside className="section-rail" aria-label="Page sections" style={{ '--rail-accent': accent } as CSSProperties}>
      <div className="section-rail-label" aria-live="polite">
        <span className="section-rail-kicker">On this page</span>
        <span key={active.id} className="section-rail-title">{active.label}</span>
      </div>
      <nav aria-label="Jump to section">
        <ol className="section-rail-list">
          {sections.map((section, index) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={section.id === active.id ? 'is-active' : undefined}
                aria-current={section.id === active.id ? 'location' : undefined}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{section.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}
