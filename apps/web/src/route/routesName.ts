// @NOTE - whenever you make an entry here, make sure to to add it to breadcrumUtils.
export const routesName = {
  signup: "/signup",
  login: "/login",
  root: "/",
  home: "/home",
  profile: "/profile",
  analytics: "/:blogName/analytics",
  editor: "/:blogName/editor",
  leads: "/:blogName/leads",
  pages: "/:blogName/pages",
  posts: "/:blogName/posts",
  postDraft: "/:blogName/posts?blogState=draft",
  postPublished: "/:blogName/posts?blogState=published",
  postScheduled: "/:blogName/posts?blogState=scheduled",
  tags: "/:blogName/tags",
  settings: "/:blogName/settings",
  billingsAndPlan: "/:blogName/settings/billing-and-plan",
  manageDomain: "/:blogName/settings/manage-domain",
  generalSettings: "/:blogName/settings/general",
  brandingSettings: "/:blogName/settings/branding",
  themeSettings: "/:blogName/settings/theme",
  navigationSettings: "/:blogName/settings/navigation",
};
export default routesName;

const APPBAR_UNAUTH_PATHNAME = [routesName.login, routesName.signup];

export const showUnauthSidebar = (pathname: string) =>
  APPBAR_UNAUTH_PATHNAME.includes(pathname);
