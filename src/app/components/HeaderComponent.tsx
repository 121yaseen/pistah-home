import Link from "next/link";
import PistahIcon from "../icons/pistahIcon";
import { useEffect, useState } from "react";

const HeaderComponent = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    // Ensure this runs only in the browser
    setIsBrowser(true);
  }, []);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 912);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 912);
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
      <Link
        href="/"
        onClick={(e) => {
          e.preventDefault();
          if (isBrowser) {
            window.location.reload();
          }
        }}
        style={{
          transform: isMobile ? "translateX(-45%)" : "translateX(0)",
          transition: "transform 0.2s ease",
        }}
      >
        <PistahIcon />
      </Link>

      {/* Right Button: Contact Us */}
      <Link href="/contact">
        <button
          style={{
            position: "relative",
            right: isMobile ? "-10%" : "50px",
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
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLElement;
            target.style.color = "#0b57d0";
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLElement;
            target.style.color = "white";
          }}
        >
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default HeaderComponent;