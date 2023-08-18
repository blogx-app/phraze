import AppBar from "../AppBar";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

export const AppLayout = (): JSX.Element => {
  return (
    <>
      <Sidebar>
        <div>
          <AppBar />
          <Outlet />
        </div>
      </Sidebar>
    </>
  );
};

export default AppLayout;
