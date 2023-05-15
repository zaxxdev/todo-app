import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() === '') {
      return;
    }
    setTasks([...tasks, newTask.trim()]);
    setNewTask('');
  };

  const handleTaskDelete = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  };  

  return (
    <div className="container">
      <h1 className="text-center my-4">ToDo List</h1>
      <form onSubmit={handleFormSubmit} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add task..."
            value={newTask}
            onChange={handleInputChange}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item">
            {task}
            <div className="task-delete-button">
    <button
      type="button"
      className="btn btn-danger"
      onClick={() => handleTaskDelete(index)}
    >
      x
    </button>
  </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
