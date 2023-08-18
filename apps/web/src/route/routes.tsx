import { RouteObject } from "react-router-dom";
import { AppLayout } from "ui";
import BlogEditorPage from "../pages/BlogEditorPage";
import HomePage from "../pages/HomePage";

export const routesName = {
  root: "/",
  home: "/home",
  editor: "/editor",
};

const routes: RouteObject[] = [
  {
    path: routesName.root,
    element: <AppLayout />,
    children: [
      { path: routesName.editor, element: <BlogEditorPage /> },
      { path: routesName.home, element: <HomePage /> },
    ],
  },
];

export default routes;
