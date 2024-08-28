import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import anime from "animejs";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTimes,
} from "react-icons/fa";

const ContactPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    anime({
      targets: ".application-message",
      opacity: [0, 1],
      translateY: [-30, 0],
      duration: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".contact-form",
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 1000,
      delay: 500,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".address-section",
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 1000,
      delay: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: ".cross-icon",
      opacity: [0, 1],
      translateX: [-30, 0],
      duration: 1000,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <section className="bg-gray-100 py-16 relative">
      <div className="absolute top-4 right-4 cross-icon">
        <FaTimes
          className="text-gray-800 text-3xl cursor-pointer hover:text-blue-600 transition duration-300"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="w-full flex justify-center px-4">
        {/* Application Message */}
        <div className="max-w-3xl w-full mb-8 lg:mb-0 application-message text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-blue-800">
            Academy 2024 Application
          </h2>
          <p className="text-base sm:text-lg mb-4 text-gray-700">
            Thank you for your interest in The Academy at Goodby Silverstein &
            Partners! Our goal is to provide a transformative experience that
            fosters creativity and innovation.
          </p>
          <p className="text-base sm:text-lg mb-8 text-gray-700">
            Applications are now closed for the 2024-25 cohort. Stay tuned for
            future opportunities as applications for the Year 4 program will
            open in January 2025.
          </p>
        </div>
      </div>
      <div className="w-full px-4">
        {/* Contact Form and Address Section */}
        <div className="container mx-auto flex flex-col lg:flex-row lg:space-x-8">
          {/* Contact Form */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="contact-form bg-white shadow-lg rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-800">
                Contact Us
              </h3>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-base sm:text-lg mb-2 text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-base sm:text-lg mb-2 text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-base sm:text-lg mb-2 text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-base sm:text-lg mb-2 text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Address Section */}
          <div className="lg:w-1/2">
            <div className="address-section bg-white shadow-lg rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-800">
                Address
              </h3>
              <p className="text-base sm:text-lg text-gray-700">
                Goodby Silverstein & Partners
                <br />
                123 Creative Lane
                <br />
                San Francisco, CA 94105
                <br />
                USA
              </p>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-800">
                Phone Number
              </h3>
              <p className="text-base sm:text-lg text-gray-700">
                +91 987456123
              </p>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-800">
                Email
              </h3>
              <p className="text-base sm:text-lg text-gray-700">
                info.digital@gmail.com
              </p>
              <div className="mt-6">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Connect with Us
                </h4>
                <p className="text-gray-600 mt-2">
                  Follow us on social media for updates and more information:
                </p>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 transition duration-300"
                  >
                    <FaFacebookF className="text-lg sm:text-xl" />
                  </a>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 transition duration-300"
                  >
                    <FaTwitter className="text-lg sm:text-xl" />
                  </a>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 transition duration-300"
                  >
                    <FaLinkedinIn className="text-lg sm:text-xl" />
                  </a>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 transition duration-300"
                  >
                    <FaInstagram className="text-lg sm:text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 mt-8">
        {/* Map Section */}
        <div className="map bg-white shadow-lg rounded-lg p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-800">
            Our Location
          </h3>
          <div className="relative w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.895093015917!2d-122.39967268468141!3d37.789217879757034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f6c28210b%3A0x1e78b8cfd7d2c1d7!2s123%20Creative%20Lane%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1629180784941!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
