"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import Image from "next/image";

interface DeviceContextType {
  isMobile: boolean;
  loading: boolean;
}

const DeviceContext = createContext<DeviceContextType>({
  isMobile: false,
  loading: true,
});

export const DeviceProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 912);
      setLoading(false);
    };
    // Initial check
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    // Display a loading screen until the device is determined
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          background: "white",
        }}
      >
        <Image src={"/pistahIcon.svg"} alt={""} width={600} height={100} />
      </div>
    );
  }

  return (
    <DeviceContext.Provider value={{ isMobile, loading }}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevice = () => useContext(DeviceContext);