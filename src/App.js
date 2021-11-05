import React from "react";
import {} from "react-bootstrap";
import { Route } from "react-router-dom";
import "./App.css";
import VideoCall from "./components/screens/agora/VideoCall";
import dashboard from "./components/screens/dashboard";
import dashboarddoc from "./components/screens/dashboarddoc";
import FindDoctor from "./components/screens/find_doctor";
import form from "./components/screens/initialform";
import LandingPage from "./components/screens/landing";
import LoginPage from "./components/screens/login";
import Patients from "./components/screens/patients";
import Prescriptions from "./components/screens/prescriptions";
import PreviousSessions from "./components/screens/previous_sessions";
import RegisterPage from "./components/screens/register";
import RegisterPageDoc from "./components/screens/registerdoc";
import Routines from "./components/screens/routines";
import UpcomingSessions from "./components/screens/upcoming_sessions";

function App() {
  return (
    <div>
      <section>
        <Route path="/" exact component={LandingPage} />
      </section>
      <section>
        <Route path="/login" exact component={LoginPage} />
      </section>
      <section>
        <Route path="/register" exact component={RegisterPage} />
      </section>
      <section>
        <Route path="/registerdoc" exact component={RegisterPageDoc} />
      </section>
      <section>
        <Route path="/dashboard" exact component={dashboard} />
      </section>
      <section>
        <Route path="/dashboarddoc" exact component={dashboarddoc} />
      </section>
      <section>
        <Route path="/find-doctor" exact component={FindDoctor} />
      </section>
      <section>
        <Route path="/upcoming-sessions" exact component={UpcomingSessions} />
      </section>
      <section>
        <Route path="/previous-sessions" exact component={PreviousSessions} />
      </section>
      <section>
        <Route path="/form" exact component={form} />
      </section>
      <section>
        <Route path="/prescriptions" exact component={Prescriptions} />
      </section>
      <section>
        <Route path="/patients" exact component={Patients} />
      </section>
      <section>
        <Route path="/routines" exact component={Routines} />
      </section>
      <section>
        <Route exact path="/call" component={VideoCall} />
      </section>
    </div>
  );
}

export default App;

//PrivateRoute for dashboard when database is integrated.
