import type { MDXComponents } from 'mdx/types';

import { Block, Prose } from '@lib';

import { SideNav } from '@trussworks/react-uswds';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Block,
    Prose,
    SideNav,
  };
}
