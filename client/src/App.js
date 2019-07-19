import React from 'react';
// import './App.css';
import Form from './components/form';
import Jumbotron from './components/jumbotron';
import Navbar from './components/navbar';
import Results from './components/results';
// import {Navbar, Jumbotron, Form} from 'reactstrap';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Jumbotron />
     <Form />
     <Results />
    </div>
  );
}

export default App;
