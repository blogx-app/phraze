import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";
import Text from "@phraze-app/ui/Text";
import { PhzDrawer } from "@phraze-app/ui";
import UserIcon from "./icons/UserIcon";
import { BottomIconsContainer } from "./style";
import SettingsGearIcon from "./icons/SettingsGearIcon";
import NavigationComponent from "./NavigationComponent";
import UpgradeToPro from "./UpgradeToPro";

interface MiniDrawerProps {
  children?: React.ReactNode;
  sidebarHidden?: boolean;
}

export default function Sidebar({ children, sidebarHidden }: MiniDrawerProps) {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleOnClickSettings = () => {
    navigate("/settings");
  };

  const handleOnClickProfile = () => {
    navigate("/profile");
  };

  return (
    <Box display="flex">
      {!sidebarHidden && (
        <PhzDrawer open={true}>
          <div style={{ width: "100%", padding: "0 24px" }}>
            <div
              style={{
                margin: "30px 0 0 0",
              }}
            >
              <NavLink to="/home">
                <img style={{ height: "32px" }} src="/phraze_full_logo.webp" />
              </NavLink>
            </div>
            <NavigationComponent open={true} />
          </div>
          <div style={{ width: "100%" }}>
            <UpgradeToPro />
            <BottomIconsContainer style={{ width: "100%" }}>
              <Box
                display="flex"
                gap="8px"
                padding="4px 8px"
                paddingLeft="1rem"
                alignItems="center"
                onClick={handleOnClickSettings}
                style={{ cursor: "pointer" }}
              >
                <SettingsGearIcon />
                <Text fontSize="14px" color={theme.colors.textWhite}>
                  Settings
                </Text>
              </Box>
              <Box
                display="flex"
                gap="8px"
                padding="4px 8px"
                paddingLeft="1rem"
                alignItems="center"
                onClick={handleOnClickProfile}
                style={{ cursor: "pointer" }}
              >
                <UserIcon />
                <Text fontSize="14px" color={theme.colors.textWhite}>
                  Profile
                </Text>
              </Box>
            </BottomIconsContainer>
          </div>
        </PhzDrawer>
      )}
      <Box
        component="main"
        sx={{ flexGrow: 1, background: "#191919" }}
        minHeight="100vh"
        height="100vh"
        overflow="scroll"
      >
        {children}
      </Box>
    </Box>
  );
}

export { Sidebar };
