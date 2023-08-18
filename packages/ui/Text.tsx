import styled from "@emotion/styled";
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

const Text = styled.div<
  TypographyProps & SpaceProps & LayoutProps & ColorProps & BackgroundProps
>`
  ${compose(typography, space, layout, color, background)}
`;

export default Text;
