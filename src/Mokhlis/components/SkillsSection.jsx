import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Database, 
  Cpu, 
  Brain,
  Layers,
  Box,
  Terminal,
  Smartphone,
  Globe
} from "lucide-react";



export function SkillsSection() {
  const skills = [
    { name: "HTML & CSS", level: 90, icon: Code2, category: "Frontend" },
    { name: "JavaScript", level: 85, icon: Terminal, category: "Frontend" },
    { name: "React", level: 80, icon: Layers, category: "Frontend" },
    { name: "Tailwind CSS", level: 85, icon: Palette, category: "Frontend" },
    { name: "TypeScript", level: 75, icon: Terminal, category: "Frontend" },
    { name: "Responsive Design", level: 90, icon: Smartphone, category: "Frontend" },
    { name: "C++", level: 75, icon: Cpu, category: "Programming" },
    { name: "Python", level: 70, icon: Database, category: "Programming" },
    { name: "Arduino/IoT", level: 65, icon: Box, category: "Hardware" },
    { name: "AI/NLP Basics", level: 60, icon: Brain, category: "AI/ML" }
  ];

  // const categories = Array.from(new Set(skills.map(s => s.category)));

  const additionalSkills = [
    { name: "Git & GitHub", icon: Terminal },
    { name: "UI/UX Design", icon: Palette },
    { name: "Figma", icon: Layers },
    { name: "REST APIs", icon: Globe },
    { name: "Node.js", icon: Database },
    { name: "Problem Solving", icon: Brain }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            My technical expertise across various development and design domains
          </p>
        </motion.div>

        {/* Main Skills with Interactive Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group cursor-default">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300">
                    <skill.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-1">{skill.name}</h4>
                    <p className="text-muted-foreground">{skill.category}</p>
                  </div>
                </div>

                {/* Custom animated progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-accent">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills - Creative Hexagon-like Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center mb-8">Additional Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 text-center bg-card border-border hover:bg-accent/5 hover:border-accent/50 transition-all duration-300 cursor-default group h-full">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <skill.icon className="w-6 h-6 text-accent" />
                    </div>
                    <p className="text-foreground">{skill.name}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { label: "Years of Experience", value: "2+", icon: Code2 },
            { label: "Projects Completed", value: "15+", icon: Box },
            { label: "Technologies Mastered", value: "10+", icon: Layers }
          ].map((stat, index) => (
            <Card
              key={index}
              className="p-8 text-center bg-gradient-to-br from-card to-primary/5 border-border hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <motion.h2
                className="mb-2 text-accent"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.value}
              </motion.h2>
              <p className="text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
