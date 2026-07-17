import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Work', href: '#case-study' },
  { name: 'Approach', href: '#how-i-think' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        isScrolled ? 'header-blur border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => scrollToSection('#home')}
            className="text-lg font-semibold tracking-tight text-ink"
          >
            Johnson Emmanuel
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={handleResumeDownload}
              className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-ink transition-colors hover:bg-white hover:text-black"
            >
              Résumé
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-ink"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="rounded-lg px-3 py-2.5 text-left text-muted transition-colors hover:bg-white/5 hover:text-ink"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={handleResumeDownload}
                className="rounded-lg px-3 py-2.5 text-left text-ink transition-colors hover:bg-white/5"
              >
                Download résumé
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
