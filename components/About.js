import React from "react";
import SlideOne from "./aboutComponent/SlideOne";
import SlideTwo from "./aboutComponent/SlideTwo";
import SlideThree from "./aboutComponent/SlideThree";
import AboutHero from "./aboutComponent/AboutHero";

export default function About() {
  return (
    <>
      <AboutHero />
      <div className="my-20">
        <div className="container">
          <SlideOne />
          <SlideTwo />
        </div>
        <SlideThree />
      </div>
    </>
  );
}
