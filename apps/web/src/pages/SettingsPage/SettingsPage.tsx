import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { Divider } from "@mui/material";
import { Box, Flex } from "@phraze-app/ui";
import { PhrazeTheme } from "@phraze-app/theme";
import Text from "@phraze-app/ui/Text";
import GeneralSettingIcon from "./icons/GeneralSettingIcon";
import BrandingIcon from "./icons/BrandingIcon";
import ThemeIcon from "./icons/ThemeIcon";
import NavigationIcon from "./icons/NavigationIcon";
import ManageDomainIcon from "./icons/ManageDomainIcon";
import BillingsIcon from "./icons/BillingsIcon";

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
  // {
  // TODO - Fix this theme icon. It have a white line in the middle.
  //   icon: <ThemeIcon />,
  //   name: "Theme",
  //   subText: "Install and update theme",
  //   toLink: "theme",
  // },
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

const BILLING_AND_OTHERS = [
  {
    icon: <BillingsIcon />,
    name: "Billing & Plans",
    subText: "Manage your billing & subscription on phraze",
    toLink: "billing-and-plan",
  },
] as SettingsObjType[];

interface ListingProps {
  settingTypeName: string;
  settingList: SettingsObjType[];
  theme: PhrazeTheme;
}

const Listing = ({ settingTypeName, settingList, theme }: ListingProps) => (
  <>
    <Text mb="12px" fontWeight="bold" color={theme.colors.white}>
      {settingTypeName}
    </Text>
    <Flex display="flex" gap="1rem" maxWidth="1240px" flexWrap="wrap">
      {settingList.map((setting) => (
        <NavLink
          key={setting.toLink}
          to={setting?.toLink}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Flex
            border="1px solid black"
            width="fit-content"
            display="flex"
            gap="12px"
            p="12px"
            borderRadius="12px"
            minWidth="25rem"
            backgroundColor={theme.colors.backgroundContent}
            boxShadow={theme.shadows.card}
          >
            <Box>{setting?.icon}</Box>
            <Box>
              <Box fontWeight="bold" color={theme.colors.white} mb="4px">
                {setting?.name}
              </Box>
              <Text color={theme.colors.textSubtle} fontSize="14px">
                {setting?.subText}
              </Text>
            </Box>
          </Flex>
        </NavLink>
      ))}
    </Flex>
  </>
);

export const SettingsPage = () => {
  const theme = useTheme();

  return (
    <div>
      <Listing
        settingList={SETTINGS}
        settingTypeName="Website Setting"
        theme={theme}
      />
      <Divider
        component="div"
        style={{
          borderColor: theme.colors.grey555,
          marginTop: "1.875rem",
          marginBottom: "1.25rem",
        }}
      />
      <Listing
        settingList={BILLING_AND_OTHERS}
        settingTypeName="Billing"
        theme={theme}
      />
    </div>
  );
};

export default SettingsPage;
