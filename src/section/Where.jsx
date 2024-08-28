import React, { useEffect, useRef } from "react";
import anime from "animejs";
import Map from "../assets/Map (1).png";

const LocationSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScrollAnimation = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: ".map-card, .content-area",
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 1000,
            easing: "easeOutExpo",
            delay: (el, i) => i * 200,
          });
        } else {
          anime({
            targets: ".map-card, .content-area",
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
      className="bg-[#060273] blue-section   w-full min-h-screen text-white py-16 px-4 flex flex-col md:flex-row items-center justify-center"
    >
      <div className="flex content flex-col md:flex-row gap-8 items-center">
        {/* Map Card */}
        <div className="map-card flex-1">
          <img
            src={Map}
            alt="Map of San Francisco"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content Area */}
        <div className="content-area flex-1 md:w-1/2 lg:w-2/3 text-center md:text-left p-4 flex flex-col justify-center items-center md:items-start">
          <h2 className="text-6xl md:text-7xl font-bold mb-4">K. Where?</h2>
          <p className="text-lg md:text-xl mb-4">Our office, San Francisco.</p>
          <p className="text-lg md:text-xl mb-4">For a year.</p>
          <p className="text-lg md:text-xl font-semibold mb-8">
            You up for it?
          </p>
          <a
            href="https://maps.app.goo.gl/mJ7zMjabNkA9qvWU6"
            target="_blank"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            Visit Here!
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
