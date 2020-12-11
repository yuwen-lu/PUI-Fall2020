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
import HitRanger from './pages/HitRanger';


export default function App() {
  return (

    // Wrap everything in a React.Fragment because one component only allows one return component

    <React.Fragment>
      {/* the routes for different pages, <Link />s are in /layout/Header.js */}
      <Route path="/projects">
        <Projects />
      </Route>

      <Route path="/life">
        <Life />
      </Route>

      <Route path="/resume">
        <Resume />
      </Route>

      <Route path="/HitRanger">
        <HitRanger />
      </Route>
      
      <Route exact path="/">
        <Home />
      </Route>
    </React.Fragment>
  )
}
