import { Box, Flex, Input } from "@phraze-app/ui";
import AddPostCard from "./AddPostCard";
import ContentCards from "./ContentCards";
import SearchIcon from "./icon/SearchIcon";
import PostSelectButtonContainer, {
  ListingType,
} from "./PostSelectButtonContainer";

const PostsPageContainer = () => {
  return (
    <Flex flexDirection="column" gap="1rem">
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
              maxWidth: "31rem",
            },
          }}
        />
        <PostSelectButtonContainer selectedListingType={ListingType.Row} />
      </Flex>
    </Flex>
  );
};

export default PostsPageContainer;
