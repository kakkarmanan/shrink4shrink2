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
                            <Link to='/login' className="button btn btn-outline-success me-2"> Logout</Link>
                        </form>
                    </div>
                </nav>
                <div className="container-fluid" id="main">
                    <div className="row row-offcanvas row-offcanvas-left">
                        <div className="col-md-3 col-lg-2 sidebar-offcanvas bg-light pl-0" id="sidebar" role="navigation">
                            <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
                                <li className="nav-item"><a className="nav-link" href="/dashboard">Home</a></li> 
                                <li className="nav-item"><a className="nav-link" href="/upcoming-sessions">Upcoming Sessions</a></li>
                                <li className="nav-item"><a className="nav-link" href="/previous-sessions">Previous Sessions</a></li>
                                <li className="nav-item"><a className="nav-link" href="/routines">Routines</a></li>
                                <li className="nav-item"><a className="nav-link" href="/prescriptions">Prescriptions</a></li>
                                <li className="nav-item"><a className="nav-link" href="/find-doctor">Find Doctor</a></li>
                            </ul>
                        </div>
                        <div className="col main pt-5 mt=3 border border-dark" style={{backgroundColor:"#303030"}}>
                            <h1 className="text-light">Prescriptions</h1>
                            <div className="row">
                                <div className="col-sm-6">
                                    <Tilt style={{padding:"20px",width:"220px", height:"300px",position:"relative"}}>
                                    <iframe src="https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/Mess%20reciept.pdf?alt=media&token=4a6a3b00-1785-4df1-a9bc-887e5513b01f" style={{width:"220px", height:"300px",overflow:"hidden"}} frameborder="0" scrolling="no" ></iframe>
                                    <a href="https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/Mess%20reciept.pdf?alt=media&token=4a6a3b00-1785-4df1-a9bc-887e5513b01f" style={{position:"absolute" ,top:"0", left:"0", display:"inline-block", width:"500px", height:"500px", ZIndex:"5"}}></a>
                                    </Tilt>
                                </div>
                                <div className="col-sm-6">
                                    <Tilt style={{padding:"20px",width:"220px", height:"300px"}}>
                                    <iframe src="https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/Mess%20reciept.pdf?alt=media&token=4a6a3b00-1785-4df1-a9bc-887e5513b01f" style={{width:"220px", height:"300px",overflow:"hidden"}} frameborder="0" scrolling="no" ></iframe>
                                    <a href="https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/Mess%20reciept.pdf?alt=media&token=4a6a3b00-1785-4df1-a9bc-887e5513b01f" style={{position:"absolute" ,top:"0", left:"0", display:"inline-block", width:"500px", height:"500px", ZIndex:"5"}}></a>
                                    </Tilt>
                                </div>
                                <div className="col-sm-6">
                                    <Tilt style={{padding:"20px",width:"220px", height:"300px"}}>
                                    <iframe src="https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/Mess%20reciept.pdf?alt=media&token=4a6a3b00-1785-4df1-a9bc-887e5513b01f" style={{width:"220px", height:"300px",overflow:"hidden"}} frameborder="0" scrolling="no" ></iframe>
                                    <a href="https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/Mess%20reciept.pdf?alt=media&token=4a6a3b00-1785-4df1-a9bc-887e5513b01f" style={{position:"absolute" ,top:"0", left:"0", display:"inline-block", width:"500px", height:"500px", ZIndex:"5"}}></a>
                                    </Tilt>
                                </div>
                                <div className="col-sm-6">
                                    <Tilt style={{padding:"20px",width:"220px", height:"300px"}}>
                                    <iframe src="https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/Mess%20reciept.pdf?alt=media&token=4a6a3b00-1785-4df1-a9bc-887e5513b01f" style={{width:"220px", height:"300px",overflow:"hidden"}} frameborder="0" scrolling="no" ></iframe>
                                    <a href="https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/Mess%20reciept.pdf?alt=media&token=4a6a3b00-1785-4df1-a9bc-887e5513b01f" style={{position:"absolute" ,top:"0", left:"0", display:"inline-block", width:"500px", height:"500px", ZIndex:"5"}}></a>
                                    </Tilt>
                                </div>
                                <div className="col-sm-6">
                                    <Tilt style={{padding:"20px",width:"220px", height:"300px"}}>
                                    <iframe src="https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/Mess%20reciept.pdf?alt=media&token=4a6a3b00-1785-4df1-a9bc-887e5513b01f" style={{width:"220px", height:"300px",overflow:"hidden"}} frameborder="0" scrolling="no" ></iframe>
                                    <a href="https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/Mess%20reciept.pdf?alt=media&token=4a6a3b00-1785-4df1-a9bc-887e5513b01f" style={{position:"absolute" ,top:"0", left:"0", display:"inline-block", width:"500px", height:"500px", ZIndex:"5"}}></a>
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