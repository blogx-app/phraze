import { Provider } from "@lexical/yjs";
import { HocuspocusProvider } from "@hocuspocus/provider";

import * as Y from "yjs";

export function createWebsocketProvider(
  id: string,
  yjsDocMap: Map<string, Y.Doc>
): Provider {
  const doc = new Y.Doc();
  yjsDocMap.set(id, doc);

  // @TODO: PUT PROPER TOKEN
  // @TODO: OR USE `HocuspocusProvider` with Hocuspocus URL
  const hocuspocusProvider = new HocuspocusProvider({
    url: import.meta.env.VITE_EDITOR_BACKEND_WSS,
    name: `lexical-${id}`,
    token: "YOUR_TOKEN",
    document: doc,
    onConnect() {
      console.log("Connected to the server");
    },
    onMessage({ event, message }) {
      console.log(event, message);
    },
    onClose() {
      console.log("Connection Closed");
    },
  });

  // @ts-ignore
  return hocuspocusProvider;
}
