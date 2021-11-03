import React from 'react';
import {Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import RegisterPage from './components/screens/register';
import LoginPage from './components/screens/login';
import LandingPage from './components/screens/landing';
import dashboard from './components/screens/dashboard';
import dashboarddoc from './components/screens/dashboarddoc';
import FindDoctor from './components/screens/find_doctor';
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
    <section>
      <Route path="/dashboard" exact component={dashboard}/>
    </section>
    <section>
      <Route path="/dashboarddoc" exact component={dashboarddoc}/>
    </section>
    <section>
      <Route path="/find-doctor" exanct component={FindDoctor}/>
    </section>
  </div>
  );
}

export default App;

//PrivateRoute for dashboard when database is integrated.