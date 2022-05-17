import { GET_LIST, LOADING_STARTS, LOADING_STOPS } from "./feedbackTypes";

const initialState = {
   items: [],
  isLoading: false,
};

const getListReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING_STARTS:
      return {
        ...state,
        isLoading: true,
      };

    case GET_LIST:
      return {
        ...state,
         items: payload.items,
        isLoading: false,
      };

    case LOADING_STOPS:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default getListReducers;
