import React, { useContext } from "react";
import Welcome from "./components/Welcome";
import Cart from "./components/Cart";
import Button from "./components/Button";
import { ThemeContext, useTheme } from "./context/ThemeContext";
import { Computer, Moon, Sun } from "lucide-react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Dept from "./pages/Dept";
import AllSongs from "./pages/AllSongs";
import Hindi from "./pages/Hindi";
import Punjabi from "./pages/Punjabi";
import SongLayout from "./layouts/SongLayout";

const App = () => {
    // console.log(context)

    return (
        <div
            className={`px-8 pt-5 dark:bg-slate-800 dark:text-white bg-white text-black min-h-screen`}
        >
            <Routes>
                <Route path="/" element={<Homepage />} />
                {/* Layout routes */}
                {/* Multiple Absolute routes */}
                {/* localhost:5173/songs/hindi */}
                {/* localhost:5173/hindi */}
                {/* <Route path="/songs" element={<AllSongs />} />
                <Route path="/songs/hindi" element={<Hindi />} />
                <Route path="/songs/punjabu" element={<Hindi />} /> */}
                <Route path="/songs" element={<SongLayout />}>
                    <Route index element={<AllSongs />} />
                    <Route path="hindi" element={<Hindi />} />
                    <Route path="punjabi" element={<Punjabi />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* Catch all router/wild card route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;

// Client-Side
// admin
