import { animated } from "react-spring";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Flex } from "@phraze-app/ui";
import { PenNib } from "@phosphor-icons/react";
import OrangeAddIcon from "./icons/OrangeAddIcon";
import NavigationLinkComponent from "./NavigationLinkComponent";
import { useNavigate } from "react-router-dom";
import { routesName } from "../../route";

// TODO - fix this. remove any type from here.
const Container = styled(animated.div as any)`
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  overflow: hidden;

  gap: 8px;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
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

const PostsIconWrapper = () => {
  const navigate = useNavigate();

  const onAddBlogIconClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    navigate(routesName.editor);
  };

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <NavigationLinkComponent
          name="Posts"
          toLink="/posts"
          StartIcon={PenNib}
          EndIcon={OrangeAddIcon as any}
          onEndIconClick={onAddBlogIconClick}
        />
      </Box>
      <Flex gap="14px" flexDirection="column">
        {POSTS_ITEMS.map((item, i) => (
          <NavigationLinkComponent
            key={item.name + item.toLink}
            name={item.name}
            toLink={item.toLink}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default PostsIconWrapper;
