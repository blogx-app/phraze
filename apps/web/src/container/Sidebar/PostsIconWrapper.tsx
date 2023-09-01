import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import Text from "ui/Text";
import DraftsIcon from "./icons/DraftsIcon";
import { NavigationNavLink } from "./style";
import PublishedIcon from "./icons/PublishedIcon";
import ScheduledIcon from "./icons/ScheduledIcon";
import ArrowIcon from "./icons/ArrowIcon";
import PostsIcon from "./icons/PostsIcon";
import OrangeAddIcon from "./icons/OrangeAddIcon";

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
  const [openPostItem, setOpenPostItem] = useState(open);

  const toggleOpen = () => setOpenPostItem((open) => !open);
  const animationProps = useSpring({
    height: openPostItem ? "200px" : "62px",
  });

  console.log(animationProps);

  useEffect(() => {
    setOpenPostItem(open);
  }, [open]);

  return (
    <Container style={animationProps}>
      {open && (
        <NavigationNavLink to="">
          <IconButton>
            <PostsIcon />
          </IconButton>
          <Text>Posts</Text>
        </NavigationNavLink>
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
