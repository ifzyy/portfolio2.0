import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    { name: 'Home', progress: 0 },
    { name: 'Services', progress: 12.5 },
    { name: 'Portfolio', progress: 25 },
    { name: 'About', progress: 37.5 },
    { name: 'Behind the Code', progress: 50 },
    { name: 'Skills', progress: 62.5 },
    { name: 'Experience', progress: 75 },
    { name: 'Contact', progress: 87.5 },
  ];

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-black/50 backdrop-blur-sm">
        <motion.div
          className="h-full bg-gradient-to-r from-white to-gray-300"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
        
        {/* Section markers */}
        <div className="absolute top-0 left-0 right-0 h-full">
          {sections.map((section, index) => (
            <div
              key={index}
              className="absolute top-0 h-full w-px bg-white/20"
              style={{ left: `${section.progress}%` }}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-white/60 whitespace-nowrap">
                {section.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-lg z-50 hover:bg-gray-200 transition-colors"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp className="h-6 w-6" />
      </motion.button>
    </>
  );
};

export default ScrollProgress;