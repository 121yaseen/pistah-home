"use client";
import { useEffect, useState } from 'react';
import HeaderComponent from "./components/HeaderComponent";
import HomeScreenComponent from "./components/HomeScreenComponent";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure window scroll is at the top
      window.scrollTo(0, 0);
    }
  }, []);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleScrollDirection = (direction: 'up' | 'down') => {
    setIsHeaderVisible(direction === 'up');
  };

  return (
    <div>
      <HeaderComponent isVisible={isHeaderVisible} />
      <HomeScreenComponent onScrollDirection={handleScrollDirection} />
    </div>
  );
}