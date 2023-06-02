import NavComp from './NavComp';
import HeadComp from './HeadComp';
import FooterComp from './FooterComp';
import { useState, useEffect } from 'react';


const Index = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='bg-slate-200'>
        <HeadComp />
        <NavComp scrolled={scrolled} handleScroll={handleScroll} >
          <div className='container mx-auto'>
            {children}    
          </div>
        </NavComp>
        <FooterComp />
    </div>
  )
}

export default Index
