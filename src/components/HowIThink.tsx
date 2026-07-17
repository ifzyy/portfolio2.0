import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const principles = [
  {
    title: 'Ship, then scale',
    belief: 'Momentum beats perfection. Real users teach you more in a week than a whiteboard does in a month.',
    tradeoff: 'I accept some rework later so we can learn from production now.',
  },
  {
    title: 'Boring tech on purpose',
    belief: 'I reach for proven tools before shiny ones. Predictable systems let the team move fast without fear.',
    tradeoff: 'Fewer bragging rights, and far fewer 2 a.m. incidents.',
  },
  {
    title: 'Own the whole stack',
    belief: 'The best calls come from seeing the whole path, interface to database. Context is the real advantage.',
    tradeoff: 'I go deliberately less deep in any one layer to stay effective across all of them.',
  },
  {
    title: 'Optimize what users feel',
    belief: 'Perceived speed matters more than a benchmark. People remember how an app felt, not its numbers.',
    tradeoff: 'I skip a micro-optimization no one notices to fix the 200ms everyone does.',
  },
];

const HowIThink = () => {
  const [active, setActive] = useState(0);
  const current = principles[active];

  return (
    <section id="how-i-think" className="section bg-black border-t border-white/5">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="How I Think"
          title="Good products come from good decisions."
          subtitle="Not frameworks. Judgment. Pick one to see the call I make, and the tradeoff I take with it."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-4 lg:gap-10">
          {/* Selectable principles */}
          <Reveal>
            <div className="flex flex-col">
              {principles.map((p, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={p.title}
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className="group relative text-left py-5 border-b border-white/10 transition-colors"
                  >
                    <div className="flex items-baseline gap-4">
                      <span
                        className={`text-sm tabular-nums transition-colors ${
                          isActive ? 'text-accent' : 'text-muted/60'
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={`text-xl sm:text-2xl font-semibold tracking-tight transition-colors ${
                          isActive ? 'text-ink' : 'text-muted group-hover:text-ink'
                        }`}
                      >
                        {p.title}
                      </span>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="think-underline"
                        className="absolute -bottom-px left-0 h-px w-full bg-accent"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Detail panel */}
          <Reveal delay={0.08}>
            <div className="card h-full p-8 sm:p-10 flex flex-col justify-center min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-2xl sm:text-3xl font-medium leading-snug text-ink">
                    {current.belief}
                  </p>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="eyebrow mb-2 text-accent">The tradeoff I take</p>
                    <p className="text-lg text-muted leading-relaxed">{current.tradeoff}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HowIThink;
