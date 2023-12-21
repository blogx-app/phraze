import {
  Box,
  Flex,
  PhzAvatars,
  PhzButton,
  StateTags,
  Text,
} from "@phraze-app/ui";
import Tags from "@phraze-app/ui/Tags/Tags";
import { useTheme } from "@emotion/react";
import { PostImageWrapper, PostRowViewContainer } from "./styles";
import { SinglePostProps } from "./types";
import TrashIcon from "../../pages/PostsPage/icons/TrashIcon";
import EditButtonIcon from "../../pages/PostsPage/icons/EditButtonIcon";

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
            <StateTags type={post.state as any}>StateTag</StateTags>
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
      <Flex
        borderTop={theme.borders.card}
        pt={2}
        mt="0.75rem"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Flex alignItems="center" gap="0.25rem" mr="0.5rem">
            <PhzAvatars size="20px" />
            <Text fontSize="0.75rem" color={theme.colors.textWhite}>
              Sanjib Kumar Sah
            </Text>
          </Flex>
          <Flex>
            <Text
              fontSize="0.75rem"
              fontWeight="bold"
              color={theme.colors.textWhite}
            >
              Last updated:{" "}
              <Text as="span" fontWeight="normal">
                12/12/12
              </Text>
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="center" gap="0.5rem">
          <TrashIcon />
          <PhzButton
            variant="primary"
            style={{
              fontSize: "12px",
              padding: "0 0 0 8px",
              borderRadius: "1rem",
            }}
          >
            Edit
            <EditButtonIcon />
          </PhzButton>
        </Flex>
      </Flex>
    </PostRowViewContainer>
  );
};

export default PostRowView;
