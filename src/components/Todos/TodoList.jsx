import { useState } from "react";
import { todoList } from "../../data";
import TodoListItem from "./TodoListItem";
import toast from "react-hot-toast";
import TodoInputForm from "./TodoInputForm";

const TodoList = () => {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );

    const size = todos.length;

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
        window.localStorage.setItem("todos", JSON.stringify(tempTodos));
        toast.success("Todo Status Changed!");
    };

    const handleDelete = (id) => {
        let index = todos.findIndex((todo) => todo.id === id);
        let tempTodos = [...todos];
        tempTodos.splice(index, 1);
        setTodos(tempTodos);
        toast.success("Todo with ID " + id + " has been deleted");
        window.localStorage.setItem("todos", JSON.stringify(tempTodos));
    };

    const addTodo = (input) => {
        let todoObj = {
            id: size + 1,
            todo: input,
            status: "pending",
        };

        setTodos((oldItems) => {
            return [todoObj, ...oldItems];
        });

        toast.success("Todo added successfully", {
            position: "top-center",
            duration: 2000,
        });
        window.localStorage.setItem(
            "todos",
            JSON.stringify([todoObj, ...todos])
        );
    };

    return (
        <div className="p-[30px] rounded-[20px] border border-solid border-gray-300 shadow-md min-h-[400px] w-[40%]">
            {/* Form to create new Todo */}
            <TodoInputForm addTodo={addTodo} />

            {todos.map((todo) => {
                return (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        handleStatusChange={handleStatusChange}
                        handleDelete={handleDelete}
                    />
                );
            })}
        </div>
    );
};

export default TodoList;
