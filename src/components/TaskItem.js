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
        <>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => markTaskAsCompleted(task.id)}
          />
          <span>{task.title}</span>
          <button
            className="btn btn-danger btn-sm float-right"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
          <button
            className="btn btn-primary btn-sm float-right mr-2"
            onClick={toggleEdit}
          >
            Edit
          </button>
        </>
      )}
    </li>
  );
}

export default TaskItem;