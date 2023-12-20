import { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import AppBar from "@phraze-app/ui/AppBar";
import { Sidebar } from "../Sidebar";

interface AppLayoutProps {
  getNavigationBreadcrum: (path: string) => any;
  showUnauthSidebar: (path: string) => boolean;
  hideAppBar: (path: string) => boolean;
  hideSidebar?: (path: string) => boolean;
}

export const AppLayout = ({
  getNavigationBreadcrum,
  showUnauthSidebar,
  hideAppBar,
  hideSidebar,
}: AppLayoutProps): JSX.Element => {
  const { pathname } = useLocation();
  const appbarHidden = useMemo(() => hideAppBar(pathname), [pathname]);
  const sidebarHidden = useMemo(() => hideSidebar?.(pathname), [pathname]);

  return (
    <Sidebar sidebarHidden={sidebarHidden}>
      <CssBaseline />
      {!appbarHidden && (
        <AppBar
          showUnauthSidebar={showUnauthSidebar}
          getNavigationBreadcrum={getNavigationBreadcrum}
          hideAppbar={appbarHidden}
        />
      )}
      <Box p="1.25rem">
        <Outlet />
      </Box>
    </Sidebar>
  );
};

export default AppLayout;
