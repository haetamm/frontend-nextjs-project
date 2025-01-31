import CarouselComp from "../components/landingPage/CarouselComp";
import SponsorComp from "../components/landingPage/SponsorComp";
import WelcomeComp from "../components/landingPage/WelcomeComp";
import Layout from "../components/layout/index";

export default function LandingPage() {
  const siteTitle = "The North App";
  const siteDescription =
    "eveniet soluta fugiat officia debitis placeat! Odit neque vel voluptatum aut sit ipsa labore quibusdam voluptatibus";
  return (
    <>
      <Layout
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        guestToken={true}
      >
        <CarouselComp />
        <WelcomeComp />
        <SponsorComp />
      </Layout>
    </>
  );
}
