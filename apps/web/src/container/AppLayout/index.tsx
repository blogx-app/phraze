import { useMemo } from "react";
import AppBar from "ui/AppBar";
import { Sidebar } from "../Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { CssBaseline } from "@mui/material";

interface AppLayoutProps {
  getNavigationBreadcrum: (path: string) => any;
  hideAppBar: (path: string) => boolean;
}

export const AppLayout = ({
  getNavigationBreadcrum,
  hideAppBar,
}: AppLayoutProps): JSX.Element => {
  const { pathname } = useLocation();
  const appbarHidden = useMemo(() => hideAppBar(pathname), [pathname]);

  return (
    <Sidebar>
      <CssBaseline />
      <>
        {!appbarHidden && (
          <AppBar getNavigationBreadcrum={getNavigationBreadcrum} />
        )}
        <Outlet />
      </>
    </Sidebar>
  );
};

export default AppLayout;
