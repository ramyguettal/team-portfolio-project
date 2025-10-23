import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Code, Brain, Database, Sparkles } from 'lucide-react';

const PortfolioStyles = () => {
  return (
    <style>{`
/* === 1. Google Font Import === */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');

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
  font-family: 'Inter', sans-serif;
}

html, .portfolio-body {
  min-height: 100vh;
  width: 100%;
}

body {
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

input, button, textarea, select {
  font: inherit;
}

/* === 3. Main Body Wrapper === */
.portfolio-body {
  background-image: linear-gradient(to bottom right, #f9fafb, #f4f7fe);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* === 4. Reusable Utility Classes === */
.text-gradient-primary {
  background-image: linear-gradient(to right, #6b21a8, #a855f7);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.card-base {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(6px);
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.7);
  transition: all 0.2s ease-in-out;
  width: 100%;
}

/* === 5. Header === */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-image: linear-gradient(to right, #6b21a8, #a855f7);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1000;
  padding: 0.75rem;
}

.header-container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
}

.nav-links {
  display: flex;
  gap: 0.75rem;
}

.nav-button {
  background: none;
  border: none;
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
}

.nav-button:hover, .nav-button.is-active {
  color: #e9d5ff;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-image {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-image: Nour.jpg;
  background-size: cover;
  background-position: center;
  border: 2px solid #ffffff;
}

.logo-text h1 {
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
}

/* === 6. Hero Section === */
.hero {
  padding: 4rem 1rem 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
}

.hero-container {
  width: 100%;
  max-width: 1200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-profile-picture {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-image: nour.jpg;
  background-size: cover;
  background-position: center;
  border: 2px solid rgba(255, 255, 255, 0.9);
  margin-bottom: 0.75rem;
}

.hero-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: #1f2937;
  line-height: 1.3;
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  font-size: 0.875rem;
  color: #4b5563;
  max-width: 90%;
  margin: 0 auto 0.75rem;
  line-height: 1.6;
}

.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.btn-primary, .btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
}

.btn-primary svg, .btn-secondary svg {
  width: 0.875rem;
  height: 0.875rem;
}

.btn-primary {
  background-image: linear-gradient(to right, #6b21a8, #a855f7);
  color: #ffffff;
  border: none;
}

.btn-primary:hover {
  box-shadow: 0 4px 8px rgba(107, 33, 168, 0.2);
  transform: translateY(-1px);
}

.btn-secondary {
  background-color: #ffffff;
  color: #374151;
  border: 1px solid #d1d5db;
}

.btn-secondary:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}

/* === 7. Stats Section === */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.stat-card {
  padding: 0.75rem;
}

.stat-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}

.stat-card-label {
  font-size: 0.75rem;
  font-weight: 500;
  color: #4b5563;
  margin-bottom: 0.25rem;
}

.stat-card-value {
  font-size: 1.25rem;
  font-weight: 700;
}

/* === 8. Main Content Sections === */
.main-content {
  width: 100%;
  padding: 0 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-section {
  margin-bottom: 2rem;
  scroll-margin-top: 4rem;
  width: 100%;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.section-number-bubble {
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-image: linear-gradient(to bottom right, #6b21a8, #a855f7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  flex-shrink: 0;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
}

/* === 9. Projects Section === */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  padding: 0.75rem;
}

.project-card:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.project-bar {
  width: 2.5rem;
  height: 0.25rem;
  border-radius: 9999px;
  margin-bottom: 0.5rem;
}

.project-card-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.project-icon {
  padding: 0.4rem;
  border-radius: 0.4rem;
  color: #ffffff;
  flex-shrink: 0;
}

.project-icon svg {
  width: 0.875rem;
  height: 0.875rem;
}

.project-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  transition: color 0.2s ease;
}

.project-card:hover .project-title {
  color: #6b21a8;
}

.project-description {
  color: #4b5563;
  line-height: 1.6;
  font-size: 0.75rem;
}

/* === 10. Studies Section === */
.studies-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.studies-card {
  padding: 0.75rem;
}

.studies-card p {
  font-size: 0.75rem;
  color: #374151;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.studies-card p strong {
  color: #6b21a8;
}

.studies-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.studies-list-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: #4b5563;
  font-size: 0.75rem;
}

.studies-list-item-arrow {
  color: #6b21a8;
  font-weight: 700;
  font-size: 0.875rem;
  flex-shrink: 0;
  line-height: 1.5;
}

/* === 11. Skills Section === */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.skill-tag {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(6px);
  border-radius: 0.5rem;
  padding: 0.5rem;
  text-align: center;
  font-weight: 500;
  color: #374151;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.7);
  transition: all 0.2s ease-in-out;
}

.skill-tag:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
  background-image: linear-gradient(to bottom right, #f5f3ff, #ede9fe);
}

/* === 12. Contact Section === */
.contact-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.contact-intro {
  text-align: center;
  font-size: 0.75rem;
  color: #4b5563;
  margin-bottom: 0.75rem;
}

.contact-card {
  padding: 0.75rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  transition: all 0.2s ease-in-out;
  background-color: #fff;
}

.form-input:focus {
  border-color: #6b21a8;
  outline: none;
  box-shadow: 0 0 0 3px #ede9fe;
}

.form-textarea {
  resize: none;
  min-height: 5rem;
}

.form-submit-btn {
  width: 100%;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
}

/* === 13. Footer === */
.footer {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(6px);
  padding: 0.75rem 0;
  text-align: center;
  color: #4b5563;
  border-top: 1px solid #e5e7eb;
  width: 100%;
}

.footer-text {
  font-size: 0.75rem;
}

/* === 14. Responsiveness Rules === */
@media (min-width: 768px) {
  .hero {
    padding: 5rem 1.5rem 2rem;
  }
  .hero-title {
    font-size: 2rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .section-title {
    font-size: 1.5rem;
  }
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .project-title {
    font-size: 1.125rem;
  }
  .studies-card p {
    font-size: 0.875rem;
  }
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .contact-intro {
    font-size: 0.875rem;
  }
  .footer-text {
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 3.5rem 0.75rem 1.5rem;
  }
  .hero-title {
    font-size: 1.5rem;
  }
  .hero-subtitle {
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }
  .hero-cta-group {
    flex-direction: column;
    gap: 0.5rem;
  }
  .btn-primary, .btn-secondary {
    width: 100%;
    justify-content: center;
    padding: 0.4rem 0.75rem;
    font-size: 0.75rem;
  }
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  .stat-card {
    padding: 0.5rem;
  }
  .stat-card-value {
    font-size: 1rem;
  }
  .section-title {
    font-size: 1rem;
  }
  .project-card {
    padding: 0.5rem;
  }
  .project-title {
    font-size: 0.875rem;
  }
  .studies-card {
    padding: 0.5rem;
  }
  .studies-card p {
    font-size: 0.75rem;
  }
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  .skill-tag {
    padding: 0.4rem;
    font-size: 0.75rem;
  }
  .contact-card {
    padding: 0.5rem;
  }
  .contact-intro {
    font-size: 0.75rem;
  }
  .footer {
    padding: 0.5rem 0;
  }
  .footer-text {
    font-size: 0.75rem;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 2.5rem;
  }
  .skills-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
    `}</style>
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const sectionsRef = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      let currentSection = '';
      Object.entries(sectionsRef.current).forEach(([id, element]) => {
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection || (window.scrollY < 120 ? '' : activeSection));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = sectionsRef.current[id];
    if (element) {
      const offset = 60;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    console.log('Message sent! (Demo mode)');
    setFormData({ name: '', email: '', message: '' });
  };

  const projects = [
    {
      title: 'CSP Tour Planner',
      description: 'Web app solving complex travel routes using AI heuristics (Constraint Satisfaction Problem).',
      gradient: 'linear-gradient(to right, #6b21a8, #a855f7)',
      icon: <Brain />
    },
    {
      title: 'Money Spending App',
      description: 'Flutter app tracking daily expenses with charts and AI-based category predictions.',
      gradient: 'linear-gradient(to right, #0d9488, #06b6d4)',
      icon: <Sparkles />
    },
    {
      title: 'Data Mining Project (CERIST)',
      description: 'Collaborative data mining study involving PCA, clustering, and real-world datasets.',
      gradient: 'linear-gradient(to right, #4b5563, #1f2937)',
      icon: <Database />
    },
    {
      title: 'System Architecture Visualizations',
      description: 'Interactive models showcasing microkernel and MVC patterns.',
      gradient: 'linear-gradient(to right, #4f46e5, #db2777)',
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
    <div className="portfolio-body">
      <PortfolioStyles />
      <header className="header">
        <div className="header-container">
          <nav className="header-nav">
            <div className="logo">
              <div className="logo-image" style={{ backgroundImage: 'nour.jpg' }} />
              <div className="logo-text">
                <h1><span className="text-gradient-primary">Nour Tliba</span></h1>
              </div>
            </div>
            <div className="nav-links">
              {['projects', 'studies', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-button ${activeSection === section ? 'is-active' : ''}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-profile-picture" style={{ backgroundImage: 'nour.jpg' }}></div>
          <h2 className="hero-title">
            Hello — I'm <span className="text-gradient-primary">Nour</span>, an AI engineering student
          </h2>
          <p className="hero-subtitle">
            I build practical ML systems and intuitive apps that turn complex data into usable insights. My work connects algorithmic rigor (PCA, CSP, optimization) with human-centered product design.
          </p>
          <div className="hero-cta-group">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn-primary">
              <Github /> GitHub
            </a>
            <a href="mailto:nour.tliba@ensia.edu.dz" className="btn-secondary">
              <Mail /> Email
            </a>
          </div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card card-base">
                <div className="stat-card-label">{stat.label}</div>
                <div className="stat-card-value text-gradient-primary">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <main className="main-content">
        <section ref={(el) => (sectionsRef.current.projects = el)} className="content-section" id="projects">
          <div className="section-header">
            <div className="section-number-bubble">1</div>
            <h3 className="section-title">Featured Projects</h3>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card card-base">
                <div className="project-bar" style={{ backgroundImage: project.gradient }} />
                <div className="project-card-header">
                  <div className="project-icon" style={{ backgroundImage: project.gradient }}>
                    {project.icon}
                  </div>
                  <h4 className="project-title">{project.title}</h4>
                </div>
                <p className="project-description">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section ref={(el) => (sectionsRef.current.studies = el)} className="content-section" id="studies">
          <div className="section-header">
            <div className="section-number-bubble">2</div>
            <h3 className="section-title">AI & Data Mining Studies</h3>
          </div>
          <div className="studies-container">
            <div className="studies-card card-base">
              <p>
                I'm pursuing AI Engineering with a focus on <strong>Data Mining, Machine Learning, and Optimization.</strong> My coursework includes PCA, clustering, CSPs, and applied deep learning.
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
        <section ref={(el) => (sectionsRef.current.skills = el)} className="content-section" id="skills">
          <div className="section-header">
            <div className="section-number-bubble">3</div>
            <h3 className="section-title">Skills & Tools</h3>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-tag">{skill}</div>
            ))}
          </div>
        </section>
        <section ref={(el) => (sectionsRef.current.contact = el)} className="content-section" id="contact">
          <div className="section-header">
            <div className="section-number-bubble">4</div>
            <h3 className="section-title">Contact & Collaboration</h3>
          </div>
          <div className="contact-container">
            <p className="contact-intro">
              I'm open to collaborations in AI research, web development, or data-centric projects.
            </p>
            <div className="contact-card card-base">
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-input form-textarea"
                  required
                />
                <button type="submit" className="btn-primary form-submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">© 2025 Nour Tliba — AI Engineering Student • CERIST Researcher</p>
      </footer>
    </div>
  );
};

export default Portfolio;