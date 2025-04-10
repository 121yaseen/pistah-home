// components/WhyChoosePistah.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const WhyChoosePistah: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { root: null, threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const features = [
    {
      icon: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/symbol1.svg",
      title: "Competitive Edge",
      description:
        "Stand out with personalised styling and branding tools in an increasingly crowded digital space.",
    },
    {
      icon: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/symbol2.svg",
      title: "AI-Driven Simplicity",
      description:
        "Advanced AI simplifies complex tasks like collaboration, content optimisation, and automation.",
    },
    {
      icon: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/symbol3.svg",
      title: "Join the community",
      description:
        "Join a community of like-minded influencers and brands to share ideas, learn from each other, and grow together.",
    },
    {
      icon: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/surface1..svg",
      title: "Comprehensive Growth Platform",
      description:
        "Pistah accelerates your journey, whether you're growing as an influencer or expanding your brand.",
    },
  ];

  return (
    <div className="relative overflow-hidden py-20 lg:py-32 bg-white font-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="relative z-10">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#005BF7] animate-pulse" />
              <span className="text-sm font-semibold text-[#005BF7]">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#005BF7] mb-6">
              Why choose Pistah
            </h2>
            <p className="text-gray-600 text-[16px] md:text-[18px] lg:text-[20px] md:w-[60%] mx-auto leading-relaxed">
              Pistah empowers growth with innovative tools, AI-driven simplicity and expert-led
              learning for influencers and brands.
            </p>
          </div>

          {/* Features */}
          <div className="w-[90%] mx-auto">
            {/* Row 1 */}
            <div className="sm:flex sm:gap-[10px] mb-6 group/row1">
              {/* Card 1 */}
              <motion.div
                custom={0}
                variants={cardVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="transition-all duration-500 flex-shrink-0 md:h-[280px] lg:w-[40%] md:w-[45%] sm:w-[52%] w-[100%] bg-[#005BF7] text-white p-8 rounded-2xl group group-hover/row1:lg:w-[60%] group-hover/row1:md:w-[55%] group-hover/row1:sm:w-[48%]"
              >
                <div className="md:flex justify-between h-full">
                  <div className="flex-shrink-0 flex-grow-0 max-w-[260px] flex flex-col justify-center space-y-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500">
                        <img
                          src={features[0].icon}
                          alt={features[0].title}
                          className="w-7 h-7 filter brightness-0 invert"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-[20px] md:text-[24px] font-semibold group-hover:text-[25px] transition-all duration-200">
                        {features[0].title}
                      </h2>
                      <p className="text-sm text-blue-50">{features[0].description}</p>
                    </div>
                  </div>
                  <div className="md:w-[35%] w-full mx-auto md:mx-0 pt-[20px] md:pt-0 opacity-0 group-hover/row1:opacity-100 transition-opacity duration-500 hidden group-hover/row1:block absolute md:relative">
                    <img
                      alt="Feature Illustration"
                      className="object-cover w-full h-full"
                      src="/images/feature-illustration-1.svg"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                custom={1}
                variants={cardVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="transition-all duration-500 mt-[20px] sm:mt-0 flex-shrink-0 md:h-[280px] sm:w-[48%] w-[100%] md:w-[55%] lg:w-[60%] bg-white text-black p-8 rounded-2xl group border border-blue-100 shadow-lg group-hover/row1:lg:w-[40%] group-hover/row1:md:w-[45%] group-hover/row1:sm:w-[52%]"
              >
                <div className="md:flex justify-between h-full">
                  <div className="flex-shrink-0 flex-grow-0 max-w-[260px] flex flex-col justify-center space-y-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-[#005BF7]/10 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500">
                        <img src={features[1].icon} alt={features[1].title} className="w-7 h-7" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-[20px] md:text-[24px] font-semibold text-[#005BF7] group-hover:text-[25px] transition-all duration-200">
                        {features[1].title}
                      </h2>
                      <p className="text-sm text-gray-600">{features[1].description}</p>
                    </div>
                  </div>
                  <div className="md:w-[35%] w-full mx-auto md:mx-0 pt-[20px] md:pt-0 opacity-100 group-hover/row1:opacity-0 transition-opacity duration-500 block group-hover/row1:hidden absolute md:relative">
                    <img
                      alt="Feature Illustration"
                      className="object-cover w-full h-full"
                      src="/images/feature-illustration.svg"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col-reverse sm:flex-row sm:gap-[10px] group/row2">
              {/* Card 3 */}
              <motion.div
                custom={2}
                variants={cardVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="transition-all duration-500 mt-[20px] sm:mt-0 flex-shrink-0 md:h-[280px] sm:w-[48%] w-[100%] md:w-[55%] lg:w-[60%] bg-white text-black p-8 rounded-2xl group border border-blue-100 shadow-lg group-hover/row2:lg:w-[40%] group-hover/row2:md:w-[45%] group-hover/row2:sm:w-[52%]"
              >
                <div className="md:flex justify-between h-full">
                  <div className="flex-shrink-0 flex-grow-0 max-w-[260px] flex flex-col justify-center space-y-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-[#005BF7]/10 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500">
                        <img src={features[2].icon} alt={features[2].title} className="w-7 h-7" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-[20px] md:text-[24px] font-semibold text-[#005BF7] group-hover:text-[24.5px] transition-all duration-200">
                        {features[2].title}
                      </h2>
                      <p className="text-sm text-gray-600">{features[2].description}</p>
                    </div>
                  </div>
                  <div className="md:w-[35%] w-full mx-auto md:mx-0 pt-[20px] md:pt-0 opacity-100 group-hover/row2:opacity-0 transition-opacity duration-500 block group-hover/row2:hidden absolute md:relative">
                    <img
                      alt="Feature Illustration"
                      className="object-cover w-full h-full"
                      src="/images/feature-illustration-2.svg"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                custom={3}
                variants={cardVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="transition-all duration-500 flex-shrink-0 md:h-[280px] lg:w-[40%] md:w-[45%] sm:w-[52%] w-[100%] bg-[#005BF7] text-white p-8 rounded-2xl group group-hover/row2:lg:w-[60%] group-hover/row2:md:w-[55%] group-hover/row2:sm:w-[48%]"
              >
                <div className="md:flex justify-between h-full">
                  <div className="flex-shrink-0 flex-grow-0 max-w-[260px] flex flex-col justify-center space-y-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500">
                        <img
                          src={features[3].icon}
                          alt={features[3].title}
                          className="w-7 h-7 filter brightness-0 invert"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-[20px] md:text-[24px] font-semibold group-hover:text-[25px] transition-all duration-200">
                        {features[3].title}
                      </h2>
                      <p className="text-sm text-blue-50">{features[3].description}</p>
                    </div>
                  </div>
                  <div className="md:w-[35%] w-full mx-auto md:mx-0 pt-[20px] md:pt-0 opacity-0 group-hover/row2:opacity-100 transition-opacity duration-500 hidden group-hover/row2:block absolute md:relative">
                    <img
                      alt="Feature Illustration"
                      className="object-cover w-full h-full"
                      src="/images/feature-illustration-3.svg"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoosePistah;
