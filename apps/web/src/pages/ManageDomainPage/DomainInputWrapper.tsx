import { DomainInput, DomainInputContainer, HttpBox } from "./style";

interface DomainInputWrapperProps {
  placeholder?: string;
}

const DomainInputWrapper = ({ placeholder }: DomainInputWrapperProps) => {
  return (
    <DomainInputContainer>
      <HttpBox>https://</HttpBox>
      <DomainInput placeholder={placeholder} />
    </DomainInputContainer>
  );
};

export default DomainInputWrapper;
