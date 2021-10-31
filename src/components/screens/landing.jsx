    import React from "react";
    import {  } from "react-bootstrap";
    import {Link} from "react-router-dom";

    function LandingPage(){
            return (
                <div>
                    <nav class="navbar navbar-dark bg-dark">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">s4s</a>
                            <form class="d-flex">
                                <Link to='/register' className ="button btn btn-outline-success me-2"> Signup</Link>
                                <Link to='/login' className ="button btn btn-outline-success me-2"> Login</Link>
                            </form>
                        </div>
                    </nav>
                </div>
            );
    };

    export default LandingPage;