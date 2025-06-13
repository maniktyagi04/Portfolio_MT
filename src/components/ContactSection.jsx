import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'Alex Johnson',
      message: 'Great work on your portfolio! Looking forward to collaborating.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      message: 'Your projects are really impressive. Would love to discuss opportunities.',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ]);

  const socialLinks = {
    github: 'https://github.com/maniktyagi04',
    linkedin: 'https://www.linkedin.com/in/manikxcsai/',
    instagram: 'https://www.instagram.com/_nikty.codes_/?__pwa=1'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Got a question? Send me a message, and I'll get back to you.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 w-full">
          {/* Left Panel - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-medium hover:from-purple-700 hover:to-cyan-700 transition-all"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={20} className="text-purple-400 flex-shrink-0" />
                  <span>manik.tyagi@adypu.edu.in</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={20} className="text-cyan-400 flex-shrink-0" />
                  <span>+91 7017701137</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={20} className="text-blue-400 flex-shrink-0" />
                  <span>Meerut, Uttar Pradesh</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Comments & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Comments Section */}
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6">Recent Comments</h3>
              <div className="space-y-4">
                {comments.map((comment) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex gap-3 p-4 bg-gray-700/30 rounded-lg"
                  >
                    <img
                      src={comment.avatar}
                      alt={comment.name}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="text-white font-medium text-sm">{comment.name}</h4>
                      <p className="text-gray-300 text-sm mt-1">{comment.message}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Pinned Note */}
              <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">MT</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Manik Tyagi (You)</h4>
                    <p className="text-gray-300 text-sm mt-1">
                      Thanks for visiting my portfolio! I'm always open to discussing new opportunities and collaborations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-gray-300 transition-all group"
                >
                  <div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
                    <Github size={20} />
                  </div>
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-all group"
                >
                  <div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-all group"
                >
                  <div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
                    <Instagram size={20} />
                  </div>
                  <span>Instagram</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;