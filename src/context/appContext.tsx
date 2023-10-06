import { createContext, ReactNode, useContext, useState } from "react";

type AppContextProviderProps = {
  children: ReactNode;
};

type AppContext = {
  showNavBar: boolean;
  setShowNavBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext({} as AppContext);

//custom hook
export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvieder({ children }: AppContextProviderProps) {
  const [showNavBar, setShowNavBar] = useState(true);

  return (
    <AppContext.Provider value={{ showNavBar, setShowNavBar }}>
      {children}
    </AppContext.Provider>
  );
}
