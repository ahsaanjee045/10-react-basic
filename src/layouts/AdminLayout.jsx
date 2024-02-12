import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div className="flex h-screen">
            <aside className="bg-red-300 h-full px-4 py-6">
                <ul>
                    <li>
                        <Link className="hover:underline" to={"/admin"}>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="hover:underline"
                            to={"/admin/add-product"}
                        >
                            Add product
                        </Link>
                    </li>
                </ul>
            </aside>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
