import "./index.css";
import { useTheme } from "@emotion/react";
import { Editor } from "@blogx/lexical-editor/Editor";
import {
  BlogHeader,
  Box,
  Flex,
  PhzDrawer,
  StateTags,
  Text,
} from "@phraze-app/ui";
import { ChevronLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { routesName } from "../../route";
import BlogSettingsIcon from "./icons/BlogSettingsIcon";

const BlogEditorPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(routesName.posts);
  };

  return (
    <Flex flexDirection="column">
      <Flex
        color={theme.colors.textWhite}
        justifyContent="space-between"
        alignItems="center"
        width="95%"
        margin="0 auto"
      >
        <Flex gap="1rem">
          <span
            style={{ cursor: "pointer", display: "flex" }}
            onClick={onClickBack}
          >
            <ChevronLeft /> Posts
          </span>
          <StateTags type="draft" tagType="outlined">
            Draft
          </StateTags>
        </Flex>
        <span style={{ cursor: "pointer" }}>
          <BlogSettingsIcon />
        </span>
      </Flex>
      <div className="editor-shell">
        <BlogHeader />
        <Editor />
        <PhzDrawer open={true} anchor="right">
          <Box p={1}>
            <Text>Riight Drawer</Text>
          </Box>
        </PhzDrawer>
      </div>
    </Flex>
  );
};

export default BlogEditorPage;
