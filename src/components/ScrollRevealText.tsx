import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'framer-motion';

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">
      {children}
    </motion.span>
  );
};

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  /** Words to highlight once revealed. */
  accentWords?: string[];
  /** Class applied to accent words (e.g. a gradient). Defaults to the blue accent. */
  accentClassName?: string;
}

/**
 * Dims a block of text, then lights it up word-by-word as it moves through
 * the viewport. The classic Apple/Linear "statement" effect.
 */
const ScrollRevealText = ({
  text,
  className,
  accentWords = [],
  accentClassName = 'text-accent',
}: ScrollRevealTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.5'],
  });

  const words = text.split(' ');
  const accent = new Set(accentWords.map((w) => w.toLowerCase()));

  // Reduced motion: show the statement fully, no scrubbing.
  if (reduceMotion) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const clean = word.replace(/[.,—]/g, '').toLowerCase();
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {accent.has(clean) ? <span className={accentClassName}>{word}</span> : word}
          </Word>
        );
      })}
    </p>
  );
};

export default ScrollRevealText;
