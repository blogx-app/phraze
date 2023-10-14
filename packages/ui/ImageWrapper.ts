import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { PhrazeTheme } from "@phraze-app/theme";
import { HTMLAttributes } from "react";
import {
  BorderProps,
  SizeProps,
  SpaceProps,
  border,
  compose,
  size,
  space,
} from "styled-system";

export interface ImageWrapperProps
  extends HTMLAttributes<HTMLImageElement>,
    SpaceProps,
    BorderProps,
    SizeProps {
  theme?: PhrazeTheme;
}

export const ImageWrapper = styled.img<{ theme?: PhrazeTheme }>`
  ${({ theme }) => {
    console.log(theme);

    return css({
      borderRadius: theme.radii.image,
    });
  }}
  ${compose(space, size, border)}
`;

export default ImageWrapper;
