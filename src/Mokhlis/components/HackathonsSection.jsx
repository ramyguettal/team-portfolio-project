import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Shield } from "lucide-react";
import { motion } from "framer-motion";
import inoovdigital from "../assets/innov.JPG";
import ccc from "../assets/CCC.JPG";

export function HackathonsSection() {
  const hackathons = [
    {
      title: "InoovDigital (ESI Algiers)",
      description: "A high-intensity hackathon focused on AI and cybersecurity problem-solving, held at ESI Algiers. The competition brought together some of the brightest teams tackling innovative real-world challenges in cutting-edge tech fields.",
      image: inoovdigital,
      badges: ["AI", "Cybersecurity", "Hackathon"],
      icon: Shield,
      featured: true
    },
    {
      title: "CCC — Code, Create, Conquer (ESI Algiers)",
      description: "A competitive programming event featuring problems ranging from easy to extremely challenging. The contest tested deep algorithmic thinking and coding precision, bringing together some of the most brilliant minds at ESI Algiers.",
      image: ccc,
      badges: ["Competitive Programming", "Algorithms", "Coding Challenge"],
      icon: Code,
      featured: false
    }
  ];

  return (
    <section id="hackathons" className="py-24 px-6 bg-background/50 relative overflow-hidden">
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
          <h2 className="mb-4">Hackathons & Competitions</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Showcasing participation in major hackathons and competitive programming events
          </p>
        </motion.div>

        {/* Hackathons Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {hackathons.map((hackathon, index) => {
            const IconComponent = hackathon.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className={`overflow-hidden bg-card border-border hover:border-accent/50 transition-all duration-300 group hover:shadow-xl hover:shadow-accent/10 h-full flex flex-col ${
                    hackathon.featured ? 'bg-gradient-to-br from-card via-card to-primary/5 border-2 border-accent/30 hover:border-accent/50 shadow-2xl shadow-accent/10' : ''
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={hackathon.image}
                      alt={hackathon.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Icon overlay */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-accent/90 text-white px-3 py-1.5 rounded-full backdrop-blur-sm">
                      <IconComponent className="w-4 h-4" />
                      <span>{hackathon.featured ? 'Featured Event' : 'Competition'}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <div>
                      <h3 className="mb-2">{hackathon.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hackathon.badges.map((badge, badgeIndex) => (
                          <Badge 
                            key={badgeIndex}
                            className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 transition-colors duration-200"
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground flex-1 leading-relaxed">
                      {hackathon.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
