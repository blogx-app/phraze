// @NOTE - whenever you make an entry here, make sure to to add it to breadcrumUtils.
export const routesName = {
  signup: '/signup',
  login: '/login',
  root: "/",
  home: "/home",
  analytics: "/analytics",
  editor: "/editor",
  leads: "/leads",
  pages: "/pages",
  posts: "/posts",
  tags: "/tags",
  settings: "/settings",
  profile: "/profile",
  billingsAndPlan: "/settings/billing-and-plan",
  manageDomain: "/settings/manage-domain",
  generalSettings: "/settings/general",
  brandingSettings: "/settings/branding",
  themeSettings: "/settings/theme",
  navigationSettings: "/settings/navigation",
};
export default routesName;

const APPBAR_HIDDEN_PATHNAME = [routesName.editor];
const SIDEBAR_HIDDEN_PATHNAME = [routesName.editor, routesName.login, routesName.signup];
const APPBAR_UNAUTH_PATHNAME = [routesName.login, routesName.signup];

export const hideAppbar = (pathname: string) =>
  APPBAR_HIDDEN_PATHNAME.includes(pathname);

export const hideSidebar = (pathname: string) =>
  SIDEBAR_HIDDEN_PATHNAME.includes(pathname);

export const showUnauthSidebar = (pathname: string) => APPBAR_UNAUTH_PATHNAME.includes(pathname)