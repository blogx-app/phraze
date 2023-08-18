import { RouteObject } from "react-router-dom";
import { AppLayout } from "ui";
import BlogEditorPage from "../pages/BlogEditorPage";
import HomePage from "../pages/HomePage";
import ManageDomainPage from "../pages/ManageDomainPage";

export const routesName = {
  root: "/",
  home: "/home",
  editor: "/editor",
  manageDomain: "/manage-domain",
};

const routes: RouteObject[] = [
  {
    path: routesName.root,
    element: <AppLayout />,
    children: [
      { path: routesName.editor, element: <BlogEditorPage /> },
      { path: routesName.home, element: <HomePage /> },
      { path: routesName.manageDomain, element: <ManageDomainPage /> },
    ],
  },
];

export default routes;
