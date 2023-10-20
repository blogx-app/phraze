import { ReactNode } from "react";
import styled from "@emotion/styled";
import { OutlinedTag } from "./styles";

export type PostStateType = "draft" | "published" | "scheduled";
export type TagType = "filled" | "outlined";

export interface StateTagsProps {
  children: ReactNode;
  type: PostStateType;
  tagType?: TagType;
}

const StyleStateTag = styled(OutlinedTag)<{
  postState: PostStateType;
  tagType: TagType;
}>`
  border-color: ${({ theme, postState }) => theme.colors.tag[postState]};
  color: ${({ theme, postState, tagType }) =>
    tagType === "filled" ? theme.colors.black : theme.colors.tag[postState]};

  background-color: ${({ theme, tagType, postState }) =>
    tagType === "filled" ? theme.colors.tag[postState] : ""};

  cursor: auto;
  user-select: none;
  width: fit-content;
`;

export const StateTags = ({
  children,
  type,
  tagType = "outlined",
}: StateTagsProps) => {
  return (
    <StyleStateTag as="span" postState={type} tagType={tagType}>
      {children}
    </StyleStateTag>
  );
};

export default StateTags;
