import {
  SET_UI_DOCUMENT_HEIGHT,
  SET_UI_DOCUMENT_WIDTH,
  SET_UI_VIEWPORT_HEIGHT,
  SET_UI_VIEWPORT_WIDTH,
  SET_UI_SCROLL_Y,
} from './actionTypes';

export const setUIViewportHeight = (height) => {
  return {
    type: SET_UI_VIEWPORT_HEIGHT,
    payload: height,
  };
};

export const setUIViewportWidth = (width) => {
  return {
    type: SET_UI_VIEWPORT_WIDTH,
    payload: width,
  };
};

export const setUIDocumentHeight = (height) => {
  return {
    type: SET_UI_DOCUMENT_HEIGHT,
    payload: height,
  };
};

export const setUIDocumentWidth = (width) => {
  return {
    type: SET_UI_DOCUMENT_WIDTH,
    payload: width,
  };
};

export const setUIScrollY = (y) => {
  return {
    type: SET_UI_SCROLL_Y,
    payload: y,
  };
};
