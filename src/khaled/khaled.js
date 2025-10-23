import React, { useState } from 'react';
import { Code, Database, Shield, Zap, Server, GitBranch, Mail, Linkedin, Github, Menu, X, ChevronDown } from 'lucide-react';

export default function Portfolio({ onBack }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const skills = [
    { category: "Backend", items: ["C#", "ASP.NET Core (.NET 9)", "SQL Server", "T-SQL"], icon: Code },
    { category: "Architecture", items: ["Clean Architecture", "CQRS", "MediatR", "Design Patterns"], icon: Server },
    { category: "Security", items: ["JWT", "OAuth2", "Azure Key Vault", "Role-based Auth"], icon: Shield },
    { category: "Performance", items: ["Redis", "Hangfire", "Rate Limiting"], icon: Zap },
    { category: "Monitoring", items: ["Serilog", "Seq", "Prometheus", "Grafana"], icon: Database },
    { category: "DevOps", items: ["Docker", "Docker Compose", "CI/CD", "GitHub Actions"], icon: GitBranch }
  ];

  const projects = [
    {
      title: "SurveyBasket",
      tech: "ASP.NET Core 9 | Clean Architecture | Redis | Hangfire",
      description: "Enterprise-grade survey management system with advanced authentication and monitoring",
      highlights: [
        "Implemented Clean Architecture with CQRS and MediatR patterns",
        "JWT authentication with refresh tokens and role-based authorization",
        "Background job processing with Hangfire for client notifications",
        "Redis caching and rate limiting for optimal performance",
        "Comprehensive logging with Serilog + Seq and monitoring via Prometheus + Grafana",
        "Full test coverage with xUnit (unit & integration tests)",
        "Dockerized deployment with complete CI/CD pipeline"
      ]
    }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-blue-500/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {onBack && (
              <button
                onClick={onBack}
                className="flex items-center gap-2 px-3 py-2 text-sm bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-lg transition-all duration-300 hover:scale-105"
                title="Back to Team"
              >
                ← Back to Team
              </button>
            )}
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              KZ
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {['home', 'about', 'skills', 'projects', 'contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize hover:text-blue-400 transition-colors ${
                  activeSection === item ? 'text-blue-400' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-blue-500/20">
            {['home', 'about', 'skills', 'projects', 'contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-3 capitalize hover:bg-slate-700 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-5xl font-bold">
              KZ
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Khaled Zaabat
          </h1>
          <p className="text-2xl md:text-3xl text-blue-300 mb-6">.NET Backend Developer</p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Building scalable, secure, and maintainable enterprise systems with ASP.NET Core, 
            Clean Architecture, and modern DevOps practices
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:khaled.zaabat@ensia.edu.dz" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors">
              <Mail size={20} />
              Contact Me
            </a>
            <a href="https://github.com/KhaledZaabat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-colors">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/khaled-student-zaabat-a57b4a299/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-colors">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
          <button onClick={() => scrollToSection('about')} className="mt-12 animate-bounce">
            <ChevronDown size={32} className="text-blue-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate .NET Backend Developer with expertise in building enterprise-grade applications 
              that are scalable, secure, and maintainable. My focus is on creating robust backend systems using 
              ASP.NET Core, implementing clean architecture principles, and leveraging modern DevOps practices.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I specialize in developing microservice-ready APIs with comprehensive authentication and authorization 
              systems, efficient caching strategies, and enterprise-level monitoring solutions. My approach emphasizes 
              code quality, test coverage, and deployment automation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-gray-300">Technologies</div>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">Clean</div>
                <div className="text-gray-300">Architecture</div>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-300">Test Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all hover:transform hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg">
                      <Icon className="text-blue-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-blue-300">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="bg-slate-700/50 px-3 py-1 rounded-full text-sm text-gray-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Additional Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Python", "JavaScript", "HTML", "CSS", "FluentValidation", "xUnit", "OpenAPI", "Git"].map((tech, idx) => (
                <div key={idx} className="bg-slate-700/50 p-3 rounded-lg text-center text-gray-300">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Featured Project
          </h2>
          {projects.map((project, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Server className="text-blue-400" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2 text-blue-300">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.tech}</p>
                  <p className="text-lg text-gray-300 mb-6">{project.description}</p>
                </div>
              </div>
              
              <div className="bg-slate-700/30 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4 text-cyan-300">Key Features & Achievements</h4>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <div className="bg-blue-500/20 rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      </div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in discussing new opportunities and collaborations
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:khaled.zaabat@ensia.edu.dz" className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all hover:transform hover:scale-105">
              <Mail className="mx-auto mb-4 text-blue-400" size={48} />
              <h3 className="text-xl font-bold mb-2 text-blue-300">Email</h3>
              <p className="text-gray-400 text-sm break-all">khaled.zaabat@ensia.edu.dz</p>
            </a>
            
            <a href="https://www.linkedin.com/in/khaled-student-zaabat-a57b4a299/" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all hover:transform hover:scale-105">
              <Linkedin className="mx-auto mb-4 text-blue-400" size={48} />
              <h3 className="text-xl font-bold mb-2 text-blue-300">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Connect with me</p>
            </a>
            
            <a href="https://github.com/KhaledZaabat" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all hover:transform hover:scale-105">
              <Github className="mx-auto mb-4 text-blue-400" size={48} />
              <h3 className="text-xl font-bold mb-2 text-blue-300">GitHub</h3>
              <p className="text-gray-400 text-sm">View my work</p>
            </a>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Open to Opportunities</h3>
            <p className="text-gray-300 mb-6">
              I'm currently open to backend development positions, consulting opportunities, 
              and interesting projects involving ASP.NET Core, microservices, and cloud architecture.
            </p>
            <a href="mailto:khaled.zaabat@ensia.edu.dz" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors text-lg font-semibold">
              <Mail size={24} />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/95 border-t border-blue-500/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">© 2025 Khaled Zaabat. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/KhaledZaabat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/khaled-student-zaabat-a57b4a299/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:khaled.zaabat@ensia.edu.dz" className="text-gray-400 hover:text-blue-400 transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}