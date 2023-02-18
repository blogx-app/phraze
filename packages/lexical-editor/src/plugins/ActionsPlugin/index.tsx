import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import React, { useState } from "react";
import {
  SPEECH_TO_TEXT_COMMAND,
  SUPPORT_SPEECH_RECOGNITION,
} from "../SpeechToTextPlugin";

export default function ActionsPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const [isEditable, setIsEditable] = useState(() => editor.isEditable());
  const [isSpeechToText, setIsSpeechToText] = useState(false);

  return (
    <div className="actions">
      {SUPPORT_SPEECH_RECOGNITION && (
        <button
          onClick={() => {
            editor.dispatchCommand(SPEECH_TO_TEXT_COMMAND, !isSpeechToText);
            setIsSpeechToText(!isSpeechToText);
          }}
          className={
            "action-button action-button-mic " +
            (isSpeechToText ? "active" : "")
          }
          title="Speech To Text"
          aria-label={`${isSpeechToText ? "Enable" : "Disable"} speech to text`}
        >
          <i className="mic" />
        </button>
      )}
      <button
        className={`action-button ${!isEditable ? "unlock" : "lock"}`}
        onClick={() => {
          editor.setEditable(!editor.isEditable());
          setIsEditable((state) => !state);
        }}
        title="Read-Only Mode"
        aria-label={`${!isEditable ? "Unlock" : "Lock"} read-only mode`}
      >
        <i className={!isEditable ? "unlock" : "lock"} />
      </button>
    </div>
  );
}

export { ActionsPlugin };
