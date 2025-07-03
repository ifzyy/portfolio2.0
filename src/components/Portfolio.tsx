import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Filter, Star, Code2, Layers3, Zap } from 'lucide-react';
import { projects } from '../data/portfolio';

const Portfolio = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const filteredProjects = projects.filter(project => 
    filter === 'all' || (filter === 'featured' && project.featured)
  );

  return (
    <section id="portfolio" className="section-padding bg-black relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 geometric-pattern opacity-10"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      
      {/* Floating elements */}
      <div 
        className="absolute top-20 right-1/4 w-32 h-32 border border-white/10 rounded-full animate-float"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>
      <div 
        className="absolute bottom-32 left-1/3 w-20 h-20 bg-white/5 rotate-45 animate-parallax-float"
        style={{ transform: `translateY(${scrollY * 0.15}px) rotate(45deg)`, animationDelay: '3s' }}
      ></div>
      
      {/* Portfolio illustration */}
      <div 
        className="absolute top-40 left-10 opacity-10"
        style={{ transform: `translateY(${scrollY * 0.12}px)` }}
      >
        <div className="relative w-56 h-56">
          {/* Central portfolio icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center animate-pulse-glow">
              <Layers3 className="h-10 w-10 text-white/50" />
            </div>
          </div>
          
          {/* Project cards floating around */}
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="absolute w-12 h-8 bg-white/10 rounded border border-white/20 animate-float"
              style={{
                top: `${30 + 40 * Math.sin((index * 60) * Math.PI / 180)}%`,
                left: `${30 + 40 * Math.cos((index * 60) * Math.PI / 180)}%`,
                animationDelay: `${index * 0.3}s`
              }}
            >
              <div className="w-full h-2 bg-white/20 rounded-t"></div>
              <div className="p-1 space-y-0.5">
                <div className="h-0.5 bg-white/30 rounded w-3/4"></div>
                <div className="h-0.5 bg-white/20 rounded w-1/2"></div>
              </div>
            </div>
          ))}
          
          {/* Connecting lines */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full">
              {[...Array(6)].map((_, index) => (
                <line
                  key={index}
                  x1="50%"
                  y1="50%"
                  x2={`${30 + 40 * Math.cos((index * 60) * Math.PI / 180)}%`}
                  y2={`${30 + 40 * Math.sin((index * 60) * Math.PI / 180)}%`}
                  stroke="white"
                  strokeWidth="0.5"
                  className="animate-pulse"
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
      
      {/* Code structure visualization */}
      <div 
        className="absolute bottom-40 right-20 opacity-10"
        style={{ transform: `translateY(${scrollY * 0.18}px)` }}
      >
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Code2 className="h-4 w-4 text-white/40" />
            <div className="h-1 bg-white/30 rounded w-16"></div>
          </div>
          <div className="ml-4 space-y-1">
            <div className="h-1 bg-white/20 rounded w-12"></div>
            <div className="h-1 bg-white/25 rounded w-14"></div>
            <div className="h-1 bg-white/15 rounded w-10"></div>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="h-4 w-4 text-white/40" />
            <div className="h-1 bg-white/30 rounded w-18"></div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up text-shadow">
            My <span className="gradient-text-static">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 animate-fade-in-up stagger-1">
            Here are some of my recent projects that showcase my skills and experience
          </p>
          
          {/* Filter buttons */}
          <div className="flex justify-center space-x-4 mb-8 animate-fade-in-up stagger-2">
            <button
              onClick={() => setFilter('all')}
              className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ripple ${
                filter === 'all'
                  ? 'bg-white text-black shadow-lg neon-white'
                  : 'glass text-gray-300 hover:text-white hover-glow border-gradient'
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ripple ${
                filter === 'featured'
                  ? 'bg-white text-black shadow-lg neon-white'
                  : 'glass text-gray-300 hover:text-white hover-glow border-gradient'
              }`}
            >
              <Star className="h-4 w-4 mr-2" />
              Featured
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group glass-card rounded-xl overflow-hidden sophisticated-hover transition-all duration-500 animate-fade-in-up stagger-${index % 6 + 1} border-gradient`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full animate-pulse-glow">
                    Featured
                  </div>
                )}
                
                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 glass text-gray-300 text-sm rounded-full border border-white/20 hover:border-white/50 hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center px-4 py-2 bg-white text-black hover:bg-gray-200 rounded-lg transition-all duration-300 font-medium flex-1 justify-center hover-glow ripple"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    See Live
                  </a>
                  <a
                    href={project.sourceUrl}
                    className="flex items-center px-4 py-2 glass border border-white/50 hover:border-white text-gray-300 hover:text-white rounded-lg transition-all duration-300 font-medium flex-1 justify-center hover-glow"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;