import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { PhrazeTheme } from "@phraze-app/theme";

export const OutlinedTag = styled.div<{
  color?: React.CSSProperties["color"];
  theme?: PhrazeTheme;
}>`
  ${({ color, theme }) =>
    css({
      border: `1px solid ${color || theme.colors.tag.default}`,
      color: color || theme.colors.tag.default,
    })}

  background: transparent;
  border-radius: 4px;
  padding: 2px 8px;

  font-size: 0.75rem;
  line-height: 14px;
  height: fit-content;
  box-sizing: border-box;
  letter-spacing: 0.03px;

  cursor: pointer;
`;
