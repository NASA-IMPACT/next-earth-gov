'use client';
import React from 'react';
import { SideNav } from '@trussworks/react-uswds';
import useActiveSection from '@utils/hooks/use-active-section';

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
            className={`text-capitalize ${
              activeSection === id || (!activeSection && i == 0)
                ? 'usa-current'
                : ''
            }`}
          >
            {id}
          </a>
        ))}
      />
    </aside>
  );
}
