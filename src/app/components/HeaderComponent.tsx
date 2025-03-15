"use client";
import Image from "next/image";
import ContactPageComponent from "./ContactPageComponent";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiX } from "react-icons/fi";
import { useDevice } from "../context/DeviceContext";

const HeaderComponent = () => {
  const router = useRouter();
  const { isMobile } = useDevice();
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "80px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 60px",
        zIndex: 1000,
      }}
    >
      {/* Mobile hamburger menu */}
      {isMobile && (
        <div
          style={{
            position: "absolute",
            left: "40px"
          }}
        >
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <div
              style={{
                width: "25px",
                height: "2px",
                backgroundColor: "#000844",
                transition: "all 0.3s ease",
              }}
            />
            <div
              style={{
                width: "25px",
                height: "2px",
                backgroundColor: "#000844",
                transition: "all 0.3s ease",
              }}
            />
            <div
              style={{
                width: "25px",
                height: "2px",
                backgroundColor: "#000844",
                transition: "all 0.3s ease",
              }}
            />
          </div>

          {isMenuOpen && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                padding: "20px",
              }}
            >
              {/* Close Icon at Top Right */}
              <FiX
                onClick={() => setIsMenuOpen(false)}
                size={29}
                color="#000844"
                style={{ cursor: "pointer", marginLeft: "19px", marginTop: "6px" }}
              />
              {/* Menu Options Centered */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <button
                  onClick={() => {
                    setShowContactPopup(true);
                  }}
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#000844",
                    cursor: "pointer",
                    fontSize: "24px",
                    fontWeight: "bold"
                  }}
                >
                  Brands
                </button>
                <button
                  onClick={() => {
                    setShowContactPopup(true);
                  }}
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#000844",
                    cursor: "pointer",
                    fontSize: "24px",
                    fontWeight: "bold"
                  }}
                >
                  People
                </button>
                <button
                  onClick={() => {
                    setShowContactPopup(true);
                  }}
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#000844",
                    cursor: "pointer",
                    fontSize: "24px",
                    fontWeight: "normal"
                  }}
                >
                  Message Us
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Logo */}
      <div
        onClick={() => router.push("/")}
        style={{
          cursor: "pointer",
          position: isMobile ? "absolute" : "relative",
          left: isMobile ? "50%" : "unset",
          transform: isMobile ? "translateX(-50%)" : "translateX(20%)",
          transition: "transform 0.2s ease",
        }}
      >
        <Image src={"/pistah.svg"} alt={""} width={"120"} height={"100"} />
      </div>

      {/* Desktop buttons */}
      {!isMobile && (
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
            whiteSpace: "nowrap",
          }}
        >
          <button
            onClick={() => setShowContactPopup(true)}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.color = "#0b57d0";
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.color = "#002ad4";
            }}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#002ad4",
              cursor: "pointer",
            }}
          >
            Message Us
          </button>
        </div>
      )}

      {showContactPopup && (
        <ContactPageComponent onClose={() => setShowContactPopup(false)} />
      )}
    </div>
  );
};

export default HeaderComponent;
