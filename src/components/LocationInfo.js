import React from "react";
import { Form } from "react-bootstrap";

const LocationInfo = ({  emails, setEmail }) => {
  return (
    <div className="d-flex flex-column ">
      
          <form    className="form-horizontal well mt-2">
              <div  className="col-lg-12">
                <div  className="form-group-lg">
                 
                  <input type="email" name="emails"  className="form-control" id="emails" value={emails}  onChange={(e) => setEmail(e.target.value)}  placeholder="Enter email"/>
                
                </div>
              </div>
             
            

              <p className='font-weight-light' style={{fontSize:"14px"}}> <a href="#">Forgot email?</a></p>

              <p className='font-weight-light mt-3' style={{fontSize:"14px"}}>Not your computer? Use Guest mode to sign in privately <br/> <a href="#">Learn more</a></p>
              
              <p className='font-weight-light mt-3' style={{fontSize:"14px"}}> <a href="#"> Create account</a></p>
    
          </form>
    </div>
  );
};

export default LocationInfo;