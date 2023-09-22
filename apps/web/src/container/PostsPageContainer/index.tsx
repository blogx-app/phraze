import { Box, Flex, Input } from "@phraze-app/ui";
import AddPostCard from "./AddPostCard";
import ContentCards from "./ContentCards";
import SearchIcon from "./icon/SearchIcon";

const PostsPageContainer = () => {
  return (
    <Box>
      <Flex gap="1rem">
        <AddPostCard />
        <ContentCards />
      </Flex>
      <Flex width="100%" gap="1rem">
        <Input
          startAdornment={<SearchIcon />}
          placeholder="Search..."
          style={{
            width: "100%",
          }}
          ContainerProps={{
            style: {
              width: "50%",
              marginTop: "1rem",
              maxWidth: "31rem",
            },
          }}
        />
        {/* <PostsPageContainer /> */}
      </Flex>
    </Box>
  );
};

export default PostsPageContainer;
