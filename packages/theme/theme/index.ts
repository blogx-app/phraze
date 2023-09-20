import { vars } from "../css/vars.css";

export interface PancakeTheme {
  siteWidth: number;
  isDark: boolean;
  colors: typeof vars.colors;
  spacing: typeof vars.space;
  shadows: typeof vars.shadows;
  radii: typeof vars.radii;
}

export { default as dark } from "./dark";
export * from "./types";
