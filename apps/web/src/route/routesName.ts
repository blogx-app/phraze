const routesName: Record<string, string> = {
  root: "/",
  home: "/home",
  editor: "/editor",
  posts: "/posts",
  settings: "/settings",
  manageDomain: "/settings/manage-domain",
  generalSettings: "/settings/general",
};

const APPBAR_HIDDEN_PATHNAME = [routesName.editor];

export const hideAppbar = (pathname: string) =>
  APPBAR_HIDDEN_PATHNAME.includes(pathname);

export default routesName;
