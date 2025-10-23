import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Star, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import zidny from "../assets/zidny.png";
import portfolio from "../assets/portfolio.png";




export function ProjectsSection() {
  const projects = [
    {
      title: "Zidny Agency Official Website",
      description: "Leading the frontend development of Zidny Agency's modern, responsive website. Implementing cutting-edge design patterns, smooth animations, and optimized performance for an exceptional user experience.",
      image: zidny,
      tech: ["React", "Tailwind CSS", "TypeScript", "Motion", "Modern Design"],
      client: "Zidny Agency",
      featured: true,
      status: "Under Development"
    },
    {
      title: "Creative Portfolio",
      description: "A showcase website featuring interactive galleries, smooth scrolling effects, and custom animations to highlight creative work.",
      image: portfolio,
      tech: ["HTML", "CSS", "JavaScript", "GSAP"],
      link: "#",
      github: "#"
    }
  ];

  const featuredProject = projects.find(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 bg-background/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills in web development and design
          </p>
        </motion.div>

        {/* Featured Project - Zidny Agency Website */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="overflow-hidden bg-gradient-to-br from-card via-card to-primary/5 border-2 border-accent/30 hover:border-accent/50 transition-all duration-500 group shadow-2xl shadow-accent/10">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative overflow-hidden h-full min-h-[400px]">
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-accent/90 text-white px-3 py-1.5 rounded-full backdrop-blur-sm">
                    <Star className="w-4 h-4 fill-white" />
                    <span>Featured Project</span>
                  </div>
                  {featuredProject.status && (
                    <div className="absolute top-4 right-4 z-10 bg-primary/90 text-white px-3 py-1.5 rounded-full backdrop-blur-sm">
                      {featuredProject.status}
                    </div>
                  )}
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent md:opacity-100" />
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    {featuredProject.client && (
                      <p className="text-accent mb-2">{featuredProject.client}</p>
                    )}
                    <h3 className="mb-4">{featuredProject.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredProject.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      className="bg-accent hover:bg-accent/90 transition-all duration-300 group/btn"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Regular Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className="overflow-hidden bg-card border-border hover:border-accent/50 transition-all duration-300 group hover:shadow-xl hover:shadow-accent/10 h-full flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover overlay with buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.link && (
                      <Button 
                        size="sm" 
                        className="bg-accent hover:bg-accent/90"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    )}
                    {project.github && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="bg-background/80 backdrop-blur-sm"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div>
                    <h3>{project.title}</h3>
                    {project.client && (
                      <p className="text-accent mt-1">{project.client}</p>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground flex-1">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-primary/10 text-accent border-primary/20 hover:bg-accent/20 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
