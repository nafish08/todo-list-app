import React, { useState } from 'react';
import EditTaskForm from './EditTaskForm';

function TaskItem({ task, deleteTask, markTaskAsCompleted, editTask }) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };


  return (
    <li className={`list-group-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <EditTaskForm
          task={task}
          editTask={editTask}
          toggleEdit={toggleEdit}
        />
      ) : (
        <div className=''>
          <input className='dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-4 h-4'
            type="checkbox"
            checked={task.completed}
            onChange={() => markTaskAsCompleted(task.id)}
          />
          <span>{task.title}</span>
          <button
            className="hover:brightness-110 hover:animate-pulse font-bold px-2 bg-red-500 text-white float-right mr-2"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
          <button
            className="hover:brightness-110 hover:animate-pulse font-bold px-2 bg-blue-500 text-white float-right mr-2"
            onClick={toggleEdit}
          >
            Edit
          </button>
        </div>
      )}
    </li>
  );
}

export default TaskItem;