import { Flex, Input } from "@phraze-app/ui";
import AddPostCard from "./AddPostCard";
import ContentCards from "./ContentCards";
import PostSelectButtonContainer, {
  ListingTypeEnum,
} from "./PostSelectButtonContainer";
import Post from "../Post";
import PhzSearchInput from "@phraze-app/ui/PhzSearchInput/PhzSearchInput";

const PostsPageContainer = () => {
  return (
    <Flex flexDirection="column" gap="1rem">
      <Flex gap="1rem">
        <AddPostCard />
        <ContentCards />
      </Flex>
      <Flex width="100%" gap="1rem" alignItems="center">
        <PhzSearchInput />
        <PostSelectButtonContainer selectedListingType={ListingTypeEnum.Row} />
      </Flex>
      <Post posts={[]} listingType={ListingTypeEnum.Row} />
    </Flex>
  );
};

export default PostsPageContainer;
