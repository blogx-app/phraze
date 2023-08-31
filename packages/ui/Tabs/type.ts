import { ReactNode } from "react";

export interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

export type TabPanelType = ReactNode;

export interface TabsProps {
  tabLabels: string[];
  tabPanels: TabPanelType[];
}
