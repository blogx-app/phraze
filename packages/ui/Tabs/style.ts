import styled from "@emotion/styled";
import { Tab, Tabs } from "@mui/material";

export const StyledTabs = styled(Tabs)`
  .MuiTabs-indicator {
    height: 4px;
    border-radius: 4px;
  }
`;

export const StyledTab = styled(Tab)`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background: red;
  opacity: 1;

  border: 1px black solid;
  text-transform: capitalize;
`;

export const TabsPanelContainer = styled.div`
  border: 1px solid black;
  border-radius: 12px;
`;
