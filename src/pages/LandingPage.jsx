import CourseCardSection from "../section/Course";
import FAQSection from "../section/Faq";
import FounderSection from "../section/Founder";
import HeroSection from "../section/Hero";
import WelcomeSection from "../section/Welcome";
import CreativeSchoolSection from "../section/WeAreCreated";
import WhoWeAre from "../section/WhoWeAre.jsx";
import LocationSection from "../section/Where";
import TestimonialsSection from "../section/Testimonial";
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
