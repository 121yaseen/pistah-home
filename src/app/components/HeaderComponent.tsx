"use client";
import Link from "next/link";
import PistahIcon from "../icons/pistahIcon";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const HeaderComponent = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current route pathname
  const [isMobile, setIsMobile] = useState(false);

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

      {/* Right Button: Contact Us */}
      <Link href="/contact">
        <button
          style={{
            position: "relative",
            right: isMobile ? "-35%" : "50px",
            top: "9px",
            padding: "10px 20px",
            backgroundColor: "transparent",
            color: pathname === "/contact" ? "#0b57d0" : "white", // Dynamic color
            border: "none",
            fontWeight: "bold",
            fontSize: "14px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLElement;
            if (pathname !== "/contact") {
              target.style.color = "#0b57d0";
            }
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLElement;
            if (pathname !== "/contact") {
              target.style.color = "white";
            }
          }}
        >
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default HeaderComponent;