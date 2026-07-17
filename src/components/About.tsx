import React from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { useCountUp } from '../hooks/useCountUp';

const stats = [
  { number: '3+', label: 'Years shipping production software' },
  { number: '10+', label: 'Projects delivered end to end' },
  { number: '3', label: 'Developers mentored to their first roles' },
  { number: '25%', label: 'Faster load times through optimization' },
];

const Stat = ({ number, label }: { number: string; label: string }) => {
  const { ref, text } = useCountUp(number);
  return (
    <div ref={ref}>
      <div className="text-4xl sm:text-5xl font-semibold tracking-tightest text-ink tabular-nums">
        {text}
      </div>
      <p className="mt-3 text-sm text-muted leading-snug max-w-[15rem]">{label}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="section bg-black border-t border-white/5">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading eyebrow="About" title="Engineering, with a bias for shipping." />

        <div className="mt-10 max-w-2xl space-y-6 text-lg text-muted leading-relaxed">
          <Reveal>
            <p>
              I'm a full-stack engineer from Nigeria who builds whole products, not just screens.
              Right now I'm lead web engineer at Wiibi Energy, a solar retailer that runs its
              entire business on the platform I build.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              I've also led engineering as a CTO and mentored developers into their first roles.
              I care about the parts users never see but always feel: money that can't
              double-charge, systems that hold under load, and code the next engineer can read.
            </p>
          </Reveal>
        </div>

        {/* Stats — stated once, plainly */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 border-t border-white/10 pt-12">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06}>
              <Stat number={stat.number} label={stat.label} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
