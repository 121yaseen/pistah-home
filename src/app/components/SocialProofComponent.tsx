import { useEffect, useState } from 'react';
import SwiggyIcon from '../icons/brandIcons/swiggy';
import LuluIcon from '../icons/brandIcons/lulu';
import RoyalEnfieldIcon from '../icons/brandIcons/royalenfield';
import SonyIcon from '../icons/brandIcons/sony';
import BmwIcon from '../icons/brandIcons/bmw';
import SotiIcon from '../icons/brandIcons/soti';
import OnRoadIcon from '../icons/mediaIcons/onRoad';
import BlindSpotIcon from '../icons/mediaIcons/blindspot';
import CaasieIcon from '../icons/mediaIcons/caasie';
import VioohIcon from '../icons/mediaIcons/viooh';
import BroadSignIcon from '../icons/mediaIcons/broadsign';
import VistarIcon from '../icons/mediaIcons/vistar';

const SocialProofComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredMediaIndex, setHoveredMediaIndex] = useState<number | null>(null);
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
    SotiIcon, BmwIcon, SonyIcon,
    LuluIcon, SwiggyIcon, RoyalEnfieldIcon,
    SotiIcon, SonyIcon
  ];

  const media = [
    CaasieIcon, BlindSpotIcon,VistarIcon, BroadSignIcon,
    VioohIcon, OnRoadIcon, BlindSpotIcon
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
        fontSize: '1.3rem',
        color: '#002ad4',
        textAlign: 'left',
        width: '100%',
        paddingLeft: '8rem'
      }}> <span style={{ fontWeight: '800' }}>1k+</span>  Brands</h2>
      <div style={{
        width: '90%',
        overflow: 'hidden',
        padding: '2rem 0',
        margin: '1rem 0'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '7rem' : '13rem',
          animation: 'scrollLeft 25s linear infinite', // Animation to scroll left
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
        width: '90%',
        overflow: 'hidden',
        padding: '2rem 0',
        margin: '1rem 0'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '7rem' : '15rem',
          animation: 'scrollRight 25s linear infinite', // Animation to scroll right
          height: '5rem',
          overflow: 'visible',
          whiteSpace: 'nowrap', // Prevents wrapping
        }}>
          {media.map((Brand, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredMediaIndex(index)}
              onMouseLeave={() => setHoveredMediaIndex(null)}
              style={{
                color: 'white',
                transition: 'color 0.3s ease, transform 0.3s ease',
                transform: getScale(index, hoveredMediaIndex, isMobile),
                display: 'inline-block', // Ensures icons stay on a single line
              }}
            >
              <Brand />
            </div>
          ))}
        </div>
      </div>

      <h2 style={{
        fontSize: '1.5rem',
        color: '#ccc',
        fontStyle: 'italic'
      }}>
        They are already in <span style={{
          fontSize: '2rem',
          fontWeight: '800',
          color: '#002ad4',
          textShadow: '0 0 20px #002ad4',
          animation: 'blink 1.5s infinite',
          fontStyle: 'normal'
        }}>Love</span> with us, What&apos;s stopping you?
      </h2>

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