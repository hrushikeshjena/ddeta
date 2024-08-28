
// import  { useState } from 'react';
// import { FaPlus, FaMinus } from 'react-icons/fa';

// const faqData = [
//   {
//     question: 'How is this different from other ad schools?',
//     answer: 'We\'re not just another ad school. We focus on real-world experience, collaboration with industry professionals, and giving you the tools you need to succeed.',
//   },
//   {
//     question: 'What if I don’t know what I want to be when I graduate?',
//     answer: 'That\'s okay! Our program is designed to help you discover your strengths and passions through hands-on projects and mentorship.',
//   },
//   {
//     question: 'How is this different from other ad schools?',
//     answer: 'We\'re not just another ad school. We focus on real-world experience, collaboration with industry professionals, and giving you the tools you need to succeed.',
//   },
//   {
//     question: 'What if I don’t know what I want to be when I graduate?',
//     answer: 'That\'s okay! Our program is designed to help you discover your strengths and passions through hands-on projects and mentorship.',
//   }, {
//     question: 'How is this different from other ad schools?',
//     answer: 'We\'re not just another ad school. We focus on real-world experience, collaboration with industry professionals, and giving you the tools you need to succeed.',
//   },
//   {
//     question: 'What if I don’t know what I want to be when I graduate?',
//     answer: 'That\'s okay! Our program is designed to help you discover your strengths and passions through hands-on projects and mentorship.',
//   },
// ];

// const FAQSection = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <div className="min-h-screen  bg-[#060273] py-16 px-4">
//       <div className="container mx-auto flex flex-col md:flex-row">
//         <div className="flex-1 mb-12 md:mb-0 md:pr-8"> {/* Add spacing here */}
//           <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
//           <div className="bg-white rounded-lg shadow-lg">
//             {faqData.map((faq, index) => (
//               <div
//                 key={index}
//                 className="border-b border-gray-200"
//               >
//                 <div
//                   className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
//                   onClick={() => toggleFAQ(index)}
//                 >
//                   <h2 className="text-lg font-medium text-black">
//                     {faq.question}
//                   </h2>
//                   <span className="text-black text-xl">
//                     {activeIndex === index ? (
//                       <FaMinus className="transform transition-transform duration-300" />
//                     ) : (
//                       <FaPlus className="transform transition-transform duration-300" />
//                     )}
//                   </span>
//                 </div>
//                 <div
//                   className={`p-4 overflow-hidden transition-max-height duration-500 ease-in-out ${
//                     activeIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//                   }`}
//                 >
//                   <p className="text-gray-700">{faq.answer}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex-none md:w-1/3">
//           <div className="bg-white rounded-lg shadow-lg p-8">
//             <h2 className="text-2xl font-bold mb-4">Get Started Now!</h2>
//             <p className="text-gray-700 mb-6">
//               Have more questions or ready to take the next step? Contact us today to learn more about our programs and how we can help you achieve your goals.
//             </p>
//             <a href="/contact" className="inline-block bg-[#060273] text-white py-3 px-6 rounded-lg shadow-md hover:bg-[#060273]-600 transition-colors duration-300">
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQSection;


import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: 'How is this different from other ad schools?',
    answer: 'We\'re not just another ad school. We focus on real-world experience, collaboration with industry professionals, and giving you the tools you need to succeed.',
  },
  {
    question: 'What if I don’t know what I want to be when I graduate?',
    answer: 'That\'s okay! Our program is designed to help you discover your strengths and passions through hands-on projects and mentorship.',
  },
  // Removed duplicate entries
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-[#060273] py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="flex-1 mb-12 md:mb-0 md:pr-8">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="bg-white rounded-lg shadow-lg">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200"
              >
                <div
                  className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
                  onClick={() => toggleFAQ(index)}
                >
                  <h2 className="text-lg font-medium text-black">
                    {faq.question}
                  </h2>
                  <span className="text-black text-xl">
                    {activeIndex === index ? (
                      <FaMinus className="transform transition-transform duration-300" />
                    ) : (
                      <FaPlus className="transform transition-transform duration-300" />
                    )}
                  </span>
                </div>
                <div
                  className={`p-4 overflow-hidden transition-max-height duration-500 ease-in-out ${
                    activeIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-none md:w-1/3">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Get Started Now!</h2>
            <p className="text-gray-700 mb-6">
              Have more questions or ready to take the next step? Contact us today to learn more about our programs and how we can help you achieve your goals.
            </p>
            <a href="/contact" className="inline-block bg-[#060273] text-white py-3 px-6 rounded-lg shadow-md hover:bg-[#04084e] transition-colors duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
