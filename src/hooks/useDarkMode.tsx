import {
   createContext,
   ReactNode,
   useContext,
   useEffect,
   useState,
} from "react";

interface DarkModeProviderProps {
   children: ReactNode;
}

interface DarkModeContextData {
   darkMode: boolean;
   handleSetDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextData>(
   {} as DarkModeContextData
);

export function DarkModeProvider({ children }: DarkModeProviderProps) {
   const [darkMode, setDarkMode] = useState(true);

   useEffect(() => {
      const darkModeSaved = JSON.parse(
         localStorage.getItem("darkMode") as string
      );

      if (!darkModeSaved) {
         setDarkMode(darkModeSaved);
      }
   }, []);

   function handleSetDarkMode() {
      // Saving data to local stoge
      localStorage.setItem("darkMode", JSON.stringify(!darkMode));

      setDarkMode(!darkMode);
   }

   return (
      <DarkModeContext.Provider value={{ darkMode, handleSetDarkMode }}>
         {children}
      </DarkModeContext.Provider>
   );
}

export function useDarkMode() {
   const context = useContext(DarkModeContext);

   return context;
}
