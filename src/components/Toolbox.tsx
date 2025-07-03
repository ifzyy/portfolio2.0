import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Server, 
  Database, 
  Cloud, 
  Monitor,
  Layers,
  Zap,
  Globe
} from 'lucide-react';

const Toolbox = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const categories = [
    {
      title: "Frontend",
      icon: Monitor,
      color: "from-blue-500/20 to-cyan-500/20",
      tools: [
        { name: "React", icon: "⚛️", proficiency: "Expert" },
        { name: "TypeScript", icon: "🔷", proficiency: "Advanced" },
        { name: "Next.js", icon: "▲", proficiency: "Advanced" },
        { name: "Tailwind CSS", icon: "🎨", proficiency: "Expert" },
        { name: "Framer Motion", icon: "🎭", proficiency: "Proficient" },
        { name: "Redux", icon: "🔄", proficiency: "Proficient" }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-500/20 to-emerald-500/20",
      tools: [
        { name: "Node.js", icon: "🟢", proficiency: "Advanced" },
        { name: "Ruby on Rails", icon: "💎", proficiency: "Proficient" },
        { name: "Express.js", icon: "🚀", proficiency: "Expert" },
        { name: "GraphQL", icon: "📊", proficiency: "Intermediate" },
        { name: "REST APIs", icon: "🔗", proficiency: "Expert" },
        { name: "Microservices", icon: "🏗️", proficiency: "Intermediate" }
      ]
    },
    {
      title: "Database",
      icon: Database,
      color: "from-purple-500/20 to-indigo-500/20",
      tools: [
        { name: "PostgreSQL", icon: "🐘", proficiency: "Advanced" },
        { name: "MongoDB", icon: "🍃", proficiency: "Proficient" },
        { name: "Redis", icon: "🔴", proficiency: "Intermediate" },
        { name: "Prisma", icon: "⚡", proficiency: "Proficient" },
        { name: "Supabase", icon: "🔥", proficiency: "Proficient" },
        { name: "Firebase", icon: "🔥", proficiency: "Intermediate" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Cloud,
      color: "from-orange-500/20 to-red-500/20",
      tools: [
        { name: "Docker", icon: "🐳", proficiency: "Proficient" },
        { name: "Azure", icon: "☁️", proficiency: "Proficient" },
        { name: "Vercel", icon: "▲", proficiency: "Expert" },
        { name: "Git", icon: "📝", proficiency: "Expert" },
        { name: "GitHub Actions", icon: "⚙️", proficiency: "Proficient" },
        { name: "Webpack", icon: "📦", proficiency: "Intermediate" }
      ]
    }
  ];

  const proficiencyColors = {
    "Expert": "text-green-400 bg-green-400/10",
    "Advanced": "text-blue-400 bg-blue-400/10",
    "Proficient": "text-yellow-400 bg-yellow-400/10",
    "Intermediate": "text-orange-400 bg-orange-400/10"
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.03),transparent_50%)]" />
      
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
            My <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Toolbox</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A curated collection of technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                className="glass-card rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500"
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3 + categoryIndex * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mr-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                </div>

                {/* Tools Grid */}
                <div className="space-y-4">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={toolIndex}
                      className="group flex items-center justify-between p-3 glass border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300"
                      initial={{ x: -20, opacity: 0 }}
                      animate={inView ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: 0.5 + categoryIndex * 0.1 + toolIndex * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{tool.icon}</span>
                        <span className="text-white font-medium group-hover:text-gray-200 transition-colors">
                          {tool.name}
                        </span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${proficiencyColors[tool.proficiency as keyof typeof proficiencyColors]}`}>
                        {tool.proficiency}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-gray-400 text-lg mb-6">
            Always learning, always growing. What's next on my radar?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Rust", "Go", "WebAssembly", "Three.js", "AI/ML"].map((tech, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 glass border border-white/20 rounded-full text-gray-300 text-sm hover:border-white/50 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Toolbox;