import React from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const testimonials = [
  {
    name: 'David Amagada',
    role: 'CEO, Delsoft',
    content:
      'Johnson turned our outdated site into a modern, responsive platform that measurably lifted our conversion rate. His command of both frontend and backend made him the obvious choice.',
  },
  {
    name: 'Joseph',
    role: 'Founder & CEO, Heally',
    content:
      'Working with Johnson was a pleasure. He grasped our technical needs and pushed the product further with ideas we hadn’t considered. Top-notch code, and he communicates the whole way through.',
  },
  {
    name: 'Joseph Gbadamosi',
    role: 'Copywriter, josephgbadamosi.com',
    content:
      'Johnson rebuilt my outdated site into something modern and fast, and it brought in more clients, local and international.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-black border-t border-white/5">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="In their words."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <Reveal key={t.name + t.role} delay={index * 0.08}>
              <figure className="card h-full p-8 flex flex-col">
                <blockquote className="text-lg text-ink/90 leading-relaxed">
                  “{t.content}”
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-white/10">
                  <div className="font-medium text-ink">{t.name}</div>
                  <div className="text-sm text-muted">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
