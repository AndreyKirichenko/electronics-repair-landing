import React from 'react';

import './index.scss';
import Tabs from '../../Tabs';
import PriceList from '../../PriceList';
import Section from '../../Section';
import data from './data';

const SectionPrice = () => {

  const options = data.map((item, index) => {
    return {
      title: item.title,
      // content: () => (<div>123</div>),
      content: <PriceList title={item.description} list={item.priceList} />,
    };
  });

  return (
    <Section className='section-price' id='price'>
      <h1 className='section-price__title'>
        Услуги <br className='section-price__title-br' />и&nbsp;цены
      </h1>

      <div className='section-price__description'>
        Какая-то дополняющая подпись <br />желательно на&nbsp;пару строк
      </div>

      <div className='section-price__tabs'>
        <Tabs options={options} />
      </div>
    </Section>
  );
};

export default SectionPrice;
