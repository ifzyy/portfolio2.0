import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Target, Lightbulb, Rocket, Code2, Coffee } from 'lucide-react';

const BehindTheCode = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const principles = [
    {
      icon: Heart,
      title: "Mentorship-Driven Development",
      description: "Having mentored 3 junior developers, I believe in sharing knowledge and growing together. Every code review is an opportunity to teach and learn.",
      color: "from-red-500/20 to-pink-500/20"
    },
    {
      icon: Target,
      title: "Leadership Through Code",
      description: "As CTO at Heally, I lead by example. I don't just manage teams—I architect solutions, write code, and ensure every developer grows professionally.",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "From 1300+ hours at Microverse to leading enterprise projects, I never stop learning. Technology evolves, and so do I.",
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: Rocket,
      title: "Performance & Scale",
      description: "25% load time improvements aren't accidents—they're the result of obsessive optimization and understanding how users interact with technology.",
      color: "from-purple-500/20 to-indigo-500/20"
    }
  ];

  const stats = [
    { number: "1300+", label: "Hours of Training", icon: Code2 },
    { number: "500+", label: "Cups of Coffee", icon: Coffee },
    { number: "10+", label: "Projects Shipped", icon: Rocket },
    { number: "3", label: "Developers Mentored", icon: Target }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
      
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
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
            Behind the <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Code</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My philosophy, leadership approach, and what drives me to create exceptional digital experiences
          </p>
        </motion.div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {principles.map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <motion.div
                key={index}
                className="group glass-card rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500"
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${principle.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-gray-200 transition-colors">
                  {principle.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          className="glass-card rounded-2xl p-8 border border-white/10"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-8">By the Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <motion.div
                    className="text-3xl font-bold text-white mb-2"
                    animate={inView ? { 
                      textShadow: [
                        '0 0 20px rgba(255,255,255,0.5)',
                        '0 0 40px rgba(255,255,255,0.8)',
                        '0 0 20px rgba(255,255,255,0.5)',
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic max-w-4xl mx-auto">
            "Leadership isn't about being the smartest person in the room—it's about empowering others to be their best, 
            writing code that scales, and building products that truly matter."
          </blockquote>
          <div className="mt-6 text-gray-500">— Johnson Emmanuel</div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BehindTheCode;