/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useEffect, useState } from 'react';
import useGetList from './api/useGetList';
import qs from 'qs';
import ReyesJenniferTable from './ReyesJenniferTable';

const ReyesJennifer = () => {
  const { getList, items, isLoading } = useGetList();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const data = qs.stringify({
   
    email: email,
    password: password,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    getList(data);
  };

  // useEffect(() => {
  //   getList();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);


  return (
    <div className=" p-3">
      <div className="container-fluid "> 
          <form className="form-row align-items-center" onSubmit={onSubmit}>
          <div class="">
              <label className="mt-2 p-0 copy-font">Email: </label>
              <div className="col-sm-3 my-1">
              <input
                className="form-control-sm"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly={false}
                type="email"
              />
              </div>
              <label className="mt-2 p-0 copy-font">Password: </label>
              <div className="col-sm-3 my-1">
            
              <input
                className="form-control-sm"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                readOnly={false}
                type="password"
              />
            </div>
            </div>

            <div className="mb-3">
              <button className="btn btn-green" style={{ height: '39px' }}>
                Search
              </button>
            </div>
          </form>
      {/* <div className="col-sm-3 my-1-12 d-flex mt-2">
          <CustomCsvDownload
            data={data || []}
            headers={referralHeaders}
            filename={filename(`Referral`)}
            classname="btn btn-green shadow-md"
            textcol-sm-3 my-1or="white"
            text="Download Data"
          />
        </div> */}
        <div className="row">
          <ReyesJenniferTable  items={ items} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default ReyesJennifer;
