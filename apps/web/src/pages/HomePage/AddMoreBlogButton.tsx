import styled from "@emotion/styled";
import AddIcon from "./icons/AddIcon";
import Text from "ui/Text";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ff6b63;
  width: fit-content;

  border-radius: 12px;
  border: 1px solid black;
  padding: 2rem;

  cursor: pointer;
`;

const AddMoreBlogButton = () => {
  return (
    <ButtonContainer>
      <AddIcon />
      <Text fontSize="1.5rem" fontWeight="bold" mt="0.5rem">
        Create a blog
      </Text>
    </ButtonContainer>
  );
};

export default AddMoreBlogButton;
