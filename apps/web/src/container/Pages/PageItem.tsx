import { useTheme } from "@emotion/react";
import { Flex, PostStateType, StateTags, Text } from "@phraze-app/ui";
import RightIconCircular from "../PostsPageContainer/icon/RightIconCircular";
import styled from "@emotion/styled";

export interface PageItemProps {
  pageTitle: string;
  pageState: PostStateType;
  createdAt: string;
}

const PageTitle = styled(Text)`
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

export const PageItem = ({
  pageTitle,
  pageState,
  createdAt,
}: PageItemProps) => {
  const theme = useTheme();
  return (
    <Flex
      p={3}
      height="10rem"
      borderRadius="8px"
      flexDirection="column"
      width="calc(33.3% - 0.66rem)"
      justifyContent="space-between"
      boxShadow={theme.shadows.card}
      background={theme.colors.backgroundContent}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        pb={2}
      >
        <PageTitle
          fontSize="1.5rem"
          color={theme.colors.textWhite}
          overflow="hidden"
        >
          {pageTitle}
        </PageTitle>
        <Flex
          alignItems="center"
          flexDirection="column"
          style={{ cursor: "pointer", lineHeight: 1 }}
        >
          <RightIconCircular />
          <Text fontSize="0.5rem" color={theme.colors.textAAA}>
            Edit
          </Text>
        </Flex>
      </Flex>

      <Flex
        borderTop={`1px ${theme.colors.grey555} solid`}
        pt={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <StateTags type={pageState}>{pageState}</StateTags>
        <Flex>
          <Text fontSize="0.75rem" color={theme.colors.textAAA}>
            Created at:{" "}
          </Text>
          <Text fontSize="0.75rem" color={theme.colors.textAAA}>
            12/12/12
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageItem;
