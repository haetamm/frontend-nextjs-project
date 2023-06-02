import Layout from '../../components/layout';
import CarouselComp from '../../components/home/CarouselComp';
import WelcomeComp from '../../components/home/WelcomeComp';
import SponsorComp from '../../components/home/SponsorComp';


export default function Home() {


  return (
    <Layout>
      <CarouselComp />
      <WelcomeComp />
        
      
      <SponsorComp />
        
    </Layout>
  )
}
