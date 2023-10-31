import { Box, Tabs } from "@phraze-app/ui";
import { LeadsTab } from "../../container/Leads";

const LeadsPage = () => {
  return (
    <Box
      maxWidth="48rem"
      // background="radial-gradient(circle at bottom, rgba(22,141,143,1) -87%, rgba(0,0,0,1) 61%)"
    >
      <Tabs
        tabLabels={["Leads", "Configure"]}
        tabPanels={[<LeadsTab />, <>Two</>]}
      />
    </Box>
  );
};

export default LeadsPage;
