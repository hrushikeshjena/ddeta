import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
// import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
