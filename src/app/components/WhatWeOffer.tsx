// components/WhatWeOffer.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";

const WhatWeOffer: React.FC = () => {
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
    <div id="what-we-offer" className="text-black">
      <section
        ref={sectionRef}
        className="py-[80px] bg-white font-custom overflow-hidden"
      >
        <div className="w-[90%] mx-auto [@media(min-width:1600px)]:w-[80%]">
          <div
            className={`mx-auto text-center lg:w-[90%] md:w-[100%] transition-all duration-700 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
              }`}
          >
            <h3 className="text-[26px] lg:text-[32px] md:text-[26px] font-custom font-bold mb-2 text-[#005BF7]">
              What Pistah Offers
            </h3>
            <p className="text-black text-[14px] md:text-[16px] lg:text-[18px] font-custom mb-8 md:w-[90%] mx-auto">
              Discover powerful tools and resources to enhance creativity, grow
              your brand and optimise digital presence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                className={`bg-white shadow-md p-2 rounded-2xl hover:shadow-lg text-left transition-all duration-500 hover-scale border border-gray-200 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: "100ms" }}
              >
                <span className="inline-block  mb-4">
                  <img
                    alt="Service Icon"
                    src="/images/icons/database.svg"
                  />
                </span>
                <h3 className="text-[20px] font-semibold px-4 font-custom mb-2 text-[#005BF7]">
                  Find Influencers to Grow Sales
                </h3>
                <p className="text-black text-[16px] px-4 mb-4">
                  Get insights to improve content, increase audience engagement
                  and sharpen your strategy.
                </p>
              </div>
              <div
                className={`bg-white shadow-md p-2 rounded-2xl hover:shadow-lg text-left transition-all duration-500 hover-scale border border-gray-200 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: "200ms" }}
              >
                <span className="inline-block mb-4">
                  <img
                    alt="Service Icon"
                    src="/images/icons/emailsent.svg"
                  />
                </span>
                <h3 className="text-[20px] font-semibold font-custom mb-2 text-[#005BF7] px-4">
                  Portfolio Creation
                </h3>
                <p className="text-black text-[16px] px-4 mb-4">
                  Create a website that is personalised and professional,
                  showcasing achievements and establishing partnerships.
                </p>
              </div>
              <div
                className={`bg-white shadow-md p-2 rounded-2xl hover:shadow-lg text-left transition-all duration-500 hover-scale border border-gray-200 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: "300ms" }}
              >
                <span className="inline-block mb-4">
                  <img
                    alt="Service Icon"
                    src="/images/icons/chat.svg"
                  />
                </span>
                <h3 className="text-[20px] font-semibold font-custom mb-2 text-[#005BF7] px-4">
                  Instant Contact & Collaboration
                </h3>
                <p className="text-black text-[16px] px-4 mb-4">
                  Gain access to expert-led courses that help you develop
                  content creation skills and grow your digital influence.
                </p>
              </div>
              <div
                className={`bg-white shadow-md p-2 rounded-2xl hover:shadow-lg text-left transition-all duration-500 hover-scale border border-gray-200 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: "400ms" }}
              >
                <span className="inline-block mb-4">
                  <img
                    alt="Service Icon"
                    src="/images/icons/brandsdb.svg"
                  />
                </span>
                <h3 className="text-[20px] font-semibold font-custom mb-2 text-[#005BF7] px-4">
                  Bespoke Campaign Services
                </h3>
                <p className="text-black text-[16px] px-4 mb-4">
                  Tailored marketing strategies and content creation support to
                  deliver impactful and successful campaigns.
                </p>
              </div>
              <div
                className={`bg-white shadow-md p-2 rounded-2xl hover:shadow-lg text-left transition-all duration-500 hover-scale border border-gray-200 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: "500ms" }}
              >
                <span className="inline-block mb-4">
                  <img
                    alt="Service Icon"
                    src="/images/icons/influencerdetails.svg"
                  />
                </span>
                <h3 className="text-[20px] font-semibold font-custom mb-2 text-[#005BF7] px-4">
                  Collaboration Tools
                </h3>
                <p className="text-black text-[16px] px-4 mb-4">
                  Effortlessly connect with brands and optimise influencer
                  partnerships for impactful campaigns.
                </p>
              </div>
              <div
                className={`bg-white shadow-md p-6 rounded-2xl hover:shadow-lg text-left transition-all duration-500 hover-scale border border-gray-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: "600ms" }}
              >
                <span className="inline-block w-[12%] mb-4">
                  <img
                    alt="Service Icon"
                    src="/images/icons/social-media-analytics.svg"
                  />
                </span>
                <h3 className="text-[20px] font-semibold font-custom mb-2 text-[#005BF7]">
                  Social Media Management
                </h3>
                <p className="text-black text-[16px]">
                  Schedule, manage and analyse posts to maximise social media impact.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeOffer;
