import React, { useEffect, useState } from 'react';

export default function useActiveSection(sectionIds: string[]) {
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
