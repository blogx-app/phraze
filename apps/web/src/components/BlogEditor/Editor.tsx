import { useEffect } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
// plugins
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import ToolbarPlugin from "plugins/ToolbarPlugin";
import CodeHighlightPlugin from "plugins/CodeHighlightPlugin";
// theme
import PlaygroundEditorTheme from "themes/PlaygroundEditorTheme";
import { BLOG_EDITOR_PLACEHOLDER } from "constants/editor-constants";
import PlaygroundNodes from "node/PlaygroundNodes";

function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.focus();
  }, [editor]);

  return null;
}

export default function Editor() {
  const initialConfig = {
    namespace: BLOG_EDITOR_PLACEHOLDER,
    theme: PlaygroundEditorTheme,
    onError: (error: Error) => console.log(error),
    nodes: [...PlaygroundNodes],
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <ToolbarPlugin />
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            style={{
              outline: "none",
              background: "#65daa2",
              margin: "1rem",
              padding: "1rem",
            }}
          />
        }
        placeholder={null}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <OnChangePlugin onChange={() => {}} />
      <HistoryPlugin />
      <CodeHighlightPlugin />
      <MyCustomAutoFocusPlugin />
      {/* <MyCustomLoggingPlugin /> */}
    </LexicalComposer>
  );
}
