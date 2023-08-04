import Sidebar from "../Sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default AppLayout;
