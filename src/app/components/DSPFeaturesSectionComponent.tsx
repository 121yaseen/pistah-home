import { useState, useEffect, useRef } from "react";
import RealtimeAnalyticsIcon from "./icons/RealtimeAnalyticsIcon";

const DSPFeaturesSectionComponent = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`w-full h-full bg-black text-white flex flex-col md:flex-row items-center justify-center p-20 font-rubik transition-all duration-[1000ms] ${
        inView ? "opacity-100" : "opacity-0"
      } overflow-x-hidden`}
    >
      {/* Left side: The analytics graphic */}
      <div
        className={`md:w-1/2 flex items-center justify-center mb-6 md:mb-0 transition-transform duration-[1000ms] ${
          inView
            ? "transform translate-x-0 opacity-100"
            : "transform -translate-x-[50%] opacity-0"
        }`}
      >
        <RealtimeAnalyticsIcon />
      </div>

      {/* Right side: Text content */}
      <div
        className={`md:w-1/2 text-center md:text-left md:pl-12 transition-transform duration-[1000ms] ${
          inView
            ? "transform translate-x-0 opacity-100"
            : "transform translate-x-[50%] opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold mb-4">Real-time Analytics</h2>
        <p className="text-gray-300 mb-6">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing
          elitr.
        </p>
        <button className="px-8 py-3 rounded-full font-bold bg-[#0b57d0] text-white hover:bg-[#0044A5] transition-colors duration-200">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default DSPFeaturesSectionComponent;