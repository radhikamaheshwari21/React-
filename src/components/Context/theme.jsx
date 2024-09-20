import { createContext, useContext, useEffect } from "react";
import Card from "../Login/Card";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},

})

export const ThemeProvider = ({ children, value }) => {
    const { themeMode } = value;
  
    useEffect(() => {
      console.log("Applying theme in context:", themeMode); // Add this
      document.querySelector('html').classList.remove("light", "dark");
      document.querySelector('html').classList.add(themeMode);
    }, [themeMode]);
  
    return (<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
};

// export const ThemeProvider = ThemeContext.Provider

// useEffect(() => {
//     console.log("Applying theme: ",themeMode)
//     document.querySelector('html').classList.remove("light", "dark")
//     document.querySelector('html').classList.add(themeMode)
//   }, [themeMode])

export default function useTheme(){
    return useContext(ThemeContext)

}