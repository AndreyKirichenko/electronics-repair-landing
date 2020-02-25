import React, { createRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageStyle } from '../../../actions/page';

import './index.scss';
import { useSectionEffects } from '../../hooks';
import Section from '../../Section';

const SectionWelcome = () => {
  const ref = createRef();
  const { scrollOverlayY } = useSectionEffects(ref);

  const innerStyle = {
    opacity: 1 - (scrollOverlayY),
    transform: `scale(${scrollOverlayY + 1})`,
  };

  const titleStyle = {
    letterSpacing: `${scrollOverlayY * 40}px`,
  };

  const descriptionStyle = {
    letterSpacing: `${scrollOverlayY * 60}px`,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const color = (scrollOverlayY) * 255;

    dispatch(
      setPageStyle({
        backgroundColor: `rgba(${color},${color},${color})`,
      })
    );
  }, [ scrollOverlayY ]);

  return (
    <Section className='section-welcome' ref={ref} id='welcome' nextSectionId='price'>
      <div
        className='section-welcome__inner'
        style={innerStyle}
      >
        <h1
          className='section-welcome__title'
          style={titleStyle}
        >
          Ремонт <br className='section-welcome__title-br' />электроники
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

      <div className='section-welcom__noise' />
    </Section>
  );
};

export default SectionWelcome;
