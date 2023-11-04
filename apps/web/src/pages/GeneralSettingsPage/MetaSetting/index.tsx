import { Box } from "@mui/material";
import Text from "@phraze-app/ui/Text";
import GooglePreview from "./GooglePreview/GooglePreview";
import FacebookPreview from "./FacebookPreview/FacebookPreview";
import TwitterPreview from "./TwitterPreview/TwitterPreview";
import { PhzPaper, Tabs } from "@phraze-app/ui";
import { useTheme } from "@emotion/react";

const MetaSetting = () => {
  const theme = useTheme();
  return (
    <PhzPaper>
      <Box borderRadius="12px">
        <Text
          fontWeight="bold"
          fontSize="1rem"
          color={theme.colors.foreground}
          mb={2}
        >
          Site Meta Settings
        </Text>
        <Tabs
          tabLabels={["Meta Settings", "Facebook Card", "Twitter Card"]}
          tabPanels={[
            <GooglePreview />,
            <FacebookPreview />,
            <TwitterPreview />,
          ]}
        />
      </Box>
    </PhzPaper>
  );
};

export default MetaSetting;
