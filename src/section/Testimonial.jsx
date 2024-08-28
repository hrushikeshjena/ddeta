import React, { useEffect } from 'react';
import anime from 'animejs';
import { FaQuoteLeft } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

// Dummy image imports (replace with actual paths)
// import img1 from '../assets/testimonial1.jpg'; 
// import img2 from '../assets/testimonial2.jpg';
// import img3 from '../assets/testimonial3.jpg';

const testimonials = [
  {
    quote: "I am now an art director at one of the best advertising agencies in the world. I don’t know how else this can happen if not for programs like the Academy.",
    name: "Mayra Aguilar",
    position: "Art Director, Goodby Silverstein & Partners",
    // image: img1,
  },
  {
    quote: "My year at the Academy was an invaluable experience that I would move across the country again to do it a second time. 1,000% worth it!",
    name: "Erin Allen",
    position: "Art Director, Logitech",
    // image: img2,
  },
  {
    quote: "The Academy helped me build a portfolio that can compete at the highest level showcasing my personality, collaborative ideas, and different styles.",
    name: "Will Broussard",
    position: "Art Director",
    // image: img3,
  },
  {
    quote: "I had one goal: to become an advertising copywriter. After the program: goal accomplished.",
    name: "Maddy Cormier",
    position: "Copywriter, Barrett Hofherr",
    // image: img1,
  },
  {
    quote: "I learned from the most talented creatives in the field, and they guided me to a career I love.",
    name: "Sonam Dhanjal",
    position: "Art Director, Wolfgang",
    // image: img2,
  },
];

const TestimonialsSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      anime({
        targets: '.testimonial',
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
    <section className="bg-gray-100 py-12 founder-section ">
      <div className="container mx-auto px-4">
      <h2 className="text-7xl font-bold text-center mb-4">THE <span className="text-[#060273]">HYPE</span> </h2>

        <h2 className="text-2xl font-bold text-center mb-12">Some Wor</h2>
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start relative testimonial"
            >
              <FaQuoteLeft className="absolute top-4 left-4 text-gray-400 text-3xl sm:text-4xl" />
              <img
                src={testimonial.image || 'https://via.placeholder.com/150'} // Use placeholder if image not provided
                alt={testimonial.name}
                className="w-12 h-12 rounded-full border-2 border-gray-300 absolute top-4 right-4 object-cover"
              />
              <p className="text-gray-700 italic mb-4 text-sm sm:text-base">{testimonial.quote}</p>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">{testimonial.name}</p>
              <p className="text-gray-600 text-sm sm:text-base">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
