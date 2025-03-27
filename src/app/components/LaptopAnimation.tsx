// components/LaptopAnimation.tsx
"use client";
import React, { useRef, useState, useEffect } from "react";

const LaptopAnimation: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const currentVideoRef = videoRef.current;
    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div
      className={`relative z-10 laptop-animation transition-transform duration-700 ${
        isInView ? "scale-100" : "scale-95"
      }`}
    >
      <div className="md:w-[70%] md:mx-auto lg:w-[100%]">
        <img
          alt="MacBook Frame"
          loading="lazy"
          width={900}
          height={500}
          decoding="async"
          data-nimg="1"
          className="relative w-full"
          srcSet="/_next/image?url=%2Fimages%2FDevice%20-%20Macbook%20Pro.png&w=1080&q=75 1x, /_next/image?url=%2Fimages%2FDevice%20-%20Macbook%20Pro.png&w=1920&q=75 2x"
          src="/_next/image?url=%2Fimages%2FDevice%20-%20Macbook%20Pro.png&w=1920&q=75"
          style={{ color: "transparent" }}
        />
      </div>
      <div className="absolute left-[12.5%] lg:left-[12.5%] md:left-[22.5%] w-[75%] lg:w-[75%] md:w-[55%] bottom-[20%] lg:bottom-[22.5%] visible">
        {isMobile ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source
              src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/28-11-2024/pistah-influencer.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source
              src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/28-11-2024/pistah-influencer.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-md">
            <button
              className="bg-white hover:bg-gray-100 transition-all duration-300 rounded-full p-5 text-black focus:outline-none transform hover:scale-110 shadow-lg"
              onClick={handlePlay}
              aria-label="Play video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LaptopAnimation;
