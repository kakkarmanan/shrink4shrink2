import React from "react";
//import { Link } from "react-router-dom";
import "./profile.css"

class DoctorProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            u: JSON.parse(localStorage.getItem("user")),
        }
    };
    componentDidMount = () => {
        console.log(this.props.match.params.name);
        const email = this.props.match.params.name;
        fetch("https://shrink4shrink.herokuapp.com/api/userdata", {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                email: email,
            }),
        })
            .then((response) => response.json())
            .then((resp) => {
                console.log(resp);
                this.setState({
                    data: resp
                });
                console.log(this.state.data.username);
            });
    };

    fun = (e) => {
        console.log(this.data)
        fetch("https://shrink4shrink.herokuapp.com/api/assign_doctor", {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                email: this.state.u.email,
                doctor_email: e.target.title,
            })
        })
            .then((response) => response.json())
            .then((resp) => {
                console.log(resp);
                this.props.history.push("/dashboard");
            });
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <div class="container emp-profile">
                    <form method="post">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="profile-img">
                                    <img src={data.picture} alt="" />
                                    <div class="file btn btn-lg btn-primary">
                                        Change Photo
                                        <input type="file" name="file" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="profile-head">
                                    <h5>
                                        Dr. {data.firstname} {data.lastname}
                                    </h5>
                                    <h6>
                                        psychiatrist
                                    </h6>
                                    <p class="proile-rating">RATINGS : <span>8/10</span></p>
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <input class="profile-edit-btn" name="btnAddMore" title={data.email} value="Select Doctor" onClick={this.fun} />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="profile-work">
                                    {/* <p>EXPERIENCE:</p>
                                    <span>4 years</span>*/}
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="tab-content profile-tab" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{data.username}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Dr. {data.firstname} {data.lastname}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{data.username}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{data.phone}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Psychiatrist</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <label>Your Bio</label><br />
                                                <p>Your detail description</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default DoctorProfile;