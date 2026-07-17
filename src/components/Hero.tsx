import React, { useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(35);
  const sectionRef = useRef<HTMLElement>(null);

  // Content gently drifts up and fades as the hero scrolls away.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  // Spotlight that trails the cursor across the hero.
  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduceMotion) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
  };
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}% ${mouseY}%, rgba(41,151,255,0.12), transparent 65%)`;

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const drift = (a: number[], b: number[], d: number) =>
    reduceMotion ? {} : { animate: { x: a, y: b }, transition: { duration: d, repeat: Infinity, ease: 'easeInOut' } };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Drifting spectrum aurora + cursor-follow spotlight */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-24 h-[520px] w-[520px] rounded-full bg-violet/25 blur-[130px]"
          {...drift([0, 70, 0], [0, 50, 0], 20)}
        />
        <motion.div
          className="absolute top-1/4 -right-32 h-[560px] w-[560px] rounded-full bg-accent/20 blur-[140px]"
          {...drift([0, -60, 0], [0, 70, 0], 26)}
        />
        <motion.div
          className="absolute -bottom-40 left-1/4 h-[460px] w-[460px] rounded-full bg-cyan/15 blur-[130px]"
          {...drift([0, 50, 0], [0, -40, 0], 30)}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 h-[360px] w-[360px] rounded-full bg-solar/10 blur-[130px]"
          {...drift([0, -40, 0], [0, 30, 0], 34)}
        />
      </div>
      <motion.div className="absolute inset-0" style={{ background: spotlight }} />

      <motion.div
        className="relative z-10 max-w-content mx-auto px-6 text-center"
        style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity, scale: contentScale }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={item} className="eyebrow mb-6">
          Full-Stack Engineer · Lead Web Engineer at Wiibi Energy
        </motion.p>

        <motion.h1
          variants={item}
          className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tightest leading-[0.98] text-ink"
        >
          I am Johnson.
          <br />
          <span className="text-gradient">I build software</span>
          <br />
          people rely on.
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-8 max-w-2xl text-xl sm:text-2xl text-muted leading-relaxed"
        >
          I design and build whole products, from the first commit to production scale.
          Fast, reliable, and built to hold under real load.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-11 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Magnetic className="inline-block">
            <button
              onClick={() => scrollTo('#case-study')}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-medium text-black transition-transform duration-300 hover:scale-[1.03]"
            >
              See the work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Magnetic>
          <Magnetic className="inline-block">
            <button
              onClick={() => scrollTo('#contact')}
              className="rounded-full px-7 py-3.5 font-medium text-accent transition-colors hover:text-white"
            >
              Get in touch
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <div className="h-9 w-5 rounded-full border border-white/20 flex justify-center pt-1.5" aria-hidden>
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-muted"
            animate={reduceMotion ? undefined : { y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
