import React from 'react';
import {Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import RegisterPage from './components/screens/register';
import LoginPage from './components/screens/login';
import LandingPage from './components/screens/landing';
import {} from 'react-bootstrap'
function App() {
  return (
  <div>
    <section>
      <Route path="/" exact component = {LandingPage}/>
    </section>
    <section>
      <Route path="/login" exact component = {LoginPage}/>
    </section>
    <section>
      <Route path="/register" exact component = {RegisterPage}/>
    </section>
  </div>
  );
}

export default App;
