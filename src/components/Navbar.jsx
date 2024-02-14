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
                    <Link to="/shop">Shops</Link>
                </li>
                <li>
                    {" "}
                    <Link to="/admin">Admin</Link>
                </li>
                <li>
                    {" "}
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
