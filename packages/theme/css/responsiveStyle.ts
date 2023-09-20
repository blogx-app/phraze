import { StyleRule } from "@vanilla-extract/css";
import { Breakpoint, breakpoints } from "./breakpoints";

type CSSProps = Omit<StyleRule, "@media" | "@supports">;

const makeMediaQuery = (breakpoint: Breakpoint) => (styles?: CSSProps) =>
  !styles || Object.keys(styles).length === 0
    ? {}
    : {
        [`screen and (min-width: ${breakpoints[breakpoint]}px)`]: styles,
      };

const mediaQuery = {
  tablet: makeMediaQuery("tablet"),
  desktop: makeMediaQuery("desktop"),
};

type ResponsiveStyle = {
  tablet?: CSSProps;
  desktop?: CSSProps;
};

export const responsiveStyle = ({
  tablet,
  desktop,
}: ResponsiveStyle): StyleRule => {
  const { "@media": _, ...tabletStyle } = (tablet ?? {}) as any;
  return {
    ...tabletStyle,
    ...(desktop
      ? {
          "@media": {
            ...mediaQuery.desktop(desktop ?? {}),
          },
        }
      : {}),
  };
};
