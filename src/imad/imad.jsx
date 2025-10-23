import React, { useState } from 'react';
import { Mail, Linkedin, Github, Code, Brain, Database, Cpu, Award, Briefcase, GraduationCap } from 'lucide-react';

const PersonalPortfolio = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState('about');

  const personalData = {
    name: "SMAIL Imadeddine",
    title: "AI & Data Science Developer",
    email: "imadeddine.smail@example.com",
    linkedin: "#",
    github: "https://github.com/imad853",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Imadeddine",
    bio: "Passionate AI and Data Science developer specializing in intelligent systems and algorithm optimization. I build innovative solutions using machine learning, search algorithms, and modern development frameworks.",
    mainField: "Artificial Intelligence & Data Science",
    skills: [
      {
        category: "AI & Data Science",
        icon: <Brain />,
        items: ["Machine Learning", "Search Algorithms", "Data Analysis", "Algorithm Optimization"]
      },
      {
        category: "Programming Languages",
        icon: <Code />,
        items: ["C++", "Object-Oriented Programming", "Python Programming", "Dart/Flutter"]
      },
      {
        category: "Web Development",
        icon: <Database />,
        items: ["React", "Full Stack Development", "Web Platforms"]
      }
    ],
    projects: [
      {
        title: "Smart Farming System",
        description: "Developed an intelligent farming system utilizing advanced AI search algorithms including A* pathfinding, Constraint Satisfaction Problems (CSP), and Genetic Algorithms for optimal resource allocation and crop management.",
        tech: ["AI", "A* Algorithm", "CSP", "Genetic Algorithms", "Python"],
        icon: <Brain />,
        github: "https://github.com/imad853/resource_management_optimization_in_smart_farming.git"
      },
      {
        title: "Craphtfile Web Platform",
        description: "Built a comprehensive web platform with full-stack capabilities, providing seamless user experience and robust backend functionality.",
        tech: ["React", "Web Development", "Full Stack"],
        icon: <Database />,
        github: "https://github.com/ENSIA-AI/CRAFTPHILE.git"
      },
      {
        title: "Student Management System",
        description: "Created a robust student management system using C++ with object-oriented design principles, featuring efficient data handling and user-friendly interface.",
        tech: ["C++", "OOP", "Data Structures", "System Design"],
        icon: <Code />,
        github: "https://github.com/malak-100/FinalProjectOfTheYear.git"
      }
    ],
    experience: [
      {
        role: "AI & Data Science Developer",
        company: "Freelance / Personal Projects",
        period: "2023 - Present",
        description: "Developing AI-powered solutions and data-driven applications using machine learning and advanced algorithms"
      },
      {
        role: "Software Developer",
        company: "Academic Projects",
        period: "2022 - 2023",
        description: "Built various systems including web platforms and management applications using C++, Python, and modern web technologies"
      }
    ]
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.maxWidth}>
          {/* Profile Card */}
          <div style={styles.profileCard}>
            {onBack && (
              <div style={styles.backButtonContainer}>
                <button 
                  style={{
                    ...styles.backButton,
                    ':hover': {
                      background: '#f093fb',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(240, 147, 251, 0.4)',
                    }
                  }} 
                  onClick={onBack}
                  title="Back to Team"
                  onMouseEnter={(e) => {
                    e.target.style.background = '#f093fb';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(240, 147, 251, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(240, 147, 251, 0.2)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  ← Back to Team
                </button>
              </div>
            )}
            <div style={styles.profileContent}>
              <img
                src={personalData.avatar}
                alt={personalData.name}
                style={styles.avatar}
              />
              <div style={styles.profileInfo}>
                <h1 style={styles.name}>{personalData.name}</h1>
                <p style={styles.title}>{personalData.title}</p>
                <div style={styles.mainFieldBadge}>
                  <Cpu style={styles.mainFieldIcon} />
                  <span>{personalData.mainField}</span>
                </div>
                <p style={styles.bio}>{personalData.bio}</p>
                <div style={styles.buttonContainer}>
                  <a
                    href={`mailto:${personalData.email}`}
                    style={{...styles.button, ...styles.buttonPrimary}}
                  >
                    <Mail style={styles.buttonIcon} />
                    Contact Me
                  </a>
                  <a
                    href={personalData.linkedin}
                    style={{...styles.button, ...styles.buttonSecondary}}
                  >
                    <Linkedin style={styles.buttonIcon} />
                    LinkedIn
                  </a>
                  <a
                    href={personalData.github}
                    style={{...styles.button, ...styles.buttonDark}}
                  >
                    <Github style={styles.buttonIcon} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div style={styles.navTabs}>
            {['about', 'skills', 'projects', 'experience'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                style={activeSection === section ? {...styles.navButton, ...styles.navButtonActive} : styles.navButton}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* About Section */}
          {activeSection === 'about' && (
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>
                <GraduationCap style={styles.sectionIcon} />
                About Me
              </h2>
              <div style={styles.aboutContent}>
                <p style={styles.paragraph}>
                  Hello! I'm <span style={styles.highlight}>{personalData.name}</span>, 
                  a dedicated developer specializing in <span style={styles.highlight}>Artificial Intelligence and Data Science</span>.
                </p>
                <p style={styles.paragraph}>
                  My expertise lies in developing intelligent systems using advanced search algorithms such as 
                  <span style={styles.highlight}> A*, Constraint Satisfaction Problems (CSP), and Genetic Algorithms</span>. 
                  I'm passionate about solving complex optimization problems and creating data-driven solutions.
                </p>
                <p style={styles.paragraph}>
                  I have strong programming skills in <span style={styles.highlight}>C++ and Object-Oriented Programming</span>, 
                  which I use to build efficient systems. I'm also proficient in <span style={styles.highlight}>Python</span> for 
                  AI/ML development and data analysis.
                </p>
                <p style={styles.paragraph}>
                  For application development, I work with <span style={styles.highlight}>Flutter/Dart</span> for mobile solutions 
                  and <span style={styles.highlight}>React</span> for building modern web platforms, allowing me to bring AI solutions 
                  to various platforms.
                </p>
              </div>
            </div>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <div style={styles.skillsContainer}>
              {personalData.skills.map((skillGroup, index) => (
                <div key={index} style={styles.skillGroup}>
                  <h3 style={styles.skillGroupTitle}>
                    <span style={styles.skillIcon}>{skillGroup.icon}</span>
                    {skillGroup.category}
                  </h3>
                  <div style={styles.skillTags}>
                    {skillGroup.items.map((skill, idx) => (
                      <span key={idx} style={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Projects Section */}
          {activeSection === 'projects' && (
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>
                <Briefcase style={styles.sectionIcon} />
                Featured Projects
              </h2>
              <div style={styles.projectsGrid}>
                {personalData.projects.map((project, index) => (
                  <div key={index} style={styles.projectCard}>
                    <div style={styles.projectHeader}>
                      <span style={styles.projectIcon}>{project.icon}</span>
                      <h3 style={styles.projectTitle}>{project.title}</h3>
                    </div>
                    <p style={styles.projectDescription}>{project.description}</p>
                    <div style={styles.techTags}>
                      {project.tech.map((tech, idx) => (
                        <span key={idx} style={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={styles.githubLink}
                    >
                      <Github style={styles.githubIcon} />
                      View on GitHub
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience Section */}
          {activeSection === 'experience' && (
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>
                <Award style={styles.sectionIcon} />
                Experience
              </h2>
              <div style={styles.experienceContainer}>
                {personalData.experience.map((exp, index) => (
                  <div key={index} style={styles.experienceCard}>
                    <h3 style={styles.experienceRole}>{exp.role}</h3>
                    <p style={styles.experienceCompany}>{exp.company}</p>
                    <p style={styles.experiencePeriod}>{exp.period}</p>
                    <p style={styles.experienceDescription}>{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  wrapper: {
    padding: '24px 16px 48px 16px',
  },
  maxWidth: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  profileCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '24px',
    padding: '32px',
    marginBottom: '32px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    position: 'relative',
  },
  backButtonContainer: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    zIndex: 10,
  },
  backButton: {
    background: 'rgba(240, 147, 251, 0.2)',
    border: '1px solid rgba(240, 147, 251, 0.4)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  profileContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '32px',
    flexWrap: 'wrap',
  },
  avatar: {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    border: '4px solid #f093fb',
    boxShadow: '0 4px 16px rgba(240, 147, 251, 0.4)',
  },
  profileInfo: {
    flex: '1',
    minWidth: '300px',
  },
  name: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: 'white',
    margin: '0 0 8px 0',
  },
  title: {
    fontSize: '24px',
    color: '#f093fb',
    margin: '0 0 16px 0',
  },
  mainFieldBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(240, 147, 251, 0.2)',
    padding: '8px 16px',
    borderRadius: '20px',
    border: '1px solid rgba(240, 147, 251, 0.4)',
    marginBottom: '16px',
    color: 'white',
    fontSize: '14px',
    fontWeight: '600',
  },
  mainFieldIcon: {
    width: '20px',
    height: '20px',
  },
  bio: {
    fontSize: '18px',
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: '1.6',
    marginBottom: '24px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s',
  },
  buttonPrimary: {
    background: '#f093fb',
    color: 'white',
  },
  buttonSecondary: {
    background: '#4299e1',
    color: 'white',
  },
  buttonDark: {
    background: '#2d3748',
    color: 'white',
  },
  buttonIcon: {
    width: '20px',
    height: '20px',
  },
  navTabs: {
    display: 'flex',
    gap: '16px',
    marginBottom: '32px',
    overflowX: 'auto',
    paddingBottom: '8px',
  },
  navButton: {
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    whiteSpace: 'nowrap',
    transition: 'all 0.3s',
  },
  navButtonActive: {
    background: '#f093fb',
    transform: 'scale(1.05)',
    boxShadow: '0 4px 12px rgba(240, 147, 251, 0.4)',
  },
  section: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '32px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  sectionIcon: {
    width: '32px',
    height: '32px',
    color: '#f093fb',
  },
  aboutContent: {
    color: 'rgba(255, 255, 255, 0.9)',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.8',
    marginBottom: '16px',
  },
  highlight: {
    color: '#f093fb',
    fontWeight: '600',
  },
  skillsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  skillGroup: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '32px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  skillGroupTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  skillIcon: {
    color: '#f093fb',
    display: 'flex',
  },
  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
  },
  skillTag: {
    padding: '12px 20px',
    background: 'rgba(240, 147, 251, 0.3)',
    border: '1px solid rgba(240, 147, 251, 0.5)',
    borderRadius: '24px',
    color: 'white',
    fontSize: '16px',
    fontWeight: '500',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  },
  projectCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid rgba(240, 147, 251, 0.3)',
    transition: 'all 0.3s',
  },
  projectHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  projectIcon: {
    color: '#f093fb',
    display: 'flex',
  },
  projectTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'white',
    margin: 0,
  },
  projectDescription: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: '1.6',
    marginBottom: '16px',
  },
  techTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  techTag: {
    padding: '6px 12px',
    background: 'rgba(240, 147, 251, 0.2)',
    border: '1px solid rgba(240, 147, 251, 0.3)',
    borderRadius: '12px',
    color: '#f093fb',
    fontSize: '14px',
  },
  experienceContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  experienceCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid rgba(240, 147, 251, 0.3)',
  },
  experienceRole: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '8px',
  },
  experienceCompany: {
    fontSize: '18px',
    color: '#f093fb',
    marginBottom: '8px',
  },
  experiencePeriod: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: '12px',
  },
  experienceDescription: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: '1.6',
  },
  githubLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '16px',
    padding: '10px 16px',
    background: 'rgba(240, 147, 251, 0.2)',
    border: '1px solid rgba(240, 147, 251, 0.4)',
    borderRadius: '8px',
    color: 'white',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'all 0.3s',
    cursor: 'pointer',
  },
  githubIcon: {
    width: '18px',
    height: '18px',
  },
};

export default PersonalPortfolio;