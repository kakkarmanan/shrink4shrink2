import React from "react";

class LoginPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: {
        email: '',
        password: '',
        doctor:"false"
      }
    }
  };
  onChange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value}});

  onReset=(eve)=>{
    this.setState({data: {...this.state.data, email:"",password:""}});
  }

  onSubmitSignIn=(event)=>{
    console.log(this.state.data);
    event.preventDefault();
   fetch('http://localhost:3001/api/signin',{
       method:'post',
       headers:{'Content-type':'application/json'},
       body:JSON.stringify({
           email:this.state.data.email,
           password:this.state.data.password,
           doctor:this.state.data.doctor,
       })
   })
       .then(response=>response.json())
       .then(user=>{
         console.log(user.isvalid);
         if(user.email){
          localStorage.setItem("user", JSON.stringify(user));
          this.props.history.push("/dashboard");
         }
          //  if(user.email  && user.isvalid===false){
          //    localStorage.setItem("user", JSON.stringify(user));
          //    this.props.history.push("/dashboard");
          //  }
          //  else if(user.email  && user.isvalid===true){
          //    localStorage.setItem("user", JSON.stringify(user));
          //    this.props.history.push("/adminPage");
          //  }
          //  else{
          //      alert('No matching Credentials!');
          //  }
       })
 }
        render()
        {
          const {data} = this.state;
          return (
            
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
                        <h3 class="mb-5 text-uppercase">Login</h3>

                        <div class="row">
                          <div class="form-outline mb-4">
                            <div class="form-outline">
                              <input type="email" id="form3Example1m" class="form-control form-control-lg" name="email" value={data.email} onChange = {this.onChange} required/>
                              <label class="form-label" for="form3Example1m">Email</label>
                            </div>
                          </div>
                        </div> 

                        <div class="form-outline mb-4">
                          <input type="password" id="form3Example97" class="form-control form-control-lg" name="password" value={data.password} onChange = {this.onChange} required/>
                          <label class="form-label" for="form3Example97">Password</label>
                        </div> 

                        <div class="d-flex justify-content-end pt-3">
                          <button type="button" class="btn btn-light btn-lg b2-color" onClick={this.onReset} >Reset all</button>
                          <button type="button" class="btn btn-warning btn-lg ms-2 b1-color" onClick = {this.onSubmitSignIn} >Login</button>
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

export default LoginPage;