import React from "react";
import MuiDrawer, { DrawerProps } from "@mui/material/Drawer";
import { styled, Theme, CSSObject } from "@mui/material/styles";

interface DrawerImplProps {
  children: React.ReactNode;
  anchor?: DrawerProps["anchor"];
  open: boolean;
}

const DRAWER_WIDTH = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  borderRight: "1px #555555 solid",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  borderRadius: "8px",
  whiteSpace: "nowrap",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
}));

/**
 * This is wrapper on MUI Drawer component.
 */
export const PhzDrawer = ({
  children,
  anchor = "left",
  open,
}: DrawerImplProps) => {
  return (
    <Drawer
      anchor={anchor}
      variant="permanent"
      open={open}
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
      {children}
    </Drawer>
  );
};

export default PhzDrawer;
