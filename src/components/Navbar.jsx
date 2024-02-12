import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex items-center justify-center">
            <ul className="flex items-center justify-center gap-4">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {" "}
                    <Link to="/dept">Departments</Link>
                </li>
                <li>
                    {" "}
                    <Link to="/about">About</Link>
                </li>
                <li>
                    {" "}
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
