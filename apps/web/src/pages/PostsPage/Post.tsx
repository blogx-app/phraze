import { Box } from "@mui/material";
import Text from "@phraze-app/ui/Text";
import EditButton from "./icons/EditButton";
import TrashIcon from "./icons/TrashIcon";

const Posts = () => {
  return (
    <Box display="flex" border="1px black solid" borderRadius="1rem" mb="1rem">
      <Box p="1rem">
        <Box>
          <Text fontWeight="bold" mb="0.5rem">
            Post heading
          </Text>
          <Text>
            This is a long post title and this should be changed when the posts
            component is done
          </Text>
        </Box>
        <Box display="flex" gap="1rem" mt="1rem">
          <Text as="span">
            <Text as="span" fontWeight="bold">
              Author:{" "}
            </Text>
            Post heading
          </Text>
          <Text as="span">
            <Text as="span" fontWeight="bold">
              Status:{" "}
            </Text>
            Post heading
          </Text>
          <Text as="span">
            <Text as="span" fontWeight="bold">
              Last updated:{" "}
            </Text>
            Post heading
          </Text>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        borderLeft="1px solid black"
        p="12px 2px"
      >
        <span
          style={{
            cursor: "pointer",
          }}
        >
          <EditButton />
        </span>
        <span
          style={{
            cursor: "pointer",
          }}
        >
          <TrashIcon />
        </span>
      </Box>
    </Box>
  );
};

export default Posts;
