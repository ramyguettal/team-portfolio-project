import { Card } from "./ui/card";
import { Code2, Palette, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import portrait from "../assets/portrait.png";


export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Building responsive web applications with React, Tailwind CSS, and modern JavaScript"
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creating visually appealing designs that combine aesthetics with functionality"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Constantly learning new technologies including AI, IoT, and emerging web standards"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20" />
            <img
              src={portrait}
              alt="Mokhlis - Graphic Designer & Web Developer"
              className="relative w-full h-auto rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3>Junior Graphic Designer & Web Developer</h3>
            <p className="text-muted-foreground">
              I'm a passionate junior developer and designer with a strong foundation in both creative design and modern web development. 
              My expertise spans across various technologies including React, Tailwind CSS, JavaScript, and traditional programming languages like C++ and Python.
            </p>
            <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
              <p className="text-accent">
                Currently working as a Frontend Web Developer at Zidny Agency, delivering digital services and solutions. I'm contributing to their official website project (currently under development), bringing modern design and development practices to life.
              </p>
            </div>
            <p className="text-muted-foreground">
              I enjoy creating digital experiences that are not only visually appealing but also highly functional and user-friendly. 
              From web applications to graphic design projects, I bring creativity and technical skills to every project.
            </p>
            <p className="text-muted-foreground">
              Currently exploring the exciting fields of AI, Natural Language Processing, and IoT development with Arduino, 
              I'm always eager to learn new technologies and push the boundaries of what's possible.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group h-full"
              >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="mb-2">{item.title}</h4>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
