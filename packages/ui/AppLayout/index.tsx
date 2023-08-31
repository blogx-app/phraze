import AppBar from "../AppBar";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

interface AppLayoutProps {
  getNavigationBreadcrum: (path: string) => any;
}

export const AppLayout = ({
  getNavigationBreadcrum,
}: AppLayoutProps): JSX.Element => {
  return (
    <>
      <Sidebar>
        <div>
          <AppBar getNavigationBreadcrum={getNavigationBreadcrum} />
          <Outlet />
        </div>
      </Sidebar>
    </>
  );
};

export default AppLayout;
