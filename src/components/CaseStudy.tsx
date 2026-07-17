import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  ChevronDown,
  CreditCard,
  Mail,
  LifeBuoy,
  Tag,
  BarChart3,
  Users,
  LayoutDashboard,
  ShieldCheck,
  Lock,
  Database,
  Zap,
} from 'lucide-react';
import Reveal from './Reveal';
import ArchitectureDiagram from './ArchitectureDiagram';
import SolarSizer from './SolarSizer';

const gaps = [
  { title: 'Sizing', line: 'Customers know the problem, "keep my lights on," not the product.', color: '#ffb020' },
  { title: 'Integrity', line: 'High-ticket orders. Oversell or double-charge once, and trust is gone.', color: '#ff6b8b' },
  { title: 'Operations', line: 'One small team runs orders, refunds, installs and leads.', color: '#22d3ee' },
];

const systems = [
  { icon: CreditCard, title: 'Orders & Payments', line: 'Safe money in, stock reservation, an enforced order lifecycle.', color: '#34d399' },
  { icon: Mail, title: 'Communications', line: 'Branded transactional email at every order milestone.', color: '#ff6b8b' },
  { icon: LifeBuoy, title: 'Support Desk', line: 'Two-way ticketing; returns and refunds flow through it.', color: '#22d3ee' },
  { icon: Tag, title: 'Promotions', line: 'CMS banners and a server-enforced discount engine.', color: '#ffb020' },
  { icon: BarChart3, title: 'Analytics & BI', line: 'Live revenue, orders, traffic and customer metrics.', color: '#8b5cf6' },
  { icon: Users, title: 'Solar CRM', line: 'The calculator captures qualified leads with the sizing attached.', color: '#2997ff' },
  { icon: LayoutDashboard, title: 'Admin Console', line: 'The entire business, run from one secure dashboard.', color: '#2dd4bf' },
];

const integrity = [
  { icon: Database, title: 'All-or-nothing money', line: 'Payments, stock and order state change inside DB transactions. Never half-done.', color: '#34d399' },
  { icon: Zap, title: 'Concurrency-safe', line: 'No overselling under simultaneous checkout. Verified under live adversarial load.', color: '#ffb020' },
  { icon: Lock, title: 'Tamper-proof payments', line: 'Server-side price snapshots. The client can’t set the price. Webhooks deduped.', color: '#2997ff' },
  { icon: ShieldCheck, title: 'Pentested', line: 'Probed across 13 attack classes. One real gap found, and fixed.', color: '#8b5cf6' },
];

const stats = [
  { value: '7', label: 'Integrated systems, one source of truth' },
  { value: '~50', label: 'Data models across ~30 route modules' },
  { value: '13', label: 'Attack classes tested in a live pentest' },
];

const CaseStudy = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="case-study" className="section bg-black border-t border-white/5">
      <div className="max-w-content mx-auto px-6">
        {/* Intro */}
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-4">Case Study · Wiibi Energy</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tightest leading-[1.02] text-ink">
            Not a store. The operating system for a solar business.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed">
            Wiibi Energy sells solar across Nigeria. As lead web engineer, I built the platform
            that runs the whole business: sales, payments, service, and operations, from one screen.
          </p>
        </Reveal>

        {/* The wow — sizing engine (the hook, always visible) */}
        <Reveal delay={0.06}>
          <div className="mt-12">
            <p className="eyebrow mb-4 text-accent">Try the engine</p>
            <SolarSizer />
          </div>
        </Reveal>

        {/* Quick proof */}
        <Reveal delay={0.05}>
          <div className="mt-12 grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl sm:text-4xl font-semibold tracking-tightest text-ink">
                  {s.value}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-muted leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Toggle */}
        <Reveal delay={0.05}>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-ink transition-colors hover:border-white/35"
            >
              {open ? 'Hide case study' : 'View case study'}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
              />
            </button>
            <a
              href="https://wiibienergy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-accent transition-colors hover:text-white"
            >
              Visit Wiibi Energy
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        {/* Expandable deep dive */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              {/* Problem triad */}
              <div className="mt-16">
                <p className="eyebrow mb-8">A storefront would leave three holes</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {gaps.map((g, i) => (
                    <div key={g.title} className="card h-full p-7">
                      <span className="text-sm tabular-nums font-semibold" style={{ color: g.color }}>
                        0{i + 1}
                      </span>
                      <h3 className="mt-3 text-xl font-semibold text-ink">{g.title}</h3>
                      <p className="mt-2 text-muted leading-relaxed">{g.line}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 7 systems */}
              <div className="mt-20">
                <h3 className="max-w-2xl text-3xl sm:text-4xl font-semibold tracking-tight text-ink leading-tight">
                  Seven systems. One customer, one order, one truth.
                </h3>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {systems.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.title} className="card h-full p-6">
                        <div
                          className="flex h-11 w-11 items-center justify-center rounded-xl"
                          style={{ backgroundColor: `${s.color}1f`, border: `1px solid ${s.color}55` }}
                        >
                          <Icon className="h-5 w-5" strokeWidth={1.6} style={{ color: s.color }} />
                        </div>
                        <h4 className="mt-4 font-semibold text-ink">{s.title}</h4>
                        <p className="mt-1.5 text-sm text-muted leading-relaxed">{s.line}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Architecture */}
              <div className="mt-20">
                <h3 className="max-w-2xl text-3xl sm:text-4xl font-semibold tracking-tight text-ink leading-tight">
                  One platform, cleanly separated.
                </h3>
                <div className="mt-10 card p-6 sm:p-10">
                  <ArchitectureDiagram />
                </div>
              </div>

              {/* Engineering integrity */}
              <div className="mt-20">
                <h3 className="max-w-2xl text-3xl sm:text-4xl font-semibold tracking-tight text-ink leading-tight">
                  Trustworthy under real, concurrent load.
                </h3>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {integrity.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex gap-4">
                        <div
                          className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                          style={{ backgroundColor: `${item.color}1f`, border: `1px solid ${item.color}55` }}
                        >
                          <Icon className="h-5 w-5" strokeWidth={1.6} style={{ color: item.color }} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-ink">{item.title}</h4>
                          <p className="mt-1 text-muted leading-relaxed">{item.line}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Close line */}
              <p className="mt-20 max-w-3xl text-2xl sm:text-3xl font-medium leading-snug text-ink">
                A business that runs from one screen, and stays honest under load. The roadmap is
                <span className="text-gradient"> expansion, not reconstruction.</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CaseStudy;
