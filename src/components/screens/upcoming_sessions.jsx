import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

class UpcomingSessions extends React.Component {
  upcoming_sessions = [
    {
      date: "12:01:2021",
      Topic: "Panic",
      Duration: "1 hr",
      Prescriptions: "file",
      Outcome: "Due to reason",
    },
    {
      date: "12:01:2021",
      Topic: "Rage",
      Duration: "1 hr",
      Prescriptions: "file",
      Outcome: "Due to reason",
    },
    {
      date: "12:01:2021",
      Topic: "Brain",
      Duration: "1 hr",
      Prescriptions: "file",
      Outcome: "Due to reason",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      data: this.upcoming_sessions,
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              s4s
            </a>
            <form className="d-flex">
              <Link to="/login" className="button btn btn-outline-success me-2">
                {" "}
                Logout
              </Link>
            </form>
          </div>
        </nav>
        <div className="container-fluid" id="main">
          <div className="row row-offcanvas row-offcanvas-left">
            <div
              className="col-md-3 col-lg-2 sidebar-offcanvas bg-light pl-0"
              id="sidebar"
              role="navigation"
            >
              <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
                <li className="nav-item">
                  <a className="nav-link" href="/dashboard">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/upcoming-sessions">
                    Upcoming Sessions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/previous-sessions">
                    Previous Sessions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/routines">
                    Routines
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/prescriptions">
                    Prescriptions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/find-doctor">
                    Find Doctor
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col main pt-5 mt=3 border border-dark"
              style={{ backgroundColor: "#303030" }}
            >
              <h1 className="text-light">Upcoming Sessions</h1>
              <div className="row">
                {this.state.data.map((ele) => (
                  <div className="col-sm-6">
                    <Tilt>
                      <div className="ses-info">
                        <h1>{ele.Topic}</h1>
                        <p>{ele.date}</p>
                        <p>{ele.Duration}</p>
                        <p>{ele.Outcome}</p>
                        <button style={{ color: "#303030" }}>
                          {ele.Prescriptions}
                        </button>
                      </div>
                    </Tilt>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpcomingSessions;
