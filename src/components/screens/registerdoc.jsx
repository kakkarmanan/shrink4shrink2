import React from "react";
import firebase from '../../firebase';

var storageRef = firebase.storage().ref();
const toBlob = (file) => {
    return new Blob([file], {
      type: 'application/pdf'
    })
  }
  var metadata = {
    contentType: 'application/pdf',
  };
class RegisterPageDoc extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:{
      firstName:"",
      lastName:"",
      phone:"",
      address:"",
      gender:"",
      state:"",
      city:"",
      dob:"",
      pincode:"",
      email:"",
      password:"",
      cnfrmpassword:"",
      licenseno:"",
      yoe:"",
      selectedFile: null
    }
  }
  };
  onChange = e => { 
    this.setState({data: {...this.state.data, [e.target.name]: e.target.value}});
  }
  onFile=e=>{
      console.log(e.target.files[0]);
    this.setState({ selectedFile: e.target.files[0] });
  };
  onFileUpload = async () => {
    const formData = new FormData();
    if(this.state.selectedFile==null){
      alert("No file Selected!!!");
    }
    else{
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name,
      );
      console.log(this.state.selectedFile);
      try {
        const blob = toBlob(this.state.selectedFile);
        this.setState({isLoading:true})
        console.log(blob);
        var mountainsRef = await storageRef.child(this.state.selectedFile.name);
        await mountainsRef.put(blob, metadata);
        const res = await mountainsRef.getDownloadURL();
        console.log(res);
        console.log(this.state.u);
        // setTimeout(()=>{},5000);
      } 
      catch (err) {
        console.log(err)
      }
    }
  };
  onReset=(eve)=>{
    eve.preventDefault();
    this.setState({data: {...this.state.data, firstName:"",
    lastName:"",
    phone:"",
    address:"",
    gender:"",
    state:"",
    city:"",
    dob:"",
    pincode:"",
    email:"",
    password:"",
    cnfrmpassword:""}});
  }
  onSubmitSignup = (event) => {
    event.preventDefault();
    console.log(this.state.data);
   if (this.state.data.password.length >= 8 && this.state.data.cnfrmpassword.length >= 8 && this.state.data.phone.length===13) {
     if((this.state.data.password === this.state.data.cnfrmpassword )&& (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.data.email,))){

       fetch('http://localhost:3001/api/signup', {
       method: 'post',
       headers: { 'Content-type': 'application/json' },
       body: JSON.stringify({
         firstname: this.state.data.firstName,
         lastname: this.state.data.lastName,
         email: this.state.data.email,
         phone: this.state.data.phone,
         address: this.state.data.address,
         city: this.state.data.city,
         state: this.state.data.state,
         dob:this.state.data.dob,
         gender: this.state.data.gender,
         pincode: this.state.data.pincode,
         password: this.state.data.password,
         picture: "https://i.dlpng.com/static/png/5066008-circled-user-icon-user-profile-icon-png-png-image-transparent-profile-icon-png-820_860_preview.png"
       })
     })
       .then(response => response.json())
       .then(user => {
         console.log(user);
         if (user.email) {
           // this.props.loadUser(user);
           console.log(this.props);
           // this.props.onRouteChange('home');
           //this.props.history.push("/welcome");
           //localStorage.removeItem("user");
           alert("you have successfully registered continue to login!!");
           this.props.history.push("/login");
         }
       })
     }
     else{
       alert("Check both passwords or Email format");
     }
 }
 else {
   alert("Check password length or contact number format");
 }
 }
        render(){
          const {data} = this.state;
          return  (
            <div>
                <section class="h-100 bg-dark">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card card-registration my-4">
          <div class="row g-0">
            <div class="col-xl-6 d-none d-xl-block">
              <img
                src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/img4.jpg"
                alt="img"
                class="img-fluid"
                style={{borderTopLeftRadius: ".25rem" , borderBottomLeftRadius: ".25rem"}}
              />
            </div>
            <div class="col-xl-6">
              <div class="card-body p-md-5 text-black">
                <h3 class="mb-5 text-uppercase">Signup with us!</h3>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1m" class="form-control form-control-lg" name="firstName" value={data.firstName} onChange = {this.onChange} required/>
                      <label class="form-label" for="form3Example1m">First name*</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n" class="form-control form-control-lg" name="lastName" value={data.lastName} onChange = {this.onChange} required/>
                      <label class="form-label" for="form3Example1n">Last name*</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n" class="form-control form-control-lg" name="licenseno" value={data.licenseno} onChange = {this.onChange} required/>
                      <label class="form-label" for="form3Example1n">License Number*</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n" class="form-control form-control-lg" name="yoe" value={data.yoe} onChange = {this.onChange} required/>
                      <label class="form-label" for="form3Example1n">Years of Experience*</label>
                    </div>
                  </div>
                  </div>
                  <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                  <input type="file" class="form-control" id="customFile" name="licensedoc" onChange={this.onFile} />
                  <label class="form-label" for="customFile">Upload License Document(pdf)</label>
                  </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                        <a className ="button btn btn-outline-success me-2" onClick={this.onFileUpload} >Upload</a>
                    </div>
                    </div>
                  </div>
                  
                <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1m" class="form-control form-control-lg" name="phone" value={data.phone} onChange = {this.onChange} required/>
                      <label class="form-label" for="form3Example1m">Contact Number*(in "+91" format)</label>
                    </div>
                  </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example8" class="form-control form-control-lg" name="address" value={data.address} onChange = {this.onChange} required/>
                  <label class="form-label" for="form3Example8">Address</label>
                </div>

                <div class="d-md-flex justify-content-start align-items-center mb-4 py-2" onChange = {this.onChange}>

                  <h6 class="mb-0 me-4">Gender*: </h6>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="femaleGender"
                      value="female"
                    />
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="maleGender"
                      value="male"
                    />
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div class="form-check form-check-inline mb-0">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="otherGender"
                      value="pns"
                    />
                    <label class="form-check-label" for="otherGender">Preferably not say</label>
                  </div>

                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">

                  <select name="state" id="state" class="form-control" onChange = {this.onChange}>
                  <option value="">Select State</option>
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
</select>
<label class="form-label" for="form3Example1n">State</label>

                  </div>
                </div>

                <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" id="form3Example1n" class="form-control form-control-lg" name="city" value={data.city} onChange = {this.onChange} required/>
                      <label class="form-label" for="form3Example1n">City</label>
                    </div>
                  </div>  

                <div class="form-outline mb-4">
                  <input type="date" id="form3Example9" class="form-control form-control-lg" name="dob" value={data.dob} onChange = {this.onChange} required />
                  <label class="form-label" for="form3Example9">DOB*</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example90" class="form-control form-control-lg" name="pincode" value={data.pincode} onChange = {this.onChange} required/>
                  <label class="form-label" for="form3Example90">Pincode</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example97" class="form-control form-control-lg" name="email" value={data.email} onChange = {this.onChange} required/>
                  <label class="form-label" for="form3Example97">Email ID*</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example97" class="form-control form-control-lg" name="password" value={data.password} onChange = {this.onChange} required/>
                  <label class="form-label" for="form3Example97">Password*</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example97" class="form-control form-control-lg" name="cnfrmpassword" value={data.cnfrmpassword} onChange = {this.onChange} required/>
                  <label class="form-label" for="form3Example97">Confirm Password*</label>
                </div>

                <div class="d-flex justify-content-end pt-3">
                  <button type="button" class="btn btn-light btn-lg b2-color" onClick={this.onReset} >Reset all</button>
                  <button type="button" class="btn btn-warning btn-lg ms-2 b1-color" onClick={this.onSubmitSignup}>Register</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            </div>
        );}
};

export default RegisterPageDoc;