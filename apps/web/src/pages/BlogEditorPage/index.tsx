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
import { routesName } from "../../route";
import useAppNavigation from "../../hooks/useAppNavigation";
import { useState } from "react";

const BlogEditorPage = () => {
  const [openSettingsDrawer, setOpenSettingsDrawer] = useState(false);
  const theme = useTheme();
  const navigate = useAppNavigation({
    blogName: "acme",
  });

  const onClickBack = () => {
    navigate(routesName.posts);
  };

  const onClickOpenDrawer = () => {
    setOpenSettingsDrawer(true);
  };

  return (
    <Flex flexDirection="column">
      <Flex
        color={theme.colors.textWhite}
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        px={4}
        py={2}
        margin="0 auto"
        borderBottom={theme.borders.card}
      >
        <Flex gap="1rem" alignItems="center">
          <span
            style={{ cursor: "pointer", display: "flex" }}
            onClick={onClickBack}
          >
            <ChevronLeft /> Posts
          </span>
          <StateTags type={"draft" as any} tagType="outlined">
            Draft
          </StateTags>
        </Flex>
        <span style={{ cursor: "pointer" }} onClick={onClickOpenDrawer}>
          <div>Some Icon</div>
        </span>
      </Flex>
      <div className="editor-shell">
        <BlogHeader />
        <Editor />
        {/* Create this drawer using something from Radix. */}
        {/* <PhzDrawer open={false} anchor="right">
          <Box p={1}>
            <Text>Riight Drawer</Text>
          </Box>
        </PhzDrawer> */}
      </div>
    </Flex>
  );
};

export default BlogEditorPage;
