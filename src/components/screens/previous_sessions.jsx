import React from "react";
import {Link} from "react-router-dom";

class PreviousSessions extends React.Component{
    render(){
        return(
            <div>
                <nav class="navbar navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">s4s</a>
                        <form class="d-flex">
                            <Link to='/login' className ="button btn btn-outline-success me-2"> Logout</Link>
                        </form>
                    </div>
                </nav>
                <div className="container-fluid" id="main">
                    <div className="row row-offcanvas row-offcanvas-left">
                            <div className="col-md-3 col-lg-2 sidebar-offcanvas bg-light pl-0" id="sidebar" role="navigation">
                                <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
                                    <li className="nav-item"><a className="nav-link" href="#">Menu</a></li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#submenu1" data-toggle="collapse" data-target="#submenu1">Reports▾</a>
                                    <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                                    <li className="nav-item"><a className="nav-link" href="">Report 1</a></li>
                                    <li className="nav-item"><a className="nav-link" href="">Report 2</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="#features">Upcoming Sessions</a></li>
                                <li className="nav-item"><a className="nav-link" href="#previousSessions">Previous Sessions</a></li>
                                <li className="nav-item"><a className="nav-link" href="#routines">Routines</a></li>
                                <li className="nav-item"><a className="nav-link" href="#prescriptions">Prescriptions</a></li>
                            </ul>
                        </div>
                        <div className="col main pt-5 mt=3"> 
                                <h1>Previous Sessions</h1>
                                <div className="row">
                                        <div className="col-sm-6">
                                            <div className="ses-info">
                                            <h1>Previous Sessions</h1>
                                            <p>Session about panic</p>
                                            <p>Date: 12-01-2021</p>
                                            <p>Duration: 50 min</p>
                                            <p>Outcome: Due to reason</p>
                                            <button>Prescription</button>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="ses-info">
                                            <h1>Upcoming Sessions</h1>
                                            <p>Session about panic</p>
                                            <p>Date: 12-01-2021</p>
                                            <p>Duration: 50 min</p>
                                            <p>Outcome: Due to reason</p>
                                            <button>Prescription</button>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="ses-info">
                                            <h1>Routines</h1>
                                            <p>Session about panic</p>
                                            <p>Date: 12-01-2021</p>
                                            <p>Duration: 50 min</p>
                                            <p>Outcome: Due to reason</p>
                                            <button>Prescription</button>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="ses-info">
                                            <h1>Prescriptions</h1>
                                            <p>Session about panic</p>
                                            <p>Date: 12-01-2021</p>
                                            <p>Duration: 50 min</p>
                                            <p>Outcome: Due to reason</p>
                                            <button>Prescription</button>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="ses-info">
                                            <h1>Schedule Appointment</h1>
                                            <p>Session about panic</p>
                                            <p>Date: 12-01-2021</p>
                                            <p>Duration: 50 min</p>
                                            <p>Outcome: Due to reason</p>
                                            <button>Prescription</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default PreviousSessions