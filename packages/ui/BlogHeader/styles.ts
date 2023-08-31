import styled from "@emotion/styled";

export const HeaderInputComponent = styled.div`
  font-size: 40px;
  outline: none;
  line-height: 1;

  font-weight: bold;

  padding: 28px;
  padding-bottom: 0.75rem;

  :empty::after {
    content: attr(placeholder);
    color: #aaa;
  }
`;
