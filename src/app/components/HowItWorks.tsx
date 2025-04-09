// components/HowItWorks.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

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
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M16 8C13.791 8 12 9.791 12 12C12 14.209 13.791 16 16 16C18.209 16 20 14.209 20 12C20 9.791 18.209 8 16 8Z" fill="currentColor"/>
          <path d="M24 24C24 19.582 20.418 16 16 16C11.582 16 8 19.582 8 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Collaborate",
      desc: "Collaborate seamlessly with influencers or brands effortlessly.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M16 8V24M8 16H24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Optimise",
      desc: "Optimise your content and strategy with AI insights.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M6 16H26M16 6V26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Grow",
      desc: "Grow your brand and influence with Pistah.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M8 24L16 8L24 24H8Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <div id="how-it-works" className="relative bg-gradient-to-b from-white to-blue-50/50 font-custom overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      
      <div
        ref={sectionRef}
        className={`relative pt-[10px] pb-[40px] w-[90%] mx-auto [@media(min-width:1600px)]:w-[80%] transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#005BF7] animate-pulse" />
            <span className="text-sm font-semibold text-[#005BF7]">Process</span>
          </div>
          
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#005BF7] mb-6 leading-tight">
            How It Works
          </h2>
          
          <p className="text-gray-600 text-[16px] md:text-[18px] lg:text-[20px] md:w-[60%] mx-auto leading-relaxed">
            Pistah simplifies the process of connecting, collaborating,
            optimising, and growing—enabling both brands and influencers to thrive.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-[#005BF7] to-blue-100 opacity-20" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDIwdjRIMHoiIGZpbGw9IiMwMDViZjciIGZpbGwtb3BhY2l0eT0iLjIiLz48L3N2Zz4=')] bg-repeat-x animate-flow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`group relative h-full bg-white rounded-2xl p-8 
                  shadow-[0_8px_30px_rgb(0,91,247,0.12)] border border-blue-100
                  transition-all duration-300 cursor-pointer
                  hover:border-blue-300 hover:-translate-y-1
                `}>
                  {/* Default gradient background */}
                  <div className="absolute -z-10 top-1/2 right-1/2 w-[120%] h-[120%] 
                    bg-gradient-to-br from-blue-500/5 to-blue-600/5 
                    rounded-full blur-3xl opacity-100" />

                  <div className="relative">
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full 
                      bg-white text-[#005BF7] flex items-center justify-center 
                      text-sm font-bold border border-blue-200
                      group-hover:bg-[#005BF7] group-hover:text-white
                      group-hover:scale-110 group-hover:rotate-[360deg]
                      transition-all duration-500">
                      {step.id}
                    </div>

                    {/* Icon Container */}
                    <div className="w-16 h-16 rounded-2xl mb-6 
                      transition-all duration-500 group-hover:scale-110 
                      group-hover:rotate-6">
                      <div className="w-full h-full border border-blue-200 rounded-2xl 
                        bg-[#005BF7] text-white
                        flex items-center justify-center
                        group-hover:bg-white group-hover:text-[#005BF7]
                        transition-colors duration-500">
                        {step.icon}
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-[#005BF7] mb-3 
                      transition-all duration-300">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 text-base leading-relaxed
                      transition-colors duration-300 group-hover:text-gray-800">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
