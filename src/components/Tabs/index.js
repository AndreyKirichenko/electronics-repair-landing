import React from 'react';
import PropTypes from 'prop-types';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import './index.scss';

const ExtendedTabs = ({options}) => {

  console.log('ExtendedTabs options', options);

  const tabList = [];
  const panels = [];

  options.forEach((item, index) => {
    tabList.push(
      <Tab key={index}>{item.title}</Tab>
    );

    panels.push(
      <TabPanel key={index}>{item.content}</TabPanel>
    );
  });

  return (
    <Tabs>
      <TabList>
        {tabList}
      </TabList>

      {panels}
    </Tabs>
  );
};

Tabs.propTypes = {
  options: PropTypes.array,
};

export default ExtendedTabs;
