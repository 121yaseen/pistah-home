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
      title: "INFLUENCERS",
      description:
        "Maximise exposure, strengthen personal brands and secure high-value collaborations.",
      illustration: "/assets/influencer.svg",
      width: "w-5/6",
    },
    {
      id: 3,
      bgColor: "bg-white",
      textColor: "text-black",
      title: "BRANDS",
      description:
        "Collaborate to amplify brand presence, expand audience reach and achieve meaningful growth.",
      illustration: "/assets/brands.svg",
      width: "w-max",
    },
    {
      id: 2,
      bgColor: "bg-white",
      textColor: "text-black",
      title: "ASPIRING CREATORS",
      description:
        "Access learning, mentorship and tools to launch a successful content creation career.",
      illustration: "/assets/people.svg",
      width: "w-max",
    },
    {
      id: 4,
      bgColor: "bg-white",
      textColor: "text-black",
      title: "EVERYDAY INDIVIDUALS",
      description:
        "Get personalised styling advice to enhance your digital appearance and personal branding.",
      illustration: "/assets/individual.svg",
      width: "w-5/6",
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
        index * 0.2
      );
    });

    // Scroll-Based Vertical Animation
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1800",
        scrub: true,
        pin: true,
        toggleActions: "play none none reset",
        onEnterBack: () => {
          scrollTl.progress(0);
        },
      },
    });

    cardElements.forEach((card, index) => {
      if (index !== cardElements.length - 1) {
        scrollTl
          .fromTo(card, { y: "0%", opacity: 1 }, { y: "0%", opacity: 1, duration: 1 })
          .to(card, { y: "-150%", opacity: 0.6, duration: 1 });
      } else {
        // Last card stays put until the end
        scrollTl.fromTo(card, { y: "0%", opacity: 1 }, { y: "0%", opacity: 1, duration: 1 });
      }
    });

    return () => {
      scrollTl.kill();
      entranceTl.kill();
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
                <h2 className="text-xl md:text-2xl font-bold">{card.title}</h2>
              </div>
              <p className="text-sm mb-4 h-16 md:h-12 overflow-hidden">
                {card.description}
              </p>
              {card.illustration && (
                <div className="flex justify-center">
                  <img
                    src={card.illustration}
                    alt={`${card.title} Illustration`}
                    className={`${card.width} object-cover`}
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