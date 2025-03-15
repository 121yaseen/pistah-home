import HeroComponent from "./HeroComponent";
import DSPFeaturesSectionComponent from "./DSPFeaturesSectionComponent";
import SSPFeaturesSectionComponent from "./SSPFeaturesSectionComponent";
import FooterComponent from "./FooterComponent";
import SocialProofComponent from "./SocialProofComponent";

const HomeScreenComponent = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory relative">
      {/* Main Content */}
      <section className="h-screen snap-start">
        <HeroComponent />
      </section>
      <section className="h-screen snap-start">
        <DSPFeaturesSectionComponent />
      </section>
      <section className="h-screen snap-start">
        <SSPFeaturesSectionComponent />
      </section>
      {/* <section className="h-screen snap-start">
        <SocialProofComponent />
      </section> */}

      {/* Footer */}
      <section className="snap-start">
        <FooterComponent />
      </section>
    </div>
  );
};

export default HomeScreenComponent;