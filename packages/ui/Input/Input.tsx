import { InputHTMLAttributes } from "react";
import { Box } from "@mui/material";
import { InputProps } from "./types";
import {
  StyledLabel,
  StyledInput,
  InputContainer,
  AdornmentIconWrapper,
} from "./style";
import Text from "../Text";
import { useTheme } from "@emotion/react";

export const Input = ({
  helperText,
  label,
  value,
  placeholder,
  onChange,
  ContainerProps,
  startAdornment,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) => {
  const theme = useTheme();

  return (
    <Box display="flex" flexDirection="column" {...ContainerProps}>
      <StyledLabel>{label}</StyledLabel>
      <InputContainer>
        {startAdornment && (
          <AdornmentIconWrapper>{startAdornment}</AdornmentIconWrapper>
        )}
        <StyledInput
          hasStartAdornment={Boolean(startAdornment)}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </InputContainer>
      <Text fontSize="12px" mt="2px" marginLeft="8px" color="#808080">
        {helperText}
      </Text>
    </Box>
  );
};

export default Input;
