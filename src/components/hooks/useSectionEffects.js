import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useSectionEffects = (ref) => {
  const { 
    document: { height: documentHeight },
    scroll: { y: scrollY },
    viewport: { height: viewportHeight, width: viewportWidth },
  } = useSelector(state => state.ui);

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

  const scrollOverlayY = getScrollOverlayY({
    sectionPosition,
    documentHeight,
    viewportHeight,
    scrollY,
  });

  return {
    scrollOverlayY,
  };
};

const getScrollOverlayY = ({
  sectionPosition,
  documentHeight,
  viewportHeight,
  scrollY,
}) => {
  let start = sectionPosition.start - viewportHeight;

  if(start < 0) {
    start = 0;
  }

  let end = sectionPosition.end;
  const minPossibleEnd = documentHeight - viewportHeight;

  if(end > minPossibleEnd) {
    end = minPossibleEnd;
  }

  const delta = end - start;
  const relativeScrollY = scrollY - start;

  let scrollOverlayY = delta ? relativeScrollY / delta  : 0;

  if(scrollOverlayY < 0) {
    scrollOverlayY = 0;
  } else if(scrollOverlayY > 1) {
    scrollOverlayY = 1;
  }

  return scrollOverlayY;
};

export default useSectionEffects;
