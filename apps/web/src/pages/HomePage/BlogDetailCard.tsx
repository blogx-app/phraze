import { useTheme } from "@emotion/react";
import { Flex, PhzAvatars, PhzButton, PhzPaper, Text } from "@phraze-app/ui";
import Tags from "@phraze-app/ui/Tags/Tags";
import { routesName } from "../../route";
import useAppNavigation from "../../hooks/useAppNavigation";

export const BlogDetailCard = () => {
  const theme = useTheme();
  const navigate = useAppNavigation({
    blogName: "acme",
  });

  const onClickViewDashboard = () => {
    // @todo - should navigate to correct blog page.
    navigate(routesName.posts);
  };

  const onClickWritePost = () => {
    //@todo - should create new posts
    navigate(routesName.posts);
  };

  return (
    <PhzPaper
      width="fit-content"
      minWidth="24rem"
      minHeight="10rem"
      display="flex"
      style={{ flexDirection: "column", justifyContent: "space-between" }}
    >
      <div>
        <Flex justifyContent="space-between">
          <Flex gap="0.5rem" alignItems="center">
            <PhzAvatars name="Acme Inc" size={32} />
            <div>
              <Text mb={1}>Acme Inc</Text>

              <Text fontSize="14px" color="textSubtle">
                <a>https://acme.phraze.xyz/</a>
              </Text>
            </div>
          </Flex>
          <Tags color={theme.colors.textSubtle} toLink="">
            Owner
          </Tags>
        </Flex>
      </div>

      <Flex gap="1rem">
        <PhzButton
          height="2.5rem"
          variant="secondary"
          width="50%"
          onClick={onClickViewDashboard}
        >
          View Dashboard
        </PhzButton>
        <PhzButton
          height="2.5rem"
          variant="primary"
          width="50%"
          onClick={onClickWritePost}
        >
          Write Post
        </PhzButton>
      </Flex>
    </PhzPaper>
  );
};

export default BlogDetailCard;
