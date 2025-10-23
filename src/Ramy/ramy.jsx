

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowDownIcon,
  AcademicCapIcon, 
  UserIcon, 
  MapPinIcon, 
  CameraIcon,
  CodeBracketIcon, 
  ServerIcon, 
  CircleStackIcon, 
  CpuChipIcon,
  ArrowTopRightOnSquareIcon,
  GlobeAltIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EnvelopeIcon, 
  PhoneIcon,
  PaperAirplaneIcon,
  Bars3Icon,
  HeartIcon
} from '@heroicons/react/24/outline';


// Navbar Component
const Navbar = () => { 
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Team', href: '/team', isRoute: true }, 
  ];

  const scrollToSection = (href, isRoute) => {
    if (isRoute) {
      window.location.href = href; // Use this instead of navigate
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 overflow-x-hidden ${
        scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <img
              src="./assets/logo.png"
              alt="Mohamed Ramy"
              className="h-10 sm:h-12 md:h-14 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href, item.isRoute)}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-primary-500/20"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-1.5 sm:p-2 -mr-1"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-4 pb-3 space-y-1 sm:px-3 glass-effect rounded-lg mt-2 mx-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href, item.isRoute)}
                  className="text-gray-300 hover:text-white block px-3 py-2.5 rounded-md text-sm sm:text-base font-medium transition-colors duration-200 hover:bg-primary-500/20 w-full text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
// Hero Component
const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Create animated particles for dynamic background
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700"></div>
        
        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Gradient circles */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-300/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary-400/15 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4 mt-16 md:mt-0"
            >
              <span className="gradient-text">Mohamed Ramy Guettal</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-6"
            >
              3rd Year AI Student
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Passionate about artificial intelligence and machine learning. 
              Currently studying at ENSIA – the National Higher School of Artificial Intelligence in Algeria.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                See My Work
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-primary-500 text-primary-400 font-semibold rounded-lg hover:bg-primary-500/10 transition-all duration-300"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* 3D Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
              className="relative"
            >
              <div className="w-96 h-96 lg:w-[30rem] lg:h-[30rem] rounded-2xl card-3d glass-effect p-8 flex flex-col items-center justify-center transform-gpu">
                {/* Profile Image */}
                <div className="w-64 h-64 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden mb-6 shadow-2xl border-4 border-primary-500/20">
                  <img 
                    src="/../assets/developer.jpg" 
                    alt="Mohamed Ramy Guettal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Mohamed Ramy
                </h3>
                
                <p className="text-gray-300 text-center text-lg">
                  AI Student & Developer
                </p>
                
                <div className="flex space-x-4 mt-4">
                  <div className="w-4 h-4 bg-primary-400 rounded-full animate-pulse"></div>
                  <div className="w-4 h-4 bg-primary-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-4 h-4 bg-primary-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ArrowDownIcon className="h-8 w-8" />
        </motion.button>
      </motion.div>
    </section>
  );
};

// About Component
const About = () => {
  const educationData = [
    {
      year: '2023 - Present',
      title: '3rd Year AI Student',
      institution: 'ENSIA – National Higher School of Artificial Intelligence',
      location: 'Algeria',
      description: 'Specializing in machine learning, deep learning, and AI applications. Actively participating in AI competitions and contributing to open-source projects.',
      icon: AcademicCapIcon,
    },

    {
      year: '2020 - 2023',
      title: 'Baccalaureate',
      institution: 'Ben Alioui High School',
      location: 'Algeria',
      description: 'Earned Baccalaureate with an exceptional score of 18.63/20 in the Scientific stream, building a strong foundation in mathematics and sciences.',
      icon: UserIcon,
    },
    {
      year: '2019 - Present',
      title: 'Creative Producer & Media Editor',
      institution: 'Freelance & ENSIA Media',
      location: 'Algeria',
      description: 'Experienced beatmaker and music producer with 5+ years using FL Studio. Creating remixes, remakes, and original instrumentals. Skilled in video editing with CapCut and DaVinci Resolve. Leading creative direction and multimedia content at ENSIA Tech Community.',
      icon: CameraIcon,
    },
  ];

  const leadershipExperience = [
    {
      year: '2024 - 2025',
      role: 'Production Manager',
      organization: 'ETC (ENSIA Tech Community)',
      description: 'Managed production aspects of tech community initiatives.'
    },   
    {
      year: '2024 - 2025',
      role: 'Marketing Leader',
      organization: 'Skill&Tell Club',
      description: 'Currently leading marketing initiatives and strategic communications.'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 relative">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 opacity-50"></div>
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Additional floating particles */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-400 mb-4">Background</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I am a passionate 3rd-year student at ENSIA – the National Higher School of Artificial Intelligence in Algeria. 
                  My journey started in the Scientific stream at Ben Alioui High School, where I built a strong foundation in mathematics and sciences and earned my Baccalaureate with an excellent score of 18.63/20.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-400 mb-4">AI & Development Journey</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  At ENSIA, I've developed a deep interest and hands-on experience in Artificial Intelligence, particularly in machine learning, deep learning, and real-world AI applications. I actively explore new tools, participate in AI competitions, and contribute to open-source projects.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary-400 mb-4">Technical Expertise</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  As a full-stack developer, I work with modern technologies like React.js and Tailwind CSS for frontend, while utilizing PHP, Flask, and Node.js for backend development. I'm also proficient in Python, Java, and C++, which I've applied across various projects.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-400 mb-4">Creative Skills</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My passion extends to media production, where I excel in photography and video editing using CapCut and DaVinci Resolve. With 5 years of experience in FL Studio, I create remakes, remixes, and original instrumentals.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-400 mb-4">Leadership Roles</h3>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    • Currently serving as Marketing Leader at Skill&Tell Club
                  </p>
                  <p className="text-gray-300">
                    • Former Production Manager at ETC (ENSIA Tech Community) during 2024–2025
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="flex items-start space-x-4">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    {index < educationData.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-primary-500 to-transparent mt-2"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-primary-500/5 backdrop-blur-sm rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-primary-400">{item.title}</h3>
                      <p className="text-gray-300 mt-1">{item.institution}</p>
                      <p className="text-gray-400 text-sm mt-1">{item.year}</p>
                      <p className="text-gray-300 mt-3">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Skills Component
const Skills = () => {
  const skillCategories = [
    {
      title: '🖥️ Frontend',
      icon: CodeBracketIcon,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
        { name: 'Tailwind CSS', level: 85 },
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: '💾 Database',
      icon: CircleStackIcon,
      skills: [
        { name: 'SQL', level: 80 },
        { name: 'MongoDB', level: 60 },
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: '🧠 Backend',
      icon: ServerIcon,
      skills: [
        { name: 'PHP', level: 70 },
        { name: 'Flask', level: 75 },
        { name: 'Python', level: 80 },
        { name: 'Django', level: 60 },
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: '🛠️ Programming Languages',
      icon: CpuChipIcon,
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Java', level: 70 },
        { name: 'C++', level: 80 },
        { name: 'Python', level: 80 },
      ],
      color: 'from-orange-500 to-red-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700"></div>
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-10 right-10 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Floating particles */}
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 15 + 8,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="h-full"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 2, rotateX: 2 }}
                className="h-full glass-effect rounded-2xl p-6 card-3d border border-white/10 transform-gpu"
              >
                {/* Category Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-primary-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm constantly expanding my skill set and staying updated with the latest technologies. 
              My passion for learning drives me to explore new frameworks, tools, and methodologies 
              that can help me create better solutions and stay competitive in the ever-evolving tech landscape.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: 'TAKHASSOS',
      description: 'A national platform that helps students discover all schools and universities in Algeria and choose their specialization with confidence after the Baccalaureate. Features advanced search, filtering, and a comprehensive guide for specialization selection.',
      image: './assets/takhassos.png',
      technologies: ['React', 'Node.js', 'Flask', 'Tailwind CSS'],
      liveUrl: 'https://takhassos.com',
      githubUrl: '#',
      category: 'Web Development',
      gallery: [
        './assets/photo_1_2025-08-06_16-34-50.jpg',
        './assets/photo_3_2025-08-06_16-34-50.jpg',
        './assets/photo_4_2025-08-06_16-34-50.jpg',
        './assets/photo_5_2025-08-06_16-34-50.jpg',
        './assets/photo_6_2025-08-06_16-34-50.jpg',
        './assets/photo_7_2025-08-06_16-34-50.jpg',
        './assets/photo_8_2025-08-06_16-34-50.jpg',
        './assets/photo_9_2025-08-06_16-34-50.jpg',
        './assets/photo_10_2025-08-06_16-34-50.jpg',
        './assets/photo_11_2025-08-06_16-34-50.jpg',
        './assets/photo_12_2025-08-06_16-34-50.jpg'
      ]
    },
    {
      title: 'Personal Coaching Website',
      description: 'A comprehensive full-stack website for personal coaching services. Features user authentication, booking system, progress tracking, and interactive coaching sessions. Built with modern web technologies for a seamless user experience.',
      image: './assets/1.png',
      technologies: ['React', 'Node.js', 'Tailwind CSS', 'Flask'],
      liveUrl: null,
      githubUrl: null,
      category: 'Web Development',
      gallery: [
        './assets/1.png',
        './assets/2.png',
        './assets/3.png',
        './assets/4.png',
        './assets/5.png',
        './assets/6.png',
        './assets/7.png',
        './assets/8.png',
        './assets/9.png',
        './assets/10.png',
        './assets/11.png',
        './assets/12.png',
        './assets/13.png'
      ]
    },
    {
      title: 'Design and Frontend for Personal Coaching Services',
      description: 'A modern and intuitive frontend design for personal coaching services. Features responsive design, user-friendly interface, booking system, and interactive elements. Focused on creating an engaging user experience with clean aesthetics and smooth interactions.',
      image: './assets/c1.png',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Framer Motion'],
      liveUrl: null,
      githubUrl: null,
      category: 'Frontend Design',
      gallery: [
        './assets/c1.png',
        './assets/c2.png',
        './assets/c3.png',
        './assets/c4.png',
        './assets/c5.png',
        './assets/c6.png',
        './assets/c7.png',
        './assets/c8.png'
      ]
    },
    {
      title: 'Accessories Boutique',
      description: 'A stylish e-commerce website for accessories boutique specializing in caps, glasses, and watches. Features product catalog, shopping cart, user authentication, and secure payment integration. Built with modern web technologies for a premium shopping experience.',
      image: './assets/b1.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Flask'],
      liveUrl: null,
      githubUrl: null,
      category: 'E-Commerce',
      gallery: [
        './assets/b1.png',
        './assets/b2.png',
        './assets/b3.png',
        './assets/b4.png',
        './assets/b5.png',
        './assets/b6.png',
        './assets/b7.png',
        './assets/b8.png',
        './assets/b9.png'
      ]
    },
    {
      title: 'Discover Algeria',
      description: 'A tourism front-end design project that showcases the natural beauty and rich cultural heritage of Algeria. The platform allows users to explore breathtaking landscapes, historical landmarks, and diverse traditions across different regions of the country.',
      image: './assets/t1.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web Design',
      gallery: [
        './assets/t1.png',
        './assets/t2.png',
        './assets/t3.png',
        './assets/t4.png',
        './assets/t5.png',
        './assets/t6.png'
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const openGallery = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.gallery) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.gallery) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="h-full"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 2, rotateX: 2 }}
                className="h-full glass-effect rounded-2xl overflow-hidden card-3d border border-white/10 transform-gpu"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-500/80 text-white text-sm font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>  
                </div>
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary-500/20 text-primary-300 text-xs font-medium rounded-full border border-primary-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.gallery && (
                      <motion.button
                        onClick={() => openGallery(project)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg text-sm hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                      >
                        <CodeBracketIcon className="w-4 h-4" />
                        View Gallery
                      </motion.button>
                    )}
                    
                    {project.liveUrl && project.liveUrl !== '#' && project.liveUrl !== null && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg text-sm hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                      >
                        <GlobeAltIcon className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                    
                    {project.githubUrl && project.githubUrl !== '#' && project.githubUrl !== null && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary-500 text-primary-400 font-semibold rounded-lg text-sm hover:bg-primary-500/10 transition-all duration-300"
                      >
                        <CodeBracketIcon className="w-4 h-4" />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeGallery}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-dark-800 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title} - Gallery
                </h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeGallery}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                >
                  <XMarkIcon className="w-6 h-6 text-white" />
                </motion.button>
              </div>

              {/* Image Display */}
              <div className="relative h-96 md:h-[500px] overflow-hidden">
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  src={selectedProject.gallery[currentImageIndex]}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
                
                {/* Navigation Arrows */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-300"
                >
                  <ChevronLeftIcon className="w-6 h-6 text-white" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-300"
                >
                  <ChevronRightIcon className="w-6 h-6 text-white" />
                </motion.button>
              </div>

              {/* Image Counter */}
              <div className="p-4 text-center">
                <span className="text-gray-300">
                  {currentImageIndex + 1} of {selectedProject.gallery.length}
                </span>
              </div>

              {/* Thumbnail Navigation */}
              <div className="p-4 border-t border-white/10">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {selectedProject.gallery.map((image, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'border-primary-500 scale-110' 
                          : 'border-white/20 hover:border-white/40'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "353c06b4-195f-4490-ab1f-b52179ec1bb7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email',
      value: 'mohamed.ramy.guettal@ensia.edu.dz',
      link: 'mailto:mohamed.ramy.guettal@ensia.edu.dz',
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      value: '+213 540 12 38 95',
      link: 'tel:+213540123895',
    },
    {
      icon: MapPinIcon,
      title: 'Location',
      value: 'Algeria, Setif',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ramyguettal',
      icon: 'github.png',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mohamed-ramy-guettal-2b2a52342',
      icon: 'linkedin.png',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ramyguettal/',
      icon: 'instagram.png',
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Contact Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Get In Touch
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, 
                exciting projects, or just want to say hello. Feel free to reach out!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-4 glass-effect rounded-xl p-4 card-3d border border-white/10"
                >
                  <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-gray-300 break-words">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                   <img
                     src={`./assets/${social.icon}`}
                     alt={social.name}
                     className="w-12 h-12"
                   />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Me a Message
            </h3>
            
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-dark-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-dark-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                <PaperAirplaneIcon className="w-5 h-5" />
                Send Message
              </motion.button>

              {result && (
                <div className={`text-center font-medium ${
                  result === "Form Submitted Successfully" 
                    ? "text-green-400" 
                    : "text-red-400"
                }`}>
                  {result}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ramyguettal',
      icon: 'github.png',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mohamed-ramy-guettal-2b2a52342',
      icon: 'linkedin.png',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ramyguettal/',
      icon: 'instagram.png',
    },
    {
      name: 'Email',
      url: 'mailto:mohamed.ramy.guettal@ensia.edu.dz',
      icon: 'gmail.png',
    },
  ];

  return (
    <footer className="relative py-12 border-t border-white/10">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="white">
              © {currentYear} Mohamed Ramy Guettal. All rights reserved.
            </p>

          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src={`./assets/${social.icon}`}
                  alt={social.name}
                  className="w-10 h-10"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
          >
            Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
