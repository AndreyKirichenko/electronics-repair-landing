import React from 'react';
import PropTypes from 'prop-types';

const SectionContacts = (props) => {
  return (
    <div className='section-contacts'>
      <h1 className='section-contacts__title'></h1>
    </div>
  );
};

SectionContacts.propTypes = {
  setPageHeight: PropTypes.func,
};

export default SectionContacts;
