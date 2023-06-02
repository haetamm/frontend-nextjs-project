import Layout from '../../components/layout';
import { useState, useEffect } from 'react';
import CarouselComp from '../../components/layout/CarouselComp';
import WelcomeComp from '../../components/layout/WelcomeComp';
import SponsorComp from '../../components/layout/SponsorComp';


export default function Home() {
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
    <Layout scrolled={scrolled} handleScroll={handleScroll}>
      <CarouselComp />
      <WelcomeComp />
        
      
      <SponsorComp />
        
    </Layout>
  )
}
