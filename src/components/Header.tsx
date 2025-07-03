import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Johnson_Emmanuel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-strong shadow-2xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('#home')}
              className="text-2xl font-bold text-white hover:text-gray-300 transition-all duration-300 magnetic"
            >
              Johnson
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-gray-300 hover:text-white transition-all duration-300 font-medium relative group animate-fade-in-up stagger-${index + 1}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Resume Button - Desktop */}
          <div className="hidden md:flex">
            <button
              onClick={handleResumeDownload}
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 rounded-lg font-medium hover-glow ripple"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300 magnetic"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-card rounded-lg mt-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300 font-medium rounded-lg hover:bg-white/10"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={handleResumeDownload}
                className="flex items-center w-full px-3 py-2 text-white hover:text-gray-300 transition-colors duration-300 font-medium rounded-lg hover:bg-white/10"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;