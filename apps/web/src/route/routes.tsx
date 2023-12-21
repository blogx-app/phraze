import { RouteObject, matchRoutes } from "react-router-dom";
import { AppLayout } from "../container/AppLayout";
import BlogEditorPage from "../pages/BlogEditorPage";
import HomePage from "../pages/HomePage";
import ManageDomainPage from "../pages/ManageDomainPage";
import { PostsPage } from "../pages/PostsPage";
import { SettingsPage } from "../pages/SettingsPage";
import GeneralSettingsPage from "../pages/GeneralSettingsPage/GeneralSettingsPage";
import routesName, { showUnauthSidebar } from "./routesName";
import { getNavigationBreadcrum } from "./breadcrumUtils";
import LeadsPage from "../pages/LeadsPage";
import PagesPage from "../pages/PagesPage";
import TagsPage from "../pages/TagsPage";
import BrandingSettingPage from "../pages/BrandingSettingsPage";
import ThemeSettingsPage from "../pages/ThemeSettingsPage";
import NavigationSettingsPage from "../pages/NavigationSettingsPage";
import ProfilePage from "../pages/ProfilePage";
import BillingAndPlansPage from "../pages/BillingAndPlansPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

const routes: RouteObject[] = [
  {
    path: routesName.root,
    element: (
      <AppLayout
        getNavigationBreadcrum={getNavigationBreadcrum}
        showUnauthSidebar={showUnauthSidebar}
      />
    ),
    children: [
      { path: routesName.editor, element: <BlogEditorPage /> },
      { path: routesName.home, element: <HomePage /> },
      { path: routesName.manageDomain, element: <ManageDomainPage /> },
      { path: routesName.posts, element: <PostsPage /> },
      { path: routesName.settings, element: <SettingsPage /> },
      { path: routesName.generalSettings, element: <GeneralSettingsPage /> },
      { path: routesName.analytics, element: <>Analytics Page</> },
      { path: routesName.leads, element: <LeadsPage /> },
      { path: routesName.pages, element: <PagesPage /> },
      { path: routesName.tags, element: <TagsPage /> },
      { path: routesName.brandingSettings, element: <BrandingSettingPage /> },
      { path: routesName.themeSettings, element: <ThemeSettingsPage /> },
      { path: routesName.billingsAndPlan, element: <BillingAndPlansPage /> },
      {
        path: routesName.navigationSettings,
        element: <NavigationSettingsPage />,
      },
      { path: routesName.profile, element: <ProfilePage /> },
      {
        path: routesName.login,
        element: <LoginPage />,
      },
      {
        path: routesName.signup,
        element: <SignupPage />,
      },
    ],
  },
];

// Takes in a pathname (from browser) and return the corresponding pathname from routesName
// input => /acme/editor => /:blogName/editor
export const getMatchingPathname = (path: string) => {
  const [matchingRoutes] =
    matchRoutes(routes, path)?.filter((route) => route.pathname === path) || [];

  return matchingRoutes.route.path || "";
};

export { default as routesName } from "./routesName";
export default routes;
