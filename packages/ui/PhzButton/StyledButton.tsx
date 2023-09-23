import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { color, compose, layout, space } from "styled-system";
import { StyledButtonProps } from "./types";

export const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  height: 100%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css({ borderRadius: theme.radii.button })};
  ${compose(color, space, layout)}

  :hover {
    opacity: 0.75;
  }

  & > svg {
    margin: auto;
  }
`;
