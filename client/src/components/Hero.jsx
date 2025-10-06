import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div className="heroWrapper text-white bg-black h-[90vh] flex items-center">
      <div className="heroContent container mx-auto flex flex-col-reverse md:flex-row justify-between items-center  gap-10">
        {/* Left Side */}
        <div className="heroLeft text-center md:text-left max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl px-6 md:px-0 font-semibold leading-tight">
            Building Bespoke{" "}
            <span className="text-primary-200">Living and Working Spaces</span>{" "}
            Since 2008
          </h1>
          <p className="mt-6">
            Crafting quality, value, and innovation in every project.
          </p>
          <Button variant="primary" size="lg" className="mt-12">
            Explore our Projects
          </Button>
        </div>

        {/* Right Side */}
        <div className="heroRight flex justify-center md:justify-end w-full md:w-1/2">
          <div className="heroRightContent relative w-90 h-64 sm:w-72 sm:h-72 md:w-10/12 md:h-[500px] rounded-2xl overflow-hidden mt-12 flex items-center justify-center">
            <img
              src="/images/heroBg.jpg"
              alt="Hero Image"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
