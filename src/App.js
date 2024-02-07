import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Load tasks from local storage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Function to add a new task
  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Function to delete a task by id
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Function to mark a task as completed by id
  const markTaskAsCompleted = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Function to edit a task by id
  const editTask = (taskId, newTitle) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, title: newTitle };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Calculate total tasks count
  const totalTasksCount = tasks.length;

  // Calculate completed tasks count
  const completedTasksCount = tasks.filter(task => task.completed).length;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white h-auto rounded-lg p-3">
        <div className="flex p-2 gap-1">
          <div className="">
            <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
          </div>
        </div>
        <div className="card__content p-2">
          <div className="container">
            <h1 className="font-bold text-xl uppercase">Todo List</h1>

            {/* Counter */}
            <div className="mb-3">
              <span className="me-3">Total Tasks: {totalTasksCount}</span>
              <span>Completed Tasks: {completedTasksCount}</span>
            </div>

            <AddTaskForm addTask={addTask} />
            <div className="my-3">
              <select
                className="form-select  bg-gray-800 text-white"
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>

              {/* Search */}
              <div className="my-3 ml-2 inline">
                <input className='pl-2 bg-gray-200 text-white'
                  type="text"
                  placeholder="Search tasks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>


            <TaskList
              tasks={tasks}
              priorityFilter={priorityFilter}
              searchQuery={searchQuery}
              deleteTask={deleteTask}
              markTaskAsCompleted={markTaskAsCompleted}
              editTask={editTask}
            />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
