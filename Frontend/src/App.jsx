// src/App.js
import React, { useEffect, useState } from 'react';
import Cards from './Components/Cards';
import './App.css';

const App = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/polls')
      .then(response => response.json())
      .then(data => setPolls(data))
      .catch(error => console.error('Error fetching polls:', error));
  }, []);

  return (
    <div className="app-container">
      <h1 className="text-3xl text-center my-4">Polls</h1>
      <div className="polls-container flex flex-wrap justify-center">
        {polls.map(poll => (
          <Cards key={poll._id} poll={poll} />
        ))}
      </div>
    </div>
  );
};

export default App;
