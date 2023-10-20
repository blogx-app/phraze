import { ReactNode } from "react";

export interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
  tabsPadding?: number;
}

export type TabPanelType = ReactNode;

export interface TabsProps {
  tabLabels: string[];
  tabPanels: TabPanelType[];
  tabsPadding?: number;
}
