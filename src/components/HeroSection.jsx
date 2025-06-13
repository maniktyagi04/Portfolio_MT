import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const roles = ['Frontend Developer', 'Tech Enthusiast', 'Computer Science Student', 'UI/UX Designer'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = {
    github: 'https://github.com/maniktyagi04',
    linkedin: 'https://www.linkedin.com/in/manikxcsai/',
    instagram: 'https://www.instagram.com/_nikty.codes_/?__pwa=1'
  };

  // Custom Developer Logo Component
  const DeveloperLogo = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative w-80 h-80 lg:w-96 lg:h-96"
    >
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle */}
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="url(#bgGradient)"
          opacity="0.1"
        />
        
        {/* Main Monitor/Screen */}
        <rect
          x="120"
          y="140"
          width="160"
          height="100"
          rx="8"
          fill="url(#screenGradient)"
          stroke="url(#borderGradient)"
          strokeWidth="2"
        />
        
        {/* Screen Content Lines */}
        <rect x="130" y="155" width="60" height="3" rx="1.5" fill="#60A5FA" />
        <rect x="130" y="165" width="80" height="3" rx="1.5" fill="#34D399" />
        <rect x="130" y="175" width="45" height="3" rx="1.5" fill="#F59E0B" />
        <rect x="130" y="185" width="70" height="3" rx="1.5" fill="#EC4899" />
        <rect x="130" y="195" width="55" height="3" rx="1.5" fill="#8B5CF6" />
        <rect x="130" y="205" width="85" height="3" rx="1.5" fill="#06B6D4" />
        <rect x="130" y="215" width="40" height="3" rx="1.5" fill="#10B981" />
        
        {/* Monitor Stand */}
        <rect
          x="190"
          y="240"
          width="20"
          height="30"
          fill="url(#standGradient)"
        />
        <rect
          x="170"
          y="270"
          width="60"
          height="8"
          rx="4"
          fill="url(#standGradient)"
        />
        
        {/* Floating Code Symbols */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {/* HTML Tag */}
          <g transform="translate(80, 100)">
            <rect width="30" height="20" rx="4" fill="url(#htmlGradient)" opacity="0.8" />
            <text x="15" y="13" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
              &lt;/&gt;
            </text>
          </g>
          
          {/* CSS Symbol */}
          <g transform="translate(290, 120)">
            <circle r="15" fill="url(#cssGradient)" opacity="0.8" />
            <text x="0" y="4" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
              CSS
            </text>
          </g>
          
          {/* JS Symbol */}
          <g transform="translate(320, 280)">
            <rect width="25" height="25" rx="4" fill="url(#jsGradient)" opacity="0.8" />
            <text x="12.5" y="16" textAnchor="middle" fill="black" fontSize="9" fontWeight="bold">
              JS
            </text>
          </g>
        </motion.g>
        
        {/* Gears */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <g transform="translate(320, 180)">
            <circle r="20" fill="url(#gearGradient)" opacity="0.7" />
            <circle r="12" fill="none" stroke="white" strokeWidth="2" opacity="0.8" />
            <circle r="4" fill="white" opacity="0.9" />
            {/* Gear teeth */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <rect
                key={i}
                x="-2"
                y="-22"
                width="4"
                height="6"
                fill="url(#gearGradient)"
                transform={`rotate(${angle})`}
              />
            ))}
          </g>
        </motion.g>
        
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <g transform="translate(70, 200)">
            <circle r="15" fill="url(#gearGradient2)" opacity="0.6" />
            <circle r="8" fill="none" stroke="white" strokeWidth="1.5" opacity="0.7" />
            <circle r="3" fill="white" opacity="0.8" />
            {/* Smaller gear teeth */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <rect
                key={i}
                x="-1.5"
                y="-17"
                width="3"
                height="4"
                fill="url(#gearGradient2)"
                transform={`rotate(${angle})`}
              />
            ))}
          </g>
        </motion.g>
        
        {/* Floating Particles */}
        <motion.g
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="100" cy="300" r="3" fill="#60A5FA" opacity="0.6" />
          <circle cx="300" cy="320" r="2" fill="#34D399" opacity="0.7" />
          <circle cx="350" cy="100" r="2.5" fill="#F59E0B" opacity="0.5" />
        </motion.g>
        
        <motion.g
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="60" cy="120" r="2" fill="#EC4899" opacity="0.6" />
          <circle cx="340" cy="250" r="3" fill="#8B5CF6" opacity="0.5" />
        </motion.g>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1F2937" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>
          
          <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          
          <linearGradient id="standGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4B5563" />
            <stop offset="100%" stopColor="#374151" />
          </linearGradient>
          
          <linearGradient id="htmlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
          
          <linearGradient id="cssGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          
          <linearGradient id="jsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#FACC15" />
          </linearGradient>
          
          <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          
          <linearGradient id="gearGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0891B2" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Rotating Border */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 border-2 border-dashed border-purple-500/30 rounded-full"
      ></motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center w-full pt-16 px-0 overflow-x-hidden">
      <div className="w-full flex justify-between items-center px-4 sm:px-8 lg:px-12">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8 flex-1 max-w-2xl"
        >
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              A Full Stack
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Web Developer
              </span>
            </h1>
            
            <div className="h-8 flex items-center">
              <motion.p
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-lg sm:text-xl text-gray-300"
              >
                {roles[currentRole]}
              </motion.p>
            </div>
            
            <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
              Passionate about building full-stack applications with modern technologies. 
              I create seamless user experiences and robust backend solutions.
            </p>
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-3">
            {['React', 'Node.js', 'UI/UX', 'Tailwind', 'JavaScript', 'Python'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-3 sm:px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-purple-300 hover:bg-gray-700/50 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('portfolio')}
              className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-medium hover:from-purple-700 hover:to-cyan-700 transition-all text-sm sm:text-base"
            >
              View Projects
              <ArrowRight size={18} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-4 sm:px-6 py-3 border border-gray-600 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base"
            >
              Contact Me
            </motion.button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-4">
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700/50 hover:border-purple-500 transition-all"
              aria-label="GitHub"
            >
              <Github size={20} className="text-gray-300 hover:text-purple-400 transition-colors" />
            </motion.a>
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700/50 hover:border-purple-500 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-gray-300 hover:text-purple-400 transition-colors" />
            </motion.a>
            <motion.a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700/50 hover:border-purple-500 transition-all"
              aria-label="Instagram"
            >
              <Instagram size={20} className="text-gray-300 hover:text-purple-400 transition-colors" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side - Custom Developer Logo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex justify-end flex-1 max-w-lg"
        >
          <DeveloperLogo />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;