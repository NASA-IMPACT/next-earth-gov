import React from 'react';
import './about.scss';
import AboutSideNav from './side-nav';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='about-layout'>
      <h2 className='sticky-title'>About</h2>
      <div className='about-container'>
        <aside className='sidebar'>
          <AboutSideNav />
        </aside>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
}
