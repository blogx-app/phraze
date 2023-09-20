import { PhrazeTheme } from "@phraze-app/theme";

declare module "@emotion/react" {
  export interface Theme extends PhrazeTheme {}
}
