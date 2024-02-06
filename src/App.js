import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Function to mark a task as completed by id
  const markTaskAsCompleted = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    }));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <AddTaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        markTaskAsCompleted={markTaskAsCompleted}
      />
    </div>
  );
}

export default App;
