import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Award, Layers } from 'lucide-react';

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('projects');

  useEffect(() => {
    const handleTabChange = (event) => {
      setActiveTab(event.detail);
    };

    window.addEventListener('changePortfolioTab', handleTabChange);
    return () => window.removeEventListener('changePortfolioTab', handleTabChange);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Cryptoverse',
      description: 'Cryptoverse is a dynamic cryptocurrency dashboard that provides real-time data, charts, and news on top digital currencies. Built with React and powered by a crypto API, it features live search, price tracking, and a responsive UI.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'API Integration', 'Chart.js', 'Tailwind CSS'],
      liveDemo: 'https://crypto-verse-flax.vercel.app/',
      github: 'https://github.com/maniktyagi04/CryptoVerse'
    },
    {
      id: 2,
      title: 'AI Chatbot',
      description: 'An intelligent conversational AI chatbot with natural language processing capabilities and context-aware responses.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'OpenAI API', 'Node.js', 'Socket.io'],
      liveDemo: 'https://ai-chat-bot-pied-mu.vercel.app/',
      github: 'https://github.com/maniktyagi04/AI_chatBot'
    },
    {
      id: 3,
      title: 'Career Path Finder',
      description: 'Career Path Finder is an intelligent web tool that helps users discover suitable career options based on their interests and skills. It features a guided questionnaire, smart recommendations, and a clean, responsive UI built with React.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Machine Learning', 'Python', 'Firebase'],
      liveDemo: 'https://careerpath-beta.vercel.app/',
      github: 'https://github.com/maniktyagi04/careerpath'
    },
    {
      id: 4,
      title: 'Pokemon Name Em All!',
      description: 'Pokemon Name Em All is an image-based guessing game where users identify Pokémon by seeing their pictures. Built with React, it features real-time feedback, a responsive UI, and a complete Pokédex integration.',
      image: 'https://i.pinimg.com/736x/f1/24/40/f12440962442d69d8a9fcb56c1148da1.jpg',
      tech: ['React', 'Pokemon API', 'CSS Animations', 'Local Storage'],
      liveDemo: 'https://name-em-all-zeta.vercel.app/',
      github: 'https://github.com/maniktyagi04/Name-Em-All'
    }
  ];

  const certificates = [
    {
      id: 1,
      title: 'AI For Everyone',
      issuer: 'Coursera',
      date: '2024',
      image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/41/763803169e4d31a5e7611bc928124b/Course-Logo.png'
    },
    {
      id: 2,
      title: 'Generative AI',
      issuer: 'Coursera',
      date: '2024',
      image: 'https://pub-e93d5c9fdf134c89830082377f6df465.r2.dev/2025/01/Generative-AI-edited.webp'
    },
    {
      id: 3,
      title: 'ChatGPT And Promot Engineering',
      issuer: 'Coursera',
      date: '2024',
      image: 'https://home-wordpress.deeplearning.ai/wp-content/uploads/2023/04/DLAI-OAI-Image-Preview.png'
    },
    {
      id: 4,
      title: 'Build A Free Website With Wordpress',
      issuer: 'Coursera',
      date: '2024',
      image: 'hhttps://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~COURSE!~build-free-website-wordpress/XDP~COURSE!~build-free-website-wordpress.jpeg'
    }
  ];

  const techStack = [
    { name: 'React', level: 90, color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
    { name: 'Python', level: 80, color: 'from-indigo-400 to-indigo-600' },
    { name: 'UI/UX', level: 60, color: 'from-violet-500 to-violet-700' },
    { name: 'Tailwind CSS', level: 90, color: 'from-cyan-400 to-cyan-600' },
    { name: 'HTML', level: 95, color: 'from-cyan-400 to-cyan-600'},
    { name: 'SQL', level: 50, color: 'from-red-800 to-red-800'}
    
  ];

  const tabs = [
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'techstack', label: 'Tech Stack', icon: Layers }
  ];

  return (
    <div className="min-h-screen w-full py-20 px-0 overflow-x-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            Explore my journey through projects, certifications, and technical expertise. Each 
            section represents a milestone in my continuous learning path.
          </p>
        </motion.div>

        {/* Horizontal Tabs */}
        <div className="flex justify-center mb-12 w-full">
          <div className="flex bg-gray-800/30 border border-gray-700/50 rounded-2xl p-2 backdrop-blur-sm w-full max-w-2xl">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all flex-1 ${
                  activeTab === id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px] w-full">
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/30 border border-gray-700/50 rounded-2xl overflow-hidden hover:bg-gray-700/30 transition-all group backdrop-blur-sm"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.liveDemo}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg text-sm font-medium hover:bg-gray-700/50 transition-colors"
                      >
                        <Github size={16} />
                        Details
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/30 border border-gray-700/50 rounded-2xl overflow-hidden hover:bg-gray-700/30 transition-all group backdrop-blur-sm"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-purple-400 mb-1 font-medium">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm">{cert.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'techstack' && (
            <div className="max-w-4xl mx-auto w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-4 bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold text-lg">{tech.name}</span>
                      <span className="text-gray-400 font-medium">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-3 rounded-full bg-gradient-to-r ${tech.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
