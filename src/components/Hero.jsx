import React from "react";
import * as Ads from "../assets/index";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="w-full relative h-[70vh]">
        <img src={Ads.Ads5} alt="" className="w-full object-cover h-[80vh]" />
        <div className="absolute w-full h-[80vh] top-0 flex justify-center items-center bg-gradient-to-b from-[#ffffff70] to-[#00000063]">
          <span className="w-1/2 text-center">
            <h2 className="text-5xl mol text-cool-800 mb-5">
              Explore The Beautiful Sites of Darjeeling
            </h2>
            <span className="font-pop text-cool-300 text-lg">
              Darjeeling, "Queen of the Hills," offers scenic beauty, Darjeeling
              tea, heritage railway, and a blend of tea, teak, tourism, toy
              train, Tiger Hill, and trekking.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
