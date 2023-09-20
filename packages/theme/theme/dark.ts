import { Theme } from "@emotion/react";

import base from "./base";
import { darkColors } from "./colors";

const darkTheme: Theme = {
  ...base,
  isDark: true,
  colors: darkColors,
};

export default darkTheme;
