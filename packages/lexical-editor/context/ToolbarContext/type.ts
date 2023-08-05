// TODO - Add real action
export enum ToolbarActionEnum {
  Demo = "DEMO",
}

export interface ToolbarProviderWrapperProps {
  children: React.ReactNode;
}

export interface ToolbarReducerActionType {
  type: ToolbarActionEnum;
  payload?: any;
}

export type ToolbarContextProviderOtherValues = {
  dispatch?: React.Dispatch<ToolbarReducerActionType>;
};

export interface ToolbarStateType extends ToolbarContextProviderOtherValues {
  isBoldSelected: boolean;
}
