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
  padding: 0.5rem 1rem;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;

  ${({ theme, variant }) =>
    css({
      borderRadius: theme.radii.button,
      background:
        variant === "primary" ? theme.colors.primary : theme.colors.foreground,
    })};

  ${compose(color, space, layout)}

  :hover {
    opacity: 0.85;
  }

  & > svg {
    margin: auto;
  }
`;
