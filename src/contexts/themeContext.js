import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext("light");

function ThemeContextProvider(props) {
  const themeColors = {
    backgroundColor: {
      light: "light-bg",
      dark: "dark-bg",
    },
  };

  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeColors }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
