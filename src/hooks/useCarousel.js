import { useState, useEffect } from "react";

const useCarousel = (images, intervalTime = 5000) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      setActiveIndex(nextIndex);
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex, images.length, intervalTime]);

  return { activeIndex };
};

export default useCarousel;
