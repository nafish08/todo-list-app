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
            <input className='bg-gray-200 px-1 my-3'
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button className='hover:brightness-110 hover:animate-pulse px-2 bg-[#3b82f6] dark:text-white mb-2' type="submit">Save</button>
            <button className='hover:brightness-110 hover:animate-pulse px-2 bg-[#ec4899] dark:text-white mr-2 mb-2' onClick={toggleEdit}>Cancel</button>
        </form>
    );
}

export default EditTaskForm;
