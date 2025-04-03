// components/HowItWorks.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id="how-it-works" className="text-black">
      <div
        ref={sectionRef}
        className={`text-center py-[80px] w-[90%] mx-auto [@media(min-width:1600px)]:w-[80%] overflow-hidden transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-[20px] lg:text-[32px] md:text-[24px] font-bold font-custom mb-4 text-[#005BF7]">
          How It Works
        </h3>
        <p className="text-black text-[14px] md:text-[16px] lg:text-[18px] font-custom mb-8 md:w-[70%] mx-auto">
          Pistah simplifies the process of connecting, collaborating,
          optimising, and growing—enabling both brands and influencers to thrive
          in the digital space.
        </p>
        <ul className="relative flex flex-col md:flex sm:grid sm:grid-cols-2 md:flex-row font-custom md:gap-[25px] sm:gap-[10px] items-end justify-between gap-[0]">
          <li
            className={`relative rounded-[12px] bg-[#005BF7] text-left w-[100%] md:w-[30%] sm:mt-[70px] pt-[100px] pb-[24px] px-[24px] md:mt-[0px] overflow-hidden hover-scale transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <img
              alt="Top Right Icon"
              className="absolute top-0 right-0 w-[100px]"
              src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/style-icon1.svg"
            />
            <span className="bg-white rounded-full h-[30px] w-[30px] flex justify-center font-bold items-center text-center">
              1
            </span>
            <h6 className="text-white font-bold my-[10px] xl:text-18px text-16px [@media(min-width:1440px)]:text-[22px]">
              Connect
            </h6>
            <p className="text-white text-sm [@media(min-width:1440px)]:text-[18px]">
              Find and connect with ideal brands or influencers.
            </p>
          </li>
          <span
            className={`hidden lg:block absolute xl:top-[30px] top-[30px] lg:left-[23%] [@media(min-width:1440px)]:left-[24%] w-[80px] transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <img alt="dashed-line" src="assets/howitworks/line-vector1.svg" />
          </span>
          <span className="relative right-[50%] sm:hidden">
            <img
              alt=""
              src="assets/howitworks/vector-39.svg"
            />
          </span>
          <span className="md:hidden hidden sm:block visible-icon absolute xl:top-[30px] top-[3%] lg:left-[23%] left-[0px] sm:left-[42%] [@media(min-width:1440px)]:left-[24%] w-[80px]">
            <img
              alt="dashed-line"
              src="assets/howitworks/semi-arrow.svg"
            />
          </span>
          <span className="sm:hidden hidden absolute xl:top-[30px] top-[55%] lg:left-[23%] left-[0px] sm:left-[42%] [@media(min-width:1440px)]:left-[24%] w-[80px]">
            <img alt="dashed-line" src="assets/howitworks/Vector 34.svg" />
          </span>
          <span className="sm:hidden hidden absolute xl:top-[30px] top-[77%] lg:left-[23%] left-[0px] sm:left-[42%] [@media(min-width:1440px)]:left-[24%] w-[80px]">
            <img alt="dashed-line" src="assets/howitworks/Vector 34.svg" />
          </span>
          <li
            className={`relative rounded-[12px] bg-[#005BF7] text-left w-[100%] md:w-[30%] sm:mt-[70px] sm:pt-[100px] sm:pb-[24px] md:py-[24px] py-[24px] px-[24px] md:mt-[0px] hover-scale transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <img
              alt="Top Right Icon"
              className="absolute top-0 right-0 w-[130px]"
              src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/style-icon2.svg"
            />
            <span className="bg-white rounded-full h-[30px] w-[30px] flex justify-center font-bold items-center text-center">
              2
            </span>
            <h6 className="text-white font-bold my-[10px] xl:text-18px text-16px [@media(min-width:1440px)]:text-[22px]">
              Collaborate
            </h6>
            <p className="text-white text-sm [@media(min-width:1440px)]:text-[18px]">
              Collaborate seamlessly with influencers or brands effortlessly.
            </p>
          </li>
          <span className="relative right-[50%] sm:hidden">
            <img
              alt=""
              src="assets/howitworks/vector-37.svg"
            />
          </span>
          <span
            className={`hidden lg:block absolute lg:top-[100%] lg:left-[42%] [@media(min-width:1440px)]:left-[45%] w-[100px] transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <img src="assets/howitworks/line-vector2.svg" alt="" />
          </span>
          <li
            className={`relative rounded-[12px] bg-[#005BF7] text-left w-[100%] sm:pt-[100px] sm:pb-[24px] md:w-[30%] md:py-[24px] py-[24px] px-[24px] sm:mt-[70px] md:mt-[0px] overflow-hidden hover-scale transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <img
              alt="Top Right Icon"
              className="absolute top-0 right-0 w-[60px]"
              src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/style-icon3.svg"
            />
            <span className="bg-white rounded-full h-[30px] w-[30px] flex justify-center font-bold items-center text-center">
              3
            </span>
            <h6 className="text-white font-bold my-[10px] xl:text-18px text-16px [@media(min-width:1440px)]:text-[22px]">
              Optimise
            </h6>
            <p className="text-white text-sm [@media(min-width:1440px)]:text-[18px]">
              Optimise your content and strategy with AI insights.
            </p>
          </li>
          <span className="relative right-[50%] sm:hidden">
            <img
              alt=""
              src="assets/howitworks/vector-38.svg"
            />
          </span>
          <span
            className={`hidden lg:block absolute xl:top-[30px] top-[30px] lg:left-[67%] [@media(min-width:1440px)]:left-[70%] w-[80px] transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <img alt="dashed-line" src="assets/howitworks/line-vector3.svg" />
          </span>
          <li
            className={`relative rounded-[12px] bg-[#005BF7] text-left w-[100%] md:w-[30%] pt-[100px] pb-[24px] px-[24px] md:mt-[0px] sm:mt-[70px] hover-scale transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <img
              alt="Top Right Icon"
              className="absolute top-0 right-0 w-[150px]"
              src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/style-icon4.svg"
            />
            <span className="bg-white rounded-full h-[30px] w-[30px] flex justify-center items-center font-bold text-center">
              4
            </span>
            <h6 className="text-white font-bold my-[10px] xl:text-18px text-16px [@media(min-width:1440px)]:text-[22px]">
              Grow
            </h6>
            <p className="text-white text-sm [@media(min-width:1440px)]:text-[18px]">
              Grow your brand and influence with Pistah.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HowItWorks;
