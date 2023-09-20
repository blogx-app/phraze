import styled from "@emotion/styled";
import {
  background,
  border,
  layout,
  position,
  space,
  color,
  compose,
} from "styled-system";
import { flexbox } from "styled-system";
import { FlexProps } from "./types";
import { BoxProps } from "./types";

export const Box = styled.div<BoxProps>`
  ${compose(background, border, layout, position, space, color)}
  cursor: ${({ cursor }) => cursor};
`;

export const Flex = styled(Box)<
  FlexProps & { gap?: React.CSSProperties["gap"] }
>`
  display: flex;
  gap: ${({ gap }) => gap};
  ${flexbox}
`;

export * from "./types";
