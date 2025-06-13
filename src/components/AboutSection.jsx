import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Award, Globe } from 'lucide-react';

const AboutSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolioTab = (tab) => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Trigger tab change after scroll
      setTimeout(() => {
        const event = new CustomEvent('changePortfolioTab', { detail: tab });
        window.dispatchEvent(event);
      }, 500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full py-20 px-0 overflow-x-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            ✨ Transforming ideas into digital experiences ✨
          </p>
        </motion.div>

        <div className="w-full flex justify-between items-center gap-16">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 flex-1 max-w-2xl"
          >
            <div className="space-y-6">
              <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Hello, I'm
              </h3>
              <h4 className="text-4xl lg:text-5xl font-bold text-white">
                Manik Tyagi
              </h4>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Seorang lulusan Teknik Jaringan Komputer dan Telekomunikasi 
                yang memiliki ketertarikan besar dalam pengembangan Front-End. 
                Saya berfokus pada menciptakan pengalaman digital yang 
                menarik dan selalu berusaha memberikan solusi terbaik dalam 
                setiap proyek yang saya kerjakan.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('portfolio')}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                <Code size={18} />
                View Projects
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 px-6 py-3 border border-purple-500 rounded-lg font-medium hover:bg-purple-500/10 transition-all"
              >
                <ArrowRight size={18} />
                Contact Me
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden lg:flex justify-end flex-1 max-w-lg"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-purple-500/30">
                  <img
                    src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171827_GwbDHEuhisbGFXRfIpXFhtf7wAvsbLut.jpg"
                    alt="Manik Tyagi"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={() => scrollToPortfolioTab('projects')}
            className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 text-center hover:bg-gray-700/30 transition-all backdrop-blur-sm cursor-pointer"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-3xl font-bold text-white mb-2">4</h4>
            <p className="text-gray-400 text-sm uppercase tracking-wider">TOTAL PROJECTS</p>
            <p className="text-gray-500 text-xs mt-1">Innovative web solutions crafted</p>
            <ArrowRight className="w-4 h-4 text-purple-400 mx-auto mt-3" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={() => scrollToPortfolioTab('certificates')}
            className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 text-center hover:bg-gray-700/30 transition-all backdrop-blur-sm cursor-pointer"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-3xl font-bold text-white mb-2">3</h4>
            <p className="text-gray-400 text-sm uppercase tracking-wider">CERTIFICATES</p>
            <p className="text-gray-500 text-xs mt-1">Professional skills validated</p>
            <ArrowRight className="w-4 h-4 text-cyan-400 mx-auto mt-3" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={() => scrollToPortfolioTab('projects')}
            className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 text-center hover:bg-gray-700/30 transition-all backdrop-blur-sm cursor-pointer"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-3xl font-bold text-white mb-2">1</h4>
            <p className="text-gray-400 text-sm uppercase tracking-wider">YEARS OF EXPERIENCE</p>
            <p className="text-gray-500 text-xs mt-1">Continuous learning journey</p>
            <ArrowRight className="w-4 h-4 text-blue-400 mx-auto mt-3" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;