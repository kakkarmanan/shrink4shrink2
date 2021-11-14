import React from "react";
import "./user_profile.css";
import CreateIcon from '@mui/icons-material/Create';
import DoneIcon from '@mui/icons-material/Done';
// import firebase from "../../firebase";

// var storageRef = firebase.storage().ref();
// const toBlob = (file) => {
//   return new Blob([file], {
//     type: "image/png",
//   });
// };
// var metadata = {
//   contentType: "image/png",
// };

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
          abled_firstname: "disabled",
          abled_lastname: "disabled",
          abled_phone: "disabled",
          abled_address: "disabled",
          abled_dob: "disabled",
          abled_city: "disabled",
          abled_pincode: "disabled",
          abled_state: "disabled",
          canChange:false,
          changes:[],
        };
      }
      onUpdate=()=>{
        fetch("https://shrink4shrink.herokuapp.com/api/userdata", {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                email: this.state.u.email
            })
        })
        .then((response)=>response.json())
            .then((resp1) => {
                console.log(resp1);
                localStorage.removeItem("user");
                localStorage.setItem("user", JSON.stringify(resp1));
                this.props.history.push("/dashboard");
            });
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
      onFirstnameUpdate=(e)=>{
          console.log(e.target.value);
          fetch("https://shrink4shrink.herokuapp.com/api/update_profile",{
                method: "post",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify({
                    email: this.state.u.email,
                    firstname: this.state.data.firstname,
                }),
          })
          .then((response)=>response.json())
          .then((resp)=>{
              console.log(resp);
              this.setState({abled_firstname: !this.state.abled_firstname});

          });
      }
      onLastnameUpdate=(e)=>{
        console.log(e.target.value);
        fetch("https://shrink4shrink.herokuapp.com/api/update_profile",{
              method: "post",
              headers:{"Content-type":"application/json"},
              body:JSON.stringify({
                  email: this.state.u.email,
                  lastname: this.state.data.lastname,
              }),
        })
        .then((response)=>response.json())
        .then((resp)=>{
            console.log(resp);
            this.setState({abled_lastname: !this.state.abled_lastname});

        });
    }
    onPhoneUpdate=(e)=>{
        console.log(e.target.value);
        fetch("https://shrink4shrink.herokuapp.com/api/update_profile",{
              method: "post",
              headers:{"Content-type":"application/json"},
              body:JSON.stringify({
                  email: this.state.u.email,
                  phone: this.state.data.phone,
              }),
        })
        .then((response)=>response.json())
        .then((resp)=>{
            console.log(resp);
            this.setState({abled_phone: !this.state.abled_phone});

        });
    }
    onDOBUpdate=(e)=>{
        console.log(e.target.value);
        fetch("https://shrink4shrink.herokuapp.com/api/update_profile",{
              method: "post",
              headers:{"Content-type":"application/json"},
              body:JSON.stringify({
                  email: this.state.u.email,
                  dob: this.state.data.dob,
              }),
        })
        .then((response)=>response.json())
        .then((resp)=>{
            console.log(resp);
            this.setState({abled_dob: !this.state.abled_dob});

        });
    }
    onAddressUpdate=(e)=>{
        console.log(e.target.value);
        fetch("https://shrink4shrink.herokuapp.com/api/update_profile",{
              method: "post",
              headers:{"Content-type":"application/json"},
              body:JSON.stringify({
                  email: this.state.u.email,
                  address: this.state.data.address,
              }),
        })
        .then((response)=>response.json())
        .then((resp)=>{
            console.log(resp);
            this.setState({abled_address: !this.state.abled_address});

        });
    }
    onCityUpdate=(e)=>{
        console.log(e.target.value);
        fetch("https://shrink4shrink.herokuapp.com/api/update_profile",{
              method: "post",
              headers:{"Content-type":"application/json"},
              body:JSON.stringify({
                  email: this.state.u.email,
                  city: this.state.data.city,
              }),
        })
        .then((response)=>response.json())
        .then((resp)=>{
            console.log(resp);
            this.setState({abled_city: !this.state.abled_city});

        });
    }
    onStateUpdate=(e)=>{
        console.log(e.target.value);
        fetch("https://shrink4shrink.herokuapp.com/api/update_profile",{
              method: "post",
              headers:{"Content-type":"application/json"},
              body:JSON.stringify({
                  email: this.state.u.email,
                  state: this.state.data.state,
              }),
        })
        .then((response)=>response.json())
        .then((resp)=>{
            console.log(resp);
            this.setState({abled_state: !this.state.abled_state});

        });
    }
    onPincodeUpdate=(e)=>{
        fetch("https://shrink4shrink.herokuapp.com/api/update_profile",{
              method: "post",
              headers:{"Content-type":"application/json"},
              body:JSON.stringify({
                  email: this.state.u.email,
                  pincode: this.state.data.pincode,
              }),
        })
        .then((response)=>response.json())
        .then((resp)=>{
            console.log(resp);
            this.setState({abled_pincode: !this.state.abled_pincode});
        });
    }
    onChange=()=>{
        this.setState({canChange:true});
    }
    onUpdatePhoto=(e)=>{
        console.log(this.state.picture)
    }
    // onFileUpload = async (e) => {
    //     const formData = new FormData();
    //     if (this.state.data.picture == null) {
    //       alert("No file Selected!!!");
    //     } else {
    //       formData.append(
    //         "myFile",
    //         this.state.data.picture,
    //         this.state.data.picture.name          
    //         );
    //       try {
    //         const blob = toBlob(this.state.selectedFile);
    //         this.setState({ isLoading: true });
    //         console.log(blob);
    //         var mountainsRef = await storageRef.child(this.state.selectedFile.name);
    //         await mountainsRef.put(blob, metadata);
    //         const res = await mountainsRef.getDownloadURL();
    //         console.log(res);
    //         this.setState({
    //           data: res,
    //         });
    //         fetch("https://shrink4shrink.herokuapp.com/api/add_presciption",{
    //       method:"post",
    //       headers: { "Content-type": "application/json" },
    //       body: JSON.stringify({
    //         email:this.state.uemail,
    //         id:this.state.sid,
    //         prescription:this.state.data
    //       }),
    //     })
    //     .then((response) => response.json())
    //     .then((resp) => {
    //         console.log(resp);
    //     });
      
    //         // setTimeout(()=>{},5000);
    //       } catch (err) {
    //         console.log(err);
    //       }
    //     }
    //   };
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
      IsFirstnameAbled=()=>{
        this.setState({abled_firstname: !this.state.abled_firstname})
      }
      IsLastnameAbled=()=>{
        this.setState({abled_lastname: !this.state.abled_lastname})
      }
      IsPhoneAbled=()=>{
        this.setState({abled_phone: !this.state.abled_phone})
      }
      IsDOBAbled=()=>{
        this.setState({abled_dob: !this.state.abled_dob})
      }
      IsAddressAbled=()=>{
        this.setState({abled_address: !this.state.abled_address})
      }
      IsCityAbled=()=>{
        this.setState({abled_city: !this.state.abled_city})
      }
      IsStateAbled=()=>{
        this.setState({abled_state: !this.state.abled_state})
      }
      IsPincodeAbled=()=>{
        this.setState({abled_pincode: !this.state.abled_pincode})
      }

    render(){
        const { data } = this.state;
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
                                {data.doctor===false?(
                                    <div>
                                        <h6 className="user-email">Assigned Doctor:</h6>
                                        <h5 class="user-email">{data.doctor_assigned}</h5>
                                    </div> 
                                ):(<div></div>)}
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
                                    <input type="text" class="form-control" placeholder="First Name" name="firstname" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.onedit} value={data.firstname} disabled={this.state.abled_firstname}/>
                                    <div class="input-group-append">
                                        {this.state.abled_firstname==="disabled"?(<button class="input-group-text" id="basic-addon2" onClick={this.IsFirstnameAbled}><CreateIcon/></button>):(
                                            <button class="input-group-text" id="basic-addon2" onClick={this.onFirstnameUpdate}><DoneIcon/></button>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">Last Name</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Last Name" name="lastname" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.onedit} value={data.lastname} disabled={this.state.abled_lastname}/>
                                    <div class="input-group-append">
                                        {this.state.abled_lastname==="disabled"?(<button class="input-group-text" id="basic-addon2" onClick={this.IsLastnameAbled}><CreateIcon/></button>):(
                                            <button class="input-group-text" id="basic-addon2" onClick={this.onLastnameUpdate}><DoneIcon/></button>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">Phone</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" name="phone" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.onedit} value={data.phone} disabled={this.state.abled_phone}/>
                                    <div class="input-group-append">
                                        {this.state.abled_phone==="disabled"?(<button class="input-group-text" id="basic-addon2" onClick={this.IsPhoneAbled}><CreateIcon/></button>):(
                                            <button class="input-group-text" id="basic-addon2" onClick={this.onPhoneUpdate}><DoneIcon/></button>
                                        )}                                    
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">Date of Birth</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" name="dob" aria-describedby="basic-addon2" onChange={this.onedit} value={data.dob} disabled={this.state.abled_dob}/>
                                    <div class="input-group-append">
                                        {this.state.abled_dob==="disabled"?(<button class="input-group-text" id="basic-addon2" onClick={this.IsDOBAbled}><CreateIcon/></button>):(
                                            <button class="input-group-text" id="basic-addon2" onClick={this.onDOBUpdate}><DoneIcon/></button>
                                        )}                                   
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
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" name="address" aria-describedby="basic-addon2" onChange={this.onedit} value={data.address} disabled={this.state.abled_address}/>
                                    <div class="input-group-append">
                                        {this.state.abled_address==="disabled"?(<button class="input-group-text" id="basic-addon2" onClick={this.IsAddressAbled}><CreateIcon/></button>):(
                                            <button class="input-group-text" id="basic-addon2" onClick={this.onAddressUpdate}><DoneIcon/></button>
                                        )}                                    
                                        </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">City</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" name="city" aria-describedby="basic-addon2" onChange={this.onedit} value={data.city} disabled={this.state.abled_city}/>
                                    <div class="input-group-append">
                                        {this.state.abled_city==="disabled"?(<button class="input-group-text" id="basic-addon2" onClick={this.IsCityAbled}><CreateIcon/></button>):(
                                            <button class="input-group-text" id="basic-addon2" onClick={this.onCityUpdate}><DoneIcon/></button>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">State</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" name="state" aria-describedby="basic-addon2" onChange={this.onedit} value={data.state} disabled={this.state.abled_state}/>
                                    <div class="input-group-append">
                                    {this.state.abled_state==="disabled"?(<button class="input-group-text" id="basic-addon2" onClick={this.IsStateAbled}><CreateIcon/></button>):(
                                            <button class="input-group-text" id="basic-addon2" onClick={this.onStateUpdate}><DoneIcon/></button>
                                        )}                                    
                                        </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">Pincode</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" name="pincode" aria-describedby="basic-addon2" onChange={this.onedit} value={data.pincode} disabled={this.state.abled_pincode}/>
                                    <div class="input-group-append">
                                    {this.state.abled_pincode==="disabled"?(<button class="input-group-text" id="basic-addon2" onClick={this.IsPincodeAbled}><CreateIcon/></button>):(
                                            <button class="input-group-text" id="basic-addon2" onClick={this.onPincodeUpdate}><DoneIcon/></button>
                                        )}                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="row gutters">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h6 class="mt-3 mb-2 text-primary">Experience</h6>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">Years of Experience</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" name="address" aria-describedby="basic-addon2" onChange={this.onedit} value={data.doctor_info.data.yearofexperience} disabled={this.state.abled_address}/>
                                    <div class="input-group-append">
                                        {this.state.abled_address==="disabled"?(<button class="input-group-text" id="basic-addon2" onClick={this.IsAddressAbled}><CreateIcon/></button>):(
                                            <button class="input-group-text" id="basic-addon2" onClick={this.onAddressUpdate}><DoneIcon/></button>
                                        )}                                    
                                        </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">License Number</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" name="city" aria-describedby="basic-addon2" onChange={this.onedit} value={data.doctor_info.data.license} disabled={this.state.abled_city}/>
                                    <div class="input-group-append">
                                        {this.state.abled_city==="disabled"?(<button class="input-group-text" id="basic-addon2" onClick={this.IsCityAbled}><CreateIcon/></button>):(
                                            <button class="input-group-text" id="basic-addon2" onClick={this.onCityUpdate}><DoneIcon/></button>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">State</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" name="state" aria-describedby="basic-addon2" onChange={this.onedit} value={data.state} disabled={this.state.abled_state}/>
                                    <div class="input-group-append">
                                    {this.state.abled_state==="disabled"?(<button class="input-group-text" id="basic-addon2" onClick={this.IsStateAbled}><CreateIcon/></button>):(
                                            <button class="input-group-text" id="basic-addon2" onClick={this.onStateUpdate}><DoneIcon/></button>
                                        )}                                    
                                        </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <label for="Name">Pincode</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" name="pincode" aria-describedby="basic-addon2" onChange={this.onedit} value={data.pincode} disabled={this.state.abled_pincode}/>
                                    <div class="input-group-append">
                                    {this.state.abled_pincode==="disabled"?(<button class="input-group-text" id="basic-addon2" onClick={this.IsPincodeAbled}><CreateIcon/></button>):(
                                            <button class="input-group-text" id="basic-addon2" onClick={this.onPincodeUpdate}><DoneIcon/></button>
                                        )}                                    
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div class="row gutters">
                            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                                <div class="text-right">
                                   <button type="button" name="submit" class="btn btn-primary" onClick={this.onUpdate}>Submit All Changes</button>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                                <div class="text-right">
                                {this.state.canChange?(
                                    <div>
                                        <input type="file" placeholder="Change Photo" onChange={this.onedit}></input>
                                        <button type="submit" className="btn btn-primary" onClick={this.onUpdatePhoto}>Upload</button>
                                    </div>):(
                                    <button class="btn btn-primary" onClick={this.onChange}>Change Photo</button>)}
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