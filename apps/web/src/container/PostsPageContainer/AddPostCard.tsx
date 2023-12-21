import { Flex, Text } from "@phraze-app/ui";
import AddPostIcon from "./icon/AddPostIcon";
import { CardContainer } from "./styles";
import useAppNavigation from "../../hooks/useAppNavigation";
import { routesName } from "../../route";

const AddPostCard = () => {
  const navigate = useAppNavigation({
    blogName: "acme",
  });

  return (
    <CardContainer
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="50%"
      maxWidth="28rem"
      border="#555 1px dashed"
    >
      <Flex alignItems="center" onClick={() => navigate(routesName.editor)}>
        <span style={{ cursor: "pointer" }}>
          <AddPostIcon />
        </span>
        <div>
          <Text fontSize="1.5rem" color="white" mb="0.25rem">
            Add Post
          </Text>
          <Text fontStyle="italic" fontSize="12px" color="#aaa">
            Express your thoughts in style with phraze
          </Text>
        </div>
      </Flex>
    </CardContainer>
  );
};

export default AddPostCard;
