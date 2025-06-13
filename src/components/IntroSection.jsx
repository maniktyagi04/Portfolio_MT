import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const IntroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Welcome to My Personal Portfolio';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, delay: 1 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default IntroSection;