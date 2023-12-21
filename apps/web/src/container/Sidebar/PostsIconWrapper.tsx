import { animated } from "react-spring";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Flex } from "@phraze-app/ui";
import { PenNib } from "@phosphor-icons/react";
import OrangeAddIcon from "./icons/OrangeAddIcon";
import NavigationLinkComponent from "./NavigationLinkComponent";
import { routesName } from "../../route";
import useMatchedRoute from "../../hooks/useMatchedRoute";
import useAppNavigation from "../../hooks/useAppNavigation";

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

const PostsIconWrapper = () => {
  const navigate = useAppNavigation({
    blogName: "acme",
  });
  const getAppRoute = useMatchedRoute({
    blogName: "acme",
  });

  const POSTS_ITEMS = [
    {
      name: "Drafts",
      toLink: routesName.postDraft,
    },
    {
      name: "Published",
      toLink: routesName.postPublished,
    },
    {
      name: "Scheduled",
      toLink: routesName.postScheduled,
    },
  ];

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
          toLink={getAppRoute(routesName.posts)}
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
            toLink={getAppRoute(item.toLink)}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default PostsIconWrapper;
