'use client';
import React, { useEffect, useState } from 'react';
import { SideNav } from '@trussworks/react-uswds';

function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = new Map<string, number>();

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const distance = Math.abs(entry.boundingClientRect.top);
            visibleSections.set(entry.target.id, distance);
          }
        });

        if (visibleSections.size > 0) {
          const closestSection = Array.from(visibleSections.entries()).reduce(
            (closest, current) => {
              return current[1] < closest[1] ? current : closest;
            },
          );
          setActiveSection(closestSection[0]);
        }
      },
      {
        rootMargin: '-10% 0px -70% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds]);

  return activeSection;
}

export default function AboutSideNav() {
  const sectionIds = [
    'why',
    'resources',
    'purpose',
    'team',
    'datasets',
    'application',
    'next',
    'feedback',
  ];

  const activeSection = useActiveSection(sectionIds);

  return (
    <aside>
      <p className='margin-y-2'>On this page</p>
      <SideNav
        items={sectionIds.map((id, i) => (
          <a
            key={id}
            href={`#${id}`}
            className={
              activeSection === id || (!activeSection && i == 0)
                ? 'usa-current'
                : ''
            }
          >
            {id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, ' ')}
          </a>
        ))}
      />
    </aside>
  );
}
