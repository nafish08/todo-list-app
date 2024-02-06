import React, { useState } from 'react';
import EditTaskForm from './EditTaskForm';

function TaskItem({ task, deleteTask, markTaskAsCompleted, editTask }) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };


  return (
    <li className={`list-group-item flex items-center justify-between ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <EditTaskForm
          task={task}
          editTask={editTask}
          toggleEdit={toggleEdit}
        />
      ) : (
        <>
          <div className='flex items-center'>
            <input
              className='dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-4 h-4 mr-2'
              type="checkbox"
              checked={task.completed}
              onChange={() => markTaskAsCompleted(task.id)}
            />
            <span className="flex-1 truncate">{task.title}</span>
          </div>
          <div>
            <button
              className="hover:brightness-110 hover:animate-pulse px-2 bg-[#3b82f6] dark:text-white mb-2"
              onClick={toggleEdit}
            >
              Edit
            </button>
            <button
              className="hover:brightness-110 hover:animate-pulse px-2 bg-[#ec4899] dark:text-white mr-2 mb-2"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>

          </div>
        </>
      )}
    </li>


  );
}

export default TaskItem;