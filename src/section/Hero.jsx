import { useEffect, useRef } from "react";
import anime from "animejs";
import { FaEnvelope, FaArrowDown,FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const logoRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Animation for Logo
    anime({
      targets: logoRef.current,
      opacity: [0, 1],
      scale: [0.5, 1],
      duration: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".hero-title",
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".hero-subtitle",
      opacity: [0, 1],
      translateY: [-30, 0],
      duration: 1000,
      delay: 500,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".hero-icons .icon",
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 1000,
      delay: (el, i) => i * 200, // Stagger animation for icons
      easing: "easeOutExpo",
    });

    anime({
      targets: ".arrow-down",
      translateY: [0, 20],
      duration: 1000,
      easing: "easeInOutSine",
      loop: true,
    });
  }, []);

  return (
    <section className="relative w-screen h-screen flex flex-col  md:flex-row items-center bg-[#060273] text-white overflow-hidden">
      {/* Logo */}
      <div className="flex-none w-full md:w-1/3 content flex items-center justify-center p-8 md:p-16">
        <img
          src={logo}
          ref={logoRef}
          alt="Logo"
          className="h-32 md:h-48 w-auto"
        />
      </div>

      {/* Content Area */}
      <div className="flex-1 flex content flex-col items-left justify-center p-6 md:p-12 text-left">
        <h1 className="text-6xl md:text-7xl font-bold mb-2 hero-title">MAKE</h1>
        <h1 className="text-6xl md:text-7xl font-bold mb-2 hero-title">
          A CAREER
        </h1>
        <h1 className="text-6xl md:text-7xl font-bold mb-2 hero-title">
          OUTTA CREATIVITY
        </h1>

        <div className="relative mt-8">
  <FaArrowDown
    className="arrow-down text-7xl text-white animate-pulse absolute top-0 transform -translate-x-1/2 cursor-pointer"
    onClick={() => {
      document.getElementById('next-section').scrollIntoView({ behavior: 'smooth' });
    }}
  />

  {/* Sub Title */}
  <div className="flex flex-col content items-left">
    <h2 className="text-xl md:text-2xl font-semibold mb-1 hero-subtitle">School.</h2>
    <h2 className="text-xl md:text-2xl font-semibold mb-1 hero-subtitle">For a year.</h2>
    <h2 className="text-xl md:text-2xl font-semibold mb-1 hero-subtitle">For free.</h2>
  </div>
</div>
      </div>

      {/* Contact Button */}
      <button
      onClick={() => navigate("/contact")}
      className="fixed top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded flex items-center space-x-2 z-10 hover:bg-yellow-300 transition-colors duration-300 shadow-lg"
    >
      <FaEnvelope className="text-lg md:text-xl" />
      <span className="hidden md:inline-block bg-yellow-400 text-black py-3 px-6 rounded-lg hover:bg-yellow-300 transition-colors duration-300">
        Contact Us
      </span>
    </button>
       {/* WhatsApp Button */}
       <a
        href="https://wa.me/1234567890" // Replace with your WhatsApp number or link
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded flex items-center space-x-2 z-10 hover:bg-green-400 transition-colors duration-300 shadow-lg"
      >
        <FaWhatsapp className="text-lg md:text-xl" />
        <span className="hidden md:inline-block bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-400 transition-colors duration-300">
          Chat with us
        </span>
      </a>
    </section>
  );
};

export default HeroSection;
