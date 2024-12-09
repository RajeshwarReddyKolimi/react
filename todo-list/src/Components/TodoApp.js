import React, { useState } from "react";
import "./todo.css";
export default function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  function handleCreateTask(e) {
    e.preventDefault();
    if (!currentTask?.trim()) {
      alert("Input cannot be empty");
      return;
    }
    const newTask = {
      name: currentTask,
    };
    setTasks((prev) => [...prev, newTask]);
    setCurrentTask("");
  }
  return (
    <main>
      <form onSubmit={(e) => handleCreateTask(e)}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        <h1>My tasks</h1>
        <div className="task-container">
          {tasks.map((task, id) => (
            <div key={id} className="task-item">
              <p>{task?.name}</p>
            </div>
          ))}
          {!tasks?.length && <p>No tasks yet</p>}
        </div>
      </div>
    </main>
  );
}
