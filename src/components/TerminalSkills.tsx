import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Terminal, Play, Folder, File } from 'lucide-react';

const TerminalSkills = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const commands = [
    {
      command: 'ls -la skills/',
      output: [
        'drwxr-xr-x  8 johnson  staff   256 Dec 15 10:30 .',
        'drwxr-xr-x  3 johnson  staff    96 Dec 15 10:30 ..',
        'drwxr-xr-x  6 johnson  staff   192 Dec 15 10:30 frontend/',
        'drwxr-xr-x  5 johnson  staff   160 Dec 15 10:30 backend/',
        'drwxr-xr-x  4 johnson  staff   128 Dec 15 10:30 database/',
        'drwxr-xr-x  7 johnson  staff   224 Dec 15 10:30 devops/',
        '-rw-r--r--  1 johnson  staff  1024 Dec 15 10:30 README.md'
      ]
    },
    {
      command: 'cat frontend/react.js',
      output: [
        '// React Expertise Level: Expert',
        'const skills = {',
        '  hooks: "Advanced",',
        '  contextAPI: "Proficient", ',
        '  performance: "Optimized",',
        '  testing: "Jest + RTL",',
        '  patterns: "Clean Architecture"',
        '};',
        '',
        'export default skills;'
      ]
    },
    {
      command: 'node backend/server.js',
      output: [
        '🚀 Server starting...',
        '✅ Database connected',
        '✅ Middleware loaded',
        '✅ Routes configured',
        '✅ Security enabled',
        '🌐 Server running on port 3000',
        '📊 Performance: 99.9% uptime',
        '🔒 Security: A+ rating'
      ]
    },
    {
      command: 'docker ps',
      output: [
        'CONTAINER ID   IMAGE           STATUS          PORTS',
        '7f8a9b2c3d4e   postgres:14     Up 2 hours      5432/tcp',
        '1a2b3c4d5e6f   redis:alpine    Up 2 hours      6379/tcp',
        '9e8d7c6b5a4f   nginx:latest    Up 2 hours      80:80/tcp',
        '3f2e1d0c9b8a   node:18-alpine  Up 2 hours      3000:3000/tcp'
      ]
    }
  ];

  useEffect(() => {
    if (!inView) return;

    const typeCommand = async () => {
      const command = commands[currentCommand];
      let text = `johnson@macbook:~$ ${command.command}`;
      
      // Type command
      for (let i = 0; i <= text.length; i++) {
        setDisplayText(text.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }

      await new Promise(resolve => setTimeout(resolve, 500));

      // Add output
      for (let line of command.output) {
        text += `\n${line}`;
        setDisplayText(text);
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      await new Promise(resolve => setTimeout(resolve, 2000));

      // Move to next command
      setCurrentCommand((prev) => (prev + 1) % commands.length);
    };

    typeCommand();
  }, [currentCommand, inView]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Skills <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Terminal</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A developer's true environment - where the magic happens
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          className="bg-black rounded-lg border border-gray-700 shadow-2xl overflow-hidden"
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Terminal className="h-4 w-4" />
              <span className="text-sm font-mono">johnson@macbook: ~</span>
            </div>
            <div className="w-16"></div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm">
            <div className="text-green-400 mb-4">
              Welcome to Johnson's Development Environment
            </div>
            <div className="text-gray-300 mb-6">
              Type 'help' for available commands or watch the demo below:
            </div>

            {/* Command Output */}
            <div className="bg-gray-900 rounded p-4 min-h-[400px] border border-gray-700">
              <pre className="text-green-400 whitespace-pre-wrap">
                {displayText}
                {showCursor && <span className="bg-green-400 text-black">█</span>}
              </pre>
            </div>

            {/* Command Indicators */}
            <div className="flex items-center justify-between mt-4 text-gray-500 text-xs">
              <div className="flex items-center space-x-2">
                <Play className="h-3 w-3" />
                <span>Auto-running demo</span>
              </div>
              <div className="flex space-x-1">
                {commands.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentCommand ? 'bg-green-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          {[
            {
              title: "Frontend Mastery",
              icon: Folder,
              items: ["React/Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
            },
            {
              title: "Backend Power",
              icon: File,
              items: ["Node.js/Express", "Ruby on Rails", "GraphQL", "Microservices"]
            },
            {
              title: "DevOps Skills",
              icon: Terminal,
              items: ["Docker", "AWS/Vercel", "CI/CD", "Monitoring"]
            }
          ].map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                className="glass-card rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <IconComponent className="h-6 w-6 text-green-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-400 text-sm flex items-center">
                      <span className="text-green-400 mr-2">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TerminalSkills;