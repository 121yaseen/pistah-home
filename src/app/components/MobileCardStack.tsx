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
      bgColor: "bg-black",
      textColor: "text-white",
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
      bgColor: "bg-black",
      textColor: "text-white",
      icon: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/individual-icon.svg",
      title: "EVERYDAY INDIVIDUALS",
      description:
        "Get personalised styling advice to enhance your digital appearance and personal branding.",
    },
  ];

  useEffect(() => {
    // Reverse the order so that the top-most card animates first
    const cardElements = (gsap.utils.toArray(".card") as HTMLElement[]).reverse();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1200", // reduced scroll distance
        scrub: true,
        pin: true,
      },
    });

    // Animate each card horizontally relative to its centered position.
    cardElements.forEach((card) => {
      tl.fromTo(card, { x: "-98%" }, { x: "0%", duration: 1 })
        .to(card, { x: "98%", duration: 1 });
    });
  }, []);

  return (
    // Container with adjusted height for less extra space
    <div
      ref={containerRef}
      className="relative h-[100vh] overflow-hidden bg-[#005BF7] py-[10vh] font-custom"
    >
      <h3 className="font-heading md:text-[24px] text-[24px] lg:text-[32px] font-bold text-center mb-2 sm:mb-4 text-white">
        Who can be part of Pistah?
      </h3>
      {cards.map((card) => (
        <div
          key={card.id}
          className={`card absolute w-4/5 max-w-sm h-[480px] p-8 rounded-3xl shadow-xl ${card.bgColor} ${card.textColor}`}
          style={{
            left: "50%", // center horizontally
            top: "55vh", // fixed distance from top; adjust as needed
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
          <p className="text-sm mb-4 h-16 overflow-hidden">
            {card.description}
          </p>
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
  );
};

export default MobileCardStack;
