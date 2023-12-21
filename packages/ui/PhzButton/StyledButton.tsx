import { HTMLProps, Ref } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { color, compose, layout, space } from "styled-system";
import { StyledButtonProps } from "./types";

export const enum ButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  height: fit-content;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
  outline: none;

  ${({ theme, variant }) =>
    css({
      borderRadius: theme.radii.button,
      background:
        variant === ButtonVariants.PRIMARY
          ? theme.colors.primary
          : variant === ButtonVariants.SECONDARY
          ? "transparent"
          : theme.colors.foreground,
      color: variant === ButtonVariants.SECONDARY ? theme.colors.primary : "",
      border:
        variant === ButtonVariants.SECONDARY
          ? `1px solid ${theme.colors.primary}`
          : "",
    })};

  ${compose(color, space, layout)}

  :hover {
    opacity: 0.85;
  }
`;
