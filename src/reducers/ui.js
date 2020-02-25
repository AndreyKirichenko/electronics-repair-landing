import {
  SET_UI_DOCUMENT_HEIGHT,
  SET_UI_DOCUMENT_WIDTH,
  SET_UI_VIEWPORT_HEIGHT,
  SET_UI_VIEWPORT_WIDTH,
  SET_UI_SCROLL_Y,
} from '../actions/actionTypes';

const initialState = {
  document: {
    height: 0,
    width: 0,
  },
  viewport: {
    height: 0,
    width: 0,
  },
  scroll: {
    y: 0,
  }
};

const ui = (state, action) => {
  if(state === undefined) {
    return initialState;
  }

  switch (action.type) {

  case SET_UI_DOCUMENT_HEIGHT:
    return {
      ...state.ui,
      document: {
        ...state.ui.document,
        height: action.payload,
      }
    };

  case SET_UI_DOCUMENT_WIDTH:
    return {
      ...state.ui,
      document: {
        ...state.ui.document,
        width: action.payload,
      }
    };

  case SET_UI_VIEWPORT_HEIGHT:
    return {
      ...state.ui,
      viewport: {
        ...state.ui.viewport,
        height: action.payload,
      }
    };

  case SET_UI_VIEWPORT_WIDTH:
    return {
      ...state.ui,
      viewport: {
        ...state.ui.viewport,
        width: action.payload,
      }
    };

  case SET_UI_SCROLL_Y:
    return {
      ...state.ui,
      scroll: {
        ...state.ui.scroll,
        y: action.payload,
      }
    };

  default:
    return state.ui;
  }
};

export default ui;
