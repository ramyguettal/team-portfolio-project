// Nasro.js
import nasroImg from './assets/nasro.jpg';

import React, { useState, useEffect } from 'react';
import './Nasro.css';

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <ul>
        {navItems.map(item => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={activeSection === item ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item);
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <h1>Nasrellah Kharroubi</h1>
        <p className="subtitle">AI Engineer & Software Engineer</p>
        <p className="tagline">Building intelligent systems that connect data, models, and people.</p>
        <div className="btn-group">
          <a href="#resume" className="btn btn-primary">
            📄 Download Resume
          </a>
          <button className="btn" onClick={() => scrollToSection('contact')}>
            💌 Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="profile-img">
            <img src={nasroImg} alt="Nasrellah Kharroubi" className="profile-photo" />
          </div>
          <div className="about-text">
            <p>
              I'm an AI engineer passionate about developing intelligent, data-driven applications. 
              I specialize in machine learning, natural language processing, and software architecture. 
              My goal is to bridge the gap between AI research and real-world impact, creating solutions 
              that make a meaningful difference in how we interact with technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Component
const Skills = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  const skillsData = [
    {
      title: 'Languages',
      skills: ['Python', 'C++', 'JavaScript']
    },
    {
      title: 'AI / ML',
      skills: ['TensorFlow', 'PyTorch', 'scikit-learn']
    },
    {
      title: 'Web & App Dev',
      skills: ['React', 'Flutter', 'Node.js']
    },
    {
      title: 'Data & Tools',
      skills: ['Pandas', 'NumPy', 'SQL', 'Docker', 'Git', 'Linux']
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setVisibleCards(prev => [...prev, index]);
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll('.skill-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`skill-card ${visibleCards.includes(index) ? 'visible' : ''}`}
              data-index={index}
            >
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const projectsData = [
    {
      title: 'Job Matching AI',
      description: 'Developed an A* search-based system for ranking job seekers against job offers using custom heuristics to optimize matching accuracy.',
      tech: 'Python, Pandas, Heuristic Search'
    },
    {
      title: 'NLP Sentiment Analyzer',
      description: 'Built a real-time sentiment analysis tool using transformer models to analyze customer feedback and generate actionable insights.',
      tech: 'PyTorch, Transformers, FastAPI'
    },
    {
      title: 'Computer Vision App',
      description: 'Created an object detection mobile application using Flutter and TensorFlow Lite for real-time image recognition on edge devices.',
      tech: 'Flutter, TensorFlow Lite, Dart'
    },
    {
      title: 'Data Pipeline System',
      description: 'Engineered a scalable ETL pipeline for processing large datasets with automated data validation and monitoring capabilities.',
      tech: 'Python, Docker, SQL, Apache Airflow'
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech-used">Tech: {project.tech}</p>
              <div className="project-links">
                <a href="#github" className="project-btn">🔗 View on GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Component
const Experience = () => {
  const timelineData = [
    {
      title: 'AI Engineering Student',
      date: '2022 – Present',
      description: 'ENSIA, specialization in Artificial Intelligence and Data Science. Focus on deep learning, NLP, and intelligent systems.'
    },
    {
      title: 'AI Engineer Intern',
      date: '2025 – TechLab',
      description: 'Built ML models and integrated them into production APIs, improving system efficiency by 40%.'
    },
    {
      title: 'Software Development Freelancer',
      date: '2023 – Present',
      description: 'Developed custom web applications and AI solutions for various clients, specializing in full-stack development.'
    }
  ];

  return (
    <section id="experience">
      <div className="container">
        <h2>Experience & Education</h2>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p className="date">{item.date}</p>
                <p>{item.description}</p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Certifications Component
const Certifications = () => {
  const certsData = [
    { title: 'TensorFlow Developer', subtitle: 'Google Certificate' },
    { title: 'Kaggle Competitions', subtitle: 'Multiple Top Ranks' },
    { title: 'AI Hackathons', subtitle: 'Top 5% Placement' },
    { title: 'Pharmaco Genomics Researcher', subtitle: 'Published Work' }
  ];

  return (
    <section id="certifications">
      <div className="container">
        <h2>Certifications & Achievements</h2>
        <div className="cert-grid">
          {certsData.map((cert, index) => (
            <div key={index} className="cert-badge">
              <h4>{cert.title}</h4>
              <p>{cert.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-content">
          <h2>Contact Me</h2>
          <p>Let's build something intelligent together.</p>
          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>
            <button onClick={handleSubmit} className="btn btn-primary">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer>
      <p>© 2025 Nasrellah Kharroubi.</p>
    </footer>
  );
};

// Main App Component
function Nasro() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default Nasro;