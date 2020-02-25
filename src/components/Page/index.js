import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';
import windowListener from '../../helpers/window-listener';

import {
  setUIDocumentHeight,
  setUIDocumentWidth,
  setUIViewportHeight,
  setUIViewportWidth,
  setUIScrollY,
} from '../../actions/ui';

import { setMobileMenuOpened } from '../../actions/mobileMenu';

import Header from '../Header';

import SectionWelcome from '../sections/SectionWelcome';
// import SectionShortAbout from '../sections/SectionShortAbout';
import SectionPrice from '../sections/SectionPrice';
import SectionLongAbout from '../sections/SectionLongAbout';
import SectionContacts from '../sections/SectionContacts';

const Page = () => {
  useEffect(() => {
    windowListener.registerResizeCallback('onPageResize', onResize);
    windowListener.registerScrollCallback('onPageScroll', onScroll);
    setSizes();

    return () => {
      windowListener.unregisterResizeCallback('onPageResize');
      windowListener.unregisterScrollCallback('onPageScroll');
    };
  }, []);

  const dispatch = useDispatch();

  const setSizes = () => {
    dispatch(setUIDocumentHeight(document.body.clientHeight));
    dispatch(setUIDocumentWidth(document.body.clientWidth));
    dispatch(setUIViewportHeight(window.innerHeight));
    dispatch(setUIViewportWidth(window.innerWidth));
  };

  const onScroll = () => {
    dispatch(setUIScrollY(window.scrollY));
  };

  const onResize = () => {
    dispatch(setMobileMenuOpened(false));
    setSizes();
  };

  const style = useSelector(state => state.page.style);

  return (
    <Router>
      <div
        className='page'
        style={style}
      >
        <div className='page__header'>
          <Header />
        </div>

        <main className='page__main'>
          <SectionWelcome />
          {/* <SectionShortAbout /> */}
          <SectionPrice />
          {/* <SectionLongAbout /> */}
          <SectionContacts />
        </main>
      </div>
    </Router>
  );
};

export default Page;
