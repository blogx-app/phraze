import { useState } from "react";
import { StyledTab, StyledTabs, TabsPanelContainer } from "./style";
import { Box } from "@mui/material";
import { TabPanelProps, TabsProps } from "./type";

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

// TODO - Fix the text color of the selected tab
export const Tabs = ({ tabLabels, tabPanels }: TabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <StyledTabs value={value} onChange={handleChange} textColor="inherit">
        {tabLabels.map((label, i) => (
          <StyledTab key={`${label}-${i}`} label={label} {...a11yProps(i)} />
        ))}
      </StyledTabs>
      <TabsPanelContainer>
        {tabPanels.map((panel, i) => (
          <TabPanel value={value} index={i}>
            {panel}
          </TabPanel>
        ))}
      </TabsPanelContainer>
    </div>
  );
};

export default Tabs;
