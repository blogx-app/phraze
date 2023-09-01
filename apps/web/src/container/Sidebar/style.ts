import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const BottomIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 0.5rem auto;
  margin-bottom: 1.5rem;
  padding-top: 1.25rem;

  border-top: 1px white solid;
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

export const NavigationNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;

  display: flex;
  color: white;
  align-items: center;
`;
