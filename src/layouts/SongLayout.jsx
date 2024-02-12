import React from "react";
import { Outlet } from "react-router-dom";

const SongLayout = () => {
    return (
        <div>
            {/* layout to share */}

            <h1>This is a songs page</h1>
            {/* this component shows the output of the current active route */}
            <Outlet />
        </div>
    );
};

export default SongLayout;
