import styled from "@emotion/styled";
import { NavLink, NavLinkProps } from "react-router-dom";
import { Button } from "@phraze-app/ui";

export const BottomIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin: 0.5rem auto;
  margin-bottom: 1rem;
  padding: 0 24px;
  padding-top: 1rem;

  border-top: 1px #555 solid;
  width: 100%;
`;

export const OpenButtonContainer = styled.div<{ open: boolean }>`
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;

  border-radius: 50%;

  box-shadow: 0 0 5px 2px rgba(256, 256, 256, 0.25);

  position: absolute;
  top: 4rem;
  right: -1rem;

  cursor: pointer;
  z-index: 1222;

  transition: all 0.3s;

  ${({ open }) =>
    open &&
    `
    transform: rotate(180deg);
  `}
`;

export const NavigationNavLink = styled(NavLink as React.FC<NavLinkProps>)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;

  display: flex;
  color: white;
  align-items: center;

  padding-left: 0.5rem;
`;

export const NavigationButton = styled(Button)<{ open?: boolean; bg: string }>`
  background: ${({ bg }) => bg};
  border: none;
  padding: ${({ open }) => (open ? "0.75rem 0.5rem" : "0.5rem !important")};
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  :hover {
    background-color: ${({ bg }) => bg};
  }
`;
