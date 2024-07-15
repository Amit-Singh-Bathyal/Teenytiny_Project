import React, { useState } from 'react';
import axios from 'axios';

const Vote=()=>{
    const [pollId, setpollId] = useState('');
const [option, setOption] = useState('');
const [message, setMessage] = useState('');


const handleSubmit = async() => {
    try {
        const response = await axios.post('http://localhost:3000/vote', { pollId, option });
        setMessage(response.data.message);
    } catch (error) {
        console.error('Error:', error);
        setMessage('failed to vote');
    }
};

return(
    <div>
    <h2>Vote on Poll</h2>
    <form onSubmit={handleSubmit}>
        <label>
            Poll ID:
            <input type="text" value={pollId} onChange={(e) => setPollId(e.target.value)} />
        </label>
        <label>
            Option:
            <input type="text" value={option} onChange={(e) => setOption(e.target.value)} />
        </label>
        <button type="submit">Vote</button>
    </form>
    <p>{message}</p>
</div>
);
};
export default Vote;

