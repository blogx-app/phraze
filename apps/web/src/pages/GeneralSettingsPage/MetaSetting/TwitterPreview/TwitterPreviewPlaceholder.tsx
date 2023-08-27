import { Box } from "@mui/material";
import { Input } from "ui";
import Text from "ui/Text";

// TODO - Add a globe image near name
// TODO - Add an image uploading button and placeholder as it is in design
const TwitterPreviewPlaceholder = () => {
  return (
    <div>
      <Text fontSize="0.75rem" fontWeight="bold" color="#808080" ml="8px">
        Twitter Preview
      </Text>
      <div
        style={{
          userSelect: "none",
        }}
      >
        <Box border="1px solid black" borderRadius="8px" p="1rem">
          <Box display="flex" gap="1rem" mb="12px">
            <Text fontSize="1.5rem" fontWeight="bold">
              Twitter
            </Text>
            <Input
              disabled
              ContainerProps={{
                width: "100%",
              }}
            />
          </Box>
          <Box>
            <Text>Dunder Mifflin</Text>
            <Text fontSize="12px" color="#808080">
              www.dunder-mifflin.com
            </Text>
            <Text fontSize="1.25rem" fontWeight="400" color="#1f75ff">
              Dunder Mifflin Paper Company | Best Paper
            </Text>
            <Text fontSize="14px" color="#bdc1c6">
              Dunder Mifflin in the best paper company there is
            </Text>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default TwitterPreviewPlaceholder;
