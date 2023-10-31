import { useTheme } from "@emotion/react";
import { Box, Flex, Input, Tabs, Text } from "@phraze-app/ui";

const GeneralSettings = () => {
  const theme = useTheme();

  return (
    <Flex gap="1rem">
      <div style={{ width: "100%" }}>
        <Tabs
          tabsPadding={0}
          tabLabels={["Publication Info"]}
          tabPanels={[
            <Box borderRadius="12px" mb="1rem">
              <Box>
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
            </Box>,
          ]}
        />
      </div>
    </Flex>
  );
};

export default GeneralSettings;
