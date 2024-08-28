// import { useEffect, useState } from "react";
// import { Link } from "react-scroll";
// import anime from "animejs";
// import { FaHome, FaLaptopCode, FaBullhorn, FaBrush } from "react-icons/fa";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

//   useEffect(() => {
//     // Animation for the header title
//     anime({
//       targets: ".header-title",
//       opacity: [0, 1],
//       translateY: [-30, 0],
//       easing: "easeOutExpo",
//       duration: 1000,
//     });

//     // Animation for the navigation links
//     anime({
//       targets: ".nav-link",
//       opacity: [0, 1],
//       translateY: [20, 0],
//       easing: "easeOutExpo",
//       delay: anime.stagger(100), // Staggered delay
//       duration: 1000,
//     });
//   }, []);

//   return (
//     <header className="bg-[#060273] text-white py-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <img
//           src={logo}
//           alt="Digital Deta Logo"
//           className="header-title h-12 w-auto"
//         />
//         <button
//           className="block lg:hidden text-white focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             ></path>
//           </svg>
//         </button>
//         <nav
//           className={`${
//             isMenuOpen ? "block" : "hidden"
//           } lg:flex lg:items-center w-full lg:w-auto`}
//         >
//           <ul className="lg:flex lg:space-x-4 lg:items-center">
//             <li>
//               <Link
//                 to="Home"
//                 smooth={true}
//                 duration={500}
//                 className="nav-link hover:underline cursor-pointer block py-2 lg:py-0 flex items-center space-x-2"
//               >
//                 <FaHome className="text-xl" />
//                 <span>Home</span>
//               </Link>
//             </li>

//             <li className="relative">
//               <button
//                 onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
//                 className="nav-link hover:underline cursor-pointer block py-2 lg:py-0 flex items-center space-x-2"
//               >
//                 <FaLaptopCode className="text-xl" />
//                 <span>Courses</span>
//               </button>
//               {isCoursesDropdownOpen && (
//                 <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg w-48 lg:w-64">
//                   <li>
//                     <Link
//                       to="#"
//                       smooth={true}
//                       duration={500}
//                       className="block px-4 py-2 hover:bg-gray-100 flex items-center space-x-2"
//                     >
//                       <FaBrush className="text-lg" />
//                       <span>Web Development</span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="#"
//                       smooth={true}
//                       duration={500}
//                       className="block px-4 py-2 hover:bg-gray-100 flex items-center space-x-2"
//                     >
//                       <FaBullhorn className="text-lg" />
//                       <span>Digital Marketing</span>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="#"
//                       smooth={true}
//                       duration={500}
//                       className="block px-4 py-2 hover:bg-gray-100 flex items-center space-x-2"
//                     >
//                       <FaBrush className="text-lg" />
//                       <span>Graphics Design</span>
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>

//             <li>
//               <Link
//                 to="contact"
//                 smooth={true}
//                 duration={500}
//                 className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100 cursor-pointer block lg:inline-block flex items-center space-x-3"
//               >
//                 <FaBullhorn className="text-xl" />
//                 <span>Contact</span>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import anime from "animejs";
import { FaHome, FaLaptopCode, FaBullhorn, FaBrush } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    // Animation for the header title
    anime({
      targets: ".header-title",
      opacity: [0, 1],
      translateY: [-30, 0],
      easing: "easeOutExpo",
      duration: 1000,
    });

    // Animation for the navigation links
    anime({
      targets: ".nav-link",
      opacity: [0, 1],
      translateY: [20, 0],
      easing: "easeOutExpo",
      delay: anime.stagger(100), // Staggered delay
      duration: 1000,
    });
  }, []);

  return (
    <header className="bg-[#060273] text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <img
          src={logo}
          alt="Digital Deta Logo"
          className="header-title h-12 w-auto"
        />
        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center w-full lg:w-auto`}
        >
          <ul className="lg:flex lg:space-x-6 lg:items-center">
            <li>
              <Link
                to="/"
                smooth={true}
                duration={500}
                className="nav-link hover:underline cursor-pointer flex items-center space-x-3 py-2 lg:py-0"
              >
                <FaHome className="text-xl" />
                <span>Home</span>
              </Link>
            </li>

            <li className="relative">
              <button
                onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
                className="nav-link hover:underline cursor-pointer flex items-center space-x-3 py-2 lg:py-0"
              >
                <FaLaptopCode className="text-xl" />
                <span>Courses</span>
              </button>
              {isCoursesDropdownOpen && (
                <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg w-48 lg:w-64">
                  <li>
                    <Link
                      to="#"
                      smooth={true}
                      duration={500}
                      className="block px-4 py-2 hover:bg-gray-100 flex items-center space-x-3"
                    >
                      <FaBrush className="text-lg" />
                      <span>Web Development</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      smooth={true}
                      duration={500}
                      className="block px-4 py-2 hover:bg-gray-100 flex items-center space-x-3"
                    >
                      <FaBullhorn className="text-lg" />
                      <span>Digital Marketing</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      smooth={true}
                      duration={500}
                      className="block px-4 py-2 hover:bg-gray-100 flex items-center space-x-3"
                    >
                      <FaBrush className="text-lg" />
                      <span>Graphics Design</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/contact"
                smooth={true}
                duration={500}
                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100 cursor-pointer flex items-center space-x-3"
              >
                <FaBullhorn className="text-l" />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
