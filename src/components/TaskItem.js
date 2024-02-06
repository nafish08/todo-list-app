import React from 'react';

function TaskItem({ task, deleteTask, markTaskAsCompleted }) {
  return (
    <li className={`list-group-item ${task.completed ? 'completed' : ''}`}>
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
    </li>
  );
}

export default TaskItem;