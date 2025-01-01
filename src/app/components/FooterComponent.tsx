import { useEffect, useState } from "react";
import ContactPageComponent from "./ContactPageComponent";

const FooterComponent = () => {
  const [isMobile, setIsMobile] = useState(false); // Initialize as false
  const [showContactPopup, setShowContactPopup] = useState(false);

  useEffect(() => {
    // Ensure this runs only in the browser (client-side)
    if (typeof window !== "undefined") {
      const handleResize = () => setIsMobile(window.innerWidth <= 912);
      
      // Set initial state
      setIsMobile(window.innerWidth <= 912);
      
      window.addEventListener("resize", handleResize);
      
      // Clean up the event listener
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty dependency array ensures this runs only once after mount

  return (
    <footer className="w-full bg-[#001464]">
      <div className={`flex ${isMobile ? "justify-center py-4" : "justify-end"} px-16`}>
        <button onClick={() => setShowContactPopup(true)} className="font-bold px-6 py-2 bg-white text-[#002ad4] rounded-full hover:bg-[#002ad4] hover:text-white transition-colors duration-200 mt-9">
          Message Us
        </button>
      </div>
      <div className="flex justify-center text-white text-xl font-bold">
        <p>Built in <span style={{ textShadow: "0 0 3px white", animation: "blink 1.5s infinite" }} className="font-semibold">Kochi</span>, with Love.</p>
      </div>
      <div className="flex justify-center p-2 text-[#BABABA] text-xs">
        <p>&#169; 2025 PISTAH. All rights reserved.</p>
      </div>

      {showContactPopup && (
        <ContactPageComponent onClose={() => setShowContactPopup(false)} />
      )}
      
      {/* Style for blinking effect */}
      <style>{`
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </footer>
  );
};

export default FooterComponent;