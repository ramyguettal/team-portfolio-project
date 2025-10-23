import { Button } from "./ui/button";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { GeometricShapes } from "./GeometricShapes";
import portrait from "../assets/portrait.png";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export function HeroSection({ onBack }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const words = ["Creative", "Innovative", "Functional", "Beautiful"];


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // change word every 2 seconds
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Geometric Shapes */}
      <GeometricShapes />

      {/* Back Button */}
      {onBack && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-6 left-6 z-20"
        >
          <Button
            onClick={onBack}
            variant="outline"
            className="bg-background/80 backdrop-blur-sm border-accent/20 hover:bg-accent/10 transition-all duration-300"
            title="Back to Team"
          >
            ← Back to Team
          </Button>
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

          {/* Text Content */}
          <div className="text-center lg:text-left flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-accent">Available for Work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent"
            >
              Hi, I'm Mokhlis
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl font-semibold text-accent mb-8"
            >
              Graphic Designer & Frontend Web Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-2xl mx-auto lg:mx-0 text-muted-foreground mb-8"
            >
            Crafting  &nbsp;&nbsp;
            <span className="inline-block mx-2 text-accent font-medium relative h-6">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 6, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute left-0"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          digital experiences with modern web technologies and design thinking.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-accent transition-transform duration-300 hover:scale-105"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button 
                size="lg" 
                variant="outline"
                className="border-border hover:bg-accent/10 transition-transform duration-300 hover:scale-105"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Portrait Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 1, -1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 via-accent/30 to-accent/20 blur-xl scale-110"></div>

              {/* Portrait Image */}
              <div className="relative w-48 h-48 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-accent/20 shadow-2xl shadow-accent/10">
                <img 
                  src={portrait} 
                  alt="Mokhlis Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Additional Glow Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/10 scale-105"></div>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
