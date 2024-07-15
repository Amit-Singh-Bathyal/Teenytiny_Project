
// src/App.js
import React, { useEffect, useState } from 'react';
import Cards from './Components/Cards';
import './App.css'; 
import Navbar from './Components/Navbar';
import axios from 'axios';
import Footer from './Components/Footer';
import CreatePoll from './Components/Createpoll';

const App = () => {
  const [polls, setPolls] = useState([]);



  useEffect(() => {
    axios.get('http://localhost:3000/api/polls')
      .then(response => {
        setPolls(response.data);
      })
      .catch(error => {
        console.error('Error fetching polls:', error);
      });
  }, []);

  return (
    <div className ='bg-black'>
<Navbar/>
    <div className="app-container">
      <h1 className="text-3xl text-center my-4 text-white">POLLS</h1>

      <div className="polls-container grid grid-cols-2 gap-4">
        {polls.map(poll => (
          <Cards key={poll._id} poll={poll} />
        ))}
      </div>
    </div>

    <Footer/>
        <div className="App">
          <CreatePoll/>
          <Vote/>
        </div>
    </div>
  );
};

export default App;
