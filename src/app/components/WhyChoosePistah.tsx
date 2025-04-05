// components/WhyChoosePistah.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";

const WhyChoosePistah: React.FC = () => {
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
    <div className="overflow-hidden flex flex-col items-center justify-center w-[90%] 2xl:w-[70%] pb-[80px] mx-auto lg:py-[80px] font-custom">
      <section
        ref={sectionRef}
        className={`text-center text-black transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h3 className="text-[20px] lg:text-[32px] md:text-[24px] font-bold mb-4 text-[#005BF7]">
          Why choose Pistah
        </h3>
        <p className="text-black mb-6 lg:mx-auto text-[14px] md:text-[16px] lg:text-[18px] max-w-3xl">
          Pistah empowers growth with innovative tools, AI-driven simplicity and
          expert-led learning for influencers and brands.
        </p>
        <div className="flex flex-col lg:flex-row gap-[10px] xl:gap-[20px]">
          <div
            className={`flex flex-col sm:grid sm:grid-cols-2 lg:flex justify-between sm:w-[100%] gap-[10px] w-[100%] xl:gap-[20px] xl:w-[80%] transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-[#005BF7] p-6 rounded-[24px] text-left flex flex-col hover-scale">
              <div className="mb-4">
                <img
                  alt="AI-Driven Simplicity Icon"
                  width={40}
                  height={40}
                  src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/surface1..svg"
                />
              </div>
              <h3 className="text-[16px] font-semibold text-white mb-2">
                Comprehensive Growth Platform
              </h3>
              <p className="text-white text-[14px] sm:text-[16px]">
                Pistah accelerates your journey, whether you&apos;re growing as
                an influencer or expanding your brand.
              </p>
            </div>
            <div className="bg-[#005BF7] p-6 rounded-[24px] text-left flex flex-col hover-scale">
              <div className="mb-4">
                <img
                  alt="Expert-Led Learning Icon"
                  width={40}
                  height={40}
                  src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/symbol1.svg"
                />
              </div>
              <h3 className="text-[16px] font-semibold text-white mb-2">
                Competitive Edge
              </h3>
              <p className="text-white text-[14px] sm:text-[16px]">
                Stand out with personalised styling and branding tools in an
                increasingly crowded and competitive digital space.
              </p>
            </div>
          </div>
          <div
            className={`relative w-full max-w-md mx-auto p-8 text-center h-[60vh] sm:h-auto hidden lg:block transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative xl:top-[17%] lg:top-[25%] top-[25%] z-10 flex items-center justify-center">
              <img
                alt="Social Media Icons with Connections"
                loading="lazy"
                width={400}
                height={400}
                decoding="async"
                data-nimg="1"
                className="rounded-lg floating"
                src="images/combined.svg"
                style={{ color: "transparent" }}
              />
            </div>
            <span
              className="inline-block w-[80%] mx-auto relative xl:top-[30%] lg:top-[42%] top-[45%] text-[12px] md:text-base z-10 text-white 2xl:hidden"
              style={{ fontFamily: "EBGaramond" }}
            >
              &quot;Join a community that thrives on creativity, connection, and
              growth.&quot;
            </span>
          </div>
          <div
            className={`flex flex-col sm:grid sm:grid-cols-2 lg:flex justify-between gap-[10px] w-[100%] xl:gap-[20px] xl:w-[80%] transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-[#005BF7] p-6 rounded-[24px] text-left flex flex-col hover-scale">
              <div className="mb-4">
                <img
                  alt="AI-Driven Simplicity Icon"
                  width={40}
                  height={40}
                  src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/symbol2.svg"
                />
              </div>
              <h3 className="text-[16px] font-semibold text-white mb-2">
                AI-Driven Simplicity
              </h3>
              <p className="text-white text-[14px] sm:text-[16px]">
                Advanced AI simplifies complex tasks like collaboration, content
                optimisation, styling and automation.
              </p>
            </div>
            <div className="bg-[#005BF7] p-6 rounded-[24px] text-left flex flex-col hover-scale">
              <div className="mb-4">
                <img
                  alt="Expert-Led Learning Icon"
                  width={40}
                  height={40}
                  src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/symbol3.svg"
                />
              </div>
              <h3 className="text-[16px] font-semibold text-white mb-2">
                Expert-Led Learning
              </h3>
              <p className="text-white text-[14px] sm:text-[16px]">
                Enhance your content skills and elevate your influence with
                exclusive courses and mentorship from industry leaders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoosePistah;
