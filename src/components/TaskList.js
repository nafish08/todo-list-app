import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, priorityFilter, deleteTask, markTaskAsCompleted, editTask }) {
    const filteredTasks = priorityFilter === 'all' ? tasks : tasks.filter(task => task.priority === priorityFilter);

    return (
        <ul className="list-group">
            {filteredTasks.map(task => (
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
