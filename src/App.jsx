import React from "react";
import Listing from "./components/Listing";
import TodoList from "./components/Todos/TodoList";
import Button from "./components/Button";
import { Toaster } from "react-hot-toast";

const App = () => {
    return (
        <div className="App">
            <Toaster />
            <TodoList />
        </div>
    );
};

export default App;
