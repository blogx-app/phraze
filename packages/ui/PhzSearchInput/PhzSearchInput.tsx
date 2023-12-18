import { Input } from "../Input";
import { CSSProperties } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useTheme } from "@emotion/react";

const PhzSearchInput = ({ inputStyle }: { inputStyle?: CSSProperties }) => {
  const theme = useTheme();

  return (
    <Input
      startAdornment={
        <MagnifyingGlass
          size={20}
          color={theme.colors.textSubtle}
          weight="light"
        />
      }
      placeholder="Search..."
      style={{
        width: "100%",
        ...inputStyle,
      }}
      ContainerProps={{
        style: {
          width: "50%",
          maxWidth: "31rem",
        },
      }}
    />
  );
};

export default PhzSearchInput;
