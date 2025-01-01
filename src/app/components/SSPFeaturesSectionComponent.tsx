import { useState, useEffect, useRef } from "react";
import RealtimeAnalyticsIcon from "./icons/RealtimeAnalyticsIcon";
import InventoryIcon from "./icons/InventoryIcon";

const SSPFeaturesSectionComponent = () => {
  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 912);
  const sectionRef = useRef(null);

  // Check if the screen is mobile-sized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 912);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection Observer for animations
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
      className={`w-full h-full bg-black text-white flex 
        ${isMobile ? "flex-col" : "flex-col md:flex-row"} 
        items-center justify-center p-8 md:p-20 font-rubik transition-all duration-[1000ms] 
        ${inView ? "opacity-100" : "opacity-0"} overflow-x-hidden`}
    >
      {/* Left side: The analytics graphic */}
      <div
        className={`flex ${isMobile ? "w-full mb-4" : "md:w-1/2 mb-6"} 
          items-center justify-center transition-transform duration-[1000ms] 
          ${inView
            ? "transform translate-x-0 opacity-100"
            : "transform -translate-x-[50%] opacity-0"
          }`}
        style={{ marginTop: isMobile ? "-20%" : "0" }}
      >
        <div
          className={`transform transition-transform duration-500 ${isMobile ? "scale-50" : "scale-100"
            }`}
          style={{ transformOrigin: "center" }}
        >
          <InventoryIcon />
        </div>
      </div>

      {/* Right side: Text content */}
      <div
        className={`text-center md:text-left ${isMobile ? "w-full" : "md:w-1/2 md:pl-12"}
          transition-transform duration-[1000ms] 
          ${inView
            ? "transform translate-x-0 opacity-100"
            : `transform ${isMobile ? "translate-y-[50%]" : "translate-x-[50%]"} opacity-0`
          }`}
        style={{ marginTop: isMobile ? "-15%" : "0" }} // Reduce vertical distance in mobile view
      >
        <h2 className="text-3xl font-bold mb-4">Ready to boost your inventory reach?</h2>
        <p className="text-gray-300 mb-6">
          We provide a seamless solution that maximizes the value of your screens without the hassle of contacting advertisers or media agencies. When a brand's needs align with your inventory, we’ll take care of showing the right ads, helping you earn effortlessly while building a trusted partnership.
        </p>
        <button className="px-8 py-3 rounded-full font-bold bg-[#0b57d0] text-white hover:bg-[#0044A5] transition-colors duration-200">
          Media
        </button>
      </div>
    </div>
  );
};

export default SSPFeaturesSectionComponent;