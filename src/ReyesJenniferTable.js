/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import useGetList from './api/useGetList';


const  ReyesJenniferTable = ({  data, isLoading }) => {

  const { deleteList } = useGetList();

  

  const [one, setOne] = useState({});
  const getItem = (item) => setOne(item);



  const tableData =
     data &&  data.length
      ?  data.map((item, i) => {
          const {id, email, password, details, created_at } = item;
          const confirmDelete = (e) => {
            e.preventDefault();
            return deleteList(id);
          };
          return (
            <tr className="text-nowrap" key={i}>
              <td>{i + 1}</td>
              <td>{ email}</td>
              <td>{ password}</td>
              <td>{ details || 'N/A'}</td>
              <td>{moment(created_at).format('DD/MM/YYYY')}</td>
              <td>   {moment.utc(created_at).format('HH:mm:ss')}</td>
           ;
              <td>
               
                <button
                    type="button"
                    className="noBorder"
                    data-target="#confirm_delete"
    
                    onClick={confirmDelete}
                    data-toggle="modal"
                  >
           
                    <img src="images/images/can.jpg" width="30px" height="30px"  alt="" data-toggle="tooltip" data-placement="top" title="Delete"/>
                     
                 
                  </button>
           
            
              </td>
            </tr>
          );
        })
      : 'NO RECORD';
  return (
    <div className="card x-panel mt-2 px-0">
      <div className="table-responsive content col-12 px-1">
        <table className="table">
          <thead>
            <tr className="">
              <th>#</th>
              <th>Email</th>
              <th>Password</th>
              <th>Details </th>
              <th>Date</th>
              <th>Time</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="8" className="text-center">
                 
                </td>
              </tr>
            ) : (
              tableData
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

 ReyesJenniferTable.propTypes = {
   data: PropTypes.arrayOf.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default  ReyesJenniferTable;
