import { Flex, Text } from "@phraze-app/ui";
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
      border="#888 1px dashed"
    >
      <Flex alignItems="center">
        <span style={{ cursor: "pointer" }}>
          <AddPostIcon />
        </span>
        <div>
          <Text fontSize="1.5rem" color="white" mb="0.25rem">
            Add Post
          </Text>
          <Text fontStyle="italic" fontSize="10px" color="#aaa">
            Express your thoughts in style with phraze
          </Text>
        </div>
      </Flex>
    </CardContainer>
  );
};

export default AddPostCard;
