// @NOTE - whenever you make an entry here, make sure to to add it to breadcrumUtils.
const routesName = {
  root: "/",
  home: "/home",
  analytics: "/analytics",
  editor: "/editor",
  leads: "/leads",
  pages: "/pages",
  posts: "/posts",
  settings: "/settings",
  manageDomain: "/settings/manage-domain",
  generalSettings: "/settings/general",
};

const APPBAR_HIDDEN_PATHNAME = [routesName.editor];

export const hideAppbar = (pathname: string) =>
  APPBAR_HIDDEN_PATHNAME.includes(pathname);

export default routesName;
