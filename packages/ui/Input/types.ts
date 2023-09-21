import { BoxProps } from "@mui/material";
import React from "react";

// Value and onchange are optional so that,
// it can become uncontrolled component when needed.
export interface InputProps {
  value?: string | number;
  onChange?: (props?: any) => void;
  label?: string;
  helperText?: string;
  placeholder?: string;
  ContainerProps?: BoxProps;
  startAdornment?: React.ReactNode;
}
