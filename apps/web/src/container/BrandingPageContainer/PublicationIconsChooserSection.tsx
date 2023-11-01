import { useTheme } from "@emotion/react";
import { Box, PhzButton, PhzPaper, Tabs, Text } from "@phraze-app/ui";

const Panel = ({
  header,
  description,
  buttonType,
  onUploadButtonClickHandler,
}: {
  header: string;
  description: string;
  buttonType: "icon" | "logo" | "cover";
  onUploadButtonClickHandler: () => void;
}) => {
  const theme = useTheme();

  return (
    <Box>
      <Text fontWeight={600} mb={1}>
        Publication {header}
      </Text>
      <Text color={theme.colors.textSubtle} fontSize={1} mb={3}>
        {description}
      </Text>
      <PhzButton variant="primary" onClick={onUploadButtonClickHandler}>
        Upload {buttonType}
      </PhzButton>
    </Box>
  );
};

const LOGO_TABS = ["icon", "logo", "cover"];

export const PublicationIconsChooserSection = () => {
  return (
    <PhzPaper mt={3}>
      <Text fontWeight="600">Select publication images</Text>
      <Tabs
        tabLabels={LOGO_TABS}
        tabPanels={[
          <Panel
            header="icon"
            buttonType="icon"
            description="A square, social Icon used in the UI of your publication, at least 60x60px"
            onUploadButtonClickHandler={() => null}
          />,
          <Panel
            header="logo"
            buttonType="logo"
            description="The primary logo for your brand displayed across your theme, should be transparent and at least 600px x 72px"
            onUploadButtonClickHandler={() => null}
          />,
          <Panel
            header="cover"
            buttonType="cover"
            description="An optional large background image for your site"
            onUploadButtonClickHandler={() => null}
          />,
        ]}
      />
    </PhzPaper>
  );
};

export default PublicationIconsChooserSection;
