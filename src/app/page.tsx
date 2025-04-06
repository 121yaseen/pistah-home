import Head from "next/head";
import WhatWeOffer from "./components/WhatWeOffer";
import HowItWorks from "./components/HowItWorks";
import WhyChoosePistah from "./components/WhyChoosePistah";
import FooterSection from "./components/Footer";
import MobileCardStack from "./components/MobileCardStack";

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
        <link rel="preload" href="/assets/hero-background.svg" as="image" type="image/svg+xml" />
      </Head>
      <main>
        <div id="home">
          <div className="bg-white font-custom">
            <div className="w-[83%] mx-auto">
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
                <nav className="space-x-8 text-[#005BF7] font-semibold lg:text-[16px] md:text-[14px] font-custom hidden lg:block ml-[25px]">
                  <a className="inline-block hover-scale" href="#what-we-offer">
                    Services
                  </a>
                  <a className="inline-block hover-scale" href="#">
                    Process
                  </a>
                  <a
                    className="inline-block hover-scale bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-6 rounded-lg"
                    href="https://scrapper.pistah.live"
                  >
                    Try For Free
                  </a>
                </nav>
              </header>
              <section className="md:flex block gap-10 h-[95vh] pb-[100px] lg:items-center">
                <div className="flex flex-col justify-center text-center md:text-left md:w-[55%] lg:w-[50%] fade-in">
                  <h1
                    className="xl:text-[50px] text-[36px] md:text-[52px] sm:text-[52px] lg:text-[64px] font-heading text-[#005BF7]"
                    style={{ lineHeight: 1.1 }}
                  >
                    Elevate Your Digital Presence
                  </h1>
                  <p className="font-custom text-[12px] lg:text-[16px] md:text-[14px] text-gray-600 mb-4 md:mb-6 mt-2">
                    Inspiring creators and brands to elevate their impact
                    through fresh insights, expert mentorship, and creative
                    strategies.
                  </p>
                  <a
                    href="#"
                    className="font-custom font-bold whitespace-nowrap mt-2 inline-flex items-center justify-center bg-[#005BF7] text-white py-2 px-6 lg:py-3 lg:px-8 rounded-lg hover-scale mx-auto md:mx-0 w-fit lg:max-w-[220px] text-center"
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
      <MobileCardStack />
      <WhatWeOffer />
      {/* <MacbookVideoSection /> */}
      <HowItWorks />
      <WhyChoosePistah />
      <FooterSection />
    </>
  );
}
