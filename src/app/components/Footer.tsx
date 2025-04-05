// components/FooterSection.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";

const FooterSection: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={footerRef}
      className="font-custom bg-[#F1F4F7] overflow-hidden"
    >
      <section className="w-[90%] mx-auto [@media(min-width:1600px)]:w-[70%]">
        <div
          className={`md:pt-[64px] md:pb-[32px] py-[30px] transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="top sm:mb-[48px] mb-[36px]">
            <div className="imgcotainer w-[150px] mb-[32px] max-[820px]:mb-[11px]">
              <a href="#home" className="hover-scale inline-block">
                <img
                  alt="Pistah Logo"
                  className="block w-[100%]"
                  src="/pistah.svg"
                />
              </a>
            </div>
            <p className="text-black text-[14px] md:text-base leading-[20px] mb-2 text-left">
              Pistah is a dynamic platform where influencers connect with brands
              for authentic collaborations.
            </p>
            <ul className="flex flex-col sm:flex-row sm:justify-start w-full sm:w-auto gap-[24px] font-bold text-[14px] md:text-[18px]">
              <li className="cursor-pointer text-[#364152]">
                <a
                  href="#home"
                  className="hover:text-black transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li className="cursor-pointer text-[#364152]">
                <a
                  href="#what-we-offer"
                  className="hover:text-black transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li className="cursor-pointer text-[#364152]">
                <a
                  href="#how-it-works"
                  className="hover:text-black transition-colors duration-300"
                >
                  Process
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom flex flex-col mt-[10px] sm:flex-row gap-[20px] justify-between">
            <div className="left text-[16px]">
              <p className="text-[14px] text-[black]">
                © 2025, pistah.live All rights reserved.
              </p>
            </div>
            <div className="right">
              <ul className="flex gap-[16px] justify-start">
                <li>
                  <a
                    href="https://www.linkedin.com/company/pistah/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-scale inline-block"
                  >
                    <img src="images/linkedin-icon.svg" alt="linkedin-icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/pistah.world"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-scale inline-block"
                  >
                    <img src="images/facebook-icon.svg" alt="facebook-icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/pistah.live/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-scale inline-block"
                  >
                    <img src="images/instagram-icon.svg" alt="instagram-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FooterSection;
