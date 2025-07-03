import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Send, CheckCircle, AlertCircle, MessageSquare, Plane, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showPlane, setShowPlane] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowPlane(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ fullName: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('idle');
        setShowPlane(false);
      }, 3000);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/ifzyy',
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/johnson-emmanuel',
      icon: Linkedin
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]" />
      
      {/* Flying paper plane animation */}
      <AnimatePresence>
        {showPlane && (
          <motion.div
            className="fixed top-1/2 left-0 z-50 pointer-events-none"
            initial={{ x: -100, y: 0, rotate: 0 }}
            animate={{ 
              x: window.innerWidth + 100, 
              y: -200,
              rotate: 15
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <Plane className="h-8 w-8 text-white" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
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
            Let's Build <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's start a conversation about your next project.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="glass-card rounded-2xl p-8 md:p-12 border border-white/10"
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        >
          {/* Form Header */}
          <div className="text-center mb-10">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(255,255,255,0.2)',
                  '0 0 40px rgba(255,255,255,0.4)',
                  '0 0 20px rgba(255,255,255,0.2)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MessageSquare className="h-8 w-8 text-white" />
            </motion.div>
            <h3 className="text-2xl font-semibold text-white mb-2">Get in Touch</h3>
            <p className="text-gray-400">
              I typically respond within 24 hours. Let's make something amazing together!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 hover:border-white/50"
                  placeholder="Enter your full name"
                />
              </motion.div>
              
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 hover:border-white/50"
                  placeholder="Enter your email address"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 glass border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 resize-none hover:border-white/50"
                placeholder="Tell me about your project, goals, and how I can help..."
              />
            </motion.div>

            {/* Submit Status */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  className="flex items-center justify-center space-x-2 text-green-400 glass border border-green-400/20 p-3 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <CheckCircle className="h-5 w-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="flex items-center justify-center space-x-2 text-red-400 glass border border-red-400/20 p-3 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <AlertCircle className="h-5 w-5" />
                  <span>Something went wrong. Please try again.</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.div
              className="text-center"
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group relative px-8 py-4 bg-white text-black font-semibold rounded-lg overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-black border-t-transparent rounded-full mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

        {/* Contact Info & Social Links */}
        <motion.div
          className="text-center mt-12"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-gray-400 mb-6">Or connect with me on:</p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 glass hover:bg-white/20 rounded-lg transition-all duration-300 transform hover:scale-110 hover-glow border-gradient"
                  whileHover={{ y: -5 }}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 1.2 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  <IconComponent className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;