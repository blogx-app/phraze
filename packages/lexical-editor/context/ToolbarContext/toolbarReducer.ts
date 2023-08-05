import {
  ToolbarActionEnum,
  ToolbarReducerActionType,
  ToolbarStateType,
} from "./type";

export const toolbarInitialiState: ToolbarStateType = {
  isBoldSelected: false,
};

const toolbarReducer = (
  state: ToolbarStateType,
  action: ToolbarReducerActionType
) => {
  switch (action.type) {
    case ToolbarActionEnum.Demo:
      return state;
  }
};

export default toolbarReducer;
