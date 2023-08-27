import { Box } from "@mui/material";
import Text from "ui/Text";
import GooglePreview from "./GooglePreview/GooglePreview";

const MetaSetting = () => {
  return (
    <Box border="1px solid black" borderRadius="12px">
      <Text
        fontWeight="bold"
        p="12px 0 8px 16px"
        style={{
          borderBottom: "1px solid black",
        }}
      >
        Site Meta Settings
      </Text>
      <GooglePreview />
    </Box>
  );
};

export default MetaSetting;
