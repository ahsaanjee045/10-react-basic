import { useState } from "react";
import { todoList } from "../../data";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
    const [todos, setTodos] = useState(todoList);

    const handleStatusChange = (id) => {
        let tempTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.status = "done";
                return todo;
            } else {
                return todo;
            }
        });
        setTodos(tempTodos);
    };

    return (
        <div
            style={{
                width: "40%",
                padding: "30px",
                borderRadius: "20px",
                border: "1px solid lightgray",
                boxShadow: "1px 1px 15px 6px lightgray",
                minHeight: "400px",
            }}
        >
            <div
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
                    placeholder="Enter Your task here"
                />
                <button
                    style={{
                        padding: "7px 9px",
                    }}
                >
                    Add Todo
                </button>
            </div>
            {todos.map((todo) => {
                return (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        handleStatusChange={handleStatusChange}
                    />
                );
            })}
        </div>
    );
};

export default TodoList;

// console.log("Change recieved In Parent From TodoItem with id : ", id);
// // map
// // index , mutate

// let index = todos.findIndex((todo) => {
//     return todo.id === id;
// });
// console.log(index);

// let tempTodos = [...todos];
// // console.log(tempTodos[index].status)
// tempTodos[index].status = "done";
// console.log(tempTodos);
// setTodos(tempTodos);
