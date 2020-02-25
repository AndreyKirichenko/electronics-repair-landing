import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './index.scss';
import LetterWrapper from '../LetterWrapper';
import { toggleMobileMenuOpened } from '../../actions/mobileMenu';

const MobileMenu = ({ list }) => {

  const { isMobileMenuOpened } = useSelector(state => state.mobileMenu);

  const dispatch = useDispatch();

  const classNames = classnames(
    'mobile-menu',
    {
      'mobile-menu--hidden': !isMobileMenuOpened
    }
  );

  const onToggleMenu = () => {
    dispatch(toggleMobileMenuOpened());
  };

  const getItems = () => {
    return (
      <ul className='mobile-menu__list'>
        {
          list.map(({ title, url }) => {
            return (
              <li className='mobile-menu__item' key={title} onClick={onToggleMenu}>
                <Link className='mobile-menu__link' to={url}>
                  <LetterWrapper text={title} className='mobile-menu__letter'/>
                </Link>
              </li>
            );
          })
        }
      </ul>
    );
  };

  return (
    <div className={classNames}>
      {getItems()}
    </div>
  );
};

MobileMenu.propTypes = {
  list: PropTypes.array,
};

export default MobileMenu;
