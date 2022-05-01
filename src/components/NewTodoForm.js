import React, { useReducer } from "react";
import {useId} from 'react'; 
import "./newTodoForm.css";

function NewTodoForm({ task, createTodo }) {
const id = useId();
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: ""
    }
  );

  const handleChange = evt => {
    setUserInput({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newTodo = { id: id, task: userInput.task, completed: false };
    createTodo(newTodo);
    setUserInput({ task: "" });
  };

  const onAddTodo = () => {
    const newTodo = { id: id, task: userInput.task, completed: false };
    createTodo(newTodo);
    setUserInput({ task: "" });
  }

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">New todo</label>
      <input
        value={userInput.task}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="New Todo"
      />
      <button onClick={onAddTodo}>Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
