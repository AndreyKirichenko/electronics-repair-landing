import {
  SET_PAGE_HEIGHT,
  SET_PAGE_WIDTH,
  SET_VIEWPORT_HEIGHT,
  SET_VIEWPORT_WIDTH,
  SET_PAGE_STYLE,
  SET_SCROLL_POSITION_Y,
} from '../actions/actionTypes';

const initialState = {
  documentHeight: 0,
  documentWidth: 0,
  viewportHeight: 0,
  viewportWidth: 0,
  isMobileMenuOpened: false,
  style: {
    backgroundColor: '#000'
  },
};

const page = (state, action) => {
  if(state === undefined) {
    return initialState;
  }

  switch (action.type) {

  case SET_PAGE_HEIGHT:
    return {
      ...state.page,
      height: action.payload,
    };

  case SET_PAGE_WIDTH:
    return {
      ...state.page,
      width: action.payload,
    };

  case SET_VIEWPORT_HEIGHT:
    return {
      ...state.page,
      viewportHeight: action.payload,
    };

  case SET_VIEWPORT_WIDTH:
    return {
      ...state.page,
      viewportWidth: action.payload,
    };

  case SET_SCROLL_POSITION_Y:
    return {
      ...state.page,
      scrollY: action.payload,
    };

  case SET_PAGE_STYLE:
    console.log('SET_PAGE_STYLE', action.payload);
    return {
      ...state.page,
      style: action.payload,
    };

  default:
    return state.page;
  }
};

export default page;
