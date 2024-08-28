// import React, { useEffect } from 'react';
// import anime from 'animejs';
// import 'tailwindcss/tailwind.css';
// import image from '../assets/graphics.jpg'; // Adjust the path to your image

// const WhoAreWe = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       anime({
//         targets: '.animate',
//         opacity: [0, 1],
//         translateY: [50, 0],
//         duration: 1000,
//         easing: 'easeOutQuad',
//         delay: anime.stagger(200, { start: 500 }),
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Trigger animation on initial load

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section className="bg-[#060273] w-screen h-screen flex flex-col justify-center items-center">
//       <div className="text-center mb-12 animate">
//         <h2 className="text-6xl font-bold mb-4 text-white">WHO ARE WE?</h2>
//         <h2 className="text-8xl font-semibold text-white mb-4">WE’RE GS&P.</h2>
//       </div>
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
//         <div className="md:w-1/2 flex flex-col items-center mb-8 md:mb-0 animate">
//           <div className="text-center">
//             <p className="text-xl mb-2 text-white">Fast Company’s 2021</p>
//             <p className="text-xl mb-2 text-white">“Most Innovative Agency in the World”</p>
//             <p className="text-xl mb-2 text-white">Campaign Magazine’s 2020 Agency of the Year</p>
//             <p className="text-xl mb-2 text-white">A-List winner</p>
//             <p className="text-xl text-white">2018, 2019, 2020, 2021, 2022</p>
//           </div>
//         </div>
//         <div className="md:w-1/2 flex justify-center animate">
//           <img src={image} alt="GS&P" className="w-full h-80 object-cover rounded-lg shadow-lg" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhoAreWe;

import React, { useEffect } from 'react';
import anime from 'animejs';
import 'tailwindcss/tailwind.css';
import image from '../assets/graphics.jpg'; // Adjust the path to your image

const WhoAreWe = () => {
  useEffect(() => {
    const handleScroll = () => {
      anime({
        targets: '.animate',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: 'easeOutQuad',
        delay: anime.stagger(200, { start: 500 }),
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger animation on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-[#060273] w-full h-auto min-h-screen flex flex-col justify-center items-center py-8">
      <div className="text-center mb-12 animate">
        <h2 className="text-4xl sm:text-6xl font-bold mb-4 text-white">WHO ARE WE?</h2>
        <h2 className="text-5xl sm:text-8xl font-semibold text-white mb-4">WE’RE GS&P.</h2>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 flex flex-col items-center mb-8 md:mb-0 animate">
          <div className="text-center">
            <p className="text-lg sm:text-xl mb-2 text-white">Fast Company’s 2021</p>
            <p className="text-lg sm:text-xl mb-2 text-white">“Most Innovative Agency in the World”</p>
            <p className="text-lg sm:text-xl mb-2 text-white">Campaign Magazine’s 2020 Agency of the Year</p>
            <p className="text-lg sm:text-xl mb-2 text-white">A-List winner</p>
            <p className="text-lg sm:text-xl text-white">2018, 2019, 2020, 2021, 2022</p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center animate">
          <img src={image} alt="GS&P" className="w-full h-auto max-w-lg object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
