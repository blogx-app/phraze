import { useTheme } from "@emotion/react";
import { Box, PhzPaper, PostStateType, StateTags } from "@phraze-app/ui";
import Text from "@phraze-app/ui/Text";
import DomainTabs from "./DomainTabs";

const ManageDomainPage = () => {
  const theme = useTheme();

  return (
    <Box maxWidth="500px">
      <PhzPaper mb={3}>
        <Text mb="10px" color={theme.colors.foreground} fontSize={1}>
          Custom domian status:{" "}
          <StateTags tagType="filled" type={PostStateType.published}>
            Connected
          </StateTags>
        </Text>
        <Text color={theme.colors.foreground} fontSize={1}>
          Hosted at: {/* Make this an external link */}
          <Text fontWeight="normal" as="span" color={theme.colors.textSubtle}>
            https://demo-blog.blogx.app
          </Text>
        </Text>
      </PhzPaper>

      <DomainTabs />
    </Box>
  );
};

export default ManageDomainPage;
