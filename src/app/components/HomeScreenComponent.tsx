import { useRef, useEffect } from 'react';
import HeroComponent from "./HeroComponent";
import BrandsSectionComponent from "./BrandsSectionComponent";
import SSPFeaturesSectionComponent from "./SSPFeaturesSectionComponent";
import FooterComponent from "./FooterComponent";

interface HomeScreenComponentProps {
  onScrollDirection: (direction: 'up' | 'down') => void;
}

const HomeScreenComponent: React.FC<HomeScreenComponentProps> = ({ onScrollDirection }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const currentScrollY = container.scrollTop;

      // Always show header when at the top
      if (currentScrollY === 0) {
        onScrollDirection('up');
        lastScrollY.current = 0;
        return;
      }

      const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
      lastScrollY.current = currentScrollY;
      onScrollDirection(direction);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [onScrollDirection]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory relative">
      <section className="h-screen snap-start">
        <HeroComponent />
      </section>
      <section className="h-screen snap-start">
        <BrandsSectionComponent />
      </section>
      <section className="h-screen snap-start">
        <SSPFeaturesSectionComponent />
      </section>
      <section className="snap-start">
        <FooterComponent />
      </section>
    </div>
  );
};

export default HomeScreenComponent;