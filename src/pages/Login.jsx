import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = ({ user, setUser }) => {
    const navigate = useNavigate();
    const handleLogin = () => {
        setUser({ name: "Ahsaan" });
        navigate("/");
        
    };

    if (user) {
        return <Navigate to={"/"} />;
    }

    return (
        <div className="flex items-center justify-center">
            <button
                onClick={handleLogin}
                className="bg-purple-600 text-white font-semibold rounded-xl  px-4 py-2 mt-3"
            >
                Login
            </button>
        </div>
    );
};

export default Login;
