'use client';
import {
  CatalogView,
  PageHero,
  useFiltersWithQS,
  ReactQueryProvider,
  DevseedUiThemeProvider,
  PageMainContent,
  Block,
  Prose,
  Figure,
  Caption,
  Image,
  MapBlock,
  CompareImage,
  PageHeader,
  LogoContainer,
  NavItem,
  InternalNavLink,
  NavItemType,
  ExplorationAndAnalysis,
  DatasetSelectorModal,
  timelineDatasetsAtom
} from '@developmentseed/veda-ui';

/**
 * This file is to...
 * Quickly identify client specific library components being used throughout this application
 * And to mark these with the client side directive so other parts of the page are still Server Components and can stay as-is
 */

export {
  // Providers
  DevseedUiThemeProvider,
  ReactQueryProvider,

  // Components
  CatalogView,
  PageHero,
  PageMainContent,
  PageHeader,
  LogoContainer,
  ExplorationAndAnalysis,
  DatasetSelectorModal,

  // MDX Components
  Block,
  Prose,
  Figure,
  Caption,
  Image,
  MapBlock,
  CompareImage,
  NavItemType,

  // Hooks
  useFiltersWithQS,

  // State
  timelineDatasetsAtom
};

export type { NavItem, InternalNavLink };
