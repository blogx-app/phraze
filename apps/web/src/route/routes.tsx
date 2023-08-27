import { RouteObject } from "react-router-dom";
import { AppLayout } from "ui";
import BlogEditorPage from "../pages/BlogEditorPage";
import HomePage from "../pages/HomePage";
import ManageDomainPage from "../pages/ManageDomainPage";
import { PostsPage } from "../pages/PostsPage";
import { SettingsPage } from "../pages/SettingsPage";

export const routesName: Record<string, string> = {
  root: "/",
  home: "/home",
  editor: "/editor",
  manageDomain: "/manage-domain",
  posts: "/posts",
  settings: "/settings",
};

const routes: RouteObject[] = [
  {
    path: routesName.root,
    element: <AppLayout />,
    children: [
      { path: routesName.editor, element: <BlogEditorPage /> },
      { path: routesName.home, element: <HomePage /> },
      { path: routesName.manageDomain, element: <ManageDomainPage /> },
      { path: routesName.posts, element: <PostsPage /> },
      { path: routesName.settings, element: <SettingsPage /> },
    ],
  },
];

export default routes;
