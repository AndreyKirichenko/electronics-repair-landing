import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';

import './index.scss';
import { toggleMobileMenuOpened } from '../../actions/mobileMenu';
import LetterWrapper from '../LetterWrapper';

const Burger = () => {
  const dispatch = useDispatch();

  const onToggleMenu = () => {
    dispatch(toggleMobileMenuOpened());
  };

  const isMobileMenuOpened = useSelector(state => state.mobileMenu.isMobileMenuOpened);

  const openTextClassNames =
    classnames(
      'burger__text',
      'burger__text--open',
      {
        'burger__text--visible': !isMobileMenuOpened
      }
    );

  const closeTextClassNames =
    classnames(
      'burger__text',
      'burger__text--open',
      {
        'burger__text--visible': isMobileMenuOpened
      }
    );

  return (
    <div
      className='burger burger--with-initial-animation'
      onClick={onToggleMenu}
    >
      <div className={openTextClassNames}>
        <LetterWrapper
          text={'Меню'}
          className='burger__letter'/>
      </div>

      <div className={closeTextClassNames}>
        <LetterWrapper
          text={'Закрыть'}
          className='burger__letter'
        />
      </div>
    </div>
  );
};

export default Burger;
