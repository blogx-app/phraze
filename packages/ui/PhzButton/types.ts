import { PhrazeTheme } from "@phraze-app/theme";
import { ColorProps, LayoutProps, SpaceProps } from "styled-system";

export type StyledButtonProps = { theme?: PhrazeTheme } & ColorProps &
  SpaceProps &
  LayoutProps;

export interface PhzButtonProps extends StyledButtonProps {
  children: React.ReactNode;
}
