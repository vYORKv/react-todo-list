import React, { useState, useRef, useEffect } from "react";
import ToDoList from "./ToDoList";
import uuid from 'react-uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setToDos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setToDos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setToDos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return;
    console.log(name)
    setToDos(prevTodos => {
      return [...prevTodos, { id: uuid(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setToDos(newTodos)
  }

  return (
    <>
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add To-Do</button>
      <button onClick={handleClearTodos}>Clear Completed</button>
      <div>{todos.filter(todo => !todo.complete).length} left To-Do</div>
    </>
  )
}

export default App;
