import React from "react";
import {Link} from "react-router-dom";

class Patients extends React.Component{
    patients_info=[
        {
            "Name":"John Doe",
            "Text":"Example Text",
            "img": "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c",
        },
        {
            "Name":"John Doe",
            "Text":"Example Text",
            "img": "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c",
        },
        {
            "Name":"John Doe",
            "Text":"Example Text",
            "img": "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c",
        },
        {
            "Name":"John Doe",
            "Text":"Example Text",
            "img": "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c",
        },
    ];
    constructor(props){
        super(props);
        this.state={
            data:this.patients_info,
        }
    }
    render(){
        return(
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
                        <div className="col main pt-5 mt=3">
                        <div className="row">
                            {this.state.data.map(ele=>(
                                <div className="col-md-4 mt-4">
                                    <div class="card profile-card-5">
                                        <div className="card-img-block">
                                            <img class="card-img-top" src={ele.img} alt="img"/>
                                        </div>
                                            <div class="card-body">
                                                <h4 class="card-title">{ele.Name}</h4>
                                                <p class="card-text">{ele.Text}.</p>
                                                <a href="/dashboard" class="btn btn-primary">See Profile</a>
                                        </div>
                                    </div>
                            </div>
                            ))}
                            
                    </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Patients;