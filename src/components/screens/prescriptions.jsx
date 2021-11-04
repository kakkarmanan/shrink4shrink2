import React from "react";
import { Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';

class Prescriptions extends React.Component {
    handleSignOut(){
        localStorage.removeItem("user");
    }
    render() {
        return (
            <div>
                <nav class="navbar navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">s4s</a>
                        <form class="d-flex">
                            <Link to='/login' className="button btn btn-outline-success me-2" onClick={this.handleSignOut}> Logout</Link>
                        </form>
                    </div>
                </nav>
                <div className="container-fluid" id="main">
                    <div className="row row-offcanvas row-offcanvas-left">
                        <div className="col-md-3 col-lg-2 sidebar-offcanvas border border-dark pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#3D56B2"}}>
                            <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
                                <li className="nav-item"><a className="nav-link text-light" href="#">Menu</a></li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#submenu1" data-toggle="collapse" data-target="#submenu1">Reports▾</a>
                                    <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                                        <li className="nav-item"><a className="nav-link" href="">Report 1</a></li>
                                        <li className="nav-item"><a className="nav-link" href="">Report 2</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a className="nav-link text-light" href="#features">Upcoming Sessions</a></li>
                                <li className="nav-item"><a className="nav-link text-light" href="#previousSessions">Previous Sessions</a></li>
                                <li className="nav-item"><a className="nav-link text-light" href="#routines">Routines</a></li>
                                <li className="nav-item"><a className="nav-link text-light" href="#prescriptions">Prescriptions</a></li>
                            </ul>
                        </div>
                        <div className="col main pt-5 mt=3 border border-dark" style={{backgroundColor:"	#303030"}}>
                            <h1 className="text-light">Prescriptions</h1>
                            <div className="row">
                                <div className="col-sm-6">
                                    <Tilt style={{width:"220px", height:"300px"}}>
                                    <iframe src="https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/Mess%20reciept.pdf?alt=media&token=4a6a3b00-1785-4df1-a9bc-887e5513b01f" style={{width:"220px", height:"300px",overflow:"hidden"}} frameborder="0" scrolling="no" ></iframe>
                                    </Tilt>
                                </div>
                                <div className="col-sm-6">
                                    <Tilt style={{width:"220px", height:"300px"}}>
                                    <iframe src="https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/Mess%20reciept.pdf?alt=media&token=4a6a3b00-1785-4df1-a9bc-887e5513b01f" style={{width:"220px", height:"300px",overflow:"hidden"}} frameborder="0" scrolling="no" ></iframe>
                                    </Tilt>
                                </div>
                                <div className="col-sm-6">
                                    <Tilt style={{width:"220px", height:"300px"}}>
                                    <iframe src="https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/Mess%20reciept.pdf?alt=media&token=4a6a3b00-1785-4df1-a9bc-887e5513b01f" style={{width:"220px", height:"300px",overflow:"hidden"}} frameborder="0" scrolling="no" ></iframe>
                                    </Tilt>
                                </div>
                                <div className="col-sm-6">
                                    <Tilt style={{width:"220px", height:"300px"}}>
                                    <iframe src="https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/Mess%20reciept.pdf?alt=media&token=4a6a3b00-1785-4df1-a9bc-887e5513b01f" style={{width:"220px", height:"300px",overflow:"hidden"}} frameborder="0" scrolling="no" ></iframe>
                                    </Tilt>
                                </div>
                                <div className="col-sm-6">
                                    <Tilt style={{width:"220px", height:"300px"}}>
                                    <iframe src="https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/Mess%20reciept.pdf?alt=media&token=4a6a3b00-1785-4df1-a9bc-887e5513b01f" style={{width:"220px", height:"300px",overflow:"hidden"}} frameborder="0" scrolling="no" ></iframe>
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

export default Prescriptions;