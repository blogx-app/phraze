import { Box } from "@mui/material";
import Text from "ui/Text";
import GooglePreview from "./GooglePreview/GooglePreview";
import FacebookPreview from "./FacebookPreview/FacebookPreview";
import TwitterPreview from "./TwitterPreview/TwitterPreview";
import { Tabs } from "@phraze-app/ui";

const MetaSetting = () => {
  return (
    <Box borderRadius="12px">
      <Text fontWeight="bold" mb="1rem" fontSize="1.25rem">
        Site Meta Settings
      </Text>
      <Tabs
        tabLabels={["Meta Settings", "Facebook Card", "Twitter Card"]}
        tabPanels={[<GooglePreview />, <FacebookPreview />, <TwitterPreview />]}
      />
    </Box>
  );
};

export default MetaSetting;
