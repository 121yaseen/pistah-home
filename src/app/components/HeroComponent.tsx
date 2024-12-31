import React from "react";

const HeroComponent = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      height: "100vh",
      paddingLeft: "12%",
      position: "relative"
    }}>
      {/* Background Image */}
      <div style={{
        position: "absolute",
        top: 0,
        right: 60,
        bottom: 0,
        width: 900,
        height: 700,
        backgroundImage: "url('/assets/hero-background.jpeg')",
        backgroundSize: "cover",  // Ensures the image covers the entire area
        backgroundPosition: "center",
        zIndex: -1,  // Places the image behind the content
        opacity: "90%"
      }}>

        {/* Add pseudo-element for constant inner shadow */}
        <div style={{
          content: "''",
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          boxShadow: "inset rgb(0, 0, 0) 0px -10px 40px 30px",  // Fixed inner shadow
          pointerEvents: "none",  // Prevents the shadow from interfering with interactions
        }}></div>
      </div>

      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "50%"
      }}>
        <h1 style={{
          color: "white",
          fontSize: "60px",
          fontWeight: "bold",
          margin: 0
        }}>
          Connect with Your Audience <span style={{ color: "#002ad4", textShadow: "0 0 20px #002ad4", animation: "blink 1.5s infinite" }}>Outdoor</span> - Simplified in One Click.
        </h1>
        <p style={{
          color: "#C6C6D6",
          fontSize: "16px",
          fontWeight: "normal",
          margin: "10px 0 20px 0"
        }}>
          Effortlessly connect with your ideal audience through our programmatic digital OOH platform.
          Plan, manage, and optimize your advertising campaigns with just a click, ensuring your message reaches the right people at the right time.
        </p>
      </div>
      <div style={{ display: "flex", gap: "30px", transform: "translateY(60%)" }}>
        <button className="px-8 py-3 rounded-full font-bold bg-[#0b57d0] text-white hover:bg-[#0044A5] transition-colors duration-200">
          Brands
        </button>
        <button className="px-8 py-3 rounded-full font-bold bg-[#0b57d0] text-white hover:bg-[#0044A5] transition-colors duration-200">
          Media
        </button>
      </div>
      {/* Style for blinking effect */}
      <style>{`
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.85;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroComponent;