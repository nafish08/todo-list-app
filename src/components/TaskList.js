import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, markTaskAsCompleted }) {
  return (
    <ul className="list-group">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          markTaskAsCompleted={markTaskAsCompleted}
        />
      ))}
    </ul>
  );
}

export default TaskList;