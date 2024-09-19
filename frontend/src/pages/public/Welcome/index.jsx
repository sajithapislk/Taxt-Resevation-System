import { useState } from "react";
import Hero from "./components/Hero";
import HowWorkArea from "./components/HowWorkArea";
import WhoWeAre from "./components/WhoWeAre";

function Welcome() {
  return (
    <>
      <Hero />
      <HowWorkArea />
      <WhoWeAre />
    </>
  );
}

export default Welcome;
