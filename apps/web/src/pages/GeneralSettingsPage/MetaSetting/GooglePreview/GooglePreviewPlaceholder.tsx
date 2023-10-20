import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { Input } from "@phraze-app/ui";
import Text from "@phraze-app/ui/Text";

// TODO - Add a globe image near name
const GooglePreviewPlaceholder = () => {
  const theme = useTheme();

  return (
    <div>
      <Text
        fontSize="0.75rem"
        fontWeight="bold"
        color={theme.colors.textWhite}
        ml="8px"
        mb="4px"
      >
        Seach Engine Result Preview
      </Text>
      <div
        style={{
          userSelect: "none",
        }}
      >
        <Box border="1px solid black" borderRadius="8px" p="1rem">
          <Box display="flex" gap="1rem" mb="12px">
            <Text fontSize="1.5rem" fontWeight="bold">
              Google
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

export default GooglePreviewPlaceholder;
