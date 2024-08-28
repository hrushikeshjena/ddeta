// import { useEffect, useRef } from "react";
// import anime from "animejs";
// import logo from "../assets/logo.png"; // Import your logo image

// const CreativeSchoolSection = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = sectionRef.current;
//       if (!section) return;

//       const sectionRect = section.getBoundingClientRect();

//       if (sectionRect.top < window.innerHeight && sectionRect.bottom > 0) {
//         // Animate paragraphs and images within the section
//         anime({
//           targets: ".creative-school-section .content p",
//           opacity: [0, 1],
//           translateY: [20, 0],
//           duration: 800,
//           delay: (el, i) => i * 300,
//           easing: "easeOutExpo",
//         });

//         anime({
//           targets: ".creative-school-section .content img",
//           opacity: [0, 1],
//           translateY: [20, 0],
//           duration: 800,
//           delay: (el, i) => i * 300,
//           easing: "easeOutExpo",
//         });
//       } else {
//         // Reset animation when section is out of view
//         anime({
//           targets: ".creative-school-section .content p",
//           opacity: 0,
//           translateY: 20,
//           duration: 0,
//         });

//         anime({
//           targets: ".creative-school-section .content img",
//           opacity: 0,
//           translateY: 20,
//           duration: 0,
//         });
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Trigger scroll event on initial load

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-screen h-screen py-16 px-4 bg-gray-100 text-gray-900 bg-cover bg-center relative creative-school-section"
//     >
//       {/* Logo at the top center */}
//       <div className="flex justify-center mb-12">
//         <img src={logo} alt="Logo" className="h-16 md:h-24" />
//       </div>

//       <div className="container mx-auto text-center px-4 md:px-8">
//         <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
//           WE CREATED
//         </h2>
//         <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
//           A <span className="text-[#060273]">SCHOOL.</span>
//         </h2>

//         <div className=" flex flex-col items-center md:flex-row md:items-start justify-center gap-6 md:gap-12">
//           <img
//             src="path/to/your/image1.jpg"
//             alt="Description of Image 1"
//             className="w-full md:w-1/2 lg:w-1/3 object-cover"
//             style={{ maxHeight: '400px' }} // Optional: Set max-height for better responsiveness
//           />
//           <div className="flex flex-col items-center text-base md:text-lg">
//             <p className="mb-4 text-center">
//               So all creatives have an equal chance at becoming professional
//               advertising creatives. No matter how you got here.
//             </p>
//             <p className="mb-4 text-center">
//               Our editors, designers, filmmakers, sound mixers, and entire
//               production staff will be in your pocket, ready for you to use.
//             </p>
//             <p className="mb-4 text-center">
//               All you gotta do is show up, be yourself, and commit.
//             </p>
//             <p className="mb-4 text-center">
//               And if you make it a year, you’ll have a portfolio, knowledge, and
//               experience that will put you among the most sought-after writers,
//               designers, and art directors in the ad industry.
//             </p>
//           </div>
//           <img
//             src="path/to/your/image2.jpg"
//             alt="Description of Image 2"
//             className="w-full md:w-1/2 lg:w-1/3 object-cover"
//             style={{ maxHeight: '400px' }} // Optional: Set max-height for better responsiveness
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CreativeSchoolSection;


import { useEffect, useRef } from "react";
import anime from "animejs";
import logo from "../assets/logo.png"; // Import your logo image

const CreativeSchoolSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const content = section.querySelector(".creative-school-section-content");
      if (!content) return;

      const contentRect = content.getBoundingClientRect();

      if (contentRect.top < window.innerHeight && contentRect.bottom > 0) {
        // Animate paragraphs and images within the content
        anime({
          targets: ".creative-school-section-content p",
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 800,
          delay: (el, i) => i * 300,
          easing: "easeOutExpo",
        });

        anime({
          targets: ".creative-school-section-content img",
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 800,
          delay: (el, i) => i * 300,
          easing: "easeOutExpo",
        });
      } else {
        // Reset animation when content is out of view
        anime({
          targets: ".creative-school-section-content p",
          opacity: 0,
          translateY: 20,
          duration: 0,
        });

        anime({
          targets: ".creative-school-section-content img",
          opacity: 0,
          translateY: 20,
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
      className="w-screen h-screen py-16 px-4 bg-gray-100 text-gray-900 bg-cover bg-center relative"
    >
      {/* Logo at the top center */}
      <div className="flex justify-center mb-12">
        <img src={logo} alt="Logo" className="h-16 md:h-24" />
      </div>

      <div className="container mx-auto text-center px-4 md:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
          WE CREATED
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
          A <span className="text-[#060273]">SCHOOL.</span>
        </h2>

        <div className="flex flex-col items-center md:flex-row md:items-start justify-center gap-6 md:gap-12 creative-school-section-content">
          <img
            src="path/to/your/image1.jpg"
            alt="Description of Image 1"
            className="w-full md:w-1/2 lg:w-1/3 object-cover"
            style={{ maxHeight: '400px' }} // Optional: Set max-height for better responsiveness
          />
          <div className="flex flex-col items-center text-base md:text-lg">
            <p className="mb-4 text-center">
              So all creatives have an equal chance at becoming professional
              advertising creatives. No matter how you got here.
            </p>
            <p className="mb-4 text-center">
              Our editors, designers, filmmakers, sound mixers, and entire
              production staff will be in your pocket, ready for you to use.
            </p>
            <p className="mb-4 text-center">
              All you gotta do is show up, be yourself, and commit.
            </p>
            <p className="mb-4 text-center">
              And if you make it a year, you’ll have a portfolio, knowledge, and
              experience that will put you among the most sought-after writers,
              designers, and art directors in the ad industry.
            </p>
          </div>
          <img
            src="path/to/your/image2.jpg"
            alt="Description of Image 2"
            className="w-full md:w-1/2 lg:w-1/3 object-cover"
            style={{ maxHeight: '400px' }} // Optional: Set max-height for better responsiveness
          />
        </div>
      </div>
    </section>
  );
};

export default CreativeSchoolSection;
