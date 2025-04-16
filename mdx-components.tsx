import React from 'react';
import type { MDXComponents } from 'mdx/types';
import { SafeLink } from 'app/components/mdx-components/safe-link';

import { Block, Prose } from '@lib';

import { SideNav } from '@trussworks/react-uswds';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: SafeLink,
    Block,
    Prose,
    SideNav,
  };
}
