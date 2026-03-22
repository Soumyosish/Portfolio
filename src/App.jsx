import React from "react";  
import { Navbar } from "./components/Navbar";
import HomePage from "./components/HomePage";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Education from './components/Education';
const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Skills />
      <HomePage />
      <Projects />
      <Education/>
      <Certifications />
      <Achievements />
      <Footer />
    </>
  );
};

export default App;
