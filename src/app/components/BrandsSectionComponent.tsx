"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const BrandsSectionComponent = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleBrandButtonClick = () => {
    window.location.href = "https://portal.pistah.bluebucket.in/";
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`w-full min-h-screen relative bg-black text-white flex flex-col items-center justify-center 
        overflow-hidden transition-all duration-[1000ms] 
        ${inView ? "opacity-100" : "opacity-0"} overflow-x-hidden `}
    >
      {/* SVG Icon at Top */}
      <div
        className={`transition-transform duration-[1000ms] ${inView ? "animate-zoomIn" : ""
          }`}
      >
        <Image
          src="/assets/brands.svg"
          alt="Brands Icon"
          width={400}
          height={400}
          objectFit="contain"
        />
      </div>

      {/* Text Content Animating from Bottom */}
      <div
        className={`text-center transition-transform duration-[1000ms] text-white ${inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        style={{ paddingLeft: "2rem", paddingRight: "2rem", transform: "translate(0, -4px)"}}
      >
        <h2 className="text-4xl font-bold mb-4">Bring the bar up</h2>
        <p className="text-white mb-6 text-md">
          Swipe right for your perfect influencer match - boost your brand’s reach and shine. Join us now!
        </p>
        <button
          onClick={handleBrandButtonClick}
          className="px-8 py-3 rounded-full font-bold bg-[#0b57d0] text-white hover:bg-[#0044A5] transition-colors duration-200"
        >
          Brands
        </button>
      </div>

      <style jsx>{`
        @keyframes zoomIn {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1.15);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-zoomIn {
          animation: zoomIn 5s forwards;
        }
      `}</style>
    </div>
  );
};

export default BrandsSectionComponent;
