import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { PhrazeTheme } from "@phraze-app/theme";

export const StyledInput = styled.input<{
  hasStartAdornment?: boolean;
  theme?: PhrazeTheme;
}>`
  border: solid 1px black;
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;
  border-radius: 8px;

  height: 3rem;
  width: 100%;
  color: white;

  ${({ theme }) =>
    css({
      background: theme.colors.transparent,
      border: theme.borders.input,
    })}

  padding-left: ${({ hasStartAdornment }) => (hasStartAdornment ? "44px" : "")};

  ::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.foreground};

  font-weight: bold;
  font-size: 12px;
  margin-left: 8px;
  margin-bottom: 4px;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const AdornmentIconWrapper = styled.div<{ isEndIcon?: boolean }>`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  top: 0;

  ${({ isEndIcon }) => (isEndIcon ? `right: 12px;` : `left: 12px;`)}
`;
