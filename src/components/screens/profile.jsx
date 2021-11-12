import React from "react";
import "./user_profile.css";
import CreateIcon from '@mui/icons-material/Create';

class Profile extends React.Component{
    handleSignOut() {
        localStorage.removeItem("user");
      }
      constructor(props) {
        super(props);
        this.state = {
          data: {},
          u:JSON.parse(localStorage.getItem("user")),
          abled: "disabled",
        };
      }
      componentDidMount=()=>{
         fetch("https://shrink4shrink.herokuapp.com/api/userdata",{
            method:"post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                email:this.state.u.email,
            }),
        })
        .then((response) => response.json())
        .then((resp) => {
            console.log(resp);
            this.setState({
            data: resp
            });
        });
      }
      Abled=()=>{
        this.setState({abled: !this.state.abled})
      }
    render(){
        const { data } = this.state;
        const name = data.firstname+" "+data.lastname;
        return(
            <div>
                <div class="container" style={{paddingTop:"40px"}}>
                <div class="row gutters">
                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="account-settings">
                            <div class="user-profile">
                                <div class="user-avatar">
                                    <img src={data.picture} alt={data.firstname}/>
                                </div>
                                <h5 class="user-name">{data.firstname} {data.lastname}</h5>
                                <h6 class="user-email">{data.email}</h6>
                                <h6 className="user-email">Assigned Doctor:</h6>
                                <h5 class="user-email">{data.doctor_assigned}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="row gutters">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h6 class="mb-2 text-primary">Personal Details</h6>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <label for="Name">Name</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" value={name} disabled={this.state.abled}/>
                                    <div class="input-group-append">
                                        <button class="input-group-text" id="basic-addon2" onClick={this.Abled}><CreateIcon/></button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">Email</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="basic-addon2" value={data.email} disabled={this.state.abled}/>
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon2" onClick={this.Abled}><CreateIcon/></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">Phone</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" value={data.phone} disabled={this.state.abled}/>
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon2" onClick={this.Abled}><CreateIcon/></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">Date of Birth</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" value={data.dob} disabled={this.state.abled}/>
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon2" onClick={this.Abled}><CreateIcon/></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row gutters">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h6 class="mt-3 mb-2 text-primary">Location</h6>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">Address</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" value={data.address} disabled={this.state.abled}/>
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon2" onClick={this.Abled}><CreateIcon/></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">City</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" value={data.city} disabled={this.state.abled}/>
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon2" onClick={this.Abled}><CreateIcon/></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">State</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" value={data.state} disabled={this.state.abled}/>
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon2" onClick={this.Abled}><CreateIcon/></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">Pincode</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" value={data.pincode} disabled={this.state.abled}/>
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon2" onClick={this.Abled}><CreateIcon/></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row gutters">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="text-right">
                                   <button type="button" name="submit" class="btn btn-primary">Update</button>
                                </div>
                            </div>
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

export default Profile;