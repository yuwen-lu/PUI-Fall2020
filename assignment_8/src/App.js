import React, { Components } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Projects from './pages/Projects';
import Home from './pages/Home';
import Life from './pages/Life';
import Resume from './pages/Resume';
import './App.css';


function App() {
  return (


    <React.Fragment>
      
      <Route path="/projects">
        <Projects />
      </Route>

      <Route path="/life">
        <Life />
      </Route>

      <Route path="/resume">
        <Resume />
      </Route>
      
      <Route exact path="/">
        <Home />
      </Route>
    </React.Fragment>

  );
}

export default App;
