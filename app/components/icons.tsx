import React from 'react';

/**
 * Custom SVG icons for the application.
 * These icons are defined here to avoid compatibility of react-uswds in Next.js.
 *
 * See: https://github.com/navapbc/template-application-nextjs/discussions/389
 */

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export const ArrowForwardIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className = '',
  ariaLabel,
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      fill={color}
      className={className}
      aria-hidden={!ariaLabel}
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
    >
      <path d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z' />
    </svg>
  );
};

export const MenuIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  className = '',
  ariaLabel,
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      fill={color}
      className={className}
      aria-hidden={!ariaLabel}
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z'
        fill={color}
      />
    </svg>
  );
};
