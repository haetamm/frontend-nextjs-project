import Layout from '../../components/layout';
import CarouselComp from '../../components/home/CarouselComp';
import WelcomeComp from '../../components/home/WelcomeComp';
import SponsorComp from '../../components/home/SponsorComp';


export default function Home() {
  const siteTitle = 'The North App';
  const siteDescription = 'eveniet soluta fugiat officia debitis placeat! Odit neque vel voluptatum aut sit ipsa labore quibusdam voluptatibus';
  return (
    <Layout siteTitle={siteTitle} siteDescription={siteDescription}>
      <CarouselComp />
      <WelcomeComp />
      <SponsorComp />
    </Layout>
  )
}
