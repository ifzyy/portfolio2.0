import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Rocket, 
  Globe, 
  Users, 
  TrendingUp, 
  Award, 
  Clock,
  Target,
  Zap
} from 'lucide-react';

const Impact = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const stats = [
    {
      number: "10+",
      label: "Projects Shipped",
      description: "Production-ready web applications",
      icon: Rocket,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      number: "10+",
      label: "Countries Collaborated",
      description: "Remote-first global partnerships",
      icon: Globe,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      number: "3+",
      label: "Junior Devs Mentored",
      description: "Sharing knowledge and growing talent",
      icon: Users,
      color: "from-purple-500/20 to-indigo-500/20"
    },
    {
      number: "1300+",
      label: "Hours of Training",
      description: "Intensive full-stack development",
      icon: TrendingUp,
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  const achievements = [
    {
      title: "Performance Optimization",
      description: "Reduced load times by 25% across multiple projects",
      icon: Zap,
      metric: "25% faster"
    },
    {
      title: "Team Leadership",
      description: "Successfully managing remote developers across regions",
      icon: Target,
      metric: "Multi-region"
    },
    {
      title: "Code Quality",
      description: "Maintained high standards through comprehensive code reviews",
      icon: Award,
      metric: "High quality"
    },
    {
      title: "Delivery Excellence",
      description: "Consistently delivered production-ready solutions",
      icon: Clock,
      metric: "On-time delivery"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
      
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
            Real <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Numbers that matter - measurable results from real projects and leadership
          </p>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className="group text-center"
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="glass-card rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Number */}
                  <motion.div
                    className="text-4xl lg:text-5xl font-bold text-white mb-3"
                    animate={inView ? {
                      textShadow: [
                        '0 0 20px rgba(255,255,255,0.5)',
                        '0 0 40px rgba(255,255,255,0.8)',
                        '0 0 20px rgba(255,255,255,0.5)',
                      ]
                    } : {}}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.number}
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <motion.div
          className="glass-card rounded-2xl p-8 border border-white/10"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Key Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 group"
                  initial={{ x: -30, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white group-hover:text-gray-200 transition-colors">
                        {achievement.title}
                      </h4>
                      <span className="text-sm font-medium text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                        {achievement.metric}
                      </span>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          className="text-center mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic max-w-4xl mx-auto">
            "Success isn't just about writing code—it's about leading teams, mentoring developers, 
            and creating solutions that make a real difference in people's lives and businesses."
          </blockquote>
          <div className="mt-6 text-gray-500">— Johnson Emmanuel</div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Impact;