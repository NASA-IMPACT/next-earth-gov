import React from 'react';
import { Button } from '@trussworks/react-uswds';

const highlights = [
  {
    title: 'Data for Agriculture',
    buttonLabel: 'Get Started',
    imageSrc: '/images/homepage/highlight-1.jpeg',
  },
  {
    title: 'Data for Air Quality',
    buttonLabel: 'Get Started',
    imageSrc: '/images/homepage/highlight-2.jpeg',
  },
];

export default function HomePage() {
  // Randomize which highlight to show
  const currentHighlight =
    highlights[Math.floor(Math.random() * highlights.length)];

  return (
    <section
      className='homepage'
      style={{
        backgroundImage: `url(${currentHighlight.imageSrc})`,
      }}
    >
      <div className='hero'>
        <h2>{currentHighlight.title}</h2>
        <Button className='usa-button' type='button'>
          {currentHighlight.buttonLabel}
        </Button>
      </div>
    </section>
  );
}
