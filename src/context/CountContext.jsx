import { createContext, useState } from "react";

const CountContext = createContext();

export default CountContext;

export const CountContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const handleUserLogin = () => {
        setUser({ name: "Alex" });
    };
    const handleUserLogout = () => {
        setUser(null);
    };

    return (
        <CountContext.Provider
            value={{ user, handleUserLogin, handleUserLogout }}
        >
            {children}
        </CountContext.Provider>
    );
};

// Step 1 : create the context
// Step 2 : provide the context to the app
// Step 3 : Consume the context
