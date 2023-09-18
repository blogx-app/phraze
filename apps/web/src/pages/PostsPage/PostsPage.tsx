import { Box } from "@mui/material";
import Text from "@phraze-app/ui/Text";
import { Button } from "@phraze-app/ui";
import Post from "./Post";

export const PostsPage = () => {
  return (
    <Box maxWidth="42rem">
      <Box display="flex" justifyContent="space-between" mb="1rem">
        <Text fontSize="1.5rem" fontWeight="bold">
          Posts
        </Text>
        <Button
          style={{ background: "#FF1493", color: "white" }}
          onClick={() => console.log("Write post clicked")}
        >
          Write a Post
        </Button>
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <Box display="flex" gap="0.5rem">
          {["All", "Draft", "Published"].map((filter) => (
            <Button
              style={{
                fontSize: "12px",
                fontWeight: "normal",
                padding: "8px 1rem",
                background: filter === "All" ? "pink" : "",
              }}
              key={filter}
              onClick={() => console.log("clicked")}
            >
              {filter}
            </Button>
          ))}
        </Box>
      </Box>
      <Box mt="1rem">
        <Post />
        <Post />
        <Post />
      </Box>
    </Box>
  );
};

export default PostsPage;
