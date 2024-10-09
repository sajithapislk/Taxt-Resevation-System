import { useState } from "react";
import Hero from "./components/welcome/Hero";
import HowWorkArea from "./components/welcome/HowWorkArea";
import WhoWeAre from "./components/welcome/WhoWeAre";
import AboutUs from "./components/welcome/AboutUs";

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
