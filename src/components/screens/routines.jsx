import React from "react";
import Tilt from 'react-parallax-tilt';
import {Link} from 'react-router-dom';
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

class Routines extends React.Component{
    routines=[
            "https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/Mess%20reciept.pdf?alt=media&token=4a6a3b00-1785-4df1-a9bc-887e5513b01f",
            "https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/Mess%20reciept.pdf?alt=media&token=4a6a3b00-1785-4df1-a9bc-887e5513b01f",
            "https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/Mess%20reciept.pdf?alt=media&token=4a6a3b00-1785-4df1-a9bc-887e5513b01f",
            "https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/Mess%20reciept.pdf?alt=media&token=4a6a3b00-1785-4df1-a9bc-887e5513b01f",
            "https://firebasestorage.googleapis.com/v0/b/shrink4shrink.appspot.com/o/Mess%20reciept.pdf?alt=media&token=4a6a3b00-1785-4df1-a9bc-887e5513b01f"
    ];
    constructor(props){
        super(props);
        this.state={
            data:this.routines,
            selectedFile:null
        }
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
            this.setState(({
                data: [...this.state.data, res]
              }))
            // setTimeout(()=>{},5000);
          } 
          catch (err) {
            console.log(err)
          }
        }
      };
    render(){
        return(
            <div>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">s4s</a>
                    <form class="d-flex">
                        <Link to='/login' className="button btn btn-outline-success me-2"> Logout</Link>
                    </form>
                </div>
            </nav>
            <div className="container-fluid" id="main">
                <div className="row row-offcanvas row-offcanvas-left">
                    <div className="col-md-3 col-lg-2 sidebar-offcanvas bg-light pl-0" id="sidebar" role="navigation">
                        <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
                            <li className="nav-item"><a className="nav-link" href="/dashboard">Home</a></li> 
                            <li className="nav-item"><a className="nav-link" href="/upcoming-sessions">Upcoming Sessions</a></li>
                            <li className="nav-item"><a className="nav-link" href="/previous-sessions">Previous Sessions</a></li>
                            <li className="nav-item"><a className="nav-link" href="/routines">Routines</a></li>
                            <li className="nav-item"><a className="nav-link" href="/prescriptions">Prescriptions</a></li>
                            <li className="nav-item"><a className="nav-link" href="/find-doctor">Find Doctor</a></li>
                        </ul>
                    </div>
                    <div className="col main pt-5 mt=3 border border-dark" style={{backgroundColor:"#303030"}}>
                        <h1 className="text-light">Routines</h1>
                        <div className="row">
                        <div class="col-md-6 mb-4">
                    <div class="form-outline">
                  <input type="file" class="form-control" id="customFile" name="licensedoc" onChange={this.onFile} />
                  <label class="form-label text-light" for="customFile">Upload Routine(pdf)</label>
                  </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                        <a className ="button btn btn-outline-success me-2" onClick={this.onFileUpload} >Upload</a>
                    </div>
                    </div>
                        </div>
                        <div className="row">
                            {this.state.data.map(ele=>(
                                <div className="col-sm-6" style={{margin:"50px",width:"220px", height:"300px"}}>
                                <Tilt style={{margin:"30px",width:"220px", height:"300px"}}>
                                <iframe src={ele} style={{width:"220px", height:"300px",overflow:"hidden"}} frameborder="0" scrolling="no" ></iframe>
                                <a href={ele} style={{position:"absolute" ,top:"0", left:"0", display:"inline-block", width:"220px", height:"300px", ZIndex:"5"}}></a>
                                </Tilt>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
        )
    }
}

export default Routines