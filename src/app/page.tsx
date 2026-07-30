import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import VideoTrustWall from "@/components/sections/VideoTrustWall";
import RoutesGrid from "@/components/sections/RoutesGrid";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ArrivalBlock from "@/components/sections/ArrivalBlock";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import JsonLd from "@/components/JsonLd";


export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <TrustBar />
      <VideoTrustWall />
      <RoutesGrid />
      <HowItWorks />
      <WhyChooseUs />
      <ArrivalBlock />
      <Testimonials />
      <FAQ />
    </>
  );
}
