// src/components/PollCard.js
import React from 'react';

const Cards = ({ poll }) => {
  return (
    <div className="poll-card bg-zinc-600 text-white p-4 rounded-md m-2">
      <h3 className="text-lg mb-2">{poll.question}</h3>
      <ul>
        {poll.options.map((option, index) => (
          <li key={index} className="mb-1">{option}</li>
        ))}
      </ul>
      <p className="text-sm mt-2">Created by: {poll.creator}</p>
    </div>
  );
};

export default Cards;
