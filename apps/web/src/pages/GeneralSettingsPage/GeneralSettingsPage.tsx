import { Box, Divider } from "@mui/material";
import { Button, Input } from "@phraze-app/ui";
import Text from "@phraze-app/ui/Text";
import MetaSetting from "./MetaSetting";
// import SocialSharing from "./SocialSharing";
import { useTheme } from "@emotion/react";
import GeneralSettings from "./MetaSetting/GeneralSettings";

// TODO - Create Component for PublicationInfo
const GeneralSettingsPage = () => {
  const theme = useTheme();

  return (
    <Box maxWidth="60rem">
      <GeneralSettings />
      <Divider
        component="div"
        style={{ borderColor: theme.colors.grey555, marginBottom: "2rem" }}
      />
      <MetaSetting />
      <Button
        style={{
          background: theme.colors.primary,
          color: theme.colors.black,
          padding: "0.5rem 1rem",
        }}
      >
        Save all
      </Button>
      {/* <SocialSharing /> */}
    </Box>
  );
};

export default GeneralSettingsPage;
