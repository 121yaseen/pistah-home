import Head from "next/head";
import WhatWeOffer from "./components/WhatWeOffer";
import HowItWorks from "./components/HowItWorks";
import MacbookVideoSection from "./components/MacbookVideoSection";
import WhyChoosePistah from "./components/WhyChoosePistah";
import FooterSection from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pistah | Elevate Your Digital Presence</title>
        <meta
          name="description"
          content="Elevate Your Brand with Seamless Influencer Collaborations. Harness Pistah's Advanced Tools to Manage Partnerships."
        />
        <meta
          property="og:title"
          content="Pistah | Elevate Your Digital Presence"
        />
        <meta
          property="og:description"
          content="Elevate Your Brand with Seamless Influencer Collaborations. Harness Pistah's Advanced Tools to Manage Partnerships."
        />
        <meta property="og:url" content="https://pistah.com" />
        <meta
          property="og:image"
          content="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/pistah/24-10-2024/pistah-og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div id="home">
          <div className="bg-white font-custom bottom-shadow">
            <div className="w-[87%] mx-auto">
              <header className="flex justify-between items-center py-[32px]">
                <div>
                  <a href="#" className="w-[65%] inline-block hover-scale">
                    <img
                      alt="Pistah Logo"
                      loading="lazy"
                      width={160}
                      height={40}
                      src="/pistah.svg"
                      className="transition-transform duration-300"
                    />
                  </a>
                </div>
                <nav className="space-x-8 text-[#364152] font-bold lg:text-[16px] md:text-[14px] font-custom hidden lg:block ml-[25px]">
                  <a
                    className="hover:text-black transition-colors duration-300"
                    href="#home"
                  >
                    Home
                  </a>
                  <a
                    className="hover:text-black transition-colors duration-300"
                    href="#what-we-offer"
                  >
                    Services
                  </a>
                  <a
                    className="hover:text-black transition-colors duration-300"
                    href="#"
                  >
                    Process
                  </a>
                </nav>
              </header>
              <section className="md:flex block gap-10 lg:h-[85vh] lg:pt-10 pb-[100px] lg:items-center">
                <div className="flex flex-col justify-center text-center md:text-left md:w-[55%] lg:w-[50%] fade-in">
                  <h1
                    className="xl:text-[50px] text-[36px] md:text-[52px] sm:text-[52px] lg:text-[64px] tracking-wider font-heading text-[#005BF7]"
                    style={{ lineHeight: 1.1 }}
                  >
                    Elevate Your Digital Presence
                  </h1>
                  <p className="font-custom text-[14px] lg:text-[18px] md:text-[16px] text-gray-700 mb-4 md:mb-6">
                    Inspiring creators and brands to elevate their impact
                    through fresh insights, expert mentorship, and creative
                    strategies.
                  </p>
                  <a
                    href="#"
                    className="font-custom font-bold inline-block w-[50%] mx-auto md:mx-0 text-center bg-[#005BF7] text-white py-2 px-2 lg:py-3 lg:px-3 rounded-lg hover-scale"
                  >
                    Join Our Waitlist
                  </a>
                </div>
                <div className="flex justify-center pt-[30px] md:w-[60%] mx-auto">
                  <span className="inline-block xl:w-[100%] md:w-[350px] lg:w-[100%] w-[400px]">
                    <img
                      alt="Spotlight Illustration"
                      width={500}
                      height={500}
                      className="zoominout md:w-[100%]"
                      src="./assets/hero-background.svg"
                    />
                  </span>
                </div>
              </section>
              {/* Continue inserting other sections of your HTML as needed */}
            </div>
          </div>
        </div>
      </main>
      <div className="mx-auto py-[80px] font-custom overflow-hidden">
        <section className="lg:mx-auto lg:w-[75%] 2xl:w-[65%] fade-in">
          <h3 className="md:text-[24px] text-[20px] lg:text-[32px] font-bold text-center mb-2 sm:mb-4">
            Who can be part of Pistah?
          </h3>
          <p className="text-center text-gray-500 mb-6 lg:text-[18px] md:text-[16px] text-[14px] w-[90%] mx-auto 2xl:text-[18px]"></p>
          <div className="w-[90%] mx-auto">
            <div className="sm:flex sm:gap-[10px] mb-6 sm:flex-row">
              <div
                className="transition-all duration-500 flex-shrink-0 md:h-[230px] 2xl:h-[250px] lg:w-[30%] md:w-[35%] sm:w-[42%] w-[100%] bg-[#1A1A1A] text-white p-4 rounded-lg md:flex justify-between hover-scale"
                style={{
                  opacity: 1,
                  willChange: "opacity, transform",
                  transform: "none",
                }}
              >
                <div className="flex flex-col items-start">
                  <span className="inline-block w-[35px] mb-[20px]">
                    <img
                      className="w-full h-full"
                      src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/influencer-icon.svg"
                      alt="Influencer Icon"
                    />
                  </span>
                  <h2 className="lg:text-[24px] sm:text-[22px] text-[20px] 2xl:text-[26px] font-semibold">
                    INFLUENCERS
                  </h2>
                  <div className="sm:w-[100%] md:w-[200px]">
                    <p className="text-xs mt-2 2xl:text-[14px]">
                      Maximise exposure, strengthen personal brands and secure
                      high-value collaborations.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="transition-all duration-500 mt-[20px] sm:mt-[0] flex-shrink-0 md:h-[230px] 2xl:h-[250px] sm:w-[55%] w-[100%] md:w-[65%] lg:w-[70%] bg-[#FEF0C7] text-black p-4 rounded-lg md:flex justify-between hover-scale"
                style={{
                  opacity: 1,
                  willChange: "opacity, transform",
                  transform: "none",
                }}
              >
                <div>
                  <span className="inline-block w-[35px] mb-[20px]">
                    <img
                      className="w-full h-full"
                      src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/aspiring-creator-icon.svg"
                      alt="Aspiring Creator Icon"
                    />
                  </span>
                  <h2 className="lg:text-[24px] sm:text-[22px] text-[20px] font-semibold 2xl:text-[26px]">
                    ASPIRING CREATORS
                  </h2>
                  <div className="sm:w-[90%] md:w-[200px]">
                    <p className="mt-2 text-xs 2xl:text-[14px]">
                      Access learning, mentorship and tools to launch a
                      successful content creation career.
                    </p>
                  </div>
                </div>
                <div className="md:w-[45%] w-[80%] mx-auto sm:mx-auto 2xl:pt-[15px] 2xl:w-[35%] 3xl:w-[28%] 2xl:pt-[50px] sm:w-[80%] md:mx-0 pt-[50px]">
                  <img
                    alt="Aspiring Creators Illustration"
                    className="object-cover floating"
                    src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/aspiring-creator.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row sm:gap-[10px]">
              <div
                className="transition-all mt-[20px] sm:mt-[0] duration-500 flex-shrink-0 md:h-[230px] 2xl:h-[250px] w-[100%] sm:w-[55%] md:w-[65%] lg:w-[70%] bg-[#FEF0C7] text-black p-4 rounded-lg md:flex justify-between hover-scale"
                style={{
                  opacity: 1,
                  willChange: "opacity, transform",
                  transform: "none",
                }}
              >
                <div>
                  <span className="inline-block w-[35px] mb-[20px]">
                    <img
                      className="w-full h-full"
                      src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/brand-icon-02.svg"
                      alt="Brand Icon"
                    />
                  </span>
                  <h2 className="lg:text-[24px] sm:text-[22px] text-[20px] font-semibold 2xl:text-[28px]">
                    BRANDS
                  </h2>
                  <div className="sm:w-[90%] md:w-[200px]">
                    <p className="mt-2 text-xs 2xl:text-[14px]">
                      Collaborate to amplify brand presence, expand audience
                      reach and achieve meaningful growth.
                    </p>
                  </div>
                </div>
                <div className="md:w-[40%] w-[80%] mx-auto sm:mx-auto pt-[50px] 2xl:pt-[15px] 3xl:w-[25%] 2xl:pt-[50px] 2xl:w-[30%] md:mx-0 sm:w-[80%]">
                  <img
                    alt="Brand Illustration"
                    className="object-cover floating"
                    src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/brand.svg"
                  />
                </div>
              </div>
              <div
                className="transition-all duration-500 flex-shrink-0 md:h-[230px] 2xl:h-[250px] sm:w-[42%] w-[100%] lg:w-[30%] md:w-[35%] bg-[#1A1A1A] text-white p-4 rounded-lg justify-between hover-scale"
                style={{
                  opacity: 1,
                  willChange: "opacity, transform",
                  transform: "none",
                }}
              >
                <div>
                  <span className="inline-block w-[35px] mb-[20px]">
                    <img
                      className="w-full h-full"
                      src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/whoyer/19-10-2024/individual-icon.svg"
                      alt="Individual Icon"
                    />
                  </span>
                  <h2 className="lg:text-[24px] sm:text-[22px] text-[20px] font-semibold 2xl:text-[26px]">
                    EVERYDAY INDIVIDUALS
                  </h2>
                  <div className="sm:w-[100%] md:w-[200px]">
                    <p className="mt-2 text-xs 2xl:text-[14px]">
                      Get personalised styling advice to enhance your digital
                      appearance and personal branding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <WhatWeOffer />
      <MacbookVideoSection />
      <HowItWorks />
      <WhyChoosePistah />
      <FooterSection />
    </>
  );
}
