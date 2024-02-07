import React, { useCallback, useEffect, useState } from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, priorityFilter, searchQuery, deleteTask, markTaskAsCompleted, editTask }) {
    // const filteredTasks = priorityFilter === 'all' ? tasks : tasks.filter(task => task.priority === priorityFilter);

    const [filteredTasks, setFilteredTasks] = useState([]);

    // Filter tasks based on priority
    const filterTasks = useCallback(() => {
        let filtered = tasks;
        if (priorityFilter !== 'all') {
            filtered = filtered.filter(task => task.priority === priorityFilter);
        }
        if (searchQuery) {
            filtered = filtered.filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        setFilteredTasks(filtered);
    }, [tasks, priorityFilter, searchQuery]);

    // Update filtered tasks when priority or search query changes
    useEffect(() => {
        filterTasks();
    }, [priorityFilter, searchQuery, tasks, filterTasks]);

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
