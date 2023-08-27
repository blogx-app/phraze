import { InputHTMLAttributes } from "react";
import { Box } from "@mui/material";
import { TextAreaProps } from "./types";
import { StyledLabel, StyledTextArea } from "./style";
import Text from "../Text";

export const TextArea = ({
  helperText,
  label,
  value,
  placeholder,
  onChange,
  ContainerProps,
  ...rest
}: TextAreaProps & InputHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <Box display="flex" flexDirection="column" {...ContainerProps}>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextArea
        rows={5}
        cols={120}
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

export default TextArea;
