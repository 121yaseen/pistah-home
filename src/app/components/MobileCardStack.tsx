"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MobileCardStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cards = [
    {
      id: 1,
      bgColor: "bg-white",
      textColor: "text-black",
      icon: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/influencer-icon.svg",
      title: "INFLUENCERS",
      description:
        "Maximise exposure, strengthen personal brands and secure high-value collaborations.",
    },
    {
      id: 2,
      bgColor: "bg-white",
      textColor: "text-black",
      icon: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/aspiring-creator-icon.svg",
      title: "ASPIRING CREATORS",
      description:
        "Access learning, mentorship and tools to launch a successful content creation career.",
      illustration: "/assets/people.svg",
    },
    {
      id: 3,
      bgColor: "bg-white",
      textColor: "text-black",
      icon: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/brand-icon-02.svg",
      title: "BRANDS",
      description:
        "Collaborate to amplify brand presence, expand audience reach and achieve meaningful growth.",
      illustration:
        "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/brand.svg",
    },
    {
      id: 4,
      bgColor: "bg-white",
      textColor: "text-black",
      icon: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/individual-icon.svg",
      title: "EVERYDAY INDIVIDUALS",
      description:
        "Get personalised styling advice to enhance your digital appearance and personal branding.",
    },
  ];

  useEffect(() => {
    const cardElements = (gsap.utils.toArray(".card") as HTMLElement[]).reverse();

    // Entrance (stacking)
    const entranceTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    cardElements.forEach((card, index) => {
      entranceTl.fromTo(
        card,
        { x: "150%", y: "-150%", opacity: 0 },
        { x: "0%", y: "0%", opacity: 1, duration: 0.8, ease: "power2.out" },
        index * 0.2 // stagger each card's entrance
      );
    });

    // Scroll-Based Horizontal Animation
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1800",
        scrub: true,
        pin: true,
        toggleActions: "play none none reset", // Ensures it resets when re-entering
        onEnterBack: () => {
          scrollTl.progress(0); // Reset animation when re-entering from bottom
        },
      },
    });

    cardElements.forEach((card, index) => {
      if (index !== cardElements.length - 1) {
        scrollTl
          .fromTo(card, { x: "0%", opacity: 1 }, { x: "0%", opacity: 1, duration: 1 })
          .to(card, { x: "200%", opacity: 0.6, duration: 1 });
      } else {
        scrollTl.fromTo(card, { x: "0%", opacity: 1 }, { x: "0%", opacity: 1, duration: 1 });
      }
    });

    return () => {
      scrollTl.kill(); // Clean up the animation on component unmount
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[100vh] overflow-hidden bg-[#005BF7] py-[8vh] font-custom"
    >
      <div className="flex flex-col md:flex-row h-full md:pl-18 lg:pl-28 md:py-[6vh]">
        {/* Left column for heading */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start">
          <h3 className="font-heading md:text-[40px] text-[26px] lg:text-[40px] font-bold mb-2 sm:mb-4 text-white text-center md:text-left">
            Who can be part of Pistah?
          </h3>
        </div>
        {/* Right column for cards */}
        <div className="md:w-2/3 relative">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`card absolute w-5/6 max-w-lg h-[480px] md:h-[540px] p-8 rounded-3xl shadow-xl ${card.bgColor} ${card.textColor}`}
              style={{
                left: "50%",
                top: "38vh",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={card.icon}
                  alt={`${card.title} Icon`}
                  className="w-10 h-10 mr-3"
                />
                <h2 className="text-xl font-bold">{card.title}</h2>
              </div>
              <p className="text-sm mb-4 h-16 overflow-hidden">{card.description}</p>
              {card.illustration && (
                <div className="flex justify-center">
                  <img
                    src={card.illustration}
                    alt={`${card.title} Illustration`}
                    className="w-3/4 object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileCardStack;