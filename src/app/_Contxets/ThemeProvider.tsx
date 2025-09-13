"use client"
import { createContext, useEffect, useState } from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
export default ThemeContext

export function ThemeProvider(
    {children}:{children:React.ReactNode}
){
    const [theme,setTheme] = useState<"light" | "dark">("light");
    useEffect(()=>{
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if(savedTheme)
            setTheme(savedTheme)
        else if(systemPrefersDark){
             setTheme("dark")
        }
    },[])

    useEffect(()=>{
        if(theme=='light'){
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme","light")
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme","dark")
        }        
    },[theme])

    return <ThemeContext.Provider value={{theme,setTheme}}>
        {children}
    </ThemeContext.Provider>
}