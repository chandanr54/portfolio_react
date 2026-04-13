import React from "react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="scroll-smooth"
    >
      <Navbar />

      {/* Add top spacing because navbar is fixed */}
      <div className="pt-15">

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

      </div>

      <Footer />
    </motion.div>
  );
};

export default Home;