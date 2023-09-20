import { Box, Flex } from "@phraze-app/ui";
import AddPostCard from "./AddPostCard";
import ContentCards from "./ContentCards";

const PostsPageContainer = () => {
  return (
    <Box>
      <Flex gap="1rem">
        <AddPostCard />
        <ContentCards />
      </Flex>
    </Box>
  );
};

export default PostsPageContainer;
