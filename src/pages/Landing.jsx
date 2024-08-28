import CourseCardSection from "../section/Course.jsx";
import FAQSection from "../section/Faq.jsx";
import FounderSection from "../section/Founder.jsx";
import HeroSection from "../section/Hero.jsx";
import WelcomeSection from "../section/Welcome.jsx";
import CreativeSchoolSection from "../section/WeAreCreated.jsx";
import WhoWeAre from "../section/WhoWeAre.jsx";
import LocationSection from "../section/Where.jsx";
import TestimonialsSection from "../section/Testimonial.jsx";
const LandingPage = () => {
  return (
    <>
    <HeroSection/>
    <FounderSection/>
      <WelcomeSection />
      <CourseCardSection/>
      <WhoWeAre />
      <CreativeSchoolSection/>
      <LocationSection/>
     < TestimonialsSection/>
      <FAQSection />
    </>
  );
};

export default LandingPage;
