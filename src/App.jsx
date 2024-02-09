import React, { useContext } from "react";
import Welcome from "./components/Welcome";
import Cart from "./components/Cart";
import Button from "./components/Button";
import { ThemeContext, useTheme } from "./context/ThemeContext";
import { Computer,  Moon, Sun } from "lucide-react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
    const { handleDarkTheme, handleLightTheme, handleSystem } = useTheme();
    // console.log(context)

    return (
        <div
            className={`px-8 pt-5 dark:bg-slate-800 dark:text-white bg-white text-black min-h-screen`}
        >
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;

// Client-Side
