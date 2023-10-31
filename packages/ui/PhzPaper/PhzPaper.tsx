import styled from "@emotion/styled";
import { Box } from "../Box";
import { css } from "@emotion/react";

export const PhzPaper = styled(Box)`
  color: var(--text-color);

  ${({ theme }) =>
    css({
      background: theme.colors.backgroundContent,
      boxShadow: theme.shadows.card,
      borderRadius: theme.radii.card,
      padding: theme.spacing.card,
    })}
`;
