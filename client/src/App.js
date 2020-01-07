import React from 'react';
import './App.css';
import Jumbotron from './components/jumbotron';
import Navbar from './components/navbar';
import Saved from './pages/Saved';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Noty from 'noty';  
import "../node_modules/noty/lib/noty.css";  
import "../node_modules/noty/lib/themes/sunset.css"; 



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Jumbotron />
        <Switch>
          <Route path="/" exact>
              <Home />
          </Route>
          <Route path="/saved" exact>
              <Saved/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
