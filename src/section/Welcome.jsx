

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { FaRocket, FaMagic, FaRegHandshake } from 'react-icons/fa';

const WelcomeSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const sectionRect = section.getBoundingClientRect();

      if (sectionRect.top < window.innerHeight && sectionRect.bottom > 0) {
        anime({
          targets: titleRef.current,
          opacity: [0, 1],
          translateY: [50, 0],
          duration: 1000,
          easing: 'easeOutExpo',
        });

        anime({
          targets: '.welcome-content .icon',
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 1000,
          delay: (el, i) => i * 300,
          easing: 'easeOutExpo',
        });

        anime({
          targets: '.welcome-content p',
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 1000,
          delay: (el, i) => i * 300,
          easing: 'easeInOutExpo',
        });
      } else {
        anime({
          targets: '.welcome-content .icon, .welcome-content p, h3',
          opacity: 0,
          translateY: 50,
          duration: 0,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen h-screen  bg-[#060273] text-center py-16 px-4 md:px-8 lg:px-16"
    >
      <div className="welcome-content" ref={contentRef}>
        <h3
          ref={titleRef}
          className="text-6xl md:text-7xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 md:mb-12 opacity-0"
        >
          Welcome
        </h3>
        <div className="flex flex-col md:flex-row justify-center mb-8 md:mb-12 space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex flex-col items-center icon opacity-0">
            <FaRocket className="text-4xl sm:text-5xl md:text-6xl text-yellow-300 mb-4 transform hover:scale-110 transition-transform duration-300" />
            <p className="text-lg md:text-xl text-white">Ignite Ideas</p>
          </div>
          <div className="flex flex-col items-center icon opacity-0">
            <FaMagic className="text-4xl sm:text-5xl md:text-6xl text-purple-300 mb-4 transform hover:scale-110 transition-transform duration-300" />
            <p className="text-lg md:text-xl text-white">Create Magic</p>
          </div>
          <div className="flex flex-col items-center icon opacity-0">
            <FaRegHandshake className="text-4xl sm:text-5xl md:text-6xl text-green-300 mb-4 transform hover:scale-110 transition-transform duration-300" />
            <p className="text-lg md:text-xl text-white">Collaborate</p>
          </div>
        </div>
        <div>
          <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-white mb-4 opacity-0">
            We’re all about sparking creativity and fostering innovation.
          </p>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl text-white mt-4 opacity-0">
            Join us in making a difference and transforming ideas into reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
