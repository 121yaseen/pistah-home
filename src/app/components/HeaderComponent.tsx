"use client";
import Image from "next/image";
import ContactPageComponent from "./messages/ContactPageComponent";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MessagePopup from "./messages/MessagePopup";

interface HeaderComponentProps {
  isVisible: boolean;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ isVisible }) => {
  const router = useRouter();
  const [showBrandMessagePopup, setShowBrandMessagePopup] = useState(false);
  const [showPeopleMessagePopup, setShowPeopleMessagePopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "80px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 60px",
          zIndex: 3,
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {/* Mobile hamburger menu */}
        <div
          style={{
            position: "absolute",
            left: "40px",
            transition: "transform 0.3s ease-in-out",
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
                transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <div
              style={{
                width: "25px",
                height: "2px",
                backgroundColor: "#000844",
                transition: "all 0.3s ease",
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <div
              style={{
                width: "25px",
                height: "2px",
                backgroundColor: "#000844",
                transition: "all 0.3s ease",
                transform: isMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </div>
        </div>

        {/* Logo */}
        <div
          onClick={() => router.push("/")}
          style={{
            cursor: "pointer",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            transition: "transform 0.2s ease",
          }}
        >
          <Image src={"/pistah.svg"} alt={""} width={"120"} height={"100"} />
        </div>

        {showBrandMessagePopup && (
          <MessagePopup messageType="brand" onClose={() => setShowBrandMessagePopup(false)} />
        )}
        {showPeopleMessagePopup && (
          <MessagePopup messageType="people" onClose={() => setShowPeopleMessagePopup(false)} />
        )}
        {showContactPopup && (
          <ContactPageComponent onClose={() => setShowContactPopup(false)} />
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            zIndex: 2,
          }}
        >
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
                setShowBrandMessagePopup(true);
              }}
              style={{
                padding: "12px 24px",
                backgroundColor: "transparent",
                border: "none",
                color: "#000844",
                cursor: "pointer",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Brands
            </button>
            <button
              onClick={() => {
                setShowPeopleMessagePopup(true);
              }}
              style={{
                padding: "12px 24px",
                backgroundColor: "transparent",
                border: "none",
                color: "#000844",
                cursor: "pointer",
                fontSize: "24px",
                fontWeight: "bold",
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
                fontWeight: "normal",
              }}
            >
              Message Us
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderComponent;
