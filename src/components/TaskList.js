import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, priorityFilter, searchQuery, deleteTask, markTaskAsCompleted, editTask }) {
    // const filteredTasks = priorityFilter === 'all' ? tasks : tasks.filter(task => task.priority === priorityFilter);

    const [filteredTasks, setFilteredTasks] = useState([]);

    // Filter tasks based on priority
    const filterTasks = () => {
        let filtered = tasks;
        if (priorityFilter !== 'all') {
            filtered = filtered.filter(task => task.priority === priorityFilter);
        }
        // Filter tasks based on search query
        if (searchQuery) {
            filtered = filtered.filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        setFilteredTasks(filtered);
    };

    // Update filtered tasks when priority or search query changes
    useEffect(() => {
        filterTasks();
    }, [priorityFilter, searchQuery, tasks]);

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
