import { useCallback, useState } from "react";
import * as ReactDOM from "react-dom";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  LexicalTypeaheadMenuPlugin,
  MenuOption,
  useBasicTypeaheadTriggerMatch,
} from '@lexical/react/LexicalTypeaheadMenuPlugin';
import {
  $createTextNode,
  $getSelection,
  $isRangeSelection,
  TextNode,
} from "lexical";

// TODO - Make a custom component so that when someone type and emoji name,
// it should start handling the the things in popover. try reusing emoji-mart
class EmojiOption extends MenuOption {
  title: string;
  emoji: string;
  keywords: Array<string>;

  constructor(
    title: string,
    emoji: string,
    options: {
      keywords?: Array<string>;
    }
  ) {
    super(title);
    this.title = title;
    this.emoji = emoji;
    this.keywords = options.keywords || [];
  }
}

export default function EmojiPickerPlugin() {
  const [editor] = useLexicalComposerContext();
  const [queryString, setQueryString] = useState<string | null>(null);
 
  const checkForTriggerMatch = useBasicTypeaheadTriggerMatch(":", {
    minLength: 0,
  });

  const onSelectOption = useCallback(
    (
      selectedOption: EmojiOption,
      nodeToRemove: TextNode | null,
      closeMenu: () => void
    ) => {
      editor.update(() => {
        const selection = $getSelection();

        if (!$isRangeSelection(selection) || selectedOption == null) {
          return;
        }

        if (nodeToRemove) {
          nodeToRemove.remove();
        }

        selection.insertNodes([$createTextNode(selectedOption.emoji)]);

        closeMenu();
      });
    },
    [editor]
  );

  return (
    <LexicalTypeaheadMenuPlugin
      onQueryChange={setQueryString}
      onSelectOption={onSelectOption}
      triggerFn={checkForTriggerMatch}
      options={[]}
      menuRenderFn={(
        anchorElementRef,
        { selectOptionAndCleanUp }
      ) => {
        if (anchorElementRef.current == null ) {
          return null;
        }

        return anchorElementRef.current 
          ? ReactDOM.createPortal(
            <div className="typeahead-popover">
              <Picker
                data={data}
                previewPosition='none'
                searchPosition='none'
                onEmojiSelect={(selectedIcon: any) => {
                  const Icon = new EmojiOption(
                    selectedIcon.name,
                    selectedIcon.native,
                    { keywords: selectedIcon.keywords }
                  )
                  selectOptionAndCleanUp(Icon)
                }}
              />
            </div>,
            anchorElementRef.current
          )
          : null;
      }}
    />
  );
}

export { EmojiPickerPlugin };
