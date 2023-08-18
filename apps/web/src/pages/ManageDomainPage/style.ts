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

export const DomainInputContainer = styled.div`
  display: flex;
`;

export const HttpBox = styled.div`
  background-color: #ffa500;
  padding: 0.5rem 1rem;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: 1px solid black;
  border-right: none;
`;

export const DomainInput = styled.input`
  width: 100%;

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid black;

  padding-left: 0.5rem;
  padding-right: 0.5rem;
  outline: none;
`;

export const DomainButton = styled.button`
  background-color: #00ff66;

  padding: 1rem 2rem;
  font-size: 1rem;

  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
`;

export const DomainInfoContainer = styled.div`
  width: 31rem;

  padding: 1rem;
  border: 1px solid black;

  margin: 1rem 0;

  border-radius: 12px;
`;
