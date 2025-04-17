'use client';
import React, { useEffect, useState } from 'react';
import { Accordion, SideNav as USWDS_SideNav } from '@trussworks/react-uswds';
import useActiveSection from '@utils/hooks/use-active-section';

const SECTION_HEADING = 'h2';

function SideNav({
  sectionIds,
  activeSection,
}: {
  sectionIds: string[];
  activeSection: string | null;
  onChange?: () => void;
}) {
  return (
    <USWDS_SideNav
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
  );
}

export default function AboutSideNav() {
  const [sectionIds, setSectionIds] = useState<string[]>([]);

  // On page mount, get the ids of h3 elements, which should be the topmost
  // headers on the MDX page.
  useEffect(() => {
    const ids = Array.from(document.querySelectorAll(SECTION_HEADING))
      .map((heading) => heading.id)
      .filter(Boolean);
    setSectionIds(ids);
  }, []);

  const activeSection = useActiveSection(sectionIds);

  return (
    <aside>
      <Accordion
        className='mobile-sidenav'
        items={[
          {
            id: 'sidenav-accordion',
            title: 'Jump to section',
            expanded: false,
            headingLevel: 'h3',
            content: (
              <SideNav sectionIds={sectionIds} activeSection={activeSection} />
            ),
          },
        ]}
      />
      <div className='desktop-sidenav'>
        <p>On this page</p>
        <SideNav sectionIds={sectionIds} activeSection={activeSection} />
      </div>
    </aside>
  );
}
