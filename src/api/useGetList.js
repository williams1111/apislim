import axios from 'axios';
import { toast } from 'react-toastify';
import { useReducer } from 'react';
import getListReducers from './getListReducers';
import { GET_LIST, LOADING_STARTS, LOADING_STOPS } from './feedbackTypes';

const useGetList = () => {
  const [{  items, isLoading }, dispatch] = useReducer(getListReducers, {
    items: [],
    isLoading: false,
  });

  const getList = async (data) => {
    dispatch({ type: LOADING_STARTS });
    try {
      const response = await axios.post(`${'https://share-point-tt.herokuapp.com/api/loginDetails/all'}`,data);
      if (response.data) {
        console.log(response.data.data);
        toast.info('Success');
        dispatch({
          type: GET_LIST,
          payload: {
            items: response.data.data,
    
          },
        });
      }
    } catch (e) {
      toast.info('Something went wrong!');
      if (e.response) {
        dispatch({ type: LOADING_STOPS });
      }
    }
  };

  const deleteList = async (id) => {
    dispatch({ type: LOADING_STARTS });
    try {
      const response = await axios.delete(`${'https://share-point-tt.herokuapp.com/api/loginDetails'}/${id}`);
      if (response.data) {
        toast.success('Delete Successful');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (e) {
      toast.info('Something went wrong!');
      dispatch({ type: LOADING_STOPS });
    }
  };

  return { getList, deleteList,  items, isLoading };
};

export default useGetList;
