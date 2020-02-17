import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useSectionEffects = (ref) => {
  const { 
    pageHeight,
    scrollY,
    viewportHeight,
    viewportWidth
  } = useSelector(state => state.page);

  const [sectionPosition, setSectionPosition] = useState({
    start: 0,
    end: 0,
  });

  useEffect(() => {
    setPositions();
  }, []);

  useEffect(() => {
    setPositions();
  }, [viewportHeight, viewportWidth]);

  const setPositions = () => {
    const sectionHeight = ref.current.offsetHeight;
    const start = ref.current.getBoundingClientRect().top + scrollY;
    const end = start + sectionHeight;

    setSectionPosition({
      end,
      start,
    });
  };

  const overSectionScrollY = getSideChainScrollY({
    sectionPosition,
    pageHeight,
    viewportHeight,
    scrollY,
  });

  return {
    overSectionScrollY,
  };
};

const getSideChainScrollY = ({
  sectionPosition,
  pageHeight,
  viewportHeight,
  scrollY,
}) => {
  let start = sectionPosition.start - viewportHeight;

  if(start < 0) {
    start = 0;
  }

  let end = sectionPosition.end;
  const minPossibleEnd = pageHeight - viewportHeight;

  if(end > minPossibleEnd) {
    end = minPossibleEnd;
  }

  const delta = end - start;
  const relativeScrollY = scrollY - start;
  const ratio = delta ? relativeScrollY / delta * 2 - 1 : -1;
  return ratio;
};

export default useSectionEffects;
