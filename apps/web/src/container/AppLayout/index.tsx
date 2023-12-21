import { useEffect, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import AppBar from "@phraze-app/ui/AppBar";
import PhzBlogSwitcher from "@phraze-app/ui/PhzBlogSwitcher";
import { Sidebar } from "../Sidebar";
import { routesName } from "../../route";
import { enqueueSnackbar } from "notistack";
import CreateNewBlogDialog from "../Sidebar/CreateNewBlogDialog";
import useAppNavigation from "../../hooks/useAppNavigation";

interface AppLayoutProps {
  getNavigationBreadcrum: (path: string) => any;
  showUnauthSidebar: (path: string) => boolean;
  hideAppBar: (path: string) => boolean;
  hideSidebar?: (path: string) => boolean;
}

const TEST_EMAIL = "test@phraze.app";

export const AppLayout = ({
  getNavigationBreadcrum,
  showUnauthSidebar,
  hideAppBar,
  hideSidebar,
}: AppLayoutProps): JSX.Element => {
  const { pathname } = useLocation();
  const appbarHidden = useMemo(() => hideAppBar(pathname), [pathname]);
  const sidebarHidden = useMemo(() => hideSidebar?.(pathname), [pathname]);
  const navigate = useAppNavigation({
    blogName: "acme",
  });
  const isHomeMode = pathname === routesName.home;

  const isAuthenticated =
    localStorage.getItem("auth") === "true" ? true : false;

  useEffect(() => {
    if (!isAuthenticated) {
      enqueueSnackbar(`enter ${TEST_EMAIL} to login`, {
        autoHideDuration: 15000,
        variant: "default",
      });

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
