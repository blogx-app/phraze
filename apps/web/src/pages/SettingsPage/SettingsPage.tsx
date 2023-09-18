import { ReactNode } from "react";
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
  return (
    <div>
      <Text mb="12px" fontWeight="bold">
        Website Setting
      </Text>
      <Box display="flex" gap="1rem" maxWidth="1240px" flexWrap="wrap">
        {SETTINGS.map((setting) => (
          <NavLink
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
            >
              <Box>{setting?.icon}</Box>
              <Box>
                <Box fontWeight="bold">{setting?.name}</Box>
                <Box color="#181818">{setting?.subText}</Box>
              </Box>
            </Box>
          </NavLink>
        ))}
      </Box>
    </div>
  );
};

export default SettingsPage;
