import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';

import './index.scss';

import HeaderLogo from '../HeaderLogo';
import MobileMenu from '../MobileMenu';
import DesktopMenu from '../DesktopMenu';
import Burger from '../Burger';

const MAX_TRANSPARENT_SCROLL_Y = 64;

const MEDIA_NAV = 960;

const MENU_ITEMS = [
  {
    title: 'О нас',
    url: '/#about',
  },
  {
    title: 'Услуги и цены',
    url: '/#price',
  },
  {
    title: 'Контакты',
    url: '/#contacts',
  },
];

const Header = () => {
  const [ withBackground, setWithBackground ] = useState(false);

  const { 
    scroll: { y: scrollY },
    viewport: { width: viewportWidth },
  } = useSelector(state => state.ui);

  useEffect(() => {
    setWithBackground(scrollY > MAX_TRANSPARENT_SCROLL_Y);
  }, [scrollY]);

  const isMobile = viewportWidth < MEDIA_NAV;

  const classNames = classnames(
    'header',
    {
      'header--with-background': withBackground,
    }
  );

  return (
    <header className={classNames}>
      {isMobile && <MobileMenu list={MENU_ITEMS} />}

      <div className='header__logo'>
        <HeaderLogo />
      </div>

      {!isMobile && (
        <div className='header__menu'>
          <DesktopMenu list={MENU_ITEMS} />
        </div>
      )}

      {
        isMobile && (
          <div className='header__burger'>
            <Burger />
          </div>
        )
      }
    </header>
  );
};

export default Header;
