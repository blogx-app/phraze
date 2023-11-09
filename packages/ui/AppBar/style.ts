import styled from "@emotion/styled";
import { NavLink, NavLinkProps } from "react-router-dom";

export const AppBarContainer = styled.div`
  display: flex;
  flex-direction: column;

  border-bottom: ${({ theme }) => theme.borders.card};
  padding: 0.5rem 1.25rem;

  .bell-icon {
    cursor: pointer;
  }
`;

export const BreadcrumsNavlink = styled(NavLink as React.FC<NavLinkProps>)`
  font-size: 14px;
  color: #999;
  text-decoration: none;
  padding: 4px;

  :hover {
    background-color: #80808011;
  }

  ::before {
    content: "/";
    color: ${({ theme }) => theme.colors.textGrey25};
    padding-right: 1rem;
    padding-left: 0.5rem;
    font-style: italic;
    font-size: 1.25rem;
    vertical-align: middle;
  }
`;

export const NavigationImageContainer = styled.img`
  height: 28px;
`;
