import { useTheme } from "@emotion/react";
import { Box, Button, Flex, PhzButton, Text } from "@phraze-app/ui";
import { PagesListing } from "../../container/Pages";

const PagesPage = () => {
  const theme = useTheme();

  return (
    <Box maxWidth="48rem">
      <Flex alignItems="center" gap="1rem">
        <Box
          p={2}
          borderRadius="8px"
          border={`${theme.colors.greyAAA} 1px dashed`}
        >
          <Text color={theme.colors.textAAA}>
            A page is basically a blog post without any author, date, social
            buttons etc. To think of it, you can create a whole website using
            pages 😉
          </Text>
        </Box>
        <Flex flexDirection="column" alignItems="center" gap="0.5rem">
          <PhzButton variant="primary">Add new page</PhzButton>
          <Text
            fontSize="0.75rem"
            color={theme.colors.primary}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            View Sample Page
          </Text>
        </Flex>
      </Flex>

      <PagesListing />
    </Box>
  );
};

export default PagesPage;
