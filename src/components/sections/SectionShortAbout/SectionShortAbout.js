import React from 'react';
import PropTypes from 'prop-types';

const SectionShortAbout = (props) => {
  return (
    <div className='section-short-about'>
      <h1 className='section-short-about__title'></h1>
    </div>
  );
};

SectionShortAbout.propTypes = {
  setPageHeight: PropTypes.func,
};

export default SectionShortAbout;
