import { useState, useEffect } from 'react';

const useScroll = () => {
  const isBrowser = typeof window !== 'undefined';

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    if (isBrowser) {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        setVisible(prevScrollPos > currentScrollPos);
        setTransparent(currentScrollPos <= 0);
        setPrevScrollPos(currentScrollPos);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isBrowser, prevScrollPos]);

  return { prevScrollPos, visible, transparent };
};

export default useScroll;
