import { Provider } from "@lexical/yjs";
import { TiptapCollabProvider, HocuspocusProvider } from "@hocuspocus/provider";
// import { WebsocketProvider } from "y-websocket";
import * as Y from "yjs";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const WEBSOCKET_ENDPOINT =
  params.get("collabEndpoint") || "ws://localhost:8080";
const WEBSOCKET_SLUG = "collaboration";
const WEBSOCKET_ID = params.get("collabId") || "0";

// parent dom -> child doc
export function createWebsocketProvider(
  id: string,
  yjsDocMap: Map<string, Y.Doc>
): Provider {
  // let doc = yjsDocMap.get(id);

  // if (doc === undefined) {
  //   doc = new Doc();
  //   yjsDocMap.set(id, doc);
  // } else {
  //   doc.load();
  // }

  // // @ts-ignore
  // return new WebsocketProvider(WEBSOCKET_ENDPOINT, WEBSOCKET_SLUG, doc, {
  //   connect: false,
  // });

  const doc = new Y.Doc();
  yjsDocMap.set(id, doc);

  // @TODO: REPLACE APP ID
  // @TODO: PUT PROPER TOKEN
  // @TODO: OR USE `HocuspocusProvider` with Hocuspocus URL
  const hocuspocusProvider = new HocuspocusProvider({
    url: "ws://localhost:8080",
    name: `lexical-${id}`,
    // token: "YOUR_TOKEN",
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
