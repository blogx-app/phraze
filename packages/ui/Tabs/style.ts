import styled from "@emotion/styled";
import { Tab, Tabs } from "@mui/material";
import { ThemeProps } from "../common.types";

export const StyledTabs = styled(Tabs)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary66};

  .MuiTabs-indicator {
    height: 4px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .Mui-selected {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledTab = styled(Tab)<ThemeProps>`
  opacity: 1;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.white};
`;

export const TabsPanelContainer = styled.div`
  border: 1px solid black;
  border-radius: 12px;
`;
