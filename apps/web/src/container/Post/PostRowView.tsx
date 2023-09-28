import { Box, Flex, StateTags, Text } from "@phraze-app/ui";
import Tags from "@phraze-app/ui/Tags/Tags";
import { useTheme } from "@emotion/react";
import { PostImageWrapper, PostRowViewContainer } from "./styles";
import { SinglePostProps } from "./types";

const PostRowView = ({ post }: { post: SinglePostProps }) => {
  const theme = useTheme();

  return (
    <PostRowViewContainer flexDirection="column">
      <Flex width="100%" justifyContent="space-between" gap="1rem">
        <Flex>
          <PostImageWrapper src={post.thumbnail} />
        </Flex>
        <Flex flexDirection="column" gap="1rem" width="100%">
          <Flex justifyContent="space-between">
            <StateTags type={post.state}>StateTag</StateTags>
            <Flex gap="0.5rem">
              {post.tags.map((tag) => (
                <Tags toLink={tag.tagLink} key={tag.name}>
                  {tag.name}
                </Tags>
              ))}
            </Flex>
          </Flex>
          <Box>
            <Text color="white" fontSize="1rem" fontWeight="400" mb="0.5rem">
              {post.title}
            </Text>
            <Text color="#aaa" fontSize="14px">
              {post.blogContent}
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex borderTop={`1px solid ${theme.colors.background}`} mt="0.75rem">
        <Flex></Flex>
        <Flex></Flex>
      </Flex>
    </PostRowViewContainer>
  );
};

export default PostRowView;
