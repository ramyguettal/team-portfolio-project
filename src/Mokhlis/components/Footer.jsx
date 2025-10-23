import { Instagram, Linkedin, Github, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" }
  ];

  return (
    <footer className="py-12 px-6 border-t border-border bg-background/80">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <p>© {currentYear} Mokhlis. Made with</p>
            <Heart className="w-4 h-4 text-accent fill-accent" />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-accent/50 flex items-center justify-center hover:bg-accent/10 transition-all duration-300 group"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Additional Links */}
          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="#about" className="hover:text-accent transition-colors duration-300">
              About
            </a>
            <a href="#projects" className="hover:text-accent transition-colors duration-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-accent transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
