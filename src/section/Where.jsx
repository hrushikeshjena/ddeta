import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import Map from '../assets/map.png';

const LocationSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScrollAnimation = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: '.map-card, .content-area',
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 1000,
            easing: 'easeOutExpo',
            delay: (el, i) => i * 200,
          });
        } else {
          anime({
            targets: '.map-card, .content-area',
            opacity: 0,
            translateY: 50,
            duration: 0,
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.1,
    });

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#060273] w-full min-h-screen text-white py-16 px-4 flex flex-col md:flex-row items-center justify-center"
    >
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8">
        {/* Map Card */}
        <div className="map-card flex-none md:w-1/2 lg:w-1/3 p-4 flex justify-center">
          <div className="bg-gray-200 text-black rounded-lg shadow-lg overflow-hidden max-w-xs w-full">
            <img
              src={Map} // Replace with actual map image or embed map
              alt="Map of San Francisco"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="content-area flex-1 md:w-1/2 lg:w-2/3 text-center md:text-left p-4 flex flex-col justify-center items-center md:items-start">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">K. Where?</h2>
          <p className="text-lg md:text-xl mb-4">Our office, San Francisco.</p>
          <p className="text-lg md:text-xl mb-4">For a year.</p>
          <p className="text-lg md:text-xl font-semibold mb-8">You up for it?</p>
          <a
            href="#apply"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
