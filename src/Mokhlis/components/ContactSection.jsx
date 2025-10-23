import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Instagram, Linkedin, Github, Mail, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/yacine._.mokhlis", color: "hover:text-pink-500" },
    { icon: Linkedin, label: "LinkedIn", href: "https://dz.linkedin.com/in/mokhlis-yacine-bouyahia-8794b0349", color: "hover:text-blue-500" },
    { icon: Github, label: "GitHub", href: "https://github.com/Bouyahia-Mokhlis-Yacine", color: "hover:text-foreground" },
    { icon: Mail, label: "Email", href: "mailto:mokhlis.yacine.bouyhia@ensia.edu.dz", color: "hover:text-accent" }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-background/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <Card className="p-8 bg-card border-border hover:border-accent/30 transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-input-background border-border focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-input-background border-border focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or idea..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-input-background border-border focus:border-accent transition-colors resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-accent transition-all duration-300 hover:scale-105"
                size="lg"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <Card className="p-8 bg-card border-border hover:border-accent/30 transition-all duration-300 space-y-6 h-full">
            <div>
              <h3 className="mb-4">Connect With Me</h3>
              <p className="text-muted-foreground">
                Follow me on social media or send me an email. I'm always open to discussing new projects and opportunities.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border hover:border-accent/50 transition-all duration-300 group ${social.color}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <social.icon className="w-5 h-5" />
                  </div>
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-muted-foreground">
                <span className="block mb-2">Response Time:</span>
                <span className="text-accent">Usually within 24 hours</span>
              </p>
            </div>
          </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
