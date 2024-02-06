import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, markTaskAsCompleted, editTask }) {
    return (
        <ul className="list-group">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    markTaskAsCompleted={markTaskAsCompleted}
                    editTask={editTask}
                />
            ))}
        </ul>
    );
}

export default TaskList;