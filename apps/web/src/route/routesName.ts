// @NOTE - whenever you make an entry here, make sure to to add it to breadcrumUtils.
const routesName = {
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
  manageDomain: "/settings/manage-domain",
  generalSettings: "/settings/general",
  brandingSettings: "/settings/branding",
  themeSettings: "/settings/theme",
  navigationSettings: "/settings/navigation",
};

const APPBAR_HIDDEN_PATHNAME = [routesName.editor];

export const hideAppbar = (pathname: string) =>
  APPBAR_HIDDEN_PATHNAME.includes(pathname);

export default routesName;
