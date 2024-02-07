import React, { useState } from 'react';
import EditTaskForm from './EditTaskForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function TaskItem({ task, deleteTask, markTaskAsCompleted, editTask }) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleCheckboxChange = () => {
    markTaskAsCompleted(task.id, !task.completed); // Toggle completion status
  };

  return (
    <li className={`grid grid-cols-1  ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <EditTaskForm
          task={task}
          editTask={editTask}
          toggleEdit={toggleEdit}
        />
      ) : (
        <div className='grid grid-cols-5 gap-1'>
          <div className='col-span-3 flex items-center'>
            <input
              className='dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-4 h-4 mr-2'
              type="checkbox"
              checked={task.completed}
              onChange={handleCheckboxChange} // Update the onChange handler
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'gray' : 'black' }}>{task.title}</span>
          </div>

          <button
            className="hover:brightness-110 hover:animate-pulse px-2 bg-[#3b82f6] dark:text-white mb-2"
            onClick={toggleEdit}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button
            className="hover:brightness-110 hover:animate-pulse px-2 bg-[#ec4899] dark:text-white mb-2"
            onClick={() => deleteTask(task.id)}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>

        </div>
      )}
    </li>


  );
}

export default TaskItem;
