import React from 'react';

import './index.scss';
import Iframe from 'react-iframe';

const SectionContacts = (props) => {
  return (
    <section className='section-contacts'>
      {/* <h1 className='section-contacts__title'>Мы перезвоним вам в течение 15 минут</h1> */}

      <Iframe
        src='https://b24-bg4ar9.bitrix24.ru/pub/form.php?view=frame&form_id=3&widget_user_lang=ru&sec=2pfrp2&r=1582475469270#%7B%22domain%22%3A%22http%3A%2F%2Flocalhost%3A8080%22%2C%22from%22%3A%22http%3A%2F%2Flocalhost%3A8080%2F%22%2C%22options%22%3A%7B%7D%7D'
        width='100%'
        height='500px'
        className='myClassname'
        display='initial'
        position='relative' />
    </section>
  );
};

export default SectionContacts;
