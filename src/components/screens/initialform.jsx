import React from "react";
import { Widget } from '@typeform/embed-react'
import './dashboard.css';


class form extends React.Component{
    handleSignOut(){
        localStorage.removeItem("user");
    }
    render(){return(
        <div style={{height:'100%'}}>
     <Widget id="j2w06bUz" style={{ width: '100%',height:'100%' }} className="my-form" />
     </div>
   );}
}

export default form;