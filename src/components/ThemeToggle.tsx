import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { name: 'dark', icon: Moon, color: 'bg-gray-800' },
    { name: 'light', icon: Sun, color: 'bg-white' },
    { name: 'glow', icon: Zap, color: 'bg-purple-600' },
  ] as const;

  return (
    <motion.div
      className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="glass-card rounded-full p-2 border border-white/20">
        {themes.map(({ name, icon: Icon, color }) => (
          <motion.button
            key={name}
            onClick={() => setTheme(name)}
            className={`block w-12 h-12 rounded-full mb-2 last:mb-0 flex items-center justify-center transition-all duration-300 ${
              theme === name ? 'bg-white text-black' : 'text-white hover:bg-white/10'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="h-5 w-5" />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default ThemeToggle;