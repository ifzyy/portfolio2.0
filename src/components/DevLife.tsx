import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Code, Coffee, Users, Monitor, Lightbulb } from 'lucide-react';

const DevLife = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const moments = [
    {
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Late Night Debugging",
      description: "2:30 AM, hunting down that elusive bug",
      icon: Code,
      category: "Debug"
    },
    {
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Pair Programming Session",
      description: "Collaborating on complex algorithms",
      icon: Users,
      category: "Collaboration"
    },
    {
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Coffee & Code",
      description: "Fuel for the creative process",
      icon: Coffee,
      category: "Lifestyle"
    },
    {
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Multi-Monitor Setup",
      description: "My command center in action",
      icon: Monitor,
      category: "Workspace"
    },
    {
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Whiteboard Planning",
      description: "Architecting the next big feature",
      icon: Lightbulb,
      category: "Planning"
    },
    {
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Code Review Time",
      description: "Ensuring quality and best practices",
      icon: Camera,
      category: "Review"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
      
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
            Dev <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Life</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Behind the scenes moments from my development journey
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moments.map((moment, index) => {
            const IconComponent = moment.icon;
            return (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl glass-card border border-white/10 hover:border-white/20 transition-all duration-500"
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 rounded-full text-white text-xs font-medium border border-white/20">
                    {moment.category}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <IconComponent className="h-5 w-5 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors">
                    {moment.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {moment.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: "100%" }}
                  whileHover={{ y: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          {[
            { number: "1000+", label: "Hours Coded", icon: Code },
            { number: "500+", label: "Cups of Coffee", icon: Coffee },
            { number: "50+", label: "Bugs Squashed", icon: Lightbulb },
            { number: "10+", label: "Team Projects", icon: Users }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center glass-card rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.05 }}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DevLife;