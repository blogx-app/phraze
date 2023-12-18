import * as React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";
import { GearSix, UserCircle } from "@phosphor-icons/react";
import { PhzDrawer } from "@phraze-app/ui";
import { BottomIconsContainer } from "./style";
import NavigationComponent from "./NavigationComponent";
import UpgradeToPro from "./UpgradeToPro";
import NavigationLinkComponent from "./NavigationLinkComponent";
import { routesName } from "../../route";

interface MiniDrawerProps {
  children?: React.ReactNode;
  sidebarHidden?: boolean;
}

export default function Sidebar({ children, sidebarHidden }: MiniDrawerProps) {
  const theme = useTheme();

  return (
    <Box display="flex">
      {!sidebarHidden && (
        <PhzDrawer>
          <div style={{ width: "100%", padding: "0 24px" }}>
            <div
              style={{
                margin: "30px 0 8px 0",
              }}
            >
              <NavLink to="/home">
                <img style={{ height: "24px" }} src="/phraze_full_logo.webp" />
              </NavLink>
            </div>
            <NavigationComponent />
          </div>
          <div style={{ width: "100%" }}>
            <UpgradeToPro />
            <BottomIconsContainer style={{ width: "100%" }}>
              <NavigationLinkComponent
                name="Settings"
                toLink={routesName.settings}
                StartIcon={GearSix}
              />
              <NavigationLinkComponent
                name="Profile"
                toLink={routesName.profile}
                StartIcon={UserCircle}
              />
            </BottomIconsContainer>
          </div>
        </PhzDrawer>
      )}
      <Box
        component="main"
        sx={{ flexGrow: 1, background: theme.colors.background }}
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
