import React from 'react';

function TaskItem({ task, deleteTask, markTaskAsCompleted }) {
    return (
      <li className={`list-group-item ${task.completed ? 'completed' : ''}`}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => markTaskAsCompleted(task.id)}
        />
      </li>
    );
  }

export default TaskItem;