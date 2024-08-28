import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import Ceo from "../assets/graphics.jpg";
import { FaCircle } from "react-icons/fa";

const FounderSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const animateOnScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animation for Quote
          anime({
            targets: '.quote-text',
            opacity: [0, 1],
            translateY: [-50, 0],
            duration: 1000,
            easing: 'easeOutExpo'
          });

          // Animation for Author
          anime({
            targets: '.quote-author',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 1000,
            delay: 500,
            easing: 'easeOutExpo'
          });

          // Animation for Welcome Title
          anime({
            targets: '.welcome-title',
            opacity: [0, 1],
            translateY: [-30, 0],
            duration: 1000,
            delay: 1000,
            easing: 'easeOutExpo'
          });

          // Animation for Image (Slide in from right)
          anime({
            targets: '.founder-image',
            opacity: [0, 1],
            translateX: [100, 0], // Slide in from the right
            duration: 1000,
            delay: 1500,
            easing: 'easeOutExpo'
          });
        } else {
          // Reset animations to allow re-triggering
          anime({
            targets: '.quote-text, .quote-author, .welcome-title, .founder-image',
            opacity: 0,
            translateY: 0,
            translateX: 0,
            duration: 0,
          });
        }
      });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
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
      id="next-section"
      ref={sectionRef}
      className="w-screen h-screen flex items-center justify-center bg-[#060273] text-[#060273] p-8 founder-section"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={Ceo} // Replace with the actual path to the CEO's image
            alt="CEO"
            className="w-3/4 h-auto object-cover founder-image"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-8">
          {/* Quote */}
          <div className="mb-8">
            <p className="text-4xl md:text-6xl italic quote-text text-black">
              “I went to Harvard. Don’t do that. It’s really expensive. Plus, we’re a lot more fun.”
            </p>
            <p className="text-2xl md:text-4xl font-bold mt-4 md:mt-8 quote-author text-[#060273]">
              - Jeff Goodby
            </p>
            <span className="text-base md:text-lg">Founding Partner</span>
            <span className="text-base md:text-lg flex justify-center md:justify-start mt-2">
              <FaCircle /> <FaCircle /> <FaCircle /> <FaCircle />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
