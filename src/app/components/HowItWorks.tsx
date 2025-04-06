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

  const steps = [
    {
      id: 1,
      title: "Connect",
      desc: "Find and connect with ideal brands or influencers.",
    },
    {
      id: 2,
      title: "Collaborate",
      desc: "Collaborate seamlessly with influencers or brands effortlessly.",
    },
    {
      id: 3,
      title: "Optimise",
      desc: "Optimise your content and strategy with AI insights.",
    },
    {
      id: 4,
      title: "Grow",
      desc: "Grow your brand and influence with Pistah.",
    },
  ];

  return (
    <div id="how-it-works" className="text-[#005BF7] bg-[white]">
      <div
        ref={sectionRef}
        className={`text-center py-[80px] w-[90%] mx-auto [@media(min-width:1600px)]:w-[80%] transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        <h3 className="text-[20px] lg:text-[32px] md:text-[24px] font-bold font-custom mb-4 text-[#005BF7]">
          How It Works
        </h3>
        <p className="text-black text-[14px] md:text-[16px] lg:text-[18px] font-custom mb-12 md:w-[70%] mx-auto">
          Pistah simplifies the process of connecting, collaborating,
          optimising, and growing—enabling both brands and influencers to thrive
          in the digital space.
        </p>
        <div className="flex flex-wrap justify-center md:gap-[50px] gap-[20px]">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`w-[250px] h-[250px] rounded-full bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-[-4px_4px_8px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center text-center px-6 transition-all duration-700 hover:scale-105 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h6 className="text-[18px] md:text-[20px] font-bold mb-2 font-custom">
                {step.title}
              </h6>
              <p className="text-[14px] md:text-[16px] font-custom">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
