import styled from "@emotion/styled";

export const DescriptionInput = styled.textarea`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, ".SFNSText-Regular",
    sans-serif;

  resize: none;
  width: 96%;

  border: none;
  border-bottom: 1px solid lightgray;

  outline: none;

  padding: 1.25rem;
  padding-bottom: 0.75rem;

  font-size: 1.25rem;
  line-height: 1.2;
  overflow: auto;

  display: block;
  margin-bottom: 1rem;

  ::placeholder {
    color: #9ba3af;
  }
`;

export const HeaderInput = styled(DescriptionInput)`
  border-bottom: none;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  font-size: 2rem;
  font-weight: 600;

  ::placeholder {
    font-size: 2.5rem;
    color: #9ba3af;
  }
`;
