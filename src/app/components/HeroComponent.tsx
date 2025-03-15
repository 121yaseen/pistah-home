"use client";

import React, { useState } from "react";
import ContactPageComponent from "./ContactPageComponent";

const HeroComponent = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        position: "relative",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          backgroundImage: "url('/assets/hero-background.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
          animation: "zoomFade 12s infinite ease-in-out",
        }}
      ></div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "45px",
            fontWeight: "bold",
            margin: 0,
            textShadow: "0 0 3px rgb(243 244 249)"
          }}
        >
          Let your{" "}
          <span
            style={{
              color: "white",
              textShadow: "0 0 25px rgb(243 244 249)",
              animation: "blink 2s infinite",
            }}
          >
            Brand
          </span>{" "}
          make the next move.
        </h1>
        <p
          style={{
            color: "white",
            fontSize: "16px",
            fontWeight: "normal",
            margin: "10px 0 20px 0",
          }}
        >
          Join the waitlist - be the first to match!
        </p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          transform: "translateY(60%)",
        }}
      >
        <button
          onClick={() => setShowContactPopup(true)}
          className="px-8 py-3 rounded-full font-bold bg-white text-[#0b57d0] transition-colors duration-200"
        >
          Brands
        </button>
        <button
          onClick={() => setShowContactPopup(true)}
          className="px-8 py-3 rounded-full font-bold bg-white text-[#0b57d0] transition-colors duration-200"
        >
          People
        </button>
      </div>
      {/* Style for animations */}
      <style>{`
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0.9; }
            100% { opacity: 1; }
          }

          @keyframes zoomFade {
            0% { transform: translate(-50%, -50%) scale(3); opacity: 1; }
            20% { transform: translate(-50%, -50%) scale(3.2); opacity: 0.9; }
            50% { transform: translate(-50%, -50%) scale(3); opacity: 1; }
            75% { transform: translate(-50%, -50%) scale(2.7); opacity: 0.9; }
            100% { transform: translate(-50%, -50%) scale(3); opacity: 1; }
          }
        `}</style>

      {showContactPopup && (
        <ContactPageComponent onClose={() => setShowContactPopup(false)} />
      )}
    </div>
  );
};

export default HeroComponent;
