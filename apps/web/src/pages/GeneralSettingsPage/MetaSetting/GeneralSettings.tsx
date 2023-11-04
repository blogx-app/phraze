import { useTheme } from "@emotion/react";
import { Box, Flex, Input, PhzPaper, Tabs, Text } from "@phraze-app/ui";

const GeneralSettings = () => {
  const theme = useTheme();

  return (
    <PhzPaper mb={3}>
      <Flex gap="1rem">
        <div style={{ width: "100%" }}>
          <Text color={theme.colors.foreground} fontWeight="bold">
            General Settings
          </Text>
          <Tabs
            tabsPadding={0}
            tabLabels={["Publication Info"]}
            tabPanels={[
              <Box borderRadius="12px" mb="1rem">
                <Box>
                  <Input
                    ContainerProps={{
                      mb: 3,
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
    </PhzPaper>
  );
};

export default GeneralSettings;
