"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import PeopleMessage from "./messages/PeopleMessage";

const PeopleSectionComponent = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
        overflow-hidden transition-all duration-[900ms] ${inView ? "opacity-100" : "opacity-0"
        } overflow-x-hidden`}
    >
      {/* Image Container with an additional wrapper for vertical offset */}
      <div style={{ transform: "translateY(-20px)" }}>
        <div
          className={`transition-transform duration-[1000ms] ${inView ? "animate-zoomInPeople" : ""
            }`}
        >
          <Image
            src="/assets/people.svg"
            alt="Brands Icon"
            width={400}
            height={400}
            objectFit="contain"
          />
        </div>
      </div>

      {/* Text Content Animating from Bottom */}
      <div style={{ transform: "translateY(-20px)" }}>
        <div
          className={`text-center transition-transform duration-[1000ms] ${inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
        >
          <h2
            className="text-5xl mb-4 text-[#005BF7]"
            style={{ fontFamily: "League Gothic, sans-serif" }}
          >
            BREATHE LIFE INTO THEIR VISION
          </h2>
          <p className="text-white mb-6 text-sm">
            Connect with brands you love and bring your collaborations to life. Join us now!
          </p>
          <button
            onClick={() => { setShowContactPopup(true); }}
            className="px-8 py-3 rounded-full font-semibold bg-[#005BF7] text-white hover:bg-[#005bf7df] transition-colors duration-200"
          >
            People
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes zoomInPeople {
          0% {
            transform: scale(0.76);
            opacity: 0.6;
          }
          40% {
            transform: scale(1.1);
            opacity: 0.8;
          }
          100% {
            transform: scale(0.98);
            opacity: 1;
          }
        }
        .animate-zoomInPeople {
          animation: zoomInPeople 5s forwards;
        }
      `}</style>

      {showContactPopup && (
        <PeopleMessage onClose={() => setShowContactPopup(false)} />
      )}
    </div>
  );
};

export default PeopleSectionComponent;
