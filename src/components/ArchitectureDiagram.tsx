import React from 'react';
import { useInView } from 'react-intersection-observer';

interface NodeProps {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub?: string;
  delay: number;
  emphasis?: boolean;
}

const Node = ({ x, y, w, h, title, sub, delay, emphasis }: NodeProps) => (
  <g className="node" style={{ transitionDelay: `${delay}ms` }}>
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={14}
      fill={emphasis ? 'rgba(41,151,255,0.10)' : 'rgba(255,255,255,0.03)'}
      stroke={emphasis ? 'rgba(41,151,255,0.55)' : 'rgba(255,255,255,0.14)'}
      strokeWidth={emphasis ? 1.5 : 1}
    />
    <text
      x={x + w / 2}
      y={sub ? y + h / 2 - 6 : y + h / 2 + 5}
      textAnchor="middle"
      fill="#f5f5f7"
      fontSize={emphasis ? 19 : 15}
      fontWeight={emphasis ? 600 : 500}
    >
      {title}
    </text>
    {sub && (
      <text
        x={x + w / 2}
        y={y + h / 2 + 16}
        textAnchor="middle"
        fill="#86868b"
        fontSize={12.5}
      >
        {sub}
      </text>
    )}
  </g>
);

// A vertical connector with a faint rail and an animated "current" on top.
const Link = ({ d }: { d: string }) => (
  <>
    <path className="rail" d={d} />
    <path className="flow" d={d} />
  </>
);

const ArchitectureDiagram = () => {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <div ref={ref} className={`arch ${inView ? 'in' : ''}`} role="img"
      aria-label="Wiibi Energy architecture: a React storefront, admin console, and Cloudflare Worker SEO edge all route through one Node and Express API secured with JWT and Joi, backed by MySQL with Sequelize, a tamper-proof payments layer, and an isolated email pipeline.">
      <svg viewBox="0 0 820 500" xmlns="http://www.w3.org/2000/svg">
        {/* Clients → API */}
        <Link d="M 170 118 C 170 160, 410 150, 410 190" />
        <Link d="M 410 118 L 410 190" />
        <Link d="M 650 118 C 650 160, 410 150, 410 190" />

        {/* API → data & services */}
        <Link d="M 410 300 C 410 340, 160 330, 160 372" />
        <Link d="M 410 300 L 410 372" />
        <Link d="M 410 300 C 410 340, 660 330, 660 372" />

        {/* Layer 1 — clients */}
        <Node x={100} y={62} w={140} h={56} title="Storefront" sub="React 19 · Vite" delay={0} />
        <Node x={340} y={62} w={140} h={56} title="Admin Console" sub="Socket.IO live" delay={80} />
        <Node x={580} y={62} w={140} h={56} title="SEO Edge" sub="Cloudflare Worker" delay={160} />

        {/* Layer 2 — the platform */}
        <Node
          x={210}
          y={190}
          w={400}
          h={110}
          title="Node · Express API"
          sub="JWT · Joi · ~30 route modules"
          delay={260}
          emphasis
        />

        {/* Layer 3 — data & services */}
        <Node x={88} y={372} w={150} h={66} title="MySQL" sub="Sequelize · ~50 models" delay={380} />
        <Node x={335} y={372} w={150} h={66} title="Payments" sub="snapshots · webhooks" delay={460} />
        <Node x={582} y={372} w={150} h={66} title="Email" sub="isolated pipeline" delay={540} />
      </svg>
    </div>
  );
};

export default ArchitectureDiagram;
