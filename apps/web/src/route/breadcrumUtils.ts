import routesName from "./routesName";
import { BreadcrumsType } from "@phraze-app/ui/AppBar/type";

type BreadCrumsObjType = Record<
  string,
  { pageName: string; crumbs: BreadcrumsType[] }
>;

const breadCrumObj: BreadCrumsObjType = {
  [routesName.root]: { pageName: "", crumbs: [] },
  [routesName.home]: {
    pageName: "Home",
    crumbs: [
      {
        name: "Home",
        toLink: routesName.home,
      },
    ],
  },
  [routesName.editor]: {
    pageName: "Editor",
    crumbs: [
      {
        name: "Editor",
        toLink: routesName.editor,
      },
    ],
  },
  [routesName.posts]: {
    pageName: "Posts",
    crumbs: [
      {
        name: "Posts",
        toLink: routesName.posts,
      },
    ],
  },
  [routesName.pages]: {
    pageName: "Pages",
    crumbs: [
      {
        name: "Pages",
        toLink: routesName.pages,
      },
    ],
  },
  [routesName.tags]: {
    pageName: "Tags",
    crumbs: [
      {
        name: "Tags",
        toLink: routesName.tags,
      },
    ],
  },
  [routesName.analytics]: {
    pageName: "Analytics",
    crumbs: [
      {
        name: "Analytics",
        toLink: routesName.analytics,
      },
    ],
  },
  [routesName.leads]: {
    pageName: "Leads",
    crumbs: [
      {
        name: "Leads",
        toLink: routesName.leads,
      },
    ],
  },
  [routesName.settings]: {
    pageName: "Settings",
    crumbs: [
      {
        name: "Settings",
        toLink: routesName.settings,
      },
    ],
  },
  [routesName.profile]: {
    pageName: "Profile",
    crumbs: [
      {
        name: "Profile",
        toLink: routesName.profile,
      },
    ],
  },
  [routesName.manageDomain]: {
    pageName: "Manage Domain",
    crumbs: [
      {
        name: "Settings",
        toLink: routesName.settings,
      },
      {
        name: "Manage Domain",
        toLink: routesName.manageDomain,
      },
    ],
  },
  [routesName.generalSettings]: {
    pageName: "General Settings",
    crumbs: [
      {
        name: "Settings",
        toLink: routesName.settings,
      },
      {
        name: "General Settings",
        toLink: routesName.generalSettings,
      },
    ],
  },
  [routesName.billingsAndPlan]: {
    pageName: "Billings and Plan",
    crumbs: [
      {
        name: "Settings",
        toLink: routesName.settings,
      },
      {
        name: "Billings and Plan",
        toLink: routesName.billingsAndPlan,
      },
    ],
  },
  [routesName.brandingSettings]: {
    pageName: "Branding Settings",
    crumbs: [
      {
        name: "Settings",
        toLink: routesName.settings,
      },
      {
        name: "Branding Settings",
        toLink: routesName.brandingSettings,
      },
    ],
  },
  [routesName.themeSettings]: {
    pageName: "Theme Settings",
    crumbs: [
      {
        name: "Settings",
        toLink: routesName.settings,
      },
      {
        name: "Theme Settings",
        toLink: routesName.themeSettings,
      },
    ],
  },
  [routesName.navigationSettings]: {
    pageName: "Navigation Settings",
    crumbs: [
      {
        name: "Settings",
        toLink: routesName.settings,
      },
      {
        name: "Navigation Settings",
        toLink: routesName.navigationSettings,
      },
    ],
  },
};

export const getNavigationBreadcrum = (path: string) => {
  return breadCrumObj[path];
};
