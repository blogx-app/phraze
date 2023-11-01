import { Box } from "@phraze-app/ui";
import {
  AccentColorContainer,
  PublicationIconsChooserSection,
} from "../../container/BrandingPageContainer";

const BrandingSettingPage = () => {
  return (
    <Box maxWidth="48rem">
      <AccentColorContainer />
      <PublicationIconsChooserSection />
    </Box>
  );
};

export default BrandingSettingPage;
