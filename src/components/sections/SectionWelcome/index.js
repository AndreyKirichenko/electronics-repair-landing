import React, { createRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStyle } from '../../../actions/page';

import './index.scss';
import { useSectionEffects } from '../../hooks';

const SectionWelcome = () => {
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

  const dispatch = useDispatch();

  useEffect(() => {
    if(overSectionScrollY >= -1 && overSectionScrollY < 1) {

      const color = (overSectionScrollY + 1) / 2 * 255;
    
      dispatch(
        setStyle({
          backgroundColor: `rgba(${color},${color},${color})`,
        })
      );
    }
  }, [ overSectionScrollY ]);

  return (
    <section className='section-welcome' ref={ref}>
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
    </section>
  );
};

export default SectionWelcome;
