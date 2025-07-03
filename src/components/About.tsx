import React, { useEffect, useState } from 'react';
import { MapPin, Coffee, BookOpen, Award, Code, Database, Layers, Palette, Server } from 'lucide-react';
import { skills, skillCategories } from '../data/skills';

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryIcons = {
    frontend: Code,
    backend: Server,
    database: Database,
    tools: Layers,
    professional: Palette
  };

  return (
    <section id="about" className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 geometric-pattern opacity-5"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      ></div>
      
      {/* Floating elements */}
      <div 
        className="absolute top-40 left-1/4 w-28 h-28 border border-white/10 rotate-45 animate-parallax-float"
        style={{ transform: `translateY(${scrollY * 0.2}px) rotate(45deg)` }}
      ></div>
      <div 
        className="absolute bottom-32 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-float"
        style={{ transform: `translateY(${scrollY * 0.15}px)`, animationDelay: '2s' }}
      ></div>
      
      {/* Developer illustration */}
      <div 
        className="absolute top-20 right-10 opacity-10"
        style={{ transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)` }}
      >
        <div className="w-64 h-64 relative">
          {/* Central figure */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-40 bg-white/10 rounded-t-full relative">
              <div className="w-8 h-8 bg-white/20 rounded-full mx-auto mt-4"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center">
                <Code className="h-6 w-6 text-white/30" />
              </div>
            </div>
          </div>
          
          {/* Orbiting tech icons */}
          <div className="absolute inset-0 border border-white/5 rounded-full animate-spin" style={{ animationDuration: '30s' }}>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/20 rounded-full"></div>
          </div>
          <div className="absolute inset-8 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up text-shadow">
            About <span className="gradient-text-static">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Section */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="glass-card rounded-xl p-8 sophisticated-hover border-gradient">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4 animate-glow">
                  <Coffee className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Johnson Emmanuel</h3>
                  <div className="flex items-center text-gray-400 mt-1">
                    <MapPin className="h-4 w-4 mr-2 text-gray-300" />
                    Nigeria
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                I'm a Full-Stack Engineer with experience leading development teams and mentoring junior developers. 
                Currently serving as CTO at Heally, I specialize in building scalable web applications using React, Node.js, 
                and modern cloud technologies. I thrive in remote environments and have successfully collaborated with teams across multiple regions.
              </p>
              
              <div className="pt-6 border-t border-white/20">
                <div className="flex items-center text-gray-300">
                  <BookOpen className="h-5 w-5 mr-2" />
                  <span className="font-medium">Microverse Graduate • 1300+ hours of intensive training</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-6 animate-fade-in-right">
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '3+', label: 'Years Experience', icon: Award },
                { number: '3', label: 'Developers Mentored', icon: Coffee },
                { number: '5+', label: 'Countries Collaborated', icon: MapPin },
                { number: '25%', label: 'Performance Improvement', icon: BookOpen }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className={`glass-card rounded-xl p-6 text-center sophisticated-hover animate-fade-in-up stagger-${index + 1} border-gradient`}>
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center animate-pulse-glow">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2 gradient-text-static">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="glass-card rounded-xl p-8 animate-fade-in-up border-gradient">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Skills & Technologies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => {
              const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Code;
              return (
                <div key={category} className={`space-y-4 animate-fade-in-up stagger-${categoryIndex + 1}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3 animate-glow">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      {skillCategories[category as keyof typeof skillCategories]}
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {categorySkills.map((skill, index) => (
                      <div key={index} className="group">
                        <div className="glass text-center py-2 px-3 rounded-lg border border-white/20 hover:border-white/50 hover:bg-white/10 transition-all duration-300 sophisticated-hover">
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm font-medium">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;