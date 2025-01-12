"use client";
import PistahIcon from "../icons/pistahIcon";
import ContactPageComponent from "./ContactPageComponent";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const HeaderComponent = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 912);
    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100px",
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 60px",
        zIndex: 1000,
      }}
    >
      <div
        onClick={() => router.push("/")}
        style={{
          cursor: "pointer",
          transform: isMobile ? "translateX(-45%)" : "translateX(0)",
          transition: "transform 0.2s ease",
        }}
      >
        <PistahIcon />
      </div>

      <div
        style={{
          position: "relative",
          right: "50px", 
          top: "9px",
          padding: "10px 20px",
          backgroundColor: "transparent",
          color: "white",
          border: "none",
          fontWeight: "bold",
          fontSize: "14px",
          cursor: "pointer",
          transition: "all 0.2s ease",
          textDecoration: "none",
          display: "flex",
          gap: "1rem",
          flexDirection: "row",
          flexWrap: "nowrap",
          whiteSpace: "nowrap"
        }}
      >
        <button 
          onClick={() => window.location.href = '/demo'}
          onMouseEnter={(e) => {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = "#0044A5";
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = "#0b57d0";
          }}
          style={{
            borderRadius: "4px",
            padding: "10px 20px",
            backgroundColor: "#0b57d0",
            color: "white",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          Book a Demo
        </button>

        <button 
          onClick={() => setShowContactPopup(true)}
          onMouseEnter={(e) => {
            const target = e.target as HTMLElement;
            target.style.color = "#0b57d0";
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLElement;
            target.style.color = "white";
          }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer"
          }}
        >
          Message Us
        </button>
      </div>

      {showContactPopup && (
        <ContactPageComponent onClose={() => setShowContactPopup(false)} />
      )}
    </div>
  );
};

export default HeaderComponent;