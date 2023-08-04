import { Editor } from "@blogx/lexical-editor/Editor";
import { BlogHeader } from "ui";

const BlogEditorPage = () => {
  return <div className="editor-shell">
    <BlogHeader />
    <Editor />
  </div>

};

export default BlogEditorPage;
