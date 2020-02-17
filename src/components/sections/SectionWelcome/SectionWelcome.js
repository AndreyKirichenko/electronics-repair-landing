import React, { createRef, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setStyle } from '../../../actions/page';

import './SectionWelcome.scss';
import { useSectionEffects } from '../../hooks';

const SectionWelcome = ({setPageStyle}) => {
  const ref = createRef();
  const { overSectionScrollY } = useSectionEffects(ref);

  const innerStyle = {
    opacity: 1 - (overSectionScrollY),
    transform: `scale(${overSectionScrollY + 2})`,
  };

  const titleStyle = {
    letterSpacing: `${(overSectionScrollY + 1) * 10}px`,
  };

  const descriptionStyle = {
    letterSpacing: `${(overSectionScrollY + 1) * 20}px`,
  };

  useEffect(() => {
    if(overSectionScrollY >= -1 && overSectionScrollY < 1) {

      const color = (overSectionScrollY + 1) / 2 * 255;
    
      setPageStyle({
        backgroundColor: `rgba(${color},${color},${color})`,
      });
    }
  }, [ overSectionScrollY ]);

  return (
    <div className='section-welcome' ref={ref}>
      <div
        className='section-welcome__inner'
        style={innerStyle}
      >
        <h1
          className='section-welcome__title'
          style={titleStyle}
        >
          Ремонт электроники
        </h1>

        <span
          className='section-welcome__description'
          style={descriptionStyle}
        >
          Служба скорой помощи 
        </span>

        <span
          className='section-welcome__description'
          style={descriptionStyle}
        >          
          для вашей техники
        </span>
      </div>
    </div>
  );
};

// SectionWelcome.propTypes = {
// setPageHeight: PropTypes.func,
// };

const mapDispatchToProps = (dispatch) => {
  return {
    setPageStyle: bindActionCreators(setStyle, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(SectionWelcome);
