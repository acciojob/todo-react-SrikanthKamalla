import React from "react";

const Todo = ({ todos, setTodos, input, setInput }) => {
  const handleAddTodo = () => {
    setTodos((prev) => [...prev, input]);
    setInput("");
  };
  const handleDeleteTodo = (todo) => {
    const filteredTodo = todos.filter((ele) => ele != todo);
    setTodos(filteredTodo);
  };
  return (
    <>
      <p>To-Do List</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li>
            {todo}
            <button onClick={() => handleDeleteTodo(todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
