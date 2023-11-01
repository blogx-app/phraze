import styled from "@emotion/styled";
import { PhrazeTheme } from "@phraze-app/theme";
import {
  BackgroundProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  background,
  color,
  compose,
  layout,
  space,
  typography,
} from "styled-system";

export const Text = styled.div<
  TypographyProps &
    SpaceProps &
    LayoutProps &
    ColorProps &
    BackgroundProps & { textColor?: keyof PhrazeTheme["colors"] }
>`
  ${compose(typography, space, layout, color, background)}
  white-space: normal;
  line-height: 1.1;

  color: ${({ theme, textColor }) =>
    textColor ? theme.colors[textColor] : ""};
`;

export default Text;
