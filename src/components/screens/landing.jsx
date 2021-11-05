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
      </div>
    );
  }
}

export default LandingPage;
