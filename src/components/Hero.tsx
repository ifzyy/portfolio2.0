import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Download, Mail, Code, Sparkles, Zap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hi, I'm Johnson Emmanuel";
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Johnson_Emmanuel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45"
        animate={{
          rotate: [45, 135, 45],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-32 right-20 w-24 h-24 bg-white/5 rounded-full"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-4">
          {/* Content Side */}
          <div className="text-left">
            <motion.div
              className="inline-flex items-center px-4 py-2 glass-card rounded-full mb-6 border border-white/20 mt-4"
              variants={itemVariants}
            >
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full mr-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <p className="text-gray-300 font-medium">Available for new opportunities</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">{text}</span>
                {showCursor && (
                  <motion.span
                    className="text-white"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                )}
              </h1>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-300 mb-8"
            >
              Full-Stack{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Engineer
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-white/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 2, duration: 1 }}
                />
              </span>
            </motion.h2>
            
            <motion.div variants={itemVariants} className="max-w-2xl mb-12">
              <p className="text-xl text-gray-400 leading-relaxed mb-6">
                I build scalable web applications and lead development teams to deliver{' '}
                <span className="text-white font-medium">production-ready solutions</span>.
                From mentoring developers to architecting enterprise systems, I create products that matter.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.button
                onClick={scrollToContact}
                className="group relative px-8 py-4 bg-white text-black font-semibold rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Let's Build Something
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              
              <motion.button
                onClick={handleResumeDownload}
                className="group px-8 py-4 glass-card border-2 border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  <Download className="h-5 w-5 mr-2" />
                  View Resume
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Interactive Illustration */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Central developer figure */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative">
                  <motion.div
                    className="w-48 h-64 glass-card rounded-t-full relative border border-white/20"
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Avatar */}
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-white/30 to-white/10 rounded-full mx-auto mb-4 mt-8 border border-white/20"
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(255,255,255,0.2)',
                          '0 0 40px rgba(255,255,255,0.4)',
                          '0 0 20px rgba(255,255,255,0.2)',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    {/* Code lines */}
                    <div className="absolute inset-x-0 top-24 px-6 space-y-2">
                      {[0.8, 0.6, 0.9, 0.7].map((width, i) => (
                        <motion.div
                          key={i}
                          className="h-1 bg-white/40 rounded"
                          style={{ width: `${width * 100}%` }}
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Floating tech icons */}
                  {[
                    { Icon: Code, position: { top: -8, left: -8 }, delay: 0 },
                    { Icon: Sparkles, position: { top: -4, right: -12 }, delay: 1 },
                    { Icon: Zap, position: { bottom: -8, left: -12 }, delay: 2 },
                  ].map(({ Icon, position, delay }, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-12 h-12 glass-card rounded-lg flex items-center justify-center border border-white/20"
                      style={position}
                      animate={{
                        y: [0, -15, 0],
                        rotate: [0, 10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: delay,
                        ease: "easeInOut",
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Orbiting elements */}
              <div className="absolute inset-0">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className={`absolute border border-white/10 rounded-full ${
                      index === 0 ? 'inset-0' : index === 1 ? 'inset-8' : 'inset-16'
                    }`}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20 + index * 5,
                      repeat: Infinity,
                      ease: "linear",
                      direction: index % 2 === 0 ? 'normal' : 'reverse',
                    }}
                  >
                    <motion.div
                      className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/40 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;