import React from 'react';

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

  return (
    <section
      className='homepage'
      style={{
        backgroundImage: `url(${currentHighlight.imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className='height-full display-flex flex-column flex-justify-center'>
        <div>{currentHighlight.title}</div>
        <button>{currentHighlight.buttonLabel}</button>
      </div>
    </section>
  );
}
