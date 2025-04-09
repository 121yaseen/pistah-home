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
        className="py-[80px] md:py-[140px] bg-white font-custom overflow-hidden"
      >
        <div className="w-[90%] mx-auto [@media(min-width:1600px)]:w-[80%]">
          <div
            className={`mx-auto text-center lg:w-[90%] md:w-[100%] transition-all duration-700 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
              }`}
          >
            <h3 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#005BF7] mb-6 leading-tight">
              What Pistah Offers
            </h3>
            <p className="text-gray-600 text-[16px] md:text-[18px] lg:text-[20px] md:w-[60%] mx-auto leading-relaxed">
              Discover powerful tools and resources to enhance creativity, grow
              your brand and optimise digital presence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
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
                  Filter through 30+ criteria like engagement rate, audience demographics, and niche to discover influencers who actually drive sales.
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
                  Automated Outreach
                </h3>
                <p className="text-black text-[16px] px-4 mb-4">
                  Pistah will handle outreach for influencers you choose. Just fill in the campaign details and we will reach out on your behalf.
                </p>
              </div>
              <div
                className={`bg-white shadow-md p-2 rounded-2xl hover:shadow-lg text-left transition-all duration-500 hover-scale border border-gray-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: "600ms" }}
              >
                <span className="inline-block mb-4">
                  <img
                    alt="Service Icon"
                    src="/images/icons/brandsdb.svg"
                  />
                </span>
                <h3 className="text-[20px] font-semibold font-custom mb-2 text-[#005BF7] px-4">
                  Connect with Top Brands
                </h3>
                <p className="text-black text-[16px] px-4 mb-4">
                  Pistah connects you with top-tier brands seeking authentic influencer collaborations. Build meaningful partnerships that align with your audience and values.                </p>
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
                    src="/images/icons/influencerdetails.svg"
                  />
                </span>
                <h3 className="text-[20px] font-semibold font-custom mb-2 text-[#005BF7] px-4">
                  Complete Influencer Details
                </h3>
                <p className="text-black text-[16px] px-4 mb-4">
                  With Pistah, you can gather all influencer content like social media handles, discount codes, payment details, stories, collaboration document, and so on.
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
                    src="/images/icons/social-media-analytics.svg"
                  />
                </span>
                <h3 className="text-[20px] font-semibold font-custom mb-2 text-[#005BF7] px-4">
                  Track Campaigns with Ease
                </h3>
                <p className="text-black text-[16px] px-4 mb-4">
                  Get real-time insights on CPC, CPE, budget, total engagement, link clicks, and more to know exactly what’s driving results.
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
                  Like an influencer? Get their contact details with one click. You can also save their profile for later use in customized lists.
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
