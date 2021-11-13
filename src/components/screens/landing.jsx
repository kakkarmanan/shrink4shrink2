import React from "react";
import {} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              s4s
            </a>
            <form className="d-flex">
              <Link
                to="/register"
                className="button btn btn-outline-success me-2"
              >
                {" "}
                User Signup
              </Link>
              <Link
                to="/registerdoc"
                className="button btn btn-outline-success me-2"
              >
                {" "}
                Doctor Signup
              </Link>
              <Link to="/login" className="button btn btn-outline-success me-2">
                {" "}
                Login
              </Link>
            </form>
          </div>
        </nav>
        <div
  className="bg-image d-flex justify-content-left align-items-center"
  style={{
    backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/5291450.jpg?alt=media&token=c0775023-8cd1-4db0-8339-0fb6d15401b6')",
    height: "100vh"}}
>
  <h1 className="text-dark" style={{position:"absolute",left:"10vh",top:"40vh",fontSize:"7vh"}}>Welcome to Shrink4Shrink</h1>
  <p className="text-dark lead d-none d-sm-block" style={{position:"absolute",left:"10vh",top:"48vh",fontSize:"4vh"}} >We are here to help you!</p>
</div> 
<div className="row" style={{
    backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/29728328.jpg?alt=media&token=211073bd-13a9-4358-ae62-7f6159dad20c')",
    width: "100%"}}
> 
<img style={{height:"50vh",width:"50vh",margin:"20px"}} src="https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/total-shape-Ianw4RdVuoo-unsplash.jpg?alt=media&token=0edcf253-2b65-435a-b5ba-bdc36b2a2a0a" alt="Doctor" className="float-start rounded-pill"></img>
<img style={{height:"50vh",width:"50vh",margin:"20px",right:"1vh",position:"absolute"}} src="https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/hello-i-m-nik-z1d-LP8sjuI-unsplash.jpg?alt=media&token=442e3907-3493-4e0e-ae26-829c78d14321" alt="Doctor" className="float-end rounded-pill"></img>
</div>

<div
  className="bg-image d-flex justify-content-left align-items-center row"
  style={{
    backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/5291450.jpg?alt=media&token=c0775023-8cd1-4db0-8339-0fb6d15401b6')",
    height: "100vh"}}
>
  <h1 className="text-dark" style={{position:"absolute", left:"40vh",fontSize:"8vh"}}>About us!</h1>
  <img style={{position:"absolute",right:"20vh",height:"90vh",width:"70vh",margin:"20px",zIndex:"0"}} src="https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/95278308-old-brown-paper-sheet-for-writing-text-isolate-on-white-background.jpg?alt=media&token=0fb9f01b-f0d4-48cc-992e-2e73dd82cd4b" alt="about us" className="float-end"></img>
  <div className="text-block" style={{zIndex:"2", position:"absolute",right:"10vh", height:"90vh",width:"70vh",margin:"20px"}}>
    <h4>Nature</h4>
    <p>What a beautiful sunrise</p>
  </div>
</div> 


</div>
      
    );
  }
}

export default LandingPage;
