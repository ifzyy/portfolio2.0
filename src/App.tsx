import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Manifesto from './components/Manifesto';
import CaseStudy from './components/CaseStudy';
import HowIThink from './components/HowIThink';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-ink overflow-x-hidden">
      {/* Fine film grain for depth */}
      <div className="grain" aria-hidden />

      <div className="relative z-[2]">
        <Header />
        <main>
          {/* Value → Thesis → Proof → Thinking → Breadth → Credibility → Close */}
          <Hero />
          <Marquee />
          <Manifesto />
          <CaseStudy />
          <HowIThink />
          <Portfolio />
          <About />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
