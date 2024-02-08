import React, { useState } from "react";

const TodoListItem = ({ todo, handleStatusChange, handleDelete }) => {
    return (
        <div
            className={`${
                todo.status === "pending" ? "bg-rose-600" : "bg-green-300"
            } flex justify-between items-center py-[10px] px-[20px] my-[10px] text-white rounded-[10px]`}
        >
            <div className="flex gap-2">
                <input type="checkbox" name="" id="" />
                <h3>{todo.todo}</h3>
            </div>
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
