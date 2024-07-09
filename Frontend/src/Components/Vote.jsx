import React, { useState } from 'react';
import axios from 'axios';

const Vote=()=>{
    const [pollId, setpollId] = useState('');
const [option, setOption] = useState('');
const [message, setMessage] = useState('');


const handlesubmit = async() => {
    try {
        const response = await axios.post('http://localhost:3000/vote', { pollId, option });
        setMessage(response.data.message);
    } catch (error) {
        console.error('Error:', error);
        setMessage('failed to vote');
    }
};

return(
    
)









}