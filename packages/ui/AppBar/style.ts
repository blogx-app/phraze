import styled from "@emotion/styled";
import { NavLink, NavLinkProps } from "react-router-dom";

export const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid #555555;
  padding: 1rem;

  .bell-icon {
    cursor: pointer;
  }
`;

export const BreadcrumsNavlink = styled(NavLink as React.FC<NavLinkProps>)`
  font-size: 1rem;
  color: #aaa;
  text-decoration: none;
  padding: 4px;

  :hover {
    background-color: #80808011;
  }

  ::before {
    content: "/";
    padding-right: 0.5rem;
  }
`;

export const NavigationImageContainer = styled.img`
  height: 1.5rem;
`;
