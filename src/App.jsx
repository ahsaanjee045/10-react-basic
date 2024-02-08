import React from "react";
import Welcome from "./components/Welcome";
import Cart from "./components/Cart";
import Button from "./components/Button";

const App = () => {
    console.log("App rendering");
    return (
        <div className="px-8 pt-5">
            <Welcome />
            <Cart />
            <Button>Click here</Button>
        </div>
    );
};

export default App;
