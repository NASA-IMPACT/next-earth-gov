// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck : until veda-ui fixes its types: NavItem type enum
import React from 'react';
import { PageHeader } from '@lib';

import { NavItem } from '@lib';
import NasaLogoColor from 'app/components/nasa-logo-color.js';
import {
  DATASET_CATALOG_PATH,
  EXPLORATION_PATH,
  STORY_HUB_PATH,
} from 'app/config';
import VedaUIConfigProvider from 'app/store/providers/veda-ui-config';
import './earth-gov.scss';

export const navItems: NavItem[] = [
  {
    id: 'about',
    title: 'About',
    to: `/${DATASET_CATALOG_PATH}`,
    type: 'internalLink',
  },

  {
    id: 'themes',
    title: 'Themes',
    to: `/${STORY_HUB_PATH}`,
    type: 'dropdown',
    children: [
      {
        id: 'agriculture',
        title: 'Agriculture',
        to: '/stories/agriculture',
        type: 'internalLink',
      },
      {
        id: 'air-quality',
        title: 'Air Quality',
        to: '/stories/airquality',
        type: 'internalLink',
      },
      {
        id: 'bio-diversity',
        title: 'Bio Diversity',
        to: '/stories/biodiversity',
        type: 'internalLink',
      },
      {
        id: 'disasters',
        title: 'Disasters',
        to: '/stories/disasters',
        type: 'internalLink',
      },
      {
        id: 'energy',
        title: 'Energy',
        to: '/stories/energy',
        type: 'internalLink',
      },
      {
        id: 'greenhouse-gases',
        title: 'Greenhouse Gases',
        to: '/stories/greenhouse_gases',
        type: 'internalLink',
      },
      {
        id: 'sea-level-change',
        title: 'Sea Level Change',
        to: '/stories/sea-level-change',
        type: 'internalLink',
      },
      {
        id: 'wildfires',
        title: 'Wildfires',
        to: '/stories/wildfires',
        type: 'internalLink',
      },
      {
        id: 'water-resources',
        title: 'Water Resources',
        to: '/stories/water-resources',
        type: 'internalLink',
      },
    ],
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    to: `/${EXPLORATION_PATH}`,
    type: 'internalLink',
  },
];
export const subNavItems: NavItem[] = [
  // {
  //   id: 'about',
  //   title: 'About',
  //   to: '/about',
  //   type: 'internalLink',
  // },
  // {
  //   id: 'contact-us',
  //   title: 'Contact us',
  //   actionId: 'open-google-form',
  //   type: 'action',
  // },
];
export default function Header() {
  return (
    <VedaUIConfigProvider>
      <PageHeader
        title={'Earth.gov'}
        mainNavItems={navItems}
        subNavItems={subNavItems}
      />
    </VedaUIConfigProvider>
  );
}
