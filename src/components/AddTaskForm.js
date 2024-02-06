import React, { useState } from 'react';

function AddTaskForm({ addTask }) {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('low');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        addTask({ id: Date.now(), title, completed: false, priority });
        setTitle('');
        setPriority('low');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTaskForm;
