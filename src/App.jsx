import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/contact/ContactSection";
import ProjectSection from "./components/projects/ProjectSection";
import Loader from "./components/ui/Loader";
import SmoothScrollWrapper from "./components/ui/SmoothScrollWrapper";
import InteractiveSkillsSection from "./components/skills/InteractiveSkillsSection";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3-second loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <SmoothScrollWrapper>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="skills">
          <InteractiveSkillsSection />
        </section>

        <section id="projects">
          <ProjectSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        <Footer />
      </div>
    </SmoothScrollWrapper>
  );
}

export default App;
