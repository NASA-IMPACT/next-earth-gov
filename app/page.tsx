import React from 'react';
import { Link } from '@trussworks/react-uswds';
import { ArrowForwardIcon } from './components/icons';

const DATA_THEMES = [
  { title: 'Air Quality', imageSrc: '/images/homepage/highlight-1.jpeg' },
  { title: 'Agriculture', imageSrc: '/images/homepage/highlight-1.jpeg' },
  { title: 'Biodiversity', imageSrc: '/images/homepage/highlight-1.jpeg' },
  { title: 'Disasters', imageSrc: '/images/homepage/highlight-1.jpeg' },
  {
    title: 'Sustainable Energy',
    imageSrc: '/images/homepage/highlight-1.jpeg',
  },
  { title: 'Greenhouse Gases', imageSrc: '/images/homepage/highlight-1.jpeg' },
  { title: 'Sea Level Rise', imageSrc: '/images/homepage/highlight-1.jpeg' },
  { title: 'Wildfires', imageSrc: '/images/homepage/highlight-1.jpeg' },
  { title: 'Water Resources', imageSrc: '/images/homepage/highlight-1.jpeg' },
];

export default function HomePage() {
  // Randomize which data theme to show
  const currentHighlight =
    DATA_THEMES[Math.floor(Math.random() * DATA_THEMES.length)];

  return (
    <section
      className='homepage'
      style={{
        backgroundImage: `url(${currentHighlight.imageSrc})`,
      }}
    >
      <div className='hero'>
        <h2>
          Data for
          <br />
          {currentHighlight.title}
        </h2>
        <Link className='usa-button' href='/dashboard'>
          Get Started
          <ArrowForwardIcon className='margin-left-05' />
        </Link>
      </div>
    </section>
  );
}
