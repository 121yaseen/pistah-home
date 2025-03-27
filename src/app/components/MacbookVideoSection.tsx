// components/MacbookVideoSection.tsx
import React from "react";
import LaptopAnimation from "./LaptopAnimation";

const MacbookVideoSection: React.FC = () => {
  return (
    <div
      id="demo"
      className="relative xl:pt-[100px] py-[80px] md:pt-[60px] lg:pt-[80px] flex items-center justify-center bg-yellow-50 font-custom overflow-hidden text-black"
    >
      <div
        className="absolute inset-0 bg-repeat opacity-50"
        style={{ backgroundImage: 'url("/images/video-bg.png")' }}
      ></div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 fade-in">
        <div className="mb-[24px] relative">
          <h3 className="text-white text-center text-[16px] md:text-[24px] lg:text-[32px] font-bold text-maroon">
            See Pistah in Action
          </h3>
        </div>
        <LaptopAnimation />
      </div>
    </div>
  );
};

export default MacbookVideoSection;
