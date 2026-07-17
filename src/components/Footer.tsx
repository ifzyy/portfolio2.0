import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/ifzyy', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/johnson-emmanuel', icon: Linkedin },
  { name: 'Email', href: 'mailto:johnsonnifemi8@gmail.com', icon: Mail },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-content mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-semibold text-ink">Johnson Emmanuel</div>
            <p className="mt-1 text-sm text-muted">Full-Stack Engineer · CTO · Mentor</p>
          </div>

          <div className="flex gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-muted transition-colors hover:border-white/30 hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-muted/70">
          © {new Date().getFullYear()} Johnson Emmanuel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
