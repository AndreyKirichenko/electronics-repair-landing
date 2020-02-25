import mobileMenu from './mobileMenu';
import page from './page';
import ui from './ui';

const reducer = (state, action) => {

  return {
    mobileMenu: mobileMenu(state, action),
    page: page(state, action),
    ui: ui(state, action),
  };
};

export default reducer;
