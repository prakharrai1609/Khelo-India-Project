import React, { useState } from 'react';
import '../../styles/userDashboard.css';

function RequestForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // code to submit form data goes here
    };

    return (
        <div className="request-form-container">
            <form onSubmit={handleSubmit} className="request-form">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RequestForm;
