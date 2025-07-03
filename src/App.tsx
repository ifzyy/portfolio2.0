import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Experience from './components/Experience';
import BehindTheCode from './components/BehindTheCode';
import Toolbox from './components/Toolbox';
import DevLife from './components/DevLife';
import Impact from './components/Impact';
import TerminalSkills from './components/TerminalSkills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

    
      {/* Ambient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50" />
      
      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
            }}
          />
        ))}
      </div>

      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <BehindTheCode />
      <Toolbox />
      <TerminalSkills />
      <Experience />
      <DevLife />
      <Impact />
      <Testimonials />
      <Contact />
      <Footer />
      

    </div>
  );
}

export default App;