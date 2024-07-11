import { useState } from 'react'
import Cards from './Components/Cards'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardPage from './CardsPage';

function App() {
  
  return (
    <div>
    <Router>
      <Switch>
        <Route path="/card" component={CardsPage} />
      </Switch>
    </Router>

</div>


  )
}

export default App
