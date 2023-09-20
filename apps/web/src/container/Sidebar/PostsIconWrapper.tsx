import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import styled from "@emotion/styled";
import { Box, IconButton } from "@mui/material";
import Text from "@phraze-app/ui/Text";
import DraftsIcon from "./icons/DraftsIcon";
import { NavigationNavLink } from "./style";
import PublishedIcon from "./icons/PublishedIcon";
import ScheduledIcon from "./icons/ScheduledIcon";
import ArrowIcon from "./icons/ArrowIcon";
import PostsIcon from "./icons/PostsIcon";
import OrangeAddIcon from "./icons/OrangeAddIcon";
import { useNavigate } from "react-router-dom";
import { Flex } from "@phraze-app/ui";

// TODO - fix this. remove any type from here.
const Container = styled(animated.div as any)`
  background-color: rgba(128, 128, 128, 0.3);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  overflow: hidden;
`;

const OpenButtonContainer = styled.div<{ open: boolean }>`
  transform: rotate(90deg);
  transition: all 0.5s;
  cursor: pointer;

  ${({ open }) =>
    open &&
    `
    transform: rotate(-90deg);
  `}
`;

const POSTS_ITEMS = [
  {
    name: "Drafts",
    toLink: "/posts/draft",
  },
  {
    name: "Published",
    toLink: "/posts/published",
  },
  {
    name: "Scheduled",
    toLink: "/post/scheduled",
  },
];

interface PostsIconWrapperProps {
  open: boolean;
}

const PostsIconWrapper = ({ open }: PostsIconWrapperProps) => {
  const navigate = useNavigate();

  const animationProps = useSpring({
    width: open ? "100%" : "inherit",
    alignItems: open ? "flex-start" : "center",
    padding: open ? "12px" : "4px",
  });

  return (
    <Container style={animationProps}>
      {open && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Box display="flex" alignItems="center">
            <IconButton>
              <PostsIcon />
            </IconButton>
            <Text color="white" fontSize="14px">
              Posts
            </Text>
          </Box>
          {open && (
            <IconButton onClick={() => navigate("/editor")}>
              <OrangeAddIcon />
            </IconButton>
          )}
        </Box>
      )}
      <Flex gap="14px" flexDirection="column" pl="1rem">
        {POSTS_ITEMS.map((item, i) => (
          <NavigationNavLink
            style={{ marginLeft: open ? "1rem" : "" }}
            to={item.toLink}
            key={`${item.name}-${item.toLink}-${i}`}
          >
            {open && <Text fontSize="14px">{item.name}</Text>}
          </NavigationNavLink>
        ))}
      </Flex>
    </Container>
  );
};

export default PostsIconWrapper;
