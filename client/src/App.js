import React from 'react';
// import './App.css';
import Form from './components/form';
import Jumbotron from './components/jumbotron';
import Navbar from './components/navbar';
import Results from './components/results';
import Saved from './pages/Saved';
// import {Navbar, Jumbotron, Form} from 'reactstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
     
     <Navbar />
     <Jumbotron />
     {/* <Form /> */}
     <Route path="/" exact component={Form}/>

     <Switch>
     <Route path="/" exact  component={Results}/>
     <Route path="/saved" exact component={Saved} />
     </Switch>
    </div>
    </Router>
    
  );
}

export default App;
