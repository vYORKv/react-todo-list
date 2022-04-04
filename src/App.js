import React, { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [todos, setToDos] = useState([])

  function handleAddTodo(e) {
    
  }

  return (
    <>
      <ToDoList todos={todos}/>
      <input type="text" />
      <button onClick={handleAddTodo}>Add To-Do</button>
      <button>Clear Completed</button>
      <div>0 left To-Do</div>
    </>
  )
}

export default App;
