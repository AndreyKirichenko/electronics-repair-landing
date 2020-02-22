import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.scss';

const Typography = ({ children, inverted }) => {
  const classNames = classnames(
    'typography',
    {
      'typography--inverted': inverted,
    }
  );

  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

Typography.propTypes = {
  children: PropTypes.any,
  inverted: PropTypes.bool,
};

export default Typography;
