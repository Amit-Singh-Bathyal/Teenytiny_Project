// src/components/PollCard.js
import React from 'react';

const Cards = ({ poll }) => {
  return (
    <div className="poll-card bg-purple-700 text-white p-4 rounded-md mx-5">
  <h3 className="text-2xl mb-2">{poll.question}</h3>
  <ul>
    {poll.options.map((option, index) => (
      <li key={index} className="mb-1">{option}</li>
    ))}
  </ul>
  <p className="text-md mt-2">Created by: {poll.creator}</p>
  <div className='flex justify-center items-center mt-3'>
    <button type="button" className='text-lg border-solid rounded-xl border-4 border-white font-medium text-white px-6 py-2 hover:text-xl hover:text-cyan-500 hover:border-cyan-500 '>Participate</button>
  </div>
</div>

  );
};

export default Cards;
