import React from "react";
import {Link} from "react-router-dom";

class FindDoctor extends React.Component{
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
                <div>
                    <div className="row">
                        <div className="col-md-4 mt-4">
                            <div class="card profile-card-5">
                            <div className="card-img-block">
                                <img class="card-img-top" src="https://images.unsplash.com/photo-1517832207067-4db24a2ae47c" alt="img"/>
                            </div>
                                <div class="card-body">
                                    <h4 class="card-title">John Doe</h4>
                                    <p class="card-text">Some example text.</p>
                                    <a href="#" class="btn btn-primary">See Profile</a>
                                </div>
                                </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div class="card profile-card-5">
                            <div className="card-img-block">
                                <img class="card-img-top" src="https://images.unsplash.com/photo-1517832207067-4db24a2ae47c" alt="img"/>
                            </div>
                                <div class="card-body">
                                    <h4 class="card-title">John Doe</h4>
                                    <p class="card-text">Some example text.</p>
                                    <a href="#" class="btn btn-primary">See Profile</a>
                                </div>
                                </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div class="card profile-card-5">
                            <div className="card-img-block">
                                <img class="card-img-top" src="https://images.unsplash.com/photo-1517832207067-4db24a2ae47c" alt="img"/>
                            </div>
                                <div class="card-body">
                                    <h4 class="card-title">John Doe</h4>
                                    <p class="card-text">Some example text.</p>
                                    <a href="#" class="btn btn-primary">See Profile</a>
                                </div>
                                </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div class="card profile-card-5">
                            <div className="card-img-block">
                                <img class="card-img-top" src="https://images.unsplash.com/photo-1517832207067-4db24a2ae47c" alt="img"/>
                            </div>
                                <div class="card-body">
                                    <h4 class="card-title">John Doe</h4>
                                    <p class="card-text">Some example text.</p>
                                    <a href="#" class="btn btn-primary">See Profile</a>
                                </div>
                                </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div class="card profile-card-5">
                            <div className="card-img-block">
                                <img class="card-img-top" src="https://images.unsplash.com/photo-1517832207067-4db24a2ae47c" alt="img"/>
                            </div>
                                <div class="card-body">
                                    <h4 class="card-title">John Doe</h4>
                                    <p class="card-text">Some example text.</p>
                                    <a href="#" class="btn btn-primary">See Profile</a>
                                </div>
                                </div>
                        </div>
                            
                    </div>
                </div>
            </div>
        )
    }
}

export default FindDoctor;