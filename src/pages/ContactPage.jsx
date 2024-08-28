import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import anime from "animejs";
import emailjs from "emailjs-com";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTimes, // Cross icon
} from "react-icons/fa";

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // To hold status messages

  useEffect(() => {
    // Anime.js animations
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your service ID
        "YOUR_TEMPLATE_ID", // Replace with your template ID
        formData,
        "YOUR_USER_ID" // Replace with your user ID
      )
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="bg-gray-100 py-16 relative founder-section">
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
          <p className="text-base sm:text-lg mb-12 text-gray-700">
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
              <form onSubmit={handleSubmit}>
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
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
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
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Submit
                </button>
                {status && (
                  <p className="mt-4 text-base sm:text-lg text-gray-700">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Address Section */}
          <div className="lg:w-1/3">
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
                    className="text-blue-400 hover:text-blue-600 transition duration-300"
                  >
                    <FaTwitter className="text-lg sm:text-xl" />
                  </a>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 transition duration-300"
                  >
                    <FaLinkedinIn className="text-lg sm:text-xl" />
                  </a>
                  <a
                    href="#"
                    className="text-pink-500 hover:text-pink-700 transition duration-300"
                  >
                    <FaInstagram className="text-lg sm:text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
