import React, { useContext } from "react";
import CountContext from "../context/CountContext";

const Welcome = () => {
    const { user, handleUserLogin, handleUserLogout } = useContext(CountContext);

    console.log("Welcome rendering")
    return (
        <div className="mx-auto p-6">
            {user ? (
                <div>
                    <p>Welcome {user.name}</p>{" "}
                    <button
                        onClick={handleUserLogout}
                        className="bg-indigo-600 px-2 py-1 rounded-lg text-white font-semibold"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <button
                    onClick={handleUserLogin}
                    className="bg-indigo-600 px-2 py-1 rounded-lg text-white font-semibold"
                >
                    Login
                </button>
            )}
        </div>
    );
};

export default Welcome;
