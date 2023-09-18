import { Box } from "@mui/material";
import { Button, Input, TextArea } from "@phraze-app/ui";
import Text from "ui/Text";
import FacebookPreviewPlaceholder from "./FacebookPreviewPlaceholder";

const FacebookPreview = () => {
  return (
    <div>
      <Box ml="0.5rem" mb="0.5rem">
        <Text fontSize="14px" fontWeight="bold">
          Facebook card{" "}
        </Text>
        <Text fontSize="0.75rem" color="#808080">
          Customized structured data of your site for Facebook
        </Text>
      </Box>
      <Box display="flex" gap="1rem">
        <Box minWidth="30rem">
          <Box
            bgcolor="#D9D9D9"
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="3rem 0"
            border="1px solid black"
            borderRadius="8px"
            mb="8px"
            mt="8px"
          >
            <Button style={{ background: "#00CCFF" }}>Add X Image</Button>
          </Box>
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
          <FacebookPreviewPlaceholder />
        </div>
      </Box>
    </div>
  );
};

export default FacebookPreview;
