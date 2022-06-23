import React from "react";
import { Form } from "react-bootstrap";

const PersonalInfo = ({  emails, setEmail }) => {
  return (
    <div className="d-flex flex-column ">
          <span  className="b text-dark mt-2 mb-1">Sign In</span> 
       <form    className="form-horizontal well">
              <div  className="col-lg-12">
                <div  className="form-group">
                 
                  <input type="email" name="emails" style={{ borderTopStyle: "hidden",
        borderRightStyle: "hidden",
        borderLeftStyle: "hidden",
        borderBottomStyle: "groove",
        backgroundColor: "#fdfdfd"}} className="form-control" id="emails" value={emails}  onChange={(e) => setEmail(e.target.value)}  placeholder="Enter email"/>
                
                </div>
              </div>
             
             
              <p className='font-weight-light' style={{fontSize:"14px"}}>No account <a href="#"> Create One!</a></p>
              <p className='font-weight-light' style={{fontSize:"14px"}}> <a href="#">Can't access this account?</a></p>
              <p className='font-weight-light' style={{fontSize:"14px"}}> <a href="#"> Sign-in options</a></p>
        

             

    
          </form>
    </div>
  );
};

export default PersonalInfo;