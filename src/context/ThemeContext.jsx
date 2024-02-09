import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

// Provider

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.className = "dark";
        } else {
            document.documentElement.className = "";
        }
    }, [theme]);

    useEffect(() => {
        if (
            localStorage.getItem("theme") === "dark" ||
            (!(localStorage.getItem("theme")) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const handleDarkTheme = () => {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
    };
    const handleLightTheme = () => {
        setTheme("light");
        localStorage.setItem("theme", "light");
    };

    const handleSystem = () => {
        let isDarkPreference = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        if (isDarkPreference) {
            setTheme("dark");
        } else {
            setTheme("light");
        }

        localStorage.removeItem("theme");
    };

    return (
        <ThemeContext.Provider
            value={{ theme, handleDarkTheme, handleLightTheme, handleSystem }}
        >
            {children}
        </ThemeContext.Provider>
    );
}



export const useTheme = ()=> {
    const context = useContext(ThemeContext)
    return context
}


