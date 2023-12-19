import { PhrazeTheme } from "@phraze-app/theme";
import { ColorProps, LayoutProps, SpaceProps } from "styled-system";
import { ButtonVariants } from "./StyledButton";

export type StyledButtonProps = { theme?: PhrazeTheme } & ColorProps &
  SpaceProps &
  LayoutProps & {
    variant?: ButtonVariants | "primary" | 'secondary'
  };

export interface PhzButtonProps extends StyledButtonProps {
  children: React.ReactNode;
}
