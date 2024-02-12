import { Link } from "react-router-dom";
import React from "react";

const NotFound = () => {
    return (
        <div>
            <h1>Page not Found!</h1>
            <Link to={"/"}>Go to Home</Link>
        </div>
    );
};

export default NotFound;
