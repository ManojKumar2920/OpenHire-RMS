import { useState } from "react";
import { createContext,useContext } from "react";

export const ThemeContext = createContext(null);

const ThemeContextProvider =({children})=>{
    const [theme,setTheme]=useState("light");
    const ThemeValue = {
        theme,
        setTheme
    };

    return(
        <ThemeContext.Provider value={ThemeValue}>
            {
                children
            }
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;