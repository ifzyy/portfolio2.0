import React from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeading = ({ eyebrow, title, subtitle, align = 'left' }: SectionHeadingProps) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-4xl sm:text-5xl font-semibold tracking-tightest text-ink leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg sm:text-xl text-muted leading-relaxed">{subtitle}</p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
