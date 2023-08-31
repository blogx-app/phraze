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
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const TAB_HEADER_COLORS = ["#00CCFF", "#FF69B4"];

export const Tabs = ({ tabLabels, tabPanels }: TabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <StyledTabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        style={{
          marginLeft: "0.75rem",
        }}
      >
        {tabLabels.map((label, i) => (
          <StyledTab
            key={`${label}-${i}`}
            label={label}
            {...a11yProps(i)}
            style={{ background: TAB_HEADER_COLORS[i] }}
          />
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
