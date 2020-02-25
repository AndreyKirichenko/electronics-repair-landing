import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const PriceList = ({ list, title }) => {
  console.log('list', list);
  return (
    <div className='price-list'>
      <h2 className='price-list__title'>
        {title}
      </h2>

      <ul className='price-list__list'>
        {list.map((item, index) => (<li className='price-list__item' key={index}>
          <div>{item.title}</div>
          <div>{item.value}</div>
        </li>))}
      </ul>
    </div>
  );
};

PriceList.propTypes = {
  list: PropTypes.array,
  title: PropTypes.string,
};

export default PriceList;
