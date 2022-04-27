import React, { useRef } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, selectTodos } from "./features/todos/todosSlice";

function App() {
  const inputRef = useRef(null);
  // This is a redux fucntion to dispatch something to the global store
  // or to redux to store it there which can be later accessed anywhere.
  const dispatch = useDispatch();
  // Inorder to access the list we have to use the slectTodos function
  // as we will then be able to access the the values from the list.
  const todos = useSelector(selectTodos);
  

  const handleCLick = (e) => {
    e.preventDefault();
    const newTodo = inputRef.current.value;
    // The payload in the below dispatch function is "newTodo"
    dispatch(addTodos(newTodo));
  };

  return (
    <div className="App">
      <h1>This is a TODO List</h1>
      <form>
        <input type="text" ref={inputRef} placeholder="Write you next task.." />
        <button type="submit" onClick={handleCLick}>
          Add Todo
        </button>
      </form>
       
       {todos.map((todo) => {
         return(
           <div>
             <p>{todo}</p>
           </div>
         )
       })}

    </div>
  );
}

export default App;
