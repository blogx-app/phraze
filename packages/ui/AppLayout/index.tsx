import { useMemo } from "react";
import AppBar from "../AppBar";
import Sidebar from "../Sidebar";
import { Outlet, useLocation } from "react-router-dom";

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
    <>
      <Sidebar>
        <div>
          {!appbarHidden && (
            <AppBar getNavigationBreadcrum={getNavigationBreadcrum} />
          )}
          <Outlet />
        </div>
      </Sidebar>
    </>
  );
};

export default AppLayout;
