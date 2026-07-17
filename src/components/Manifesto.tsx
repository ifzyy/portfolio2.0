import React from 'react';
import Reveal from './Reveal';
import ScrollRevealText from './ScrollRevealText';

const Manifesto = () => {
  return (
    <section className="section bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="eyebrow mb-8">The difference</p>

        <Reveal>
          <p className="text-lg sm:text-xl text-muted/70 mb-6">
            Most engineers stop at the screen.
          </p>
        </Reveal>

        <ScrollRevealText
          text="I build the system behind it. The logic, the data, the edge cases, and the money that can never break."
          accentWords={['system', 'money']}
          accentClassName="text-gradient"
          className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight leading-[1.3] text-ink"
        />
      </div>
    </section>
  );
};

export default Manifesto;
