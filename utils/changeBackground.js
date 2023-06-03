import { useState, useEffect } from 'react';

const useBackgroundChange = (initialColor, delay) => {
  const [bgColor, setBgColor] = useState(initialColor);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBgColor('bg-white');
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return bgColor;
};

export default useBackgroundChange;
