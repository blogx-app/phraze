import { vars } from "../css/vars.css";

export interface PhrazeTheme {
  isDark: boolean;
  colors: typeof vars.colors;
  spacing: typeof vars.space;
  shadows: typeof vars.shadows;
  radii: typeof vars.radii;
  borders: typeof vars.borders;
}

export { default as dark } from "./dark";
export * from "./types";
