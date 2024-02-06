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
            <button type="submit">Save</button>
            <button onClick={toggleEdit}>Cancel</button>
        </form>
    );
}

export default EditTaskForm;
