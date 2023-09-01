import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import styled from "@emotion/styled";
import { Box, IconButton } from "@mui/material";
import Text from "ui/Text";
import DraftsIcon from "./icons/DraftsIcon";
import { NavigationNavLink } from "./style";
import PublishedIcon from "./icons/PublishedIcon";
import ScheduledIcon from "./icons/ScheduledIcon";
import ArrowIcon from "./icons/ArrowIcon";
import PostsIcon from "./icons/PostsIcon";
import OrangeAddIcon from "./icons/OrangeAddIcon";
import { useNavigate } from "react-router-dom";

const Container = styled(animated.div)`
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
    icon: <DraftsIcon />,
    toLink: "/posts/draft",
  },
  {
    name: "Published",
    icon: <PublishedIcon />,
    toLink: "/posts/published",
  },
  {
    name: "Scheduled",
    icon: <ScheduledIcon />,
    toLink: "/post/scheduled",
  },
];

interface PostsIconWrapperProps {
  open: boolean;
}

const PostsIconWrapper = ({ open }: PostsIconWrapperProps) => {
  const navigate = useNavigate();
  const [openPostItem, setOpenPostItem] = useState(open);

  const toggleOpen = () => setOpenPostItem((open) => !open);
  const animationProps = useSpring({
    width: open ? "100%" : "inherit",
    height: openPostItem ? "189px" : "62px",
    alignItems: open ? "flex-start" : "center",
    padding: open ? "12px" : "4px",
  });

  useEffect(() => {
    setOpenPostItem(open);
  }, [open]);

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
            <Text color="white">Posts</Text>
          </Box>
          {open && (
            <IconButton onClick={() => navigate("/editor")}>
              <OrangeAddIcon />
            </IconButton>
          )}
        </Box>
      )}
      {!open && openPostItem && (
        <NavigationNavLink to="/editor">
          <IconButton>
            <OrangeAddIcon />
          </IconButton>
        </NavigationNavLink>
      )}
      {openPostItem ? (
        POSTS_ITEMS.map((item, i) => (
          <NavigationNavLink
            style={{ marginLeft: open ? "1rem" : "" }}
            to={item.toLink}
            key={`${item.name}-${item.toLink}-${i}`}
          >
            <IconButton>{item.icon}</IconButton>
            {open && <Text>{item.name}</Text>}
          </NavigationNavLink>
        ))
      ) : (
        <div
          style={{
            padding: "0.5rem",
            paddingBottom: "0",
            lineHeight: 1,
          }}
        >
          <PostsIcon />
        </div>
      )}

      {!open && (
        <OpenButtonContainer open={openPostItem} onClick={toggleOpen}>
          <ArrowIcon />
        </OpenButtonContainer>
      )}
    </Container>
  );
};

export default PostsIconWrapper;
