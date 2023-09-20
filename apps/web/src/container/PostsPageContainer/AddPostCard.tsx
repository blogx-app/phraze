import { Text } from "@phraze-app/ui";
import AddPostIcon from "./icon/AddPostIcon";
import { CardContainer } from "./styles";

const AddPostCard = () => {
  return (
    <CardContainer
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="50%"
      maxWidth="28rem"
      border="#ddd 1px dashed"
    >
      <AddPostIcon />
      <Text fontSize="1.5rem" color="white">
        Add Post
      </Text>
    </CardContainer>
  );
};

export default AddPostCard;
