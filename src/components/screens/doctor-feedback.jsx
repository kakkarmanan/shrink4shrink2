import React from "react";
import "./feedback.css"

class DoctorFeedback extends React.Component{
    constructor(props){
        super(props);
        this.state={
            u:JSON.parse(localStorage.getItem("user")),
        }
    }
    render(){
        return(
            <div>
                <div lcassName="container-contact100">
                    <div className="wrap-contact100">
                        <form className="contact100-form validate-form">
                            <span className="contact100-from-title">Feedback</span>
                            <div className="wrap-input100 validate-input" data-validate="Please enter your name">
                                <input className="input100" type="text" name="name" placeholder="Full Name"/>
                                <span class="focus-input100"></span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Please enter your name">
                                <textarea className="input100" type="text" name="feedback" placeholder="Your Feedback"/>
                                <span class="focus-input100"></span>
                            </div>
                            <div className="container-contact100-from-btn">
                                <button className="contact100-form-btn">Send Feedback</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default DoctorFeedback 