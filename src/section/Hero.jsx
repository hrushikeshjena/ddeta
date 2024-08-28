import { useEffect, useRef } from "react";
import anime from "animejs";
import { FaEnvelope, FaArrowDown, FaWhatsapp } from "react-icons/fa";
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
      targets: ".hero-title-whole",
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutQuad",
    });
    anime({
      targets: ".hero-title",
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 1000,
      easing: "easeOutExpo",
    });
    anime({
      targets: ".hero-title1",
      opacity: [0, 1],
      translateY: [-60, 0],
      duration: 1500,
      easing: "easeOutExpo",
    });
    anime({
      targets: ".hero-title2",
      opacity: [0, 1],
      translateY: [-70, 0],
      duration: 2000,
      easing: "easeOutExpo",
    });
    anime({
      targets: ".hero-title3",
      opacity: [0, 1],
      translateY: [-80, 0],
      duration: 2500,
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
    <section className="relative h-screen blue-section  flex flex-col  md:flex-row items-center bg-[#060273] text-white overflow-hidden">
      {/* Logo */}
      <div className="flex-none w-full md:w-1/3 content flex items-center logo-img justify-center p-8 md:p-16">
        <img src={logo} ref={logoRef} alt="Logo" className="logo" />
      </div>

      {/* Content Area */}
      <div className="flex-1 flex content flex-col hero-title-whole items-left justify-center p-6 md:p-12 text-left">
        <h1 className="text-6xl md:text-7xl font-bold font-s mb-2 hero-title">
          MAKE
        </h1>
        <h1 className="text-6xl md:text-7xl font-s font-bold mb-2 hero-title1">
          A CAREER
        </h1>
        <h1 className="text-6xl md:text-7xl font-s font-bold mb-2 hero-title2">
          OUTTA
        </h1>
        <h1 className="text-6xl md:text-7xl font-s font-bold mb-2 hero-title3">
          CREATIVITY
        </h1>

        <div className="relative mt-8">
          <FaArrowDown
            className="arrow-down  text-7xl text-white animate-pulse absolute top-0 transform -translate-x-1/2 cursor-pointer"
            onClick={() => {
              document
                .getElementById("next-section")
                .scrollIntoView({ behavior: "smooth" });
            }}
          />

          {/* Sub Title */}
          <div className="flex flex-col content-a content arrow-c items-left">
            <h2 className="text-xl italic  md:text-2xl font-semibold mb-1 hero-subtitle">
              School.
            </h2>
            <h2 className="text-xl italic md:text-2xl font-semibold mb-1 hero-subtitle">
              For a year.
            </h2>
            <h2 className="text-xl italic md:text-2xl font-semibold mb-1 hero-subtitle">
              For free.
            </h2>
          </div>
        </div>
      </div>

      {/* Contact Button */}
      <button
        onClick={() => navigate("/contact")}
        className="fixed top-4 right-4 bg-white text-[#060273] px-4 py-2 rounded flex items-center space-x-2 z-10 hover:bg-gray-100 transition-colors duration-300 shadow-lg"
      >
        <FaEnvelope className="text-lg md:text-xl" />
        <span className="hidden md:inline-block bg-white text-[#060273] py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
          Contact Us
        </span>
      </button>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890" // Replace with your WhatsApp number or link
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-white text-[#060273] px-4 py-2 rounded flex items-center space-x-2 z-10 hover:bg-gary-100 transition-colors duration-300 shadow-lg"
      >
        <FaWhatsapp className="text-lg md:text-xl" />
        <span className="hidden md:inline-block bg-white text-[#060273] py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
          Chat with us
        </span>
      </a>
    </section>
  );
};

export default HeroSection;
