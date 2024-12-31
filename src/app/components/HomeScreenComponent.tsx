import HeroComponent from "./HeroComponent";

import DSPFeaturesSectionComponent from "./DSPFeaturesSectionComponent";

const HomeScreenComponent = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <section className="h-screen snap-start">
        <HeroComponent />
      </section>
      <section className="h-screen snap-start">
        <DSPFeaturesSectionComponent />
      </section>
    </div>
  );
};

export default HomeScreenComponent;
