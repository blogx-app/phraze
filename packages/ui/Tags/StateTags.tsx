import { ReactNode } from "react";
import styled from "@emotion/styled";
import { OutlinedTag } from "./styles";

export type PostStateType = "draft" | "published" | "scheduled";

export interface StateTagsProps {
  children: ReactNode;
  type: PostStateType;
}

const StyleStateTag = styled(OutlinedTag)<{ postState: PostStateType }>`
  border-color: ${({ theme, postState }) => theme.colors.tag[postState]};
  color: ${({ theme, postState }) => theme.colors.tag[postState]};

  cursor: auto;
  user-select: none;
`;

export const StateTags = ({ children, type }: StateTagsProps) => {
  return <StyleStateTag postState={type}>{children}</StyleStateTag>;
};

export default StateTags;
