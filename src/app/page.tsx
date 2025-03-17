"use client";
import { useState } from 'react';
import HeaderComponent from "./components/HeaderComponent";
import HomeScreenComponent from "./components/HomeScreenComponent";

export default function Home() {
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