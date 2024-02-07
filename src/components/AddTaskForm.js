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
        <form className='grid grid-cols-4 gap-2' onSubmit={handleSubmit}>
            <input className=' col-span-2 bg-gray-200 px-2 my-3'
                type="text"
                placeholder="Add a new task (max 35 characters)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={35}
            />
            <select
                className=" bg-gray-600 text-white my-3"
                value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
            </select>
            <button className='hover:brightness-110 hover:animate-pulse font-bold py-1 px-1 my-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white' type="submit">Add Task</button>
        </form>
    );
}

export default AddTaskForm;
