import {
  SET_PAGE_STYLE,
} from '../actions/actionTypes';

const initialState = {
  style: {
    backgroundColor: '#000'
  },
};

const page = (state, action) => {
  if(state === undefined) {
    return initialState;
  }

  switch (action.type) {
  case SET_PAGE_STYLE:
    return {
      ...state.page,
      style: action.payload,
    };

  default:
    return state.page;
  }
};

export default page;
