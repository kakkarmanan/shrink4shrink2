import React from "react";
import {Link} from "react-router-dom";
import './dashboard.css';

class dashboarddoc extends React.Component{
    handleSignOut(){
        localStorage.removeItem("user");
    }
    render(){return(
        <div>
            <nav class="navbar navbar-dark bg-dark">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="/">s4s</a>
                            <form class="d-flex">
                                <Link className ="button btn btn-outline-success me-2" onClick={this.handleSignOut} to="/">Logout</Link>
                                
                            </form>
                        </div>
                    </nav>
                    <div className="container-fluid" id="main">
                <div className="row row-offcanvas row-offcanvas-left">
                    <div className="col-md-3 col-lg-2 sidebar-offcanvas bg-light pl-0" id="sidebar" role="navigation">
                        <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
                            <li className="nav-item"><a className="nav-link" href="#">Homepage</a></li>
                            <li className="nav-item">
                                <a className="nav-link" href="#submenu1" data-toggle="collapse" data-target="#submenu1">Reports▾</a>
                                <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                                <li className="nav-item"><a className="nav-link" href="">Report 1</a></li>
                                <li className="nav-item"><a className="nav-link" href="">Report 2</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="#features">Upcoming Sessions</a></li>
                            <li className="nav-item"><a className="nav-link" href="#previousSessions">Previous Sessions</a></li>
                            <li className="nav-item"><a className="nav-link" href="#routines">Patients</a></li>
                            <li className="nav-item"><a className="nav-link" href="#prescriptions">Prescriptions</a></li>
                        </ul>
                    </div>

                    <div className="col main pt-5 mt-3">
                        <h1 className="display-4 d-none d-sm-block">
                        UserName
                        </h1>
                        <p className="lead d-none d-sm-block">Dashboard</p>

                        <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                            </button>
                            <strong>Holy guacamole!</strong> It's free.. this is an example theme.
                        </div>
                        <div className="row mb-3">
                            <div className="col-xl-3 col-sm-6 py-2">
                                <div className="card bg-success text-white h-100">
                                    <div className="card-body bg-success">
                                        <div class="rotate">
                                            <i class="fa fa-user fa-4x"></i>
                                        </div>
                                        <h6 class="text-uppercase">Sessions</h6>
                                        <h1 class="display-4">134</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 py-2">
                                <div className="card bg-success text-white h-100">
                                    <div className="card-body bg-success">
                                        <div class="rotate">
                                            <i class="fa fa-user fa-4x"></i>
                                        </div>
                                        <h6 class="text-uppercase">Upcoming Session</h6>
                                        <h1 class="display-4">12-01-2021, Tuesday</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 py-2">
                                <div className="card bg-success text-white h-100">
                                    <div className="card-body bg-success">
                                        <div class="rotate">
                                            <i class="fa fa-user fa-4x"></i>
                                        </div>
                                        <h6 class="text-uppercase">Previous Session</h6>
                                        <h1 class="display-4">12-01-2021, Tuesday</h1>
                                    </div>
                                </div>
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
                                    <div className="ses-info">
                                        <h1>Upcoming Sessions</h1>
                                        <p>Session about panic</p>
                                        <p>Date: 12-01-2021</p>
                                        <p>Duration: 50 min</p>
                                        <p>Outcome: Due to reason</p>
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
    );}
}

export default dashboarddoc;