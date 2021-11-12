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
          data: {
            firstname: "",
            lastname: "",
            phone: "",
            address: "",
            state: "",
            city: "",
            dob: "",
            pincode: "",
            doctor_assigned: "",
            picture: "",
            email: ""
          },
          u:JSON.parse(localStorage.getItem("user")),
          abled: "disabled",
          changes:[],
        };
      }
      onedit=(e)=>{
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value },
          });
          if(!this.state.changes.includes(e.target.name)){
            this.setState({changes:[...this.state.changes,e.target.name]});
          }
          
          console.log(this.state.changes);
      }
      onUpdate=(e)=>{
        //   this.state.changes.map((ele,i)=>{
        //       console.log(this.state.changes[i]);
        //       const request=this.state.changes[i];
        //     fetch("https://shrink4shrink.herokuapp.com/api/update_profile",{
        //         method:"post",
        //         headers: { "Content-type": "application/json" },
        //         body: JSON.stringify({
        //             email:this.state.u.email,
        //         }),
        //     })
        //     .then((response) => response.json())
        //     .then((resp) => {
        //         console.log(resp);
        //         this.setState({
        //             data: {
        //               ...this.state.data,
        //               firstname: resp.firstname,
        //               lastname: resp.lastname,
        //               phone: resp.phone,
        //               address: resp.address,
        //               state: resp.state,
        //               city: resp.city,
        //               pincode: resp.pincode,
        //               doctor_assigned: resp.doctor_assigned,
        //               picture: resp.picture,
        //               email: resp.email,
        //               dob: resp.dob
        //             },
        //           });
        //     });
        //   })
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
                data: {
                  ...this.state.data,
                  firstname: resp.firstname,
                  lastname: resp.lastname,
                  phone: resp.phone,
                  address: resp.address,
                  state: resp.state,
                  city: resp.city,
                  pincode: resp.pincode,
                  doctor_assigned: resp.doctor_assigned,
                  picture: resp.picture,
                  email: resp.email,
                  dob: resp.dob
                },
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
                                <label for="Name">First Name</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="First Name" name="firstname" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.onedit} value={data.firstname} disabled={this.state.abled}/>
                                    <div class="input-group-append">
                                        <button class="input-group-text" id="basic-addon2" onClick={this.Abled}><CreateIcon/></button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">Last Name</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Last Name" name="lastname" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.onedit} value={data.lastname} disabled={this.state.abled}/>
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon2" onClick={this.Abled}><CreateIcon/></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">Phone</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" name="phone" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.onedit} value={data.phone} disabled={this.state.abled}/>
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon2" onClick={this.Abled}><CreateIcon/></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">Date of Birth</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" name="dob" aria-describedby="basic-addon2" onChange={this.onedit} value={data.dob} disabled={this.state.abled}/>
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
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" name="address" aria-describedby="basic-addon2" onChange={this.onedit} value={data.address} disabled={this.state.abled}/>
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon2" onClick={this.Abled}><CreateIcon/></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">City</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" name="city" aria-describedby="basic-addon2" onChange={this.onedit} value={data.city} disabled={this.state.abled}/>
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon2" onClick={this.Abled}><CreateIcon/></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">State</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" name="state" aria-describedby="basic-addon2" onChange={this.onedit} value={data.state} disabled={this.state.abled}/>
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon2" onClick={this.Abled}><CreateIcon/></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">Pincode</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" name="pincode" aria-describedby="basic-addon2" onChange={this.onedit} value={data.pincode} disabled={this.state.abled}/>
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon2" onClick={this.Abled}><CreateIcon/></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row gutters">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="text-right">
                                   <button type="button" name="submit" class="btn btn-primary" onClick={this.onUpdate}>Update</button>
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