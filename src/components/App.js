import React, { useState } from "react";
import "./../styles/App.css";
import Todo from "./Todo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div>
      {/* Do not remove the main div */}
      <Todo
        todos={todos}
        setTodos={setTodos}
        input={input}
        setInput={setInput}
      />
    </div>
  );
};

export default App;
