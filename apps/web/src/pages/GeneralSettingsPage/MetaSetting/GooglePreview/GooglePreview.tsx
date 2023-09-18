import { Box } from "@mui/material";
import { Input, TextArea } from "@phraze-app/ui";
import Text from "ui/Text";
import GooglePreviewPlaceholder from "./GooglePreviewPlaceholder";

const GooglePreview = () => {
  return (
    <div>
      <Box ml="0.5rem" mb="0.5rem">
        <Text fontSize="14px" fontWeight="bold">
          Meta Settings
        </Text>
        <Text fontSize="0.75rem" color="#808080">
          Extra content for search engines
        </Text>
      </Box>
      <Box display="flex" gap="1rem">
        <Box minWidth="30rem">
          <Input
            ContainerProps={{
              mb: "0.5rem",
            }}
            label="Title"
            helperText="The name of your site"
            placeholder="Dunder Mifflin Paper Company | Best Paper"
          />
          <TextArea
            label="Description"
            helperText="Used in your theme, meta data and search results"
            placeholder="Dunder Mifflin paper company is a very old company selling paper since 1000 B.C."
          />
        </Box>
        <div style={{ width: "100%" }}>
          <GooglePreviewPlaceholder />
        </div>
      </Box>
    </div>
  );
};

export default GooglePreview;
