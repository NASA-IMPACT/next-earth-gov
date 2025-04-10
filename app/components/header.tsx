'use client';
import React, { useState } from 'react';

import {
  Button,
  Header as USWDSHeader,
  Menu,
  NavMenuButton,
  NavDropDownButton,
  PrimaryNav,
  Title,
} from '@trussworks/react-uswds';

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded);
  const testMenuItems = [
    <a href='#linkOne' key='one'>
      Current link
    </a>,
    <a href='#linkTwo' key='two'>
      Simple link Two
    </a>,
  ];
  const [isOpen, setIsOpen] = useState([false, false]);
  const onToggle = (
    index: number,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean[]>>,
  ): void => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };
  const primaryNavItems = [
    <a href='#about' key='two' className='usa-nav__link text-base-lightest'>
      <span>About</span>
    </a>,
    <>
      <NavDropDownButton
        menuId='testDropDownOne'
        onToggle={(): void => {
          onToggle(0, setIsOpen);
        }}
        isOpen={isOpen[0]}
        label='Themes'
        isCurrent={false}
        className='text-base-lightest'
      />
      <Menu
        key='one'
        items={testMenuItems}
        isOpen={isOpen[0]}
        id='testDropDownOne'
      />
    </>,
    <Button key='button' type='button' outline inverse>
      Dashboard
    </Button>,
  ];

  return (
    <USWDSHeader
      basic={true}
      showMobileOverlay={expanded}
      className='position-sticky'
    >
      <div className='usa-nav-container position-sticky top-0 z-200 bg-transparent'>
        <div className='usa-navbar text-base-lightest'>
          <Title>Earth.gov</Title>
          <NavMenuButton onClick={onClick} label='Menu' />
        </div>
        <PrimaryNav
          items={primaryNavItems}
          mobileExpanded={expanded}
          onToggleMobileNav={onClick}
        ></PrimaryNav>
      </div>
    </USWDSHeader>
  );
}
