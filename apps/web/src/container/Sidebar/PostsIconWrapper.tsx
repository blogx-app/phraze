import { animated, useSpring } from "react-spring";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Box, IconButton } from "@mui/material";
import Text from "@phraze-app/ui/Text";
import { Flex } from "@phraze-app/ui";
import { useTheme } from "@emotion/react";
import { NavigationNavLink } from "./style";
import PostsIcon from "./icons/PostsIcon";
import OrangeAddIcon from "./icons/OrangeAddIcon";

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
    toLink: "/posts?blogState=draft",
  },
  {
    name: "Published",
    toLink: "/posts?blogState=published",
  },
  {
    name: "Scheduled",
    toLink: "/posts?blogState=scheduled",
  },
];

interface PostsIconWrapperProps {
  open: boolean;
}

const PostsIconWrapper = ({ open }: PostsIconWrapperProps) => {
  const navigate = useNavigate();
  const theme = useTheme();

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
          <Flex
            cursor="pointer"
            display="flex"
            alignItems="center"
            onClick={() => navigate("/posts")}
          >
            <IconButton>
              <PostsIcon />
            </IconButton>
            <Text color={theme.colors.textWhite} fontSize="14px">
              Posts
            </Text>
          </Flex>
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
            {open && (
              <Text color={theme.colors.textSubtle} fontSize="14px">
                {item.name}
              </Text>
            )}
          </NavigationNavLink>
        ))}
      </Flex>
    </Container>
  );
};

export default PostsIconWrapper;
