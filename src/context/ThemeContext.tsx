"use client"
import React, {useState, createContext} from "react";

export const ThemeContext = createContext({theme: "light", handleTheme: ()=>{}});

export function ThemeProvider({children}:{children: React.ReactNode}){
    const [theme, setTheme] = useState("light");

    const handleTheme = () => {
        setTheme((prevTheme) => {
            return prevTheme === "light" ? "dark" : "light";
        });
    }

    const values = {theme, handleTheme, setTheme};
    return(
        <ThemeContext.Provider value={values}>
            <body className={theme}>
                {children}
            </body>
        </ThemeContext.Provider>
    )
}
