import React from "react";
import {} from "react-bootstrap";
import { Route } from "react-router-dom";
import "./App.css";
import VideoCall from "./components/screens/agora/VideoCall";
import Dashboard from "./components/screens/dashboard";
import dashboarddoc from "./components/screens/dashboarddoc";
import FindDoctor from "./components/screens/find_doctor";
import form from "./components/screens/initialform";
import LandingPage from "./components/screens/landing";
import LoginPage from "./components/screens/login";
import Patients from "./components/screens/patients";
import Prescriptions from "./components/screens/prescriptions";
import newsession from "./components/screens/newsessions";
import PreviousSessions from "./components/screens/previous_sessions";
import RegisterPage from "./components/screens/register";
import RegisterPageDoc from "./components/screens/registerdoc";
import Routines from "./components/screens/routines";
import AddPresc from "./components/screens/addpresc";
import UpcomingSessions from "./components/screens/upcoming_sessions";
import DoctorProfile from "./components/screens/doctor_profile";
import PatientFeedback from "./components/screens/patient-feedback";
import DoctorFeedback from "./components/screens/doctor-feedback";
import PendingSessions from "./components/screens/pending_sessions";
import AdminPanel from "./components/screens/admin_panel";
import Profile from "./components/screens/profile";

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
        <Route path="/dashboard" exact component={Dashboard} />
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
        <Route path="/newsession" exact component={newsession} />
      </section>
      <section>
        <Route path="/patients" exact component={Patients} />
      </section>
      <section>
        <Route path="/routines" exact component={Routines} />
      </section>
      <section>
        <Route path="/addpresc/:email/:sid" exact component={AddPresc} />
      </section>
      <section>
        <Route exact path="/call/:sessionId" component={VideoCall} />
      </section>
      <section>
        <Route path="/doctor/:name" component={DoctorProfile} />
      </section>
      <section>
        <Route path="/patient-feedback" exact component={PatientFeedback} />
      </section>
      <section>
        <Route path="/doctor-feedback" exact component={DoctorFeedback} />
      </section>
      <section>
        <Route path="/pending-session" exact component={PendingSessions} />
      </section>
      <section>
        <Route path="/admin-panel" exact component={AdminPanel} />
      </section>
      <section>
        <Route path="/user-profile" exact component={Profile}/>
      </section>
    </div>
  );
}

export default App;

//PrivateRoute for dashboard when database is integrated.
