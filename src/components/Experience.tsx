import React, { useEffect, useState } from 'react';
import { Building2, Calendar, MapPin, TrendingUp, Briefcase, Award } from 'lucide-react';

const Experience = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      company: 'Heally',
      position: 'Chief Technology Officer',
      location: 'North Carolina, United States (Remote)',
      period: 'February 2024 - Present',
      description: 'Leading the development of a learning hub product suite using React, Node.js, and OAuth2 identity systems.',
      achievements: [
        'Scaled architecture with CI/CD, Azure, and Docker',
        'Managing remote developers across multiple regions',
        'Built comprehensive learning platform from ground up'
      ],
      logo: '🚀'
    },
    {
      company: 'Delsoft',
      position: 'Frontend Engineer',
      location: 'Lagos, Nigeria',
      period: 'October 2023 - January 2025',
      description: 'Built responsive and modern interfaces with React.js and Tailwind CSS for various client projects.',
      achievements: [
        'Improved cross-browser compatibility across all projects',
        'Reduced load times by 25% through optimization techniques',
        'Delivered pixel-perfect responsive designs'
      ],
      logo: '💻'
    },
    {
      company: 'Microverse',
      position: 'Mentor (Volunteer)',
      location: 'Remote',
      period: 'August 2022 - January 2024',
      description: 'Mentored 3 junior web developers, providing technical support through code reviews and guidance.',
      achievements: [
        'Provided technical support through comprehensive code reviews',
        'Proposed improvements to code organization for better performance',
        'Offered advice on maintaining motivation and program longevity'
      ],
      logo: '🎓'
    },
    {
      company: 'Freelance Projects',
      position: 'Full-Stack Developer',
      location: 'Remote',
      period: 'May 2022 - Present',
      description: 'Delivered production-ready web applications for clients that increased user engagement and sales.',
      achievements: [
        'Built full-stack apps using React, Redux, Ruby on Rails, Node.js, and MySQL',
        'Increased user engagement and sales for multiple clients',
        'Delivered production-ready solutions on time and within budget'
      ],
      logo: '🚀'
    }
  ];

  return (
    <section id="experience" className="section-padding bg-black relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 geometric-pattern opacity-10"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      
      {/* Floating elements */}
      <div 
        className="absolute top-32 right-1/4 w-24 h-24 border border-white/10 rotate-12 animate-parallax-float"
        style={{ transform: `translateY(${scrollY * 0.15}px) rotate(12deg)` }}
      ></div>
      <div 
        className="absolute bottom-40 left-1/3 w-20 h-20 bg-white/5 rounded-full animate-float"
        style={{ transform: `translateY(${scrollY * 0.1}px)`, animationDelay: '3s' }}
      ></div>
      
      {/* Career timeline illustration */}
      <div 
        className="absolute top-20 left-10 opacity-10"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="relative w-48 h-64">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 transform -translate-x-1/2"></div>
          
          {/* Timeline nodes */}
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="absolute left-1/2 transform -translate-x-1/2 animate-pulse-glow"
              style={{ top: `${10 + index * 25}%` }}
            >
              <div className="w-4 h-4 bg-white/30 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              </div>
              
              {/* Experience cards */}
              <div 
                className={`absolute top-1/2 transform -translate-y-1/2 w-16 h-10 bg-white/10 rounded border border-white/20 animate-float ${
                  index % 2 === 0 ? 'left-6' : 'right-6'
                }`}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className="p-1">
                  <div className="h-1 bg-white/30 rounded w-3/4 mb-1"></div>
                  <div className="h-0.5 bg-white/20 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Skills growth chart */}
      <div 
        className="absolute bottom-20 right-10 opacity-10"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <div className="relative w-32 h-24">
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between space-x-1">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-white/20 rounded-t animate-pulse"
                style={{
                  width: '8px',
                  height: `${Math.random() * 60 + 20}px`,
                  animationDelay: `${index * 0.1}s`
                }}
              ></div>
            ))}
          </div>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <TrendingUp className="h-4 w-4 text-white/40" />
          </div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up text-shadow">
            Work <span className="gradient-text-static">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up stagger-1">
            My professional journey from mentoring to leading development teams
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group glass-card rounded-xl p-8 sophisticated-hover transition-all duration-500 animate-fade-in-up stagger-${index + 1} border-gradient`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className="flex-shrink-0 w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-glow">
                    {exp.logo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">
                      {exp.position}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-400 mt-2">
                      <div className="flex items-center">
                        <Building2 className="h-4 w-4 mr-2 text-gray-300" />
                        {exp.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-gray-300" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center glass text-gray-300 px-4 py-2 rounded-lg border border-white/20 hover:border-white/50 transition-all duration-300">
                  <Calendar className="h-4 w-4 mr-2" />
                  {exp.period}
                </div>
              </div>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {exp.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-gray-300 mr-2" />
                  <h4 className="text-lg font-semibold text-white">Key Achievements:</h4>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Hover shimmer effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;