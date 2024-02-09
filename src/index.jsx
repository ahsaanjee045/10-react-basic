import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import CountContext, { CountContextProvider } from "./context/CountContext";
import ThemeContextProvider from "./context/ThemeContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(root).render(
    // <React.StrictMode>

    // It is providing the context of the routing
    <BrowserRouter>
        <CountContextProvider>
            <ThemeContextProvider>
                <App />
            </ThemeContextProvider>
        </CountContextProvider>
    </BrowserRouter>

    // </React.StrictMode>
);
