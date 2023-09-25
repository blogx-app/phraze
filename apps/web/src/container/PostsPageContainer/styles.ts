import styled from "@emotion/styled";
import { ThemeProps } from "../../common.type";
import { css } from "@emotion/react";
import { Flex } from "@phraze-app/ui";

export const CardContainer = styled(Flex)<ThemeProps>`
  ${({ theme }) =>
    css({
      background: theme.colors.backgroundContent,
      borderRadius: theme.radii.card,
      boxShadow: theme.shadows.card,
    })};

  height: 9rem;
  min-width: 9rem;
`;
