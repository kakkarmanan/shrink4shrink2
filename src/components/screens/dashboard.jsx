import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import Tilt from "react-parallax-tilt";

const Dashboard = (props) => {
  console.log(props);
  const [join, setJoin] = useState(false);
  const [latestSession, setLatestSession] = useState(null);
  useEffect(() => {
    const func = async () => {
      let data = await fetch(
        "https://shrink4shrink.herokuapp.com/api/usersessions",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
          },
          body: JSON.stringify({
            email: JSON.parse(localStorage.getItem("user")).email,
            upcoming: "true",
          }),
        }
      );
      data = await data.json();
      setLatestSession(data[0]);
      const date = new Date(Date.now());
      if (
        data.length > 0 &&
        Number(data[0].time.split(":")[0]) === date.getHours() &&
        date.getMinutes() - Number(data[0].time.split(":")[1]) <= 5
      ) {
        setJoin(true);
      }
    };
    func();
  }, []);
  const handleSignOut = () => {
    localStorage.removeItem("user");
  };
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            s4s
          </a>
          <form className="d-flex">
            <Link
              to="/"
              className="button btn btn-outline-success me-2"
              onClick={handleSignOut}
            >
              Logout
            </Link>
          </form>
        </div>
      </nav>
      <div className="container-fluid" id="main">
        <div className="row row-offcanvas row-offcanvas-left">
          <div
            className="col-md-3 col-lg-2 sidebar-offcanvas pl-0"
            id="sidebar"
            role="navigation"
            style={{ backgroundColor: "#171010" }}
          >
            <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
              <li className="nav-item">
                <a className="nav-link text-light" href="/dashboard">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/upcoming-sessions">
                  Upcoming Sessions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/previous-sessions">
                  Previous Sessions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/routines">
                  Routines
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/prescriptions">
                  Prescriptions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/newsession">
                  New Session
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/find-doctor">
                  Find Doctor
                </a>
              </li>
            </ul>
          </div>

          <div
            className="col main pt-5 mt-3"
            style={{ backgroundColor: "#FAF3F3" }}
          >
            <h1 className="display-4 d-none d-sm-block text-dark">UserName</h1>
            <p className="lead d-none d-sm-block text-dark">Dashboard</p>

            <div
              className="alert alert-warning fade collapse"
              role="alert"
              id="myAlert"
            >
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
                <span className="sr-only">Close</span>
              </button>
              <strong>Holy guacamole!</strong> It's free.. this is an example
              theme.
            </div>
            <div className="row mb-3">
              <div className="col-xl-3 col-sm-6 py-2">
                <div className="card bg-success text-white h-100">
                  <Tilt>
                    <div className="card-body bg-success">
                      <div className="rotate">
                        <i className="fa fa-user fa-4x"></i>
                      </div>
                      <h6 className="text-uppercase">Sessions</h6>
                      <h1 className="display-4">134</h1>
                    </div>
                  </Tilt>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 py-2">
                <Tilt>
                  <div className="card bg-success text-white h-100">
                    <div className="card-body bg-success">
                      <div className="rotate">
                        <i className="fa fa-user fa-4x"></i>
                      </div>
                      <h6 className="text-uppercase">Upcoming Session</h6>
                      <h1 className="display-4">12-01-2021, Tuesday</h1>
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="col-xl-3 col-sm-6 py-2">
                <Tilt>
                  <div className="card bg-success text-white h-100">
                    <div className="card-body bg-success">
                      <div className="rotate">
                        <i className="fa fa-user fa-4x"></i>
                      </div>
                      <h6 className="text-uppercase">Previous Session</h6>
                      <h1 className="display-4">12-01-2021, Tuesday</h1>
                    </div>
                  </div>
                </Tilt>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="ses-info">
                  <h1>Previous Sessions</h1>
                  <p>Session about panic</p>
                  <p>Date: 12-01-2021</p>
                  <p>Duration: 50 min</p>
                  <p>Outcome: Due to reason</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="row ses-info">
                  <div className="col-sm-8">
                    <h1>Upcoming Sessions</h1>
                    <p>{latestSession && latestSession.title}</p>
                    <p>Date: 12-01-2021</p>
                    <p>Duration: 50 min</p>
                    <p>Outcome: Due to reason</p>
                  </div>
                  {join && (
                    <button
                      onClick={() =>
                        props.history.push(`/call/${latestSession._id}`)
                      }
                      type="button"
                      class="btn btn-success"
                    >
                      Success
                    </button>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="ses-info">
                  <h1>Routines</h1>
                  <p>Session about panic</p>
                  <p>Date: 12-01-2021</p>
                  <p>Duration: 50 min</p>
                  <p>Outcome: Due to reason</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="ses-info">
                  <h1>Prescriptions</h1>
                  <p>Session about panic</p>
                  <p>Date: 12-01-2021</p>
                  <p>Duration: 50 min</p>
                  <p>Outcome: Due to reason</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="ses-info">
                  <h1>Schedule Appointment</h1>
                  <p>Session about panic</p>
                  <p>Date: 12-01-2021</p>
                  <p>Duration: 50 min</p>
                  <p>Outcome: Due to reason</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
