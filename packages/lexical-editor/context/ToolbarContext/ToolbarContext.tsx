import { createContext, useReducer } from "react";
import { ToolbarProviderWrapperProps, ToolbarStateType } from "./type";
import toolbarReducer, { toolbarInitialiState } from "./toolbarReducer";

export const ToolbarContext = createContext<null | ToolbarStateType>(null);

const ToolbarProiverWrapper = ({ children }: ToolbarProviderWrapperProps) => {
  const [toolbarState, dispatch] = useReducer(
    toolbarReducer,
    toolbarInitialiState
  );

  return (
    <ToolbarContext.Provider value={{ ...toolbarState, dispatch }}>
      {children}
    </ToolbarContext.Provider>
  );
};

export default ToolbarProiverWrapper;
