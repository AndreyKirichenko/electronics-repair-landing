import {
  SET_PAGE_STYLE,
} from './actionTypes';

export const setPageStyle = (style) => {
  return {
    type: SET_PAGE_STYLE,
    payload: style,
  };
};
