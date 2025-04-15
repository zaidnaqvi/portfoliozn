import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/contact/ContactSection";
import ProjectSection from "./components/projects/ProjectSection";
import Loader from "./components/ui/Loader"; // 🔥 Import Loader

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3-second loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />; // 💥 Show loader first

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <HeroSection />
        <div className="flex-grow">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
