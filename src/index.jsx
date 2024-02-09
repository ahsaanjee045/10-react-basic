import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import CountContext, { CountContextProvider } from "./context/CountContext";
import ThemeContextProvider from "./context/ThemeContext";

ReactDOM.createRoot(root).render(
    // <React.StrictMode>

    <CountContextProvider>
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
    </CountContextProvider>

    // </React.StrictMode>
);
