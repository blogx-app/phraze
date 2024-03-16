import { Flex, Input } from "@phraze-app/ui";
import AddPostCard from "./AddPostCard";
import ContentCards from "./ContentCards";
import PhzSearchInput from "@phraze-app/ui/PhzSearchInput/PhzSearchInput";
import { ListingTypeEnum } from "./PostSelectButtonContainer";
import Post from "../Post";

const PostsPageContainer = () => {
  return (
    <Flex flexDirection="column" gap="1rem">
      <Flex gap="1rem">
        <AddPostCard />
        <ContentCards />
      </Flex>
      <Flex flexDirection="column" maxWidth="38rem" gap="1rem">
        <PhzSearchInput />
        <Post posts={[]} listingType={ListingTypeEnum.Row} />
      </Flex>
    </Flex>
  );
};

export default PostsPageContainer;
