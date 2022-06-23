import React from "react";
import { Form } from "react-bootstrap";

const ContactInfo = ({ emails, onSubmit, passwords, detail, role, setDetails, setPassword, setRole  }) => {
  return (
    <div className="d-flex flex-column ">
      <p>&#8592;{emails} </p>
      <b className="mt-3 mb-1" style={{fontSize: "22px"}}>Enter Password</b>
       <form  onSubmit={onSubmit} className="form-horizontal well">
              <div  className="col-lg-12">
                <div  className="form-group">
                 
                <input type="password" name="passwords"   style={{ borderTopStyle: "hidden",
        borderRightStyle: "hidden",
        borderLeftStyle: "hidden",
        borderBottomStyle: "groove",
        backgroundColor: "#fdfdfd"}} className="form-control" id="passwords" value={passwords}  onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"/>
                
                </div>
              </div>
             
              <div  className="col-lg-12">
                <div  className="form-group">
              
                  <input type="hidden" name="detail"  className="form-control" id="detail" value={detail}   onChange={(e) => setDetails(e.target.value)} />
                </div>
              </div>

              <div  className="col-lg-12">
                <div  className="form-group">
              
                  <input type="hidden" name="role"  className="form-control" id="role" value={role}   onChange={(e) => setRole(e.target.value)} />
                </div>
              </div>

    
              <p className='font-weight-light pt-1 pb-3' style={{fontSize:"14px"}}> <a href="#"> Forgot Password?</a></p>
        

             
            <button className="btn btn-sm pull-right " style={{ color: "white", backgroundColor:"#163a98", float: "right" }} id="submit-btn">Sign In</button>
    
          </form>
    </div>
  );
};

export default ContactInfo;
