import React, { useEffect, useState } from 'react';
import { Star, Quote, User, MessageCircle, ThumbsUp, Users } from 'lucide-react';

const Testimonials = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      name: 'David Amagada',
      position: 'CEO',
      company: 'Delsoft',
      rating: 5,
      content: "Johnson transformed our outdated website into a modern, responsive platform that significantly improved our conversion rates. His expertise in both frontend and backend development made him the perfect choice for our project"
    },
    {
      name: 'Joseph',
      position: 'CEO and Founder',
      company: 'Heally',
      rating: 5,
      content: "Working with Johnson was a pleasure. He not only understood our technical requirements but also provided valuable insights that improved our product. His code quality is top-notch and he communicates effectively throughout the project."
    },
    {
      name: 'Joseph',
      position: 'Founder',
      company: 'josehgbadamosi.com',
      rating: 5,
      content: "Johnson transformed my outdated website into a modern, responsive platform which made me get more clients both local and international as a copy writer"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 geometric-pattern opacity-5"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      ></div>
      
      {/* Floating elements */}
      <div 
        className="absolute top-20 left-1/4 w-32 h-32 border border-white/10 rounded-full animate-float"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>
      <div 
        className="absolute bottom-32 right-1/3 w-20 h-20 bg-white/5 rotate-45 animate-parallax-float"
        style={{ transform: `translateY(${scrollY * 0.2}px) rotate(45deg)`, animationDelay: '2s' }}
      ></div>
      
      {/* Testimonials illustration */}
      <div 
        className="absolute top-40 right-10 opacity-10"
        style={{ transform: `translateY(${scrollY * 0.12}px)` }}
      >
        <div className="relative w-48 h-48">
          {/* Central feedback hub */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-pulse-glow">
              <MessageCircle className="h-8 w-8 text-white/50" />
            </div>
          </div>
          
          {/* Floating testimonial bubbles */}
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="absolute animate-float"
              style={{
                top: `${25 + 35 * Math.sin((index * 72) * Math.PI / 180)}%`,
                left: `${25 + 35 * Math.cos((index * 72) * Math.PI / 180)}%`,
                animationDelay: `${index * 0.4}s`
              }}
            >
              <div className="w-8 h-6 bg-white/10 rounded-lg border border-white/20 flex items-center justify-center">
                <Quote className="h-3 w-3 text-white/40" />
              </div>
            </div>
          ))}
          
          {/* Rating stars floating */}
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="absolute animate-pulse"
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              <Star className="h-2 w-2 text-white/30 fill-current" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Client satisfaction metrics */}
      <div 
        className="absolute bottom-20 left-10 opacity-10"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <ThumbsUp className="h-4 w-4 text-white/40" />
            <div className="text-white/30 text-xs">100% Satisfaction</div>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-white/40" />
            <div className="text-white/30 text-xs">30+ Happy Clients</div>
          </div>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 text-white/40 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up text-shadow">
            What Clients <span className="gradient-text-static">Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up stagger-1">
            Don't just take my word for it - here's what my clients have to say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group glass-card rounded-xl p-8 sophisticated-hover transition-all duration-500 animate-fade-in-up stagger-${index + 1} border-gradient`}
            >
              {/* Quote icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-glow">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 text-center mb-8 leading-relaxed italic group-hover:text-gray-200 transition-colors duration-300">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30 group-hover:border-white/60 transition-all duration-300 hover-glow">
                    <User className="h-6 w-6 text-white/80" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-white font-semibold group-hover:text-gray-200 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
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

export default Testimonials;