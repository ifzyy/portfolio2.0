import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Github, Linkedin, Mail } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/ifzyy', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/johnson-emmanuel', icon: Linkedin },
  { name: 'Email', href: 'mailto:johnsonnifemi8@gmail.com', icon: Mail },
];

const Contact = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ fullName: '', email: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputClass =
    'w-full rounded-xl border border-white/12 bg-white/[0.03] px-4 py-3 text-ink placeholder-muted/60 transition-colors focus:border-accent focus:outline-none';

  return (
    <section id="contact" className="section bg-black border-t border-white/5">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="Let's talk"
          title="Have something worth building?"
          subtitle="Whether it's a product to ship or a team to lead, I'd like to hear about it. I usually reply within a day."
          align="center"
        />

        <Reveal className="mt-14 mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                aria-label="Full name"
                placeholder="Your name"
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Email address"
                placeholder="Email address"
                className={inputClass}
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              aria-label="Message"
              placeholder="Tell me about your project…"
              className={`${inputClass} resize-none`}
            />

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  className="flex items-center gap-2 rounded-xl border border-green-400/20 bg-green-400/5 px-4 py-3 text-green-400"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <CheckCircle className="h-5 w-5" />
                  <span>Message sent. I'll get back to you soon.</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  className="flex items-center gap-2 rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-red-400"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <AlertCircle className="h-5 w-5" />
                  <span>Something went wrong. Please try again.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-ink px-7 py-3.5 font-medium text-black transition-transform duration-300 hover:scale-[1.01] disabled:opacity-50"
            >
              {isSubmitting ? 'Sending…' : 'Send message'}
            </button>
          </form>

          <div className="mt-12 flex justify-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-muted transition-colors hover:border-white/30 hover:text-ink"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
