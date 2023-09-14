import styled from "@emotion/styled";
import { NavLink, NavLinkProps } from "react-router-dom";

export const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid #555555;
  padding: 0.5rem 0;

  padding-right: 1rem;

  .bell-icon {
    cursor: pointer;
  }
`;

export const BreadcrumsNavlink = styled(NavLink as React.FC<NavLinkProps>)`
  font-size: 1rem;
  color: #808080;
  text-decoration: none;
  padding: 4px;

  :hover {
    background-color: #80808011;
  }
`;
