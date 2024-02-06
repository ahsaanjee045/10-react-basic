import React, { useState } from "react";

const TodoInputForm = ({ addTodo }) => {
    const [input, setInput] = useState("");
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                addTodo(input);
                setInput("");
            }}
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
            }}
        >
            <input
                style={{
                    padding: "8px 10px",
                    flex: 1,
                }}
                type="text"
                value={input}
                placeholder="Enter Your task here"
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                style={{
                    padding: "7px 9px",
                }}
                type="submit"
            >
                Add Todo
            </button>
        </form>
    );
};

export default TodoInputForm;
