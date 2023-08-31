import { Box } from "@mui/material";
import { Input } from "ui";
import Text from "ui/Text";
import MetaSetting from "./MetaSetting";

// TODO - Implement social sharing
// TODO - Add save button
// TODO - Create Component for PublicationInfo
const GeneralSettingsPage = () => {
  return (
    <div>
      <Text fontSize="1.25rem" fontWeight="bold" mb="0.75rem">
        General Settings
      </Text>
      <Box display="flex" gap="1rem">
        <div
          style={{
            maxWidth: "60rem",
          }}
        >
          {/* publication info */}
          <Box border="1px solid black" borderRadius="12px" mb="1rem">
            <Box borderBottom="1px solid black">
              <Text fontWeight="bold" p="12px 0 8px 16px">
                Publication Info
              </Text>
            </Box>
            <Box p="12px">
              <Input
                ContainerProps={{
                  mb: "0.5rem",
                }}
                label="Title"
                helperText="The name of your site"
                placeholder="Dunder Mifflin Paper Company | Best Paper"
              />
              <Input
                label="Description"
                helperText="Used in your theme, meta data and search results"
                placeholder="Dunder Mifflin paper company is a very old company selling paper since 1000 B.C."
              />
            </Box>
          </Box>
          {/* <MetaSetting /> */}
        </div>
        <Box border="1px solid black" borderRadius="12px">
          <Text>Social Sharing</Text>
        </Box>
      </Box>
    </div>
  );
};

export default GeneralSettingsPage;
