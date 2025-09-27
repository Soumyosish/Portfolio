import React from "react";  
import { Navbar } from "./components/Navbar";
import HomePage from "./components/HomePage";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Skills />
      <HomePage />
      <Projects />
      <Certifications />
      <Achievements />
      <Footer />
    </>
  );
};

export default App;
