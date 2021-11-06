import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

class newsession extends React.Component {
  handleSignOut() {
    localStorage.removeItem("user");
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
              className="col-md-3 col-lg-2 sidebar-offcanvas pl-0"
              id="sidebar"
              role="navigation"
              style={{ backgroundColor: "#171010" }}
            >
              <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
                <li className="nav-item">
                  <a className="text-light nav-link" href="/dashboard">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="text-light nav-link" href="/upcoming-sessions">
                    Upcoming Sessions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="text-light nav-link" href="/previous-sessions">
                    Previous Sessions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="text-light nav-link" href="/routines">
                    Routines
                  </a>
                </li>
                <li className="nav-item">
                  <a className="text-light nav-link" href="/prescriptions">
                    Prescriptions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="text-light nav-link" href="/find-doctor">
                    Find Doctor
                  </a>
                </li>
              </ul>
            </div>
            <div className="col main pt-5 mt-3">
              <h1 className="display-4 d-none d-sm-block">Schedule a session</h1>
              <div class="form-outline">
                <input type="text" id="form16" className="form-control" data-mdb-showcounter="true" maxlength="150" style={{width:"50%"}} />
                <label className="form-label" for="form16">Title of Appointment</label>
            <div className="form-helper">
            </div>
            </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default newsession;
