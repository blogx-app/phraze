import { Box, Divider } from "@mui/material";
import { Flex, PhzButton, Text } from "@phraze-app/ui";
import MetaSetting from "./MetaSetting";
// import SocialSharing from "./SocialSharing";
import { useTheme } from "@emotion/react";
import GeneralSettings from "./MetaSetting/GeneralSettings";

// TODO - Create Component for PublicationInfo
const GeneralSettingsPage = () => {
  const theme = useTheme();

  return (
    <Box maxWidth="60rem">
      <Flex justifyContent="space-between" alignItems="flex-end" mb={3}>
        <Text color={theme.colors.foreground} fontWeight="bold">
          Metadata Settings
        </Text>
        <PhzButton variant="primary" px={5}>
          Save All
        </PhzButton>
      </Flex>
      <GeneralSettings />
      <MetaSetting />
      {/* <SocialSharing /> */}
    </Box>
  );
};

export default GeneralSettingsPage;
