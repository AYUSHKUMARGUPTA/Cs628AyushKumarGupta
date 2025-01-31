import './App.css';
import React, { useState } from "react";

function App() {
  return (
   <TodoApp />
  );
}
const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask(""); // Clear input field
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>ToDo List App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter task description"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} onDelete={() => deleteTask(index)} />
        ))}
      </ul>
    </div>
  );
};

const TodoItem = ({ task, onDelete }) => {
  return (
    <li className="task-item">
      {task}
      <button className="delete-btn" onClick={onDelete}>Delete</button>
    </li>
  );
};
export default App;
