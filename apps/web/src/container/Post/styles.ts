import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Flex, ImageWrapper } from "@phraze-app/ui";

export const PostsContainer = styled.div({
  border: "1rem",
  maxWidth: "38rem",

  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const PostRowViewContainer = styled(Flex)`
  width: 100%;
  padding: 1rem;
  ${({ theme }) =>
    css({
      borderRadius: theme.radii.card,
      background: theme.colors.backgroundContent,
    })};
`;

export const PostImageWrapper = styled(ImageWrapper)`
  height: 100%;
  max-height: 7.5rem;
  max-width: 7.5rem;
  max-width: 100%;
`;
