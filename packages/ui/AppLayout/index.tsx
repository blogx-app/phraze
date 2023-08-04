import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

export const AppLayout = (): JSX.Element => {
  return (
    <>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </>
  );
};

export default AppLayout;