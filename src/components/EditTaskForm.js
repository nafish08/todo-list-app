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
        <form className='grid grid-cols-5 gap-1' onSubmit={handleSubmit}>
            <input className='col-span-3 bg-gray-200 px-1 my-3'
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={35}
            />
            <button className='hover:brightness-110 hover:animate-pulse bg-[#3b82f6] dark:text-white my-3' type="submit">Save</button>
            <button className='hover:brightness-110 hover:animate-pulse bg-[#ec4899] dark:text-white my-3' onClick={toggleEdit}>Cancel</button>
        </form>
    );
}

export default EditTaskForm;
