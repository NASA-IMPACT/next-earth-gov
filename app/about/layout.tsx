import React from 'react';
import './about.scss';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='about-layout'>{children}</div>;
}
