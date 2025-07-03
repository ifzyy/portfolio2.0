import React, { useEffect, useState } from 'react';
import { Code, Server, Layers, Palette, Monitor, Users, Zap, Cpu, Globe, Smartphone, Database } from 'lucide-react';

const Services = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with modern technologies like React, JavaScript, and CSS frameworks.'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Developing robust server-side applications, APIs, and database management systems using Ruby on Rails and PostgreSQL.'
    },
    {
      icon: Layers,
      title: 'Fullstack Development',
      description: 'End-to-end web application development, from conception to deployment, ensuring seamless integration between frontend and backend.'
    },
    {
      icon: Monitor,
      title: 'Beautiful Interface',
      description: 'Crafting pixel-perfect, modern designs that are both aesthetically pleasing and functionally superior.'
    },
    {
      icon: Users,
      title: 'Enjoyable User Experience',
      description: 'Focusing on user-centered design principles to create engaging and intuitive digital experiences.'
    },
    {
      icon: Zap,
      title: 'Responsive & Performant',
      description: 'Building high-performance web applications that work seamlessly across all devices and screen sizes.'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 geometric-pattern opacity-5"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      ></div>
      
      {/* Floating geometric elements */}
      <div 
        className="absolute top-32 left-1/4 w-24 h-24 border border-white/10 rotate-45 animate-parallax-float"
        style={{ transform: `translateY(${scrollY * 0.2}px) rotate(45deg)` }}
      ></div>
      <div 
        className="absolute bottom-40 right-1/3 w-16 h-16 bg-white/5 rounded-full animate-float"
        style={{ transform: `translateY(${scrollY * 0.15}px)`, animationDelay: '2s' }}
      ></div>
      <div 
        className="absolute top-1/2 right-20 w-20 h-20 border border-white/20 rotate-12 animate-parallax-float"
        style={{ transform: `translateY(${scrollY * 0.25}px) rotate(12deg)`, animationDelay: '4s' }}
      ></div>
      
      {/* Tech stack illustration */}
      <div 
        className="absolute top-10 left-10 opacity-10"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="relative w-48 h-48">
          {/* Central hub */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-pulse-glow">
              <Cpu className="h-8 w-8 text-white/50" />
            </div>
          </div>
          
          {/* Orbiting services */}
          <div className="absolute inset-0">
            {[Globe, Smartphone, Code, Database, Layers, Monitor].map((Icon, index) => (
              <div
                key={index}
                className="absolute w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center animate-float"
                style={{
                  top: `${50 + 35 * Math.sin((index * 60) * Math.PI / 180)}%`,
                  left: `${50 + 35 * Math.cos((index * 60) * Math.PI / 180)}%`,
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${index * 0.5}s`
                }}
              >
                <Icon className="h-4 w-4 text-white/40" />
              </div>
            ))}
          </div>
          
          {/* Connecting lines */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <line
                  key={index}
                  x1="50%"
                  y1="50%"
                  x2={`${50 + 35 * Math.cos((index * 60) * Math.PI / 180)}%`}
                  y2={`${50 + 35 * Math.sin((index * 60) * Math.PI / 180)}%`}
                  stroke="white"
                  strokeWidth="1"
                  className="animate-pulse"
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
      
      {/* Code blocks illustration */}
      <div 
        className="absolute bottom-20 right-10 opacity-10"
        style={{ transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.02}deg)` }}
      >
        <div className="space-y-2">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-2 bg-white/20 rounded animate-pulse"
              style={{
                width: `${Math.random() * 60 + 40}px`,
                animationDelay: `${i * 0.1}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up text-shadow">
            What I <span className="gradient-text-static">Do</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up stagger-1">
            I specialize in creating digital solutions that combine beautiful design with powerful functionality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group glass-card rounded-xl p-8 sophisticated-hover transition-all duration-500 animate-fade-in-up stagger-${index % 6 + 1} border-gradient`}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-lg mb-6 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 animate-glow">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Hover shimmer effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;