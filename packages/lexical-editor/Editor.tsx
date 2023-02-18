import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { CharacterLimitPlugin } from "@lexical/react/LexicalCharacterLimitPlugin";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import { ClearEditorPlugin } from "@lexical/react/LexicalClearEditorPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HashtagPlugin } from "@lexical/react/LexicalHashtagPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin";
import { TablePlugin } from "@lexical/react/LexicalTablePlugin";
import * as React from "react";
import { useState } from "react";

import { useSettings } from "./context/SettingsContext";
import { useSharedHistoryContext } from "./context/SharedHistoryContext";
import TableCellNodes from "./node/TableCellNodes";
import ActionsPlugin from "./src/plugins/ActionsPlugin";
import AutocompletePlugin from "./src/plugins/AutocompletePlugin";
import AutoEmbedPlugin from "./src/plugins/AutoEmbedPlugin";
import AutoLinkPlugin from "./src/plugins/AutoLinkPlugin";
import ClickableLinkPlugin from "./src/plugins/ClickableLinkPlugin";
import CodeActionMenuPlugin from "./src/plugins/CodeActionMenuPlugin";
import CodeHighlightPlugin from "./src/plugins/CodeHighlightPlugin";
import CollapsiblePlugin from "./src/plugins/CollapsiblePlugin";
import ComponentPickerPlugin from "./src/plugins/ComponentPickerPlugin";
import DragDropPaste from "./src/plugins/DragDropPastePlugin";
import DraggableBlockPlugin from "./src/plugins/DraggableBlockPlugin";
import EmojiPickerPlugin from "./src/plugins/EmojiPickerPlugin";
import EmojisPlugin from "./src/plugins/EmojisPlugin";
import EquationsPlugin from "./src/plugins/EquationsPlugin";
import FigmaPlugin from "./src/plugins/FigmaPlugin";
import FloatingLinkEditorPlugin from "./src/plugins/FloatingLinkEditorPlugin";
import FloatingTextFormatToolbarPlugin from "./src/plugins/FloatingTextFormatToolbarPlugin";
import HorizontalRulePlugin from "./src/plugins/HorizontalRulePlugin";
import ImagesPlugin from "./src/plugins/ImagesPlugin";
import KeywordsPlugin from "./src/plugins/KeywordsPlugin";
import LinkPlugin from "./src/plugins/LinkPlugin";
import ListMaxIndentLevelPlugin from "./src/plugins/ListMaxIndentLevelPlugin";
import MarkdownShortcutPlugin from "./src/plugins/MarkdownShortcutPlugin";
import { MaxLengthPlugin } from "./src/plugins/MaxLengthPlugin";
import MentionsPlugin from "./src/plugins/MentionsPlugin";
import SpeechToTextPlugin from "./src/plugins/SpeechToTextPlugin";
import TabFocusPlugin from "./src/plugins/TabFocusPlugin";
import TableCellActionMenuPlugin from "./src/plugins/TableActionMenuPlugin";
import TableCellResizer from "./src/plugins/TableCellResizer";
import TableOfContentsPlugin from "./src/plugins/TableOfContentsPlugin";
import { TablePlugin as NewTablePlugin } from "./src/plugins/TablePlugin";
import ToolbarPlugin from "./src/plugins/ToolbarPlugin";
import TwitterPlugin from "./src/plugins/TwitterPlugin";
import YouTubePlugin from "./src/plugins/YouTubePlugin";
import { ContentEditable } from "ui";
import { isDevPlayground } from "lib";
import { Placeholder } from "ui";
import PlaygroundEditorTheme from "./themes/PlaygroundEditorTheme";

const TreeViewPlugin = React.lazy(() => import("./src/plugins/TreeViewPlugin"));

export function Editor(): JSX.Element {
  const { historyState } = useSharedHistoryContext();
  const {
    settings: {
      isAutocomplete,
      isMaxLength,
      isCharLimit,
      isCharLimitUtf8,
      isRichText,
      showTreeView,
      showTableOfContents,
    },
  } = useSettings();
  const text = "Write a blog as beautiful as our cosmos";
  const placeholder = <Placeholder>{text}</Placeholder>;
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null);

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  const cellEditorConfig = {
    namespace: "Playground",
    nodes: [...TableCellNodes],
    onError: (error: Error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
  };

  return (
    <>
      {isRichText && <ToolbarPlugin />}
      <div
        className={`editor-container ${showTreeView ? "tree-view" : ""} ${
          !isRichText ? "plain-text" : ""
        }`}
      >
        {isMaxLength && <MaxLengthPlugin maxLength={30} />}
        <DragDropPaste />
        <AutoFocusPlugin />
        <ClearEditorPlugin />
        <ComponentPickerPlugin />
        <EmojiPickerPlugin />
        <AutoEmbedPlugin />
        <MentionsPlugin />
        <EmojisPlugin />
        <HashtagPlugin />
        <KeywordsPlugin />
        <SpeechToTextPlugin />
        <AutoLinkPlugin />
        {isRichText ? (
          <>
            <HistoryPlugin externalHistoryState={historyState} />
            <RichTextPlugin
              contentEditable={
                <div className="editor-scroller">
                  <div className="editor" ref={onRef}>
                    <ContentEditable />
                  </div>
                </div>
              }
              placeholder={placeholder}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <MarkdownShortcutPlugin />
            <CodeHighlightPlugin />
            <ListPlugin />
            <CheckListPlugin />
            <ListMaxIndentLevelPlugin maxDepth={7} />
            <TablePlugin />
            <TableCellResizer />
            <NewTablePlugin cellEditorConfig={cellEditorConfig}>
              <AutoFocusPlugin />
              <RichTextPlugin
                contentEditable={
                  <ContentEditable className="TableNode__contentEditable" />
                }
                placeholder={null}
                ErrorBoundary={LexicalErrorBoundary}
              />
              <MentionsPlugin />
              <HistoryPlugin />
              <ImagesPlugin captionsEnabled={false} />
              <LinkPlugin />
              <ClickableLinkPlugin />
              <FloatingTextFormatToolbarPlugin />
            </NewTablePlugin>
            <ImagesPlugin />
            <LinkPlugin />
            <TwitterPlugin />
            <YouTubePlugin />
            <FigmaPlugin />
            <ClickableLinkPlugin />
            <HorizontalRulePlugin />
            <EquationsPlugin />
            <TabFocusPlugin />
            <TabIndentationPlugin />
            <CollapsiblePlugin />
            {floatingAnchorElem && (
              <>
                <DraggableBlockPlugin anchorElem={floatingAnchorElem} />
                <CodeActionMenuPlugin anchorElem={floatingAnchorElem} />
                <FloatingLinkEditorPlugin anchorElem={floatingAnchorElem} />
                <TableCellActionMenuPlugin anchorElem={floatingAnchorElem} />
                <FloatingTextFormatToolbarPlugin
                  anchorElem={floatingAnchorElem}
                />
              </>
            )}
          </>
        ) : (
          <>
            <PlainTextPlugin
              contentEditable={<ContentEditable />}
              placeholder={placeholder}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin externalHistoryState={historyState} />
          </>
        )}
        {(isCharLimit || isCharLimitUtf8) && (
          <CharacterLimitPlugin
            charset={isCharLimit ? "UTF-16" : "UTF-8"}
            maxLength={5}
          />
        )}
        {isAutocomplete && <AutocompletePlugin />}
        <div>{showTableOfContents && <TableOfContentsPlugin />}</div>
        <ActionsPlugin />
      </div>
      {showTreeView && isDevPlayground && <TreeViewPlugin />}
    </>
  );
}
