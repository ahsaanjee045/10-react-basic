import React, { useState } from "react";

const TodoListItem = ({ todo, handleStatusChange, handleDelete }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 20px",
                backgroundColor:
                    todo.status === "pending" ? "crimson" : "lightgreen",
                marginBlock: "10px",
                color: "white",
                borderRadius: "10px",
            }}
        >
            <h3>{todo.todo}</h3>
            {todo.status === "pending" ? (
                <button onClick={() => handleStatusChange(todo.id)}>
                    Mark as Done
                </button>
            ) : (
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
            )}
        </div>
    );
};

export default TodoListItem;

function outer() {
    let todos = [];
    function inner(todo) {
        todo = "hey";
    }
}
