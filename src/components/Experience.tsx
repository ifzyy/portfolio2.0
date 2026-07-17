import React from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const experiences = [
  {
    company: 'Wiibi Energy',
    position: 'Lead Web Engineer',
    location: 'Nigeria (Remote)',
    period: 'Dec 2025 — Present',
    description:
      'Leading the web engineering of a vertically integrated operating platform for a solar-energy retailer: store, payments, CRM and admin, in one codebase.',
    achievements: [
      'Delivered 7 integrated systems on one shared customer and order record',
      'Concurrency-safe money and stock, with no overselling under live load',
      'Hardened against 13 attack classes in a live pentest',
    ],
  },
  {
    company: 'Heally',
    position: 'Chief Technology Officer',
    location: 'Remote · United States',
    period: 'Feb 2024 — Jan 2026',
    description:
      'Led a learning-hub product suite end to end, from architecture and identity systems to a remote engineering team.',
    achievements: [
      'Built the platform and OAuth2 identity layer from the ground up',
      'Scaled delivery with CI/CD, Docker, and Azure',
      'Lead and mentor developers across multiple regions',
    ],
  },
  {
    company: 'Delsoft',
    position: 'Frontend Engineer',
    location: 'Lagos, Nigeria',
    period: 'Oct 2023 — Jan 2025',
    description:
      'Built responsive, modern interfaces in React and Tailwind CSS across a range of client projects.',
    achievements: [
      'Cut load times by 25% through targeted optimization',
      'Improved cross-browser consistency across every build',
      'Delivered pixel-perfect, responsive designs',
    ],
  },
  {
    company: 'Microverse',
    position: 'Mentor (Volunteer)',
    location: 'Remote',
    period: 'Aug 2022 — Jan 2024',
    description:
      'Mentored three junior developers through code reviews, pair sessions, and career guidance.',
    achievements: [
      'Guided mentees to their first professional roles',
      'Raised code quality through thorough reviews',
      'Coached on structure, motivation, and momentum',
    ],
  },
  {
    company: 'Freelance',
    position: 'Full-Stack Developer',
    location: 'Remote',
    period: 'May 2022 — Present',
    description:
      'Shipped production web apps that moved real numbers for clients: engagement, sales, and retention.',
    achievements: [
      'Built full-stack apps with React, Node.js, and MySQL',
      'Increased engagement and sales for multiple clients',
      'Delivered on time and within budget',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section bg-black border-t border-white/5">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked."
          subtitle="From mentoring my first developers to leading engineering as a CTO."
        />

        <div className="mt-16">
          {experiences.map((exp, index) => (
            <Reveal key={exp.company} delay={index * 0.05}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 border-t border-white/10 py-10">
                <div>
                  <h3 className="text-xl font-semibold text-ink">{exp.position}</h3>
                  <p className="mt-1 text-ink/80">{exp.company}</p>
                  <p className="mt-3 text-sm text-muted">{exp.period}</p>
                  <p className="text-sm text-muted">{exp.location}</p>
                </div>

                <div>
                  <p className="text-lg text-muted leading-relaxed">{exp.description}</p>
                  <ul className="mt-5 space-y-2.5">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3 text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
