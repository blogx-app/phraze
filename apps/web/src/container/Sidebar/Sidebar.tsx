import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import UserIcon from "./icons/UserIcon";
import { BottomIconsContainer, OpenButtonContainer } from "./style";
import SettingsGearIcon from "./icons/SettingsGearIcon";
import PhrazeLogo from "./icons/PhrazeLogo";
import ArrowIcon from "./icons/ArrowIcon";
import NavigationComponent from "./NavigationComponent";
import Text from "ui/Text";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  marginLeft: "1rem",
  marginTop: "1rem",
  height: "calc(100vh - 2rem)",
  borderRadius: "12px",
  padding: "0 30px",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  borderRadius: "12px",
  height: "calc(100vh - 2rem)",
  marginLeft: "1rem",
  marginTop: "1rem",
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  borderRadius: "8px",
  whiteSpace: "nowrap",
  marginTop: "1rem",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface MiniDrawerProps {
  children?: React.ReactNode;
}

// TODO - handle open drawer state
// TODO - Add open and close icon
// TODO - settings handler should pe passed in props
export default function Sidebar({ children }: MiniDrawerProps) {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  const handleOnClickSettings = () => {
    navigate("/settings");
  };

  const handleOnClickProfile = () => {
    navigate("/profile");
  };

  const handleDrawerClose = () => {
    setOpen((state) => !state);
  };

  return (
    <Box display="flex">
      <Drawer
        variant="permanent"
        open={open}
        sx={{ overflow: "visible" }}
        PaperProps={{
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: open ? "flex-start" : "",
            justifyContent: "space-between",
            background: "black",
            overflow: "visible",
          },
        }}
      >
        <div
          style={{
            margin: open ? "30px 0 0 0" : "30px auto 0 auto",
          }}
        >
          <NavLink to="/home">
            {open ? (
              <img style={{ height: "26px" }} src="/phraze_full_logo.webp" />
            ) : (
              <PhrazeLogo />
            )}
          </NavLink>
        </div>
        <OpenButtonContainer onClick={handleDrawerClose} open={open}>
          <ArrowIcon />
        </OpenButtonContainer>
        <NavigationComponent open={open} />
        <BottomIconsContainer style={{ width: open ? "100%" : undefined }}>
          <Box
            display="flex"
            gap="8px"
            padding={open ? "4px 8px" : undefined}
            onClick={handleOnClickSettings}
            style={{ cursor: "pointer" }}
          >
            <SettingsGearIcon />
            {open && (
              <Text fontSize="1rem" color="white">
                Settings
              </Text>
            )}
          </Box>
          <Box
            display="flex"
            gap="8px"
            padding={open ? "4px 8px" : undefined}
            onClick={handleOnClickProfile}
            style={{ cursor: "pointer" }}
          >
            <UserIcon />
            {open && (
              <Text fontSize="1rem" color="white">
                Profile
              </Text>
            )}
          </Box>
        </BottomIconsContainer>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}

export { Sidebar };
