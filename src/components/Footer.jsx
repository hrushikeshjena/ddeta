import { useEffect } from "react";
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import anime from "animejs";
import logo from '../assets/logo.png'; // Replace with the correct path to your logo image

const Footer = () => {
  useEffect(() => {
    // Animate the logo
    anime({
      targets: '.footer-logo',
      opacity: [0, 1],
      translateY: [-20, 0],
      easing: 'easeOutExpo',
      duration: 1000,
    });

    // Animate the social icons
    anime({
      targets: '.social-icon',
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutExpo',
      delay: anime.stagger(100), // Stagger the animation for each icon
      duration: 1000,
    });

    // Animate the text sections
    anime({
      targets: '.footer-section',
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutExpo',
      delay: anime.stagger(200, { start: 500 }), // Stagger with a delay
      duration: 1000,
    });
  }, []);

  return (
    <footer className="bg-[#060273] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-white">
          <div className="w-full md:w-1/4 px-4 mb-8">
            <img src={logo} alt="Digital Deta Logo" className="footer-logo h-12 w-auto mb-8" />
            <div className="flex justify-start mb-4">
              <a href="#" className="social-icon text-gray-200 hover:text-white mr-4">
                <FaFacebookSquare />
              </a>
              <a href="#" className="social-icon text-gray-200 hover:text-white mr-4">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon text-gray-200 hover:text-white mr-4">
                <FaLinkedin />
              </a>
              <a href="#" className="social-icon text-gray-200 hover:text-white mr-4">
                <FaSquareXTwitter />
              </a>
              <a href="#" className="social-icon text-gray-200 hover:text-white">
                <IoLogoWhatsapp />
              </a>
            </div>
            <p className="text-gray-400 text-xs mt-6">
              &copy; 2024 DigitalDeta, Inc. All rights reserved.
            </p>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8 footer-section">
            <h2 className="font-bold text-lg mb-4">Lorem</h2>
            <ul className="list-none">
              <li>
                <a href="#" className="block text-gray-200 hover:text-white mb-2">
                  Lorem
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-200 hover:text-white mb-2">
                  Lorem
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-200 hover:text-white mb-2">
                  Lorem
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-200 hover:text-white mb-2">
                  Lorem
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8 footer-section">
            <h2 className="font-bold text-lg mb-4">Lorem</h2>
            <ul className="list-none">
              <li>
                <a href="#" className="block text-gray-200 hover:text-white mb-2">
                  Lorem
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-200 hover:text-white mb-2">
                  Lorem
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-200 hover:text-white mb-2">
                  Lorem
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-200 hover:text-white mb-2">
                  Lorem
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8 footer-section">
            <h2 className="font-bold text-lg mb-4">Lorem</h2>
            <ul className="list-none">
              <li>
                <a href="#" className="block text-gray-200 hover:text-white mb-2">
                  Lorem
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-200 hover:text-white mb-2">
                  Lorem
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-200 hover:text-white mb-2">
                  Lorem
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-200 hover:text-white mb-2">
                  Lorem
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
