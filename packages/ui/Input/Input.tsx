import { InputHTMLAttributes } from "react";
import { Box } from "@mui/material";
import { InputProps } from "./types";
import { StyledLabel, StyledInput } from "./style";
import Text from "../Text";

export const Input = ({
  helperText,
  label,
  value,
  placeholder,
  onChange,
  ContainerProps,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Box display="flex" flexDirection="column" {...ContainerProps}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
      <Text fontSize="10px" marginLeft="8px" color="#808080">
        {helperText}
      </Text>
    </Box>
  );
};

export default Input;
