import React from 'react';
import dynamic from 'next/dynamic';
import { getStoriesMetadata } from 'app/content/utils/mdx';

// @NOTE: Dynamically load to ensure only CSR since these depends on VedaUI ContextProvider for routing...
const StoriesHub = dynamic(
  () => import('./hub'),
  { 
    ssr: false,
    loading: () => <p>Loading...</p> // @NOTE @TODO: We need a loading state!!!
  },
);

export default function Page() {
  const stories = getStoriesMetadata().map((d) => ({
    ...d.metadata,
    path: `stories/${d.slug}`,
  }));

  return (
    <div className='grid-container'>
      <h1 className='font-ui-lg'>Stories</h1>
      <StoriesHub stories={stories} />
    </div>
  );
}
