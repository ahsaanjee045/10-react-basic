import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import CountContext, { CountContextProvider } from "./context/CountContext";

ReactDOM.createRoot(root).render(
    // <React.StrictMode>

    <CountContextProvider>
        <App />
    </CountContextProvider>

    // </React.StrictMode>
);
