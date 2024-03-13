"use client";
import { useTheme } from "@emotion/react";
import { useEffect, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import AppBar from "@phraze-app/ui/AppBar";
import PhzBlogSwitcher from "@phraze-app/ui/PhzBlogSwitcher";
import { Sidebar } from "../Sidebar";
import { routesName } from "../../route";
import CreateNewBlogDialog from "../Sidebar/CreateNewBlogDialog";
import useAppNavigation from "../../hooks/useAppNavigation";
import useMatchedRoute from "../../hooks/useMatchedRoute";

interface AppLayoutProps {
  getNavigationBreadcrum: (path: string) => any;
  showUnauthSidebar: (path: string) => boolean;
}

const TEST_EMAIL = "test@phraze.app";

export const AppLayout = ({
  getNavigationBreadcrum,
  showUnauthSidebar,
}: AppLayoutProps): JSX.Element => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const navigate = useAppNavigation({
    blogName: "acme",
  });
  const getMatchedRoute = useMatchedRoute({
    blogName: "acme",
  });
  const appbarHidden = useMemo(
    () => [getMatchedRoute(routesName.editor)].includes(pathname),
    [pathname]
  );
  const sidebarHidden = useMemo(
    () =>
      [
        getMatchedRoute(routesName.editor),
        getMatchedRoute(routesName.login),
        getMatchedRoute(routesName.signup),
      ].includes(pathname),
    [pathname]
  );
  const isHomeMode = pathname === routesName.home;

  const isAuthenticated =
    localStorage.getItem("auth") === "true" ? true : false;

  useEffect(() => {
    if (!isAuthenticated) {
      enqueueSnackbar(
        <div>
          enter{" "}
          <strong style={{ color: theme.colors.primary }}>{TEST_EMAIL}</strong>{" "}
          to login
        </div>,
        {
          autoHideDuration: 30000,
          variant: "default",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        }
      );

      return navigate(routesName.login);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (pathname === routesName.root && !isAuthenticated) {
      return navigate(routesName.login);
    } else if (pathname === routesName.root && isAuthenticated) {
      return navigate(routesName.home);
    }
  }, [pathname]);

  if (
    !isAuthenticated &&
    ![routesName.login, routesName.signup].includes(pathname)
  ) {
    return <></>;
  }

  return (
    <Sidebar sidebarHidden={sidebarHidden} isHomeMode={isHomeMode}>
      <CssBaseline />
      {!appbarHidden && (
        <AppBar
          isHomeMode={isHomeMode}
          showUnauthSidebar={showUnauthSidebar}
          getNavigationBreadcrum={getNavigationBreadcrum}
          hideAppbar={appbarHidden}
          getMatchedRoute={getMatchedRoute}
          blogSwitcher={
            <CreateNewBlogDialog
              TriggerComponent={({ onClickHandler, ...rest }) => (
                <PhzBlogSwitcher onClickHandler={onClickHandler} {...rest} />
              )}
            />
          }
        />
      )}
      <Box p={sidebarHidden ? 0 : "1.25rem"}>
        <Outlet />
      </Box>
    </Sidebar>
  );
};

export default AppLayout;
