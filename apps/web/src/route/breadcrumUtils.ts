import routesName from "./routesName";
import { BreadcrumsType } from "@phraze-app/ui/AppBar/type";

type BreadCrumsObjType = Record<
  string,
  { pageName: string; crumbs: BreadcrumsType[] }
>;

const breadCrumObj: BreadCrumsObjType = {
  [routesName.root]: { pageName: "", crumbs: [] },
  [routesName.home]: {
    pageName: "",
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
  [routesName.settings]: {
    pageName: "Settings",
    crumbs: [
      {
        name: "Settings",
        toLink: routesName.settings,
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
};

export const getNavigationBreadcrum = (path: string) => {
  return breadCrumObj[path];
};
