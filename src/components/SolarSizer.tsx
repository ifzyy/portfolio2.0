import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Common Nigerian household loads (watts). Enough to feel real, not exhaustive.
const appliances = [
  { name: 'Lights', watts: 60 },
  { name: 'Phones & laptops', watts: 120 },
  { name: 'TV & decoder', watts: 150 },
  { name: 'Ceiling fans', watts: 160 },
  { name: 'Fridge', watts: 200 },
  { name: 'Chest freezer', watts: 300 },
  { name: 'Water pump', watts: 750 },
  { name: 'Air conditioner', watts: 900 },
  { name: 'Microwave', watts: 1200 },
  { name: 'Electric cooker', watts: 2500 },
  { name: 'Water heater', watts: 3000 },
];

// The real 6-tier package ladder.
const tiers = [1.5, 2.5, 3.5, 5, 7.5, 10]; // kVA
const SAFETY_MARGIN = 1.25; // 25% inverter headroom

// Tween a number toward its target so the load counter feels alive.
const AnimatedNumber = ({ value }: { value: number }) => {
  const [display, setDisplay] = useState(value);
  const from = useRef(value);

  useEffect(() => {
    const start = performance.now();
    const startVal = from.current;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / 450, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(startVal + (value - startVal) * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
      else from.current = value;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return <>{display.toLocaleString()}</>;
};

const SolarSizer = () => {
  // Start with a realistic starter home so the result is populated on load.
  const [selected, setSelected] = useState<Set<number>>(new Set([0, 1, 2, 4]));

  const toggle = (i: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const totalWatts = useMemo(
    () => [...selected].reduce((sum, i) => sum + appliances[i].watts, 0),
    [selected]
  );

  const requiredVA = totalWatts * SAFETY_MARGIN;
  const recommendedIndex = tiers.findIndex((t) => t * 1000 >= requiredVA);
  const isCustom = totalWatts > 0 && recommendedIndex === -1;

  return (
    <div className="card p-6 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8">
        {/* Left — pick your loads */}
        <div>
          <p className="text-sm text-muted mb-4">
            What do you want to keep running?
          </p>
          <div className="flex flex-wrap gap-2.5">
            {appliances.map((a, i) => {
              const on = selected.has(i);
              return (
                <button
                  key={a.name}
                  onClick={() => toggle(i)}
                  aria-pressed={on}
                  className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 ${
                    on
                      ? 'border-accent/60 bg-accent/10 text-ink'
                      : 'border-white/12 text-muted hover:border-white/30 hover:text-ink'
                  }`}
                >
                  {a.name}
                  <span className={`ml-2 text-xs ${on ? 'text-accent' : 'text-muted/60'}`}>
                    {a.watts}W
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right — the recommendation */}
        <div className="rounded-2xl bg-black/40 border border-white/8 p-6 flex flex-col">
          <p className="eyebrow mb-2">Estimated load</p>
          <div className="text-4xl sm:text-5xl font-semibold tracking-tightest text-ink tabular-nums">
            <AnimatedNumber value={totalWatts} />
            <span className="text-2xl text-muted ml-1">W</span>
          </div>

          {/* Tier ladder — an equalizer that fills to the recommended system */}
          <div className="mt-7 flex items-end gap-1.5 h-16">
            {tiers.map((t, i) => {
              const filled = !isCustom && recommendedIndex >= 0 && i <= recommendedIndex;
              const isRec = i === recommendedIndex && !isCustom;
              return (
                <div key={t} className="flex-1 flex flex-col items-center gap-1.5">
                  <motion.div
                    className={`w-full rounded-t ${
                      isRec ? 'bg-solar' : filled ? 'bg-white/40' : 'bg-white/10'
                    }`}
                    initial={false}
                    animate={{ height: `${20 + i * 14}%`, opacity: isRec ? 1 : filled ? 0.9 : 0.5 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ minHeight: 6, boxShadow: isRec ? '0 0 20px rgba(255,176,32,0.5)' : 'none' }}
                  />
                  <span className={`text-[10px] tabular-nums ${isRec ? 'text-solar' : 'text-muted/50'}`}>
                    {t}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Result line */}
          <div className="mt-6 pt-5 border-t border-white/10 min-h-[64px]">
            <AnimatePresence mode="wait">
              {totalWatts === 0 ? (
                <motion.p key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-muted text-sm">
                  Pick a few loads to size a system.
                </motion.p>
              ) : isCustom ? (
                <motion.div key="custom" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <p className="text-lg font-medium text-ink">Beyond the 10 kVA ladder.</p>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-accent">
                    We'd capture this as a custom-quote lead
                    <ArrowRight className="h-3.5 w-3.5" />
                  </p>
                </motion.div>
              ) : (
                <motion.div key={recommendedIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <p className="text-sm text-muted">Recommended system</p>
                  <p className="text-2xl font-semibold text-gradient-solar">{tiers[recommendedIndex]} kVA</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <p className="mt-6 text-xs text-muted/70">
        Quick estimate · 25% inverter safety margin. The live engine also sizes battery kWh,
        solar kWp and chemistry per city. This is the recreated first step.
      </p>
    </div>
  );
};

export default SolarSizer;
