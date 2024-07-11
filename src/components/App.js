
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if(task) {
      const newTask = { id: tasks.length, name: task };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onChangeHandler = (e) => {
    setTask(e.target.value)
  };

  return (
    <div className="App">
        {/* Do not remove the main div */}
        <h3>To-Do List</h3>
        <div className="input-container">
          <input type="text" placeholder="Enter a task" onChange={onChangeHandler}></input>
          <button onClick={addTask}>Add Task</button>
        </div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.name}
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default App
