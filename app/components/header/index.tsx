'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Button,
  Header as USWDSHeader,
  Menu,
  NavMenuButton,
  NavDropDownButton,
  PrimaryNav,
  Title,
} from '@trussworks/react-uswds';

import { MenuIcon } from '../icons';

const THEMES = [
  'AGRICULTURE',
  'AIR QUALITY',
  'BIODIVERSITY',
  'DISASTERS',
  'ENERGY',
  'GREENHOUSE GASES',
  'SEA LEVEL RISE',
  'WILDFIRES',
  'WATER RESOURCES',
];

export default function Header() {
  const [isMobileExpanded, setExpanded] = useState(false);
  const onMenuClick = (): void => setExpanded((prvExpanded) => !prvExpanded);
  const [isDropdownOpen, setIsDropdownOpen] = useState([false, false]);

  const onToggle = (
    index: number,
    setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean[]>>,
  ): void => {
    const newIsOpen = [...isDropdownOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsDropdownOpen(newIsOpen);
  };

  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  const dropdownMenuItems = THEMES.map((theme) => {
    const id = theme.toLowerCase().replace(/\s+/g, '-');
    const href = `/${id}`;
    return (
      <Link href={href} key={id}>
        {theme}
      </Link>
    );
  });

  const primaryNavItems = [
    <Link href='about' key='about' className='usa-nav__link text-base-lightest'>
      <span>About</span>
    </Link>,
    <>
      <NavDropDownButton
        menuId='themesDropDown'
        onToggle={(): void => {
          onToggle(0, setIsDropdownOpen);
        }}
        isOpen={isDropdownOpen[0]}
        label='Themes'
        isCurrent={false}
        className='bg-base-darkest text-base-lightest'
      />
      <Menu
        key='themes'
        items={dropdownMenuItems}
        isOpen={isDropdownOpen[0]}
        id='themesDropDown'
        className='bg-base-darkest text-base-lightest'
      />
    </>,
    <Button key='dashboard' type='button' outline inverse>
      Dashboard
    </Button>,
  ];

  return (
    <USWDSHeader
      basic={true}
      showMobileOverlay={isMobileExpanded}
      className='text-base-white'
    >
      <div className='usa-nav-container'>
        <div className='usa-navbar '>
          <Title>
            <Link href='/' className='text-base-lightest'>
              Earth.gov
            </Link>
          </Title>
          <NavMenuButton onClick={onMenuClick} label={<MenuIcon />} />
          {/* NOTE: Can not add custom classNames to <NavMenuButton />,
          it will break both styling and toggle behavior */}
        </div>
        <PrimaryNav
          items={primaryNavItems}
          mobileExpanded={isMobileExpanded}
          onToggleMobileNav={onMenuClick}
          className='bg-base-darkest text-base-lightest'
        ></PrimaryNav>
      </div>
    </USWDSHeader>
  );
}
