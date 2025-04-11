import type { MDXComponents } from 'mdx/types';

import { Block, Prose } from '@lib';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Block,
    Prose,
  };
}
