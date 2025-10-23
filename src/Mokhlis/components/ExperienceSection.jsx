import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";



export function ExperienceSection() {
  const experiences = [
    {
      company: "Zidny Agency",
      role: "Frontend Web Developer",
      duration: "2025 – Present",
      location: "Remote",
      description: "Leading frontend development projects and delivering high-quality digital services and solutions for diverse clients.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "TypeScript", "Git"],
      achievements: [
        "Developed responsive web applications using React and Tailwind CSS",
        "Contributing to the official Zidny Agency website (under development)",
        "Collaborated with design teams to implement pixel-perfect UI/UX designs",
        "Optimized application performance and improved loading times",
        "Implemented modern web development best practices and accessibility standards"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-background/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            My professional journey in web development and design
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent/20 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-6 top-8 w-5 h-5 rounded-full bg-accent border-4 border-background hidden md:block z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                />

                <Card 
                  className="md:ml-20 p-8 bg-card border-border hover:border-accent/50 transition-all duration-500 hover:shadow-lg hover:shadow-accent/10 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300 flex-shrink-0">
                          <Briefcase className="w-7 h-7 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-accent mb-1">{exp.company}</h3>
                          <h4 className="text-foreground">{exp.role}</h4>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 lg:text-right">
                      <div className="flex items-center gap-2 lg:justify-end">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="text-foreground">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 lg:justify-end">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span className="text-muted-foreground">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      Key Achievements:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                          className="flex items-start gap-3 text-muted-foreground p-3 rounded-lg bg-background/50 hover:bg-accent/5 transition-colors duration-200"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        >
                          <Badge 
                            className="bg-primary/10 text-accent border-primary/20 hover:bg-accent/20 transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
