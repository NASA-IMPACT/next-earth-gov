'use client';
import React, { useEffect, useState } from 'react';
import { SideNav } from '@trussworks/react-uswds';

function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '0px', threshold: 0.01 },
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

  console.log('activeSection', activeSection);

  return (
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
  );
}
