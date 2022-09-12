/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import useGetList from './api/useGetList';


const  ReyesJenniferTable = ({  items, isLoading }) => {

  const { deleteList } = useGetList();

  

  const [one, setOne] = useState({});
  const getItem = (item) => setOne(item);



  const tableData =
     items &&  items.length
      ?  items.map((item, i) => {
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
          
              <td>
               
                <button
                    type="button"
                    className="noBorder"
                    data-target="#confirm_delete"
    
                    onClick={confirmDelete}
                    data-toggle="modal"
                  >
           
                    <img src="https://th.bing.com/th/id/OIP.TG3QGNq75mPOFYVeU5nUpgAAAA?w=174&h=180&c=7&r=0&o=5&pid=1.7" width="30px" height="30px"  alt="" data-toggle="tooltip" data-placement="top" title="Delete"/>
                     
                 
                  </button>
           
            
              </td>
            </tr>
          );
        })
      : 'NO RECORD';
  return (
    <div className="">
      <div className="table-responsive">
     < table className="table table-bordered table-dark">
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
