import { darkColors } from "./colors";

// TODO - Change this shadows for our use.
export const shadows = {
  card: "0 0 4px #aaaaaa45",
  level1:
    "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
  active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
  success: "0px 0px 6px 0px #31D0AAee",
  warning: "0px 0px 6px 0px #f44336ee",
  danger: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
  focus: "0px 0px 6px 0px #D67E0Aa9",
  inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
  tooltip:
    "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

// Important -- split the color in dark and light when light theme colors is available
// colors: {
//   light: ligthColors,
//   dark: darkColors
// }
export const tokens = {
  colors: darkColors,
  borders: {
    card: "1px solid hsl(240 3.7% 15.9%)",
    input: "1px solid rgb(39, 39, 42)",
  },
  fonts: {
    normal: "'Mulish', sans-serif",
    mono: "SFMono, ui-monospace, monospace",
  },
  space: {
    card: "16px",
    "0px": "0px",
    "1rem": "1rem",
    "1px": "1px",
    "2px": "2px",
    "6px": "6px",
    "4px": "4px",
    "8px": "8px",
    "12px": "12px",
    "14px": "14px",
    "16px": "16px",
    "20px": "20px",
    "24px": "24px",
    "32px": "32px",
    "48px": "48px",
    "56px": "56px",
    "64px": "64px",
  },
  borderWidths: { "0": "0px", "1": "1px", "2": "2px" },
  radii: {
    "0": "0px",
    "8px": "8px",
    "12px": "12px",
    "20px": "20px",
    "32px": "32px",
    small: "6px",
    default: "8px",
    card: "8px",
    circle: "50%",
    button: "6px",
    input: "6px",
    image: "6px",
  },
  fontSizes: {
    "10px": "10px",
    "12px": "12px",
    "16px": "16px",
    "14px": "14px",
    "20px": "20px",
    "40px": "40px",
  },
  shadows,
} as const;

export type Mode = "dark";
export type Tokens = typeof tokens;
