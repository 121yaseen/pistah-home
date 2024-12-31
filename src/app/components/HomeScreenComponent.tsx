import HeaderComponent from "./HeaderComponent";
import HeroComponent from "./HeroComponent";
import DSPFeaturesSectionComponent from "./DSPFeaturesSectionComponent";
import SSPFeaturesSectionComponent from "./SSPFeaturesSectionComponent";

const HomeScreenComponent = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory relative">
      {/* Fixed Header */}
      <HeaderComponent />

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
    </div>
  );
};

export default HomeScreenComponent;