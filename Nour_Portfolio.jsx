import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Code, Brain, Database, Sparkles } from 'lucide-react';

const PortfolioStyles = () => {
  return (
    <style>{`
/* === 1. Google Font Import === */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

/* === 2. CSS Resets & Base Styles === */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-family: 'Roboto', sans-serif;
}

/* Apply background to html and body to ensure full coverage */
html, .portfolio-body {
  min-height: 100vh;
  width: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

input, button, textarea, select {
  font: inherit;
}

/* === 3. Main Body Wrapper === */
.portfolio-body {
  background-image: linear-gradient(to bottom right, #f8fafc, #eff6ff, #f3e8ff);
}

/* === 4. Reusable Utility Classes === */
.text-gradient-primary {
  background-image: linear-gradient(to right, #7c3aed, #9333ea);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

/* Base "glass" card style */
.card-base {
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  border-radius: 1rem; /* rounded-2xl */
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); /* shadow-lg */
  border: 1px solid rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease-in-out;
}

/* Header removed */

/* === 6. Hero Section === */
.hero {
  padding-top: 5rem;  /* Reduced since no header */
  padding-bottom: 5rem; /* pb-20 (80px) */
  padding-left: 1.5rem; /* px-6 */
  padding-right: 1.5rem;
}

.hero-container {
  max-width: 1024px; /* max-w-5xl */
  margin: 0 auto;
  text-align: center;
}

.hero-profile-picture {
  width: 8rem; /* w-32 */
  height: 8rem; /* h-32 */
  border-radius: 50%; /* rounded-full */
  background-image: url('Nour.jpg');
  background-size: cover;
  background-position: center;
  border: 4px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); /* shadow-lg */
  margin-bottom: 2rem; /* mb-8 */
}

.hero-title {
  font-size: 2.25rem; /* text-4xl */
  font-weight: 800; /* font-extrabold */
  color: #0f172a; /* text-slate-900 */
  line-height: 1.2; /* leading-tight */
  margin-bottom: 1.5rem; /* mb-6 */
}

.hero-subtitle {
  font-size: 1.125rem; /* text-lg */
  color: #475569; /* text-slate-600 */
  max-width: 48rem; /* max-w-3xl */
  margin: 0 auto 2rem auto; /* mx-auto mb-8 */
  line-height: 1.625; /* leading-relaxed */
}

.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem; /* gap-4 */
  margin-bottom: 3rem; /* mb-12 */
}

.btn-primary, .btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem; /* gap-2 */
  padding: 0.75rem 1.5rem; /* px-6 py-3 */
  border-radius: 0.75rem; /* rounded-xl */
  font-weight: 600; /* font-semibold */
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
}
.btn-primary svg, .btn-secondary svg {
  width: 1.25rem; /* w-5 */
  height: 1.25rem; /* h-5 */
}

.btn-primary {
  background-image: linear-gradient(to right, #7c3aed, #9333ea);
  color: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(139, 92, 246, 0.3), 0 4px 6px -2px rgba(139, 92, 246, 0.2);
  border: none;
}
.btn-primary:hover {
  box-shadow: 0 20px 25px -5px rgba(139, 92, 246, 0.4), 0 10px 10px -5px rgba(139, 92, 246, 0.3);
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: #ffffff;
  color: #334155; /* text-slate-700 */
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); /* shadow-lg */
  border: 2px solid #e2e8f0; /* border-slate-200 */
}
.btn-secondary:hover {
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); /* shadow-xl */
  transform: translateY(-2px);
}

/* === 7. Stats Section === */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* grid-cols-2 */
  gap: 1rem; /* gap-4 */
  max-width: 56rem; /* max-w-4xl */
  margin: 0 auto;
}

.stat-card {
  padding: 1.5rem; /* p-6 */
}
.stat-card:hover {
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); /* shadow-xl */
  transform: translateY(-4px); /* -translate-y-1 */
}
.stat-card-label {
  font-size: 0.875rem; /* text-sm */
  font-weight: 500;
  color: #475569; /* text-slate-600 */
  margin-bottom: 0.25rem; /* mb-1 */
}
.stat-card-value {
  font-size: 1.875rem; /* text-3xl */
  font-weight: 700;
}

/* === 8. Main Content Sections === */
.main-content {
  max-width: 1280px; /* max-w-7xl */
  margin: 0 auto;
  padding: 0 1.5rem 5rem 1.5rem; /* px-6 pb-20 */
}

.content-section {
  margin-bottom: 6rem; /* mb-24 */
  scroll-margin-top: 8rem; /* scroll-mt-32 (for sticky nav) */
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem; /* gap-4 */
  margin-bottom: 3rem; /* mb-12 */
  text-align: center;
}

.section-number-bubble {
  width: 3.5rem; /* w-14 */
  height: 3.5rem; /* h-14 */
  border-radius: 1rem; /* rounded-2xl */
  background-image: linear-gradient(to bottom right, #8b5cf6, #a855f7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.5rem; /* text-2xl */
  font-weight: 700;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); /* shadow-lg */
  flex-shrink: 0;
}

.section-title {
  font-size: 1.875rem; /* text-3xl */
  font-weight: 800; /* font-extrabold */
  color: #0f172a; /* text-slate-900 */
}

/* === 9. Projects Section === */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile first */
  gap: 1.5rem; /* gap-6 */
}

.project-card {
  padding: 2rem; /* p-8 */
}
.project-card:hover {
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); /* shadow-2xl */
  transform: translateY(-8px); /* -translate-y-2 */
}
.project-bar {
  width: 4rem; /* w-16 */
  height: 0.375rem; /* h-1.5 */
  border-radius: 9999px;
  margin-bottom: 1.5rem; /* mb-6 */
}
.project-card-header {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem; /* gap-3 */
  margin-bottom: 1rem; /* mb-4 */
}
.project-icon {
  padding: 0.5rem; /* p-2 */
  border-radius: 0.5rem; /* rounded-lg */
  color: #ffffff;
  flex-shrink: 0;
}
.project-icon svg {
  width: 1.25rem; /* w-5 */
  height: 1.25rem; /* h-5 */
}
.project-title {
  font-size: 1.25rem; /* text-xl */
  font-weight: 700;
  color: #0f172a; /* text-slate-900 */
  transition: color 0.3s ease;
}
.project-card:hover .project-title {
  color: #7c3aed; /* group-hover:text-violet-600 */
}
.project-description {
  color: #475569; /* text-slate-600 */
  line-height: 1.625; /* leading-relaxed */
}

/* === 10. Studies Section === */
.studies-container {
  max-width: 56rem; /* max-w-4xl */
  margin: 0 auto;
}
.studies-card {
  padding: 2rem; /* p-8 */
}
.studies-card p {
  font-size: 1rem; /* text-base */
  color: #334155; /* text-slate-700 */
  line-height: 1.625; /* leading-relaxed */
  margin-bottom: 1.5rem; /* mb-6 */
}
.studies-card p strong {
  color: #6d28d9; /* text-violet-600 */
}
.studies-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem; /* space-y-4 */
}
.studies-list-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem; /* gap-3 */
  color: #475569; /* text-slate-600 */
}
.studies-list-item-arrow {
  color: #6d28d9; /* text-violet-600 */
  font-weight: 700;
  font-size: 1.25rem; /* text-xl */
  flex-shrink: 0;
  line-height: 1.5;
}

/* === 11. Skills Section === */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* grid-cols-2 */
  gap: 1rem; /* gap-4 */
}
.skill-tag {
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  border-radius: 0.75rem; /* rounded-xl */
  padding: 1rem; /* p-4 */
  text-align: center;
  font-weight: 600; /* font-semibold */
  color: #334155; /* text-slate-700 */
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); /* shadow-md */
  transition: all 0.2s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.6);
}
.skill-tag:hover {
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); /* shadow-lg */
  transform: translateY(-4px); /* -translate-y-1 */
  background-image: linear-gradient(to bottom right, #f5f3ff, #f3e8ff); /* from-violet-50 to-purple-50 */
}

/* === 12. Contact Section === */
.contact-container {
  max-width: 42rem; /* max-w-2xl */
  margin: 0 auto;
}
.contact-intro {
  text-align: center;
  font-size: 1rem; /* text-base */
  color: #475569; /* text-slate-600 */
  margin-bottom: 2rem; /* mb-8 */
}
.contact-card {
  padding: 2rem; /* p-8 */
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* space-y-4 */
}
.form-input {
  width: 100%;
  padding: 0.75rem 1rem; /* px-4 py-3 */
  border-radius: 0.75rem; /* rounded-xl */
  border: 2px solid #e2e8f0; /* border-slate-200 */
  transition: all 0.2s ease-in-out;
  background-color: #fff;
}
.form-input:focus {
  border-color: #8b5cf6; /* focus:border-violet-500 */
  outline: none;
  box-shadow: 0 0 0 4px #ede9fe; /* focus:ring-4 focus:ring-violet-100 */
}
.form-textarea {
  resize: none;
}
.form-submit-btn {
  width: 100%;
  padding-top: 1rem; /* py-4 */
  padding-bottom: 1rem;
  border: none;
  cursor: pointer;
}

/* === 13. Footer === */
.footer {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  padding: 2rem 0; /* py-8 */
  text-align: center;
  color: #475569; /* text-slate-600 */
  border-top: 1px solid #e2e8f0; /* border-slate-200 */
}
.footer-text {
  font-size: 0.875rem; /* text-sm */
}

/* === 14. Responsiveness Rules === */

/* Medium screens (tablets) */
@media (min-width: 768px) {
  .hero {
    padding-top: 5rem; /* Reduced since no header */
  }
  .hero-title {
    font-size: 3rem; /* md:text-5xl */
  }
  .hero-subtitle {
    font-size: 1.25rem; /* md:text-xl */
  }
  .stats-grid {
    grid-template-columns: repeat(4, 1fr); /* md:grid-cols-4 */
  }
  .section-title {
    font-size: 2.25rem; /* md:text-4xl */
  }
  .projects-grid {
    grid-template-columns: repeat(2, 1fr); /* md:grid-cols-2 */
  }
  .project-title {
    font-size: 1.5rem; /* md:text-2xl */
  }
  .studies-card p {
    font-size: 1.125rem; /* md:text-lg */
  }
  .skills-grid {
    grid-template-columns: repeat(3, 1fr); /* md:grid-cols-3 */
  }
  .contact-intro {
    font-size: 1.125rem; /* md:text-lg */
  }
  .footer-text {
    font-size: 1rem; /* md:text-base */
  }
}

/* Small phones */
@media (max-width: 480px) {
  .hero {
    padding-top: 6rem; /* Reduce top padding for very small screens */
    padding-bottom: 3rem;
  }
  .hero-title {
    font-size: 1.875rem; /* text-3xl, smaller for tiny screens */
  }
  .hero-subtitle {
    font-size: 1rem; /* text-base */
    margin-bottom: 1.5rem;
  }
  .hero-cta-group {
    flex-direction: column;
    gap: 0.75rem;
  }
  .btn-primary, .btn-secondary {
    width: 100%;
    justify-content: center;
  }
  .stats-grid {
    grid-template-columns: 1fr; /* Single column for very small screens */
    gap: 0.75rem;
  }
  .stat-card {
    padding: 1rem;
  }
  .stat-card-value {
    font-size: 1.5rem;
  }
  .section-title {
    font-size: 1.5rem;
  }
  .project-card {
    padding: 1.5rem;
  }
  .project-title {
    font-size: 1.125rem;
  }
  .studies-card {
    padding: 1.5rem;
  }
  .studies-card p {
    font-size: 0.875rem;
  }
  .skills-grid {
    grid-template-columns: 1fr; /* Single column for very small screens */
    gap: 0.75rem;
  }
  .skill-tag {
    padding: 0.75rem;
    font-size: 0.875rem;
  }
  .contact-card {
    padding: 1.5rem;
  }
  .contact-intro {
    font-size: 0.875rem;
  }
  .footer {
    padding: 1.5rem 0;
  }
  .footer-text {
    font-size: 0.75rem;
  }
}

/* Large screens (desktops) */
@media (min-width: 1024px) {
  .hero-title {
    font-size: 3.75rem; /* lg:text-6xl */
  }
  .skills-grid {
    grid-template-columns: repeat(4, 1fr); /* lg:grid-cols-4 */
  }
}
    `}</style>
  );
};


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const sectionsRef = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      // Logic for compact header
      setIsHeaderCompact(window.scrollY > 50);

      // Logic for active nav link
      const scrollPosition = window.scrollY + 200;
      
      let currentSection = '';
      Object.entries(sectionsRef.current).forEach(([id, element]) => {
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = id;
          }
        }
      });
      
      // If no section is in view (e.g., at the top or bottom), clear active state
      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 200) {
        setActiveSection(''); // No section active at the very top
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = sectionsRef.current[id];
    if (element) {
      const offset = 100; // Offset for the sticky header
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Use a custom modal or message display instead of alert()
    console.log('Message sent! (Demo mode)');
    setFormData({ name: '', email: '', message: '' });
  };
  
  // Converted Tailwind gradients to raw CSS for the 'style' prop
  const projects = [
    {
      title: 'CSP Tour Planner',
      description: 'Web app solving complex travel routes using AI heuristics (Constraint Satisfaction Problem).',
      gradient: 'linear-gradient(to right, #8b5cf6, #a855f7)',
      icon: <Brain />
    },
    {
      title: 'Money Spending App',
      description: 'Flutter app tracking daily expenses with charts and AI-based category predictions.',
      gradient: 'linear-gradient(to right, #14b8a6, #06b6d4)',
      icon: <Sparkles />
    },
    {
      title: 'Data Mining Project (CERIST)',
      description: 'Collaborative data mining study involving PCA, clustering, and real-world datasets.',
      gradient: 'linear-gradient(to right, #64748b, #334155)',
      icon: <Database />
    },
    {
      title: 'System Architecture Visualizations',
      description: 'Interactive models showcasing microkernel and MVC patterns.',
      gradient: 'linear-gradient(to right, #6366f1, #ec4899)',
      icon: <Code />
    }
  ];

  const skills = [
    'Python', 'TensorFlow', 'Scikit-learn', 'Pandas',
    'NumPy', 'Flutter', 'React', 'Node.js',
    'MongoDB', 'SQLite', 'Git', 'CSS'
  ];

  const stats = [
    { label: 'AI Projects', value: '6+' },
    { label: 'Web & Mobile Apps', value: '4' },
    { label: 'Collaborations', value: 'CERIST' },
    { label: 'Publications', value: '2' }
  ];

  return (
    // Replaced all Tailwind classes with our CSS classes
    <div className="portfolio-body">
      {/* This component injects all the <style> tags */}
      <PortfolioStyles />

      {/* Sticky Header */}
      <header className={`header ${isHeaderCompact ? 'is-compact' : ''}`}>
        <div className="header-container">
          <nav className="header-nav">
            {/* Logo */}
            <div className="logo">
              <div 
                className={`logo-image ${isHeaderCompact ? 'is-compact' : ''}`}
                style={{ backgroundImage: "url('Nour.jpg')" }}
              />
              <div className="logo-text">
                <h1 className={isHeaderCompact ? 'is-compact' : ''}>
                  <span className="text-gradient-primary">Nour Tliba</span>
                </h1>
                {!isHeaderCompact && (
                  <p>AI Engineering Student</p>
                )}
              </div>
            </div>

            {/* Navigation */}
            <div className="nav-links">
              {['projects', 'studies', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-button ${
                    activeSection === section ? 'is-active' : ''
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-profile-picture"></div>
          <h2 className="hero-title">
            Hello — I'm{' '}
            <span className="text-gradient-primary">
              Nour
            </span>
            , an AI engineering student passionate about software engineering.
          </h2>
          
          <p className="hero-subtitle">
            I build practical ML systems and intuitive apps that turn complex data into usable insights. 
            My work connects algorithmic rigor (PCA, CSP, optimization) with human-centered product design.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <Github />
              GitHub
            </a>
            <a
              href="mailto:nour.tliba@ensia.edu.dz"
              className="btn-secondary"
            >
              <Mail />
              Email
            </a>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card card-base"
              >
                <div className="stat-card-label">{stat.label}</div>
                <div className="stat-card-value text-gradient-primary">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        {/* Projects Section */}
        <section
          ref={(el) => (sectionsRef.current.projects = el)}
          className="content-section"
          id="projects"
        >
          <div className="section-header">
            <div className="section-number-bubble">1</div>
            <h3 className="section-title">Featured Projects</h3>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card card-base"
              >
                <div 
                  className="project-bar" 
                  style={{ backgroundImage: project.gradient }} 
                />
                <div className="project-card-header">
                  <div 
                    className="project-icon" 
                    style={{ backgroundImage: project.gradient }}
                  >
                    {project.icon}
                  </div>
                  <h4 className="project-title">
                    {project.title}
                  </h4>
                </div>
                <p className="project-description">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Studies Section */}
        <section
          ref={(el) => (sectionsRef.current.studies = el)}
          className="content-section"
          id="studies"
        >
          <div className="section-header">
            <div className="section-number-bubble">2</div>
            <h3 className="section-title">AI & Data Mining Studies</h3>
          </div>

          <div className="studies-container">
            <div className="studies-card card-base">
              <p>
                I'm currently pursuing AI Engineering studies with a strong focus on{' '}
                <strong>Data Mining, Machine Learning, and Optimization.</strong>{' '}
                My coursework includes PCA, clustering, CSPs, and applied deep learning.
              </p>
              <ul className="studies-list">
                {[
                  'Collaborating with CERIST on unsupervised learning and data reduction.',
                  'Researching PCA variance selection and dimensionality trade-offs.',
                  'Applied CSP modeling in AI route planning (Tour Planner project).'
                ].map((item, index) => (
                  <li key={index} className="studies-list-item">
                    <span className="studies-list-item-arrow">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          ref={(el) => (sectionsRef.current.skills = el)}
          className="content-section"
          id="skills"
        >
          <div className="section-header">
            <div className="section-number-bubble">3</div>
            <h3 className="section-title">Skills & Tools</h3>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-tag"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          ref={(el) => (sectionsRef.current.contact = el)}
          className="content-section"
          id="contact"
        >
          <div className="section-header">
            <div className="section-number-bubble">4</div>
            <h3 className="section-title">Contact & Collaboration</h3>
          </div>

          <div className="contact-container">
            <p className="contact-intro">
              I'm always open to collaborations in AI research, web development, or data-centric projects.
            </p>

            <div className="contact-card card-base">
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.g.target.value})}
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="form-input"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="form-input form-textarea"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary form-submit-btn"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">© 2025 Nour Tliba — AI Engineering Student • CERIST Researcher</p>
      </footer>
    </div>
  );
};

export default Portfolio;

