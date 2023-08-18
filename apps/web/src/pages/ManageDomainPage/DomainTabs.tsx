import * as React from "react";
import { useTheme } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  DomainButton,
  StyledTab,
  StyledTabs,
  TabsPanelContainer,
} from "./style";
import DomainInput from "./DomainInputWrapper";
import Text from "ui/Text";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

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

export default function DomainTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: 500 }}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        aria-label="full width tabs example"
        style={{
          marginLeft: "1rem",
        }}
      >
        <StyledTab
          label="Main Domain"
          {...a11yProps(0)}
          style={{ background: "#00CCFF" }}
        />
        <StyledTab
          label="Sub Domain"
          {...a11yProps(1)}
          style={{ background: "#FF69B4" }}
        />
      </StyledTabs>
      <TabsPanelContainer>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <DomainInput placeholder="example.com" />
          <Text m="0.5rem 0 1rem 0">
            Your blog will be hosted at: https://...
          </Text>
          <DomainButton>Confirm</DomainButton>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <DomainInput placeholder="blog.example.com" />
          <Text m="0.5rem 0 1rem 0">
            Your blog will be hosted at: https://...
          </Text>
          <DomainButton>Confirm</DomainButton>
        </TabPanel>
      </TabsPanelContainer>
    </Box>
  );
}
