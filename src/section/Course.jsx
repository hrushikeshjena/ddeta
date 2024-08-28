import { useState, useEffect, useRef } from "react";
import anime from "animejs";
import Graphics from "../assets/graphics.jpg";
import Digital from "../assets/digitalmarketing.jpg";
import Web from "../assets/web-d.jpg";
import GraphicsDesign from "../assets/graphics-design.pdf";
import WebDevelopment from "../assets/webdevelopment.pdf";
import { FaBullhorn, FaPaintBrush, FaLaptopCode } from "react-icons/fa";
import emailjs from "emailjs-com";

const CourseCardSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBrochure, setSelectedBrochure] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    address: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScrollAnimation = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: ".course-card",
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 1000,
            delay: (el, i) => i * 200,
            easing: "easeOutExpo",
          });

          anime({
            targets: ".course-card .icon",
            scale: [0.8, 1],
            duration: 500,
            easing: "easeOutExpo",
            delay: (el, i) => i * 200,
          });
        } else {
          anime({
            targets: ".course-card",
            opacity: 0,
            translateY: 50,
            duration: 0,
          });

          anime({
            targets: ".course-card .icon",
            scale: 0.8,
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

  const handleDownloadClick = (brochureLink) => {
    setSelectedBrochure(brochureLink);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.number) errors.number = "Number is required";
    // Add more validation as needed
    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }

    // Send form data via email
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          setIsModalOpen(false);
          const downloadLink = document.createElement("a");
          downloadLink.href = selectedBrochure;
          downloadLink.download = "";
          downloadLink.click();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      ref={sectionRef}
      className="bg-gray-100  py-16 px-4 w-full h-auto lg:h-screen founder-section"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-[#060273]">
          OUR COURSES
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Digital Marketing Course Card */}
          <div
            className="course-card bg-white shadow-lg rounded-lg p-6 max-w-xs md:max-w-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-yellow-100 relative overflow-hidden"
            onClick={() =>
              handleDownloadClick("/path/to/digital-marketing-brochure.pdf")
            }
          >
            <div className="absolute cursor-pointer inset-0 bg-yellow-300 opacity-30 transform scale-150 transition-transform duration-500 ease-out"></div>
            <img
              src={Digital}
              alt="Digital Marketing"
              className="w-full h-32 md:h-48 object-cover rounded-t-lg mb-4"
            />
            <div className="relative z-10 flex justify-center mb-4">
              <FaBullhorn className="text-4xl md:text-5xl text-yellow-500 icon" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-[#060273]">
              Digital Marketing
            </h2>
            <p className="text-sm md:text-base text-gray-700">
              Learn the latest strategies in digital marketing to boost online
              presence and drive sales.
            </p>
            <button className="mt-4 cursor-pointer inline-block bg-yellow-500 text-white py-2 px-4 rounded-lg text-center hover:bg-yellow-600">
              Download Brochure
            </button>
          </div>

          {/* Graphics Designing Course Card */}
          <div
            className="course-card cursor-pointer bg-white shadow-lg rounded-lg p-6 max-w-xs md:max-w-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-purple-100 relative overflow-hidden"
            onClick={() => handleDownloadClick(GraphicsDesign)}
          >
            <div className="absolute inset-0 bg-purple-300 opacity-30 transform scale-150 transition-transform duration-500 ease-out"></div>
            <img
              src={Graphics}
              alt="Graphics Designing"
              className="w-full h-32 md:h-48 object-cover rounded-t-lg mb-4"
            />
            <div className="relative z-10 flex justify-center mb-4">
              <FaPaintBrush className="text-4xl md:text-5xl text-purple-500 icon" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-[#060273]">
              Graphics Designing
            </h2>
            <p className="text-sm md:text-base text-gray-700">
              Master the art of visual communication and design stunning
              graphics for various media.
            </p>
            <button className="mt-4 cursor-pointer inline-block bg-purple-500 text-white py-2 px-4 rounded-lg text-center hover:bg-purple-600">
              Download Brochure
            </button>
          </div>

          {/* Web Development Course Card */}
          <div
            className="course-card cursor-pointer bg-white shadow-lg rounded-lg p-6 max-w-xs md:max-w-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-100 relative overflow-hidden"
            onClick={() => handleDownloadClick(WebDevelopment)}
          >
            <div className="absolute inset-0 bg-blue-300 opacity-30 transform scale-150 transition-transform duration-500 ease-out"></div>
            <img
              src={Web}
              alt="Web Development"
              className="w-full h-32 md:h-48 object-cover rounded-t-lg mb-4"
            />
            <div className="relative z-10 flex justify-center mb-4">
              <FaLaptopCode className="text-4xl md:text-5xl text-blue-500 icon" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-[#060273]">
              Web Development
            </h2>
            <p className="text-sm md:text-base text-gray-700">
              Get hands-on experience with web technologies and build
              responsive, user-friendly websites.
            </p>
            <button className="mt-4 cursor-pointer inline-block bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600">
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Modal for download confirmation */}
      {isModalOpen && (
        <div className="modal fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
          <div className="modal-container bg-white rounded-lg shadow-lg p-8 z-10">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Confirm Download
            </h3>
            <form onSubmit={handleFormSubmit}>
              <p className="mb-6 text-gray-600">
                Please fill out the form to receive the brochure.
              </p>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 ${
                    formErrors.name ? "border-red-500" : ""
                  }`}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm">{formErrors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="number"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 ${
                    formErrors.number ? "border-red-500" : ""
                  }`}
                />
                {formErrors.number && (
                  <p className="text-red-500 text-sm">{formErrors.number}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="address"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white py-2 px-4 rounded-md mr-4"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CourseCardSection;
