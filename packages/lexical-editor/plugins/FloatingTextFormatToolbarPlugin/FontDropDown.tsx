import { useCallback } from "react";
import type { LexicalEditor } from "lexical";
import { $getSelection, $isRangeSelection } from "lexical";
import { $patchStyleText } from "@lexical/selection";
import { DropDown, DropDownItem } from "ui";

const FONT_FAMILY_OPTIONS: [string, string][] = [
  ["Arial", "Arial"],
  ["Courier New", "Courier New"],
  ["Georgia", "Georgia"],
  ["Times New Roman", "Times New Roman"],
  ["Trebuchet MS", "Trebuchet MS"],
  ["Verdana", "Verdana"],
];

function dropDownActiveClass(active: boolean) {
  if (active) return "active dropdown-item-active";
  else return "";
}

export default function FontDropDown({
  editor,
  value,
  style,
  disabled = false,
}: {
  editor: LexicalEditor;
  value: string;
  style: string;
  disabled?: boolean;
}): JSX.Element {
  const handleClick = useCallback(
    (option: string) => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $patchStyleText(selection, {
            [style]: option,
          });
        }
      });
    },
    [editor, style]
  );

  return (
    <DropDown
      disabled={disabled}
      buttonClassName="font-family-dropdown-button"
      buttonLabel={value}
      buttonAriaLabel="Formatting options for font family"
    >
      {FONT_FAMILY_OPTIONS.map(([option, text]) => (
        <DropDownItem
          className={`item ${dropDownActiveClass(value === option)}`}
          onClick={() => handleClick(option)}
          key={option}
        >
          <span className="text">{text}</span>
        </DropDownItem>
      ))}
    </DropDown>
  );
}
