'use client';

import React, { useEffect } from 'react';

const highlights = [
  {
    id: 'highlight-1',
    title: 'Data for Agriculture',
    buttonLabel: 'Get Started',
    imageSrc: '/images/homepage/highlight-1.jpeg',
  },
];

export default function HomePage() {
  // For now, we are only using the first highlight
  const currentHighlight = highlights[0];

  useEffect(() => {
    function setSectionHeight() {
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
      const main = document.querySelector('main');

      if (header && footer && main) {
        const headerHeight = header.offsetHeight;
        const footerHeight = footer.offsetHeight;
        const availableHeight =
          window.innerHeight - headerHeight - footerHeight;

        document.documentElement.style.setProperty(
          '--available-height',
          `${availableHeight}px`,
        );
      }
    }

    window.addEventListener('load', setSectionHeight);
    window.addEventListener('resize', setSectionHeight);
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${currentHighlight.imageSrc})`,
        width: '100%',
        height: 'var(--available-height)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='height-full display-flex flex-column flex-justify-center'>
        <div>{currentHighlight.title}</div>
        <button>{currentHighlight.buttonLabel}</button>
      </div>
    </section>
  );
}
