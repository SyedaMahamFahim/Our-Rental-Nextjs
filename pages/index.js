import Head from "next/head";
import BrandBox from "../components/BrandBox/BrandBox";
import Heros from "../components/HeroSection/HeroSection";
import HowItsWork from "../components/HowItsWork/HowItsWork";
import FeatureGridListing from "../container/FeatureGridListing/FeatureGridListing";
import LocationAdvantages from "../container/LocationAdvantages/LocationAdvantages";
import Testimonials from "../container/Testimonials/Testimonials";
export default function Home() {
  return (
    <>
      <Head>
        <title>Our Rental</title>
        <meta name="description" content="Our RENTAL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heros />
      <HowItsWork />
      <FeatureGridListing />
      <LocationAdvantages />
      <Testimonials />
      <BrandBox />
    </>
  );
}
