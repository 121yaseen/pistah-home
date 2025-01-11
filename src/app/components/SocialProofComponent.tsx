import { useEffect, useState } from 'react';
import PistahIcon from '../icons/pistahIcon';

const SocialProofComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 912);
    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getScale = (index: number, hoveredIndex: number | null, isMobile: boolean) => {
    if (hoveredIndex === index) {
      return isMobile ? 'scale(2.5)' : 'scale(3.5)';
    }
    return isMobile ? 'scale(2)' : 'scale(3)';
  };

  const brands = [
    PistahIcon, PistahIcon, PistahIcon, PistahIcon,
    PistahIcon, PistahIcon, PistahIcon, PistahIcon,
    // Duplicate icons to create seamless loop
    PistahIcon, PistahIcon, PistahIcon, PistahIcon,
    PistahIcon, PistahIcon, PistahIcon, PistahIcon
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <h2 style={{
        fontSize: '2.5rem',
        color: 'white',
        marginBottom: '3rem',
      }}>
        They already <span style={{
          fontSize: '3rem',
          fontWeight: '800',
          color: '#002ad4',
          marginBottom: '1rem',
          textShadow: '0 0 20px #002ad4',
          animation: 'blink 1.5s infinite'
        }}>Love</span> us.
      </h2>
      <h2 style={{
        fontSize: '1.3rem',
        color: '#002ad4',
        textAlign: 'left',
        width: '100%',
        paddingLeft: '8rem'
      }}> <span style={{ fontWeight: '800' }}>1k+</span>  Brands</h2>
      <div style={{
        width: '80%',
        overflow: 'hidden',
        padding: '2rem 0',
        margin: '1rem 0'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '3rem' : '7rem',
          animation: 'scrollLeft 30s linear infinite', // Animation to scroll left
          height: '5rem',
          overflow: 'visible',
          whiteSpace: 'nowrap', // Prevents wrapping
        }}>
          {brands.map((Brand, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                color: 'white',
                transition: 'color 0.3s ease, transform 0.3s ease',
                transform: getScale(index, hoveredIndex, isMobile),
                display: 'inline-block', // Ensures icons stay on a single line
              }}
            >
              <Brand />
            </div>
          ))}
        </div>
      </div>

      <h2 style={{
        fontSize: '1.3rem',
        color: '#002ad4',
        textAlign: 'left',
        width: '100%',
        paddingLeft: '8rem'
      }}> <span style={{ fontWeight: '800' }}>20k+</span>  Boards</h2>
      <div style={{
        width: '80%',
        overflow: 'hidden',
        padding: '2rem 0',
        margin: '1rem 0'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '3rem' : '7rem',
          animation: 'scrollRight 30s linear infinite', // Animation to scroll right
          height: '5rem',
          overflow: 'visible',
          whiteSpace: 'nowrap', // Prevents wrapping
        }}>
          {brands.map((Brand, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                color: 'white',
                transition: 'color 0.3s ease, transform 0.3s ease',
                transform: getScale(index, hoveredIndex, isMobile),
                display: 'inline-block', // Ensures icons stay on a single line
              }}
            >
              <Brand />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scrollLeft {
            0% {
              transform: translateX(0%); /* Start at the rightmost position */
            }
            100% {
              transform: translateX(-50%); /* Move to the left */
            }
          }

          @keyframes scrollRight {
            0% {
              transform: translateX(-50%); /* Start at the leftmost position */
            }
            100% {
              transform: translateX(0%); /* Move to the right */
            }
          }
        `}
      </style>
    </div>
  );
};

export default SocialProofComponent;