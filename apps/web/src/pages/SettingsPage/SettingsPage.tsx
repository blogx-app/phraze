import { ReactNode } from "react";
import { useTheme } from "@emotion/react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import GeneralSettingIcon from "./icons/GeneralSettingIcon";
import BrandingIcon from "./icons/BrandingIcon";
import ThemeIcon from "./icons/ThemeIcon";
import NavigationIcon from "./icons/NavigationIcon";
import Text from "@phraze-app/ui/Text";
import ManageDomainIcon from "./icons/ManageDomainIcon";

export type SettingsObjType = {
  icon: ReactNode;
  name: string;
  subText: string;
  toLink: string;
};

const SETTINGS = [
  {
    icon: <GeneralSettingIcon />,
    name: "General",
    subText: "Basic publication details and site metadata",
    toLink: "general",
  },
  {
    icon: <BrandingIcon />,
    name: "Branding",
    subText: "Upload site logo and set accent color",
    toLink: "branding",
  },
  ,
  {
    // TODO - Fix this theme icon. It have a white line in the middle.
    icon: <ThemeIcon />,
    name: "Theme",
    subText: "Install and update theme",
    toLink: "theme",
  },
  {
    icon: <NavigationIcon />,
    name: "Navigation",
    subText: "Set up primary and secondary menu",
    toLink: "navigation",
  },
  {
    icon: <ManageDomainIcon />,
    name: "Manage Domain",
    subText: "Host this blog on your custom (sub)/domain",
    toLink: "manage-domain",
  },
] as SettingsObjType[];

export const SettingsPage = () => {
  const theme = useTheme();

  return (
    <div>
      <Text mb="12px" fontWeight="bold" color={theme.colors.white}>
        Website Setting
      </Text>
      <Box display="flex" gap="1rem" maxWidth="1240px" flexWrap="wrap">
        {SETTINGS.map((setting) => (
          <NavLink
            key={setting.toLink}
            to={setting?.toLink}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box
              border="1px solid black"
              width="fit-content"
              display="flex"
              gap="12px"
              p="12px"
              borderRadius="12px"
              minWidth="25rem"
              bgcolor={theme.colors.backgroundContent}
              boxShadow={theme.shadows.card}
            >
              <Box>{setting?.icon}</Box>
              <Box>
                <Box fontWeight="bold" color={theme.colors.white}>
                  {setting?.name}
                </Box>
                <Box color={theme.colors.text} fontSize="14px">
                  {setting?.subText}
                </Box>
              </Box>
            </Box>
          </NavLink>
        ))}
      </Box>
    </div>
  );
};

export default SettingsPage;
