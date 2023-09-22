import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import UserIcon from "./icons/UserIcon";
import { BottomIconsContainer } from "./style";
import SettingsGearIcon from "./icons/SettingsGearIcon";
import NavigationComponent from "./NavigationComponent";
import Text from "@phraze-app/ui/Text";
import UpgradeToPro from "./UpgradeToPro";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  // padding: "0 30px",
  borderRight: "1px #555555 solid",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  borderRadius: "8px",
  whiteSpace: "nowrap",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
}));

interface MiniDrawerProps {
  children?: React.ReactNode;
}

export default function Sidebar({ children }: MiniDrawerProps) {
  const navigate = useNavigate();

  const handleOnClickSettings = () => {
    navigate("/settings");
  };

  const handleOnClickProfile = () => {
    navigate("/profile");
  };

  return (
    <Box display="flex">
      <Drawer
        variant="permanent"
        open={true}
        sx={{ overflow: "visible" }}
        PaperProps={{
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            background: "black",
            overflow: "visible",
          },
        }}
      >
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
              <Text fontSize="14px" color="#888">
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
              <Text fontSize="14px" color="#888">
                Profile
              </Text>
            </Box>
          </BottomIconsContainer>
        </div>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, background: "#191919" }}
        minHeight="100vh"
      >
        {children}
      </Box>
    </Box>
  );
}

export { Sidebar };
