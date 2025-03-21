"use client";
import React, { ReactNode } from "react";
import { useDevice } from "../context/DeviceContext";

interface ResponsiveWrapperProps {
  children: ReactNode;
}

export default function ResponsiveWrapper({ children }: ResponsiveWrapperProps) {
  const { isMobile } = useDevice();

  // If on mobile, simply render the children as is.
  if (isMobile) {
    return <>{children}</>;
  }

  // On desktop, wrap the children with a desktop container.
  return (
    <div className="desktop-background">
      <div className="desktop-mobile-container">
        {children}
      </div>
    </div>
  );
}