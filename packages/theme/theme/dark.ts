import base from "./base";
import { darkColors } from "./colors";
import { PhrazeTheme } from ".";

const darkTheme: PhrazeTheme = {
  ...base,
  isDark: true,
  colors: darkColors,
};

export default darkTheme;
