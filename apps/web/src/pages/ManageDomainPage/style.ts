import styled from "@emotion/styled";

export const DomainInputContainer = styled.div`
  display: flex;
`;

export const HttpBox = styled.div`
  background-color: #ffa500;
  padding: 0.5rem 1rem;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: 1px solid black;
  border-right: none;
`;

export const DomainInput = styled.input`
  width: 100%;

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid black;

  padding-left: 0.5rem;
  padding-right: 0.5rem;
  outline: none;
`;

export const DomainButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};

  padding: 10px 2rem;
  font-size: 14px;

  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
`;

//TODO - Fix the dash width in border
export const DomainInfoContainer = styled.div`
  width: 31rem;

  padding: 1rem;
  border: 1px dashed ${({ theme }) => theme.colors.greyAAA};
  margin-bottom: 0.5rem;

  border-radius: 12px;
`;
