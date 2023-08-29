import { RouteObject } from "react-router-dom";
import { AppLayout } from "ui";
import BlogEditorPage from "../pages/BlogEditorPage";
import HomePage from "../pages/HomePage";
import ManageDomainPage from "../pages/ManageDomainPage";
import { PostsPage } from "../pages/PostsPage";
import { SettingsPage } from "../pages/SettingsPage";
import GeneralSettingsPage from "../pages/GeneralSettingsPage/GeneralSettingsPage";
import routesName from "./routesName";
import { getNavigationBreadcrum } from "./breadcrumUtils";

const routes: RouteObject[] = [
  {
    path: routesName.root,
    element: <AppLayout getNavigationBreadcrum={getNavigationBreadcrum} />,
    children: [
      { path: routesName.editor, element: <BlogEditorPage /> },
      { path: routesName.home, element: <HomePage /> },
      { path: routesName.manageDomain, element: <ManageDomainPage /> },
      { path: routesName.posts, element: <PostsPage /> },
      { path: routesName.settings, element: <SettingsPage /> },
      { path: routesName.generalSettings, element: <GeneralSettingsPage /> },
    ],
  },
];

export { default as routesName } from "./routesName";
export default routes;
