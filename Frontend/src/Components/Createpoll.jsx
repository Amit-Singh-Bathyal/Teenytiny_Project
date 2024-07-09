import React, { useState } from 'react';
import axios from 'axios';

const Createpoll= ()=>{
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState('');
    const [creator, setCreator] = useState('');
    const [message, setMessage] = useState('');

    const handlesubmit = async () => {
       
        try {
            const response = await axios.post('http://localhost:3000/createpolls', { question, options: options.split(','), creator });
            setMessage(response.data.message);
        } catch (error) {
            console.error('Error creating poll:', error);
            setMessage('Failed to create poll');
        }
    };

    return (
        <div>
            <h2>Create Poll</h2>
            <form onSubmit={handlesubmit}>
                <label>
                    Question:
                    <input type="text" value={question} onChange={(text) => setQuestion(text.target.value)} />
                </label>
                <label>
                    Options:
                    <input type="text" value={options} onChange={(text) => setOptions(text.target.value)} />
                </label>
                <label>
                    Creator:
                    <input type="text" value={creator} onChange={(text) => setCreator(text.target.value)} />
                </label>
                <button type="submit">Create Poll</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default CreatePoll;
