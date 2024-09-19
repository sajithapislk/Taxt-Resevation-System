import { useState } from "react";
import Hero from "./components/Hero";
import HowWorkArea from "./components/HowWorkArea";
import WhoWeAre from "./components/WhoWeAre";
import AboutUs from "./components/AboutUs";

function Welcome() {
  return (
    <>
      <Hero />
      <HowWorkArea />
      <WhoWeAre />
      <AboutUs />
    </>
  );
}

export default Welcome;
