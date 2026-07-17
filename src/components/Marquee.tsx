import React from 'react';

const items = [
  'React 19',
  'Node.js',
  'Express',
  'MySQL',
  'Sequelize',
  'Socket.IO',
  'TanStack Query',
  'Cloudflare Workers',
  'Tailwind CSS',
  'JWT',
  'Vite',
  'Joi',
];

const Marquee = () => {
  // Rendered twice back-to-back so the -50% translate loops seamlessly.
  const loop = [...items, ...items];

  return (
    <div className="border-y border-white/5 bg-black py-6 overflow-hidden">
      <div className="marquee-mask">
        <div className="marquee-track">
          {loop.map((item, i) => (
            <span
              key={i}
              className="mx-8 text-lg font-medium text-muted/50 transition-colors hover:text-ink whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
