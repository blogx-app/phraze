import styled from "@emotion/styled";

// TODO - Fix the font style
export const StyledTextArea = styled.textarea`
  border: solid 1px black;
  padding: 0.5rem;
  font-size: 12px;
  outline: none;
  border-radius: 8px;
  resize: vertical;

  ::placeholder {
    font-size: 12px;
  }
`;

export const StyledLabel = styled.label`
  font-weight: bold;
  font-size: 12px;
  margin-left: 8px;
`;
