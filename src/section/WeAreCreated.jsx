import { useEffect, useRef } from "react";
import anime from "animejs";
import logo from "../assets/logo.png"; // Import your logo image

const CreativeSchoolSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const logoElement = section.querySelector(".logo");
      const headers = section.querySelectorAll("h2");
      const content = section.querySelector(".creative-school-section-content");

      if (!content || !logoElement || headers.length === 0) return;

      const contentRect = content.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();

      if (sectionRect.top < window.innerHeight && sectionRect.bottom > 0) {
        // Animate logo
        anime({
          targets: logoElement,
          opacity: [0, 1],
          translateY: [-20, 0],
          duration: 1000,
          easing: "easeOutCubic",
        });

        // Animate h2 elements
        anime({
          targets: headers,
          opacity: [0, 1],
          translateY: [-20, 0],
          duration: 1000,
          delay: anime.stagger(200, { start: 300 }),
          easing: "easeOutCubic",
        });

        // Animate paragraphs and images within the content
        anime({
          targets: ".creative-school-section-content p",
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 1000,
          delay: anime.stagger(200, { start: 600 }),
          easing: "easeOutCubic",
        });

        anime({
          targets: ".creative-school-section-content img",
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 1000,
          delay: anime.stagger(200, { start: 600 }),
          easing: "easeOutCubic",
        });
      } else {
        // Reset animation when content is out of view
        anime({
          targets: logoElement,
          opacity: 0,
          translateY: -20,
          duration: 0,
        });

        anime({
          targets: headers,
          opacity: 0,
          translateY: -20,
          duration: 0,
        });

        anime({
          targets: ".creative-school-section-content p",
          opacity: 0,
          translateY: 30,
          duration: 0,
        });

        anime({
          targets: ".creative-school-section-content img",
          opacity: 0,
          translateY: 30,
          duration: 0,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger scroll event on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full founder-section h-screen min-h-screen py-16 px-4 bg-gray-100 text-gray-900 bg-cover bg-center relative"
    >
      {/* Logo at the top center */}
      <div className="flex justify-center mb-12">
        <img src={logo} alt="Logo" className="logo h-16 md:h-24" />
      </div>

      <div className="container mx-auto text-center px-4 md:px-8">
        <h2 className="text-6xl md:text-7xl  font-bold mb-6">
          WE CREATED
        </h2>
        <h2 className="text-6xl md:text-7xl  font-bold mb-6">
          A <span className="text-[#060273] text-6xl font-bold  md:text-7xl">SCHOOL.</span>
        </h2>

        <div className="flex flex-col items-center md:flex-row md:items-start justify-center gap-6 md:gap-12 creative-school-section-content">
          <img
            src="path/to/your/image1.jpg"
            alt="Description of Image 1"
            className="w-full md:w-1/2 lg:w-1/3 object-cover rounded-lg"
            style={{ maxHeight: "400px" }} 
          />
          <div className="flex flex-col items-center text-base md:text-lg lg:text-xl">
            <p className="mb-4 italic text-center md:text-left">
              So all creatives have an equal chance at becoming professional
              advertising creatives. No matter how you got here.
            </p>
            <p className="mb-4 italic text-center md:text-left">
              Our editors, designers, filmmakers, sound mixers, and entire
              production staff will be in your pocket, ready for you to use.
            </p>
            <p className="mb-4 italic text-center md:text-left">
              All you gotta do is show up, be yourself, and commit.
            </p>
            <p className="mb-4 italic text-center md:text-left">
              And if you make it a year, you’ll have a portfolio, knowledge, and
              experience that will put you among the most sought-after writers,
              designers, and art directors in the ad industry.
            </p>
          </div>
          <img
            src="path/to/your/image2.jpg"
            alt="Description of Image 2"
            className="w-full md:w-1/2 lg:w-1/3 object-cover rounded-lg"
            style={{ maxHeight: "400px" }} 
          />
        </div>
      </div>
    </section>
  );
};

export default CreativeSchoolSection;
