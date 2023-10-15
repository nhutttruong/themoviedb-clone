import { createContext, ReactNode, useContext } from "react";

type AppContextProviderProps = {
  children: ReactNode;
};

type AppContext = {};

const AppContext = createContext({} as AppContext);

//custom hook
export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvieder({ children }: AppContextProviderProps) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
