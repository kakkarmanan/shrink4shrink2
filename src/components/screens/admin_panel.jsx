import React from "react";
import Tilt from "react-parallax-tilt";

class AdminPanel extends React.Component{
    render(){
        return(
            <div>
              <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                  <a className="navbar-brand" href="/">
                    s4s
                  </a>
                  {/* <form className="d-flex">
                    <Link
                      to="/"
                      className="button btn btn-outline-success me-2"
                      onClick={handleSignOut}
                    >
                      Logout
                    </Link>
                    <button>Logout</button>
                  </form> */}
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
                              <h6 className="text-uppercase">Doctors Registered</h6>
                              <h1 className="display-4">12</h1>
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
                              <h6 className="text-uppercase">Patients Registered</h6>
                              <h1 className="display-4">123</h1>
                            </div>
                          </div>
                        </Tilt>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default AdminPanel;