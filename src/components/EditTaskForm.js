// EditTaskForm.js
import React, { useState } from 'react';

function EditTaskForm({ task, editTask, toggleEdit }) {
    const [title, setTitle] = useState(task.title);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        editTask(task.id, title);
        toggleEdit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button className='hover:brightness-110 hover:animate-pulse font-bold py-1 px-2 m-1 bg-green-400 text-white' type="submit">Save</button>
            <button className='hover:brightness-110 hover:animate-pulse font-bold py-1 px-2 m-1 bg-red-400 text-white' onClick={toggleEdit}>Cancel</button>
        </form>
    );
}

export default EditTaskForm;
