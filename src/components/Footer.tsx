import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/ifzyy',
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/johnson-emmanuel',
      icon: Linkedin
    },
    {
      name: 'Email',
      href: 'mailto:johnsonnifemi8@gmail.com',
      icon: Mail
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-white/20 relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 geometric-pattern opacity-5"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>
      
      {/* Floating elements */}
      <div 
        className="absolute top-10 left-1/4 w-16 h-16 border border-white/10 rotate-45 animate-float"
        style={{ transform: `translateY(${scrollY * 0.05}px) rotate(45deg)` }}
      ></div>
      <div 
        className="absolute bottom-10 right-1/3 w-12 h-12 bg-white/5 rounded-full animate-float"
        style={{ transform: `translateY(${scrollY * 0.08}px)`, animationDelay: '2s' }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Brand */}
          <div className="text-center md:text-left animate-fade-in-left">
            <h3 className="text-2xl font-bold gradient-text-static mb-2">Johnson Emmanuel</h3>
            <p className="text-gray-400">Full-Stack Engineer • CTO • Mentor</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 animate-fade-in-right">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-center w-12 h-12 glass hover:bg-white/20 rounded-lg transition-all duration-300 transform hover:scale-110 hover-glow animate-fade-in-up stagger-${index + 1} border-gradient`}
                  aria-label={link.name}
                >
                  <IconComponent className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8 animate-fade-in-up"></div>

        {/* Copyright */}
        <div className="text-center animate-fade-in-up">
          <p className="text-gray-400 flex items-center justify-center">
            © 2025. Designed with <Heart className="h-4 w-4 mx-1 text-gray-300 animate-pulse" /> by 
            <span className="text-white font-medium ml-1">Johnson Emmanuel</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;