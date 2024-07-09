import React from 'react';
import CreatePoll from './Components/Createpoll';

const App = () => {
    return (
        <div className="App">
          <CreatePoll/>
          <Vote/>
        </div>
    );
};

export default App