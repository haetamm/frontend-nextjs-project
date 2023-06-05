import Layout from '../../components/layout';
import CarouselComp from '../../components/landingPage/CarouselComp';
import WelcomeComp from '../../components/landingPage/WelcomeComp';
import SponsorComp from '../../components/landingPage/SponsorComp';


export default function LandingPage() {
  const siteTitle = 'The North App';
  const siteDescription = 'eveniet soluta fugiat officia debitis placeat! Odit neque vel voluptatum aut sit ipsa labore quibusdam voluptatibus';
  return (
    <Layout guest={true} siteTitle={siteTitle} siteDescription={siteDescription}>
      <CarouselComp />
      <WelcomeComp />
      <SponsorComp />
    </Layout>
  )
}
