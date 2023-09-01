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
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleOnClickSettings = () => {
    navigate("/settings");
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
            justifyContent: "space-between",
            background: "black",
            overflow: "visible",
          },
        }}
      >
        <div style={{ margin: "0 auto", marginTop: "30px" }}>
          <NavLink to="/home">
            <PhrazeLogo />
          </NavLink>
        </div>
        <OpenButtonContainer onClick={handleDrawerClose} open={open}>
          <ArrowIcon />
        </OpenButtonContainer>
        <NavigationComponent open={open} />
        <BottomIconsContainer>
          <span onClick={handleOnClickSettings} style={{ cursor: "pointer" }}>
            <SettingsGearIcon />
          </span>
          <span style={{ cursor: "pointer" }}>
            <UserIcon />
          </span>
        </BottomIconsContainer>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}

export { Sidebar };
