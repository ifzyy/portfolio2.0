import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Counts up to `target` once the element scrolls into view.
// Keeps any non-numeric characters (e.g. "+", "%") from the label around the number.
export function useCountUp(value: string, duration = 1400) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const prefix = match?.[1] ?? '';
  const target = match ? parseInt(match[2], 10) : 0;
  const suffix = match?.[3] ?? '';

  const [display, setDisplay] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplay(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return { ref, text: `${prefix}${display}${suffix}` };
}
