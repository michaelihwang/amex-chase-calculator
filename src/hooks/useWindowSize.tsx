import { useEffect, useState } from 'react';

export default function useWindowSize() {
  function _getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  const [windowSize, setWindowSize] = useState(_getSize);
  useEffect(() => {
    function handleResize() {
      setWindowSize(_getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}