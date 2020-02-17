import React from 'react';
import PropTypes from 'prop-types';

const SectionPrice = (props) => {
  return (
    <div className='section-price'>
      <h1 className='section-price__title'></h1>
    </div>
  );
};

SectionPrice.propTypes = {
  setPageHeight: PropTypes.func,
};

export default SectionPrice;
