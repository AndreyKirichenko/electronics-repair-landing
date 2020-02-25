import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import animateScrollTo from 'animated-scroll-to';

import './index.scss';

const Section = forwardRef(({ children, className, id, nextSectionId }, ref) => {

  const onGoNext = () => {
    const nextSection = document.getElementById(nextSectionId);
    if(nextSection) {
      animateScrollTo(nextSection, { speed: 3000 });
    }
  };

  return (
    <section className={`section ${className}`} ref={ref} id={id} >
      {children}

      {nextSectionId && 
        <div className='section__go-next' onClick={onGoNext} >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.7397 5.26455C14.0868 5.61728 14.0868 6.18917 13.7397 6.5419L8.62854 11.7355C8.28141 12.0882 7.71859 12.0882 7.37146 11.7355L2.26035 6.5419C1.91322 6.18917 1.91322 5.61728 2.26035 5.26455C2.60748 4.91182 3.1703 4.91182 3.51743 5.26455L8 9.81942L12.4826 5.26455C12.8297 4.91182 13.3925 4.91182 13.7397 5.26455Z"
              fill="currentColor"
            />
          </svg>
        </div>
      }
    </section>
  );
});

Section.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  nextSectionId: PropTypes.string,
};

export default Section;
