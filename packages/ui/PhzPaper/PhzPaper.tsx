import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Box } from "../Box";

export const PhzPaper = styled(Box)`
  color: var(--text-color);
  box-sizing: border-box;

  ${({ theme }) =>
    css({
      background: theme.colors.backgroundContent,
      border: theme.borders.card,
      borderRadius: theme.radii.card,
      padding: theme.spacing.card,
    })}
`;
