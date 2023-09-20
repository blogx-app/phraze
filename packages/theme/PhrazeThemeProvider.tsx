import React from "react";
import { ThemeProvider } from "@emotion/react";
// import { Theme } from "./css/types";
import { Theme } from "@emotion/react";

export interface PhrazeThemeProvider {
  theme: Theme;
  children: React.ReactNode;
}

export const PhrazeThemeProvider = ({
  theme,
  children,
}: PhrazeThemeProvider) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
