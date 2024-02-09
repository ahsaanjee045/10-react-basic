import React, { useContext } from "react";
import Welcome from "./components/Welcome";
import Cart from "./components/Cart";
import Button from "./components/Button";
import { ThemeContext, useTheme } from "./context/ThemeContext";
import { Computer, Moon, Sun } from "lucide-react";

const App = () => {
    const {handleDarkTheme, handleLightTheme, handleSystem} = useTheme();
    // console.log(context)
    

    return (
        <div
            className={`px-8 pt-5 dark:bg-slate-800 dark:text-white bg-white text-black min-h-screen`}
        >
            <div className="dark:bg-slate-950 dark:text-white bg-slate-300 text-black p-2 rounded-lg w-fit flex items-center gap-3">
                <button onClick={handleLightTheme} className="stroke-1">
                    <Sun />
                </button>
                <button onClick={handleDarkTheme} className="stroke-1">
                    <Moon />
                </button>
                <button onClick={handleSystem} className="stroke-1">
                    <Computer />
                </button>
            </div>
        </div>
    );
};

export default App;
