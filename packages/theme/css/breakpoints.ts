export const breakpoints = {
  tablet: 768,
  desktop: 1024,
} as const;

export const mediaQueries = {
  tablet: `@media screen and (min-width: ${breakpoints.tablet}px)`,
  desktop: `@media screen and (min-width: ${breakpoints.desktop}px)`,
};

export interface MediaQueries {
  tablet: string;
  desktop: string;
}

export type Breakpoint = keyof typeof breakpoints;

export const breakpointNames = Object.keys(breakpoints) as Breakpoint[];
