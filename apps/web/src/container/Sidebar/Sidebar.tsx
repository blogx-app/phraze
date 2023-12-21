import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";
import { GearSix, SignOut, UserCircle } from "@phosphor-icons/react";
import { Flex, PhzButton, PhzDrawer, Text } from "@phraze-app/ui";
import { BottomIconsContainer } from "./style";
import NavigationComponent from "./NavigationComponent";
import UpgradeToPro from "./UpgradeToPro";
import NavigationLinkComponent from "./NavigationLinkComponent";
import { routesName } from "../../route";
import CreateNewBlogDialog from "./CreateNewBlogDialog";

interface MiniDrawerProps {
  children?: React.ReactNode;
  sidebarHidden?: boolean;
  isHomeMode: boolean;
}

export default function Sidebar({
  children,
  sidebarHidden,
  isHomeMode,
}: MiniDrawerProps) {
  const theme = useTheme();
  const navigate = useNavigate();

  const onSignOutClick = () => {
    localStorage.clear();
    navigate(routesName.login);
  };

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
              {isHomeMode && (
                <CreateNewBlogDialog
                  TriggerComponent={({ onClickHandler }) => (
                    <PhzButton
                      onClick={onClickHandler}
                      height="2.5rem"
                      width="100%"
                      mt={3}
                      variant="primary"
                    >
                      Create New Blog
                    </PhzButton>
                  )}
                />
              )}
            </div>
            {!isHomeMode && <NavigationComponent />}
          </div>
          <div style={{ width: "100%" }}>
            {!isHomeMode && <UpgradeToPro />}
            <BottomIconsContainer style={{ width: "100%" }}>
              {!isHomeMode && (
                <NavigationLinkComponent
                  name="Settings"
                  toLink={routesName.settings}
                  StartIcon={GearSix}
                />
              )}
              <Flex alignItems="center">
                <NavigationLinkComponent
                  name="Profile"
                  toLink={routesName.profile}
                  StartIcon={UserCircle}
                />
                <SignOut
                  color={theme.colors.textSubtle}
                  size={20}
                  cursor="pointer"
                  onClick={onSignOutClick}
                />
              </Flex>
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
