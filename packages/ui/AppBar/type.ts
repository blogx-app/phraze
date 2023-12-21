import { ReactNode } from "react";

export interface BreadcrumsType {
  name: string;
  toLink: string;
}

export interface AppBarProps {
  getNavigationBreadcrum: (path: string) => {
    pageName: string;
    crumbs: BreadcrumsType[];
  };
  showUnauthSidebar: (path: string) => boolean;
  hideAppbar?: boolean;
  isHomeMode: boolean;
  blogSwitcher: ReactNode;
  getMatchedRoute: (path: string) => string;
}
