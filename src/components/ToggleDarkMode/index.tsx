import { ToggleDarkModeContainer } from "./styles";
import { FiSun } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";

interface ToggleDarkModeProps {
   darkMode: boolean;
   onHandleDarkMode: () => void;
   width: "small" | "large";
}

export function ToggleDarkMode({
   width,
   darkMode,
   onHandleDarkMode,
}: ToggleDarkModeProps) {
   return (
      <ToggleDarkModeContainer width={width} className="toggle-switch">
         <label>
            <input type="checkbox" onClick={onHandleDarkMode} />
            <FiSun className={`sun-icon ${!darkMode && "light-selected"}`} />
            <LuMoonStar
               className={`moon-icon ${darkMode && "dark-selected"}`}
            />
         </label>
      </ToggleDarkModeContainer>
   );
}
