import AppBar from "../AppBar";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

export const AppLayout = ({ getNavigationBreadcrum }): JSX.Element => {
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
