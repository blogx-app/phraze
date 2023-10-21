import { Box, Tabs } from "@phraze-app/ui";

const LeadsPage = () => {
  return (
    <Box
      //   minHeight="80vh"
      maxWidth="60rem"
      //   background="radial-gradient(circle at bottom, rgba(22,141,143,1) -87%, rgba(0,0,0,1) 61%)"
    >
      <Tabs
        tabLabels={["Leads", "Configure"]}
        tabPanels={[<>One</>, <>Two</>]}
      />
    </Box>
  );
};

export default LeadsPage;
