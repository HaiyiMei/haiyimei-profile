import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export function Hero() {
  const { name, role, social } = portfolioData.personal;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = role[currentRoleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % role.length);
      } else {
        setDisplayText(
          currentRole.substring(0, displayText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, role]);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-background to-secondary/20">
      <div className="text-center space-y-6 animate-in fade-in zoom-in duration-1000">
        <h2 className="text-xl md:text-2xl font-medium text-primary">Hi, my name is</h2>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">{name}</h1>
        
        <div className="h-8 md:h-12 text-2xl md:text-4xl font-semibold text-muted-foreground">
          I am a <span className="text-foreground">{displayText}</span>
          <span className="animate-pulse">|</span>
        </div>

        <div className="flex space-x-6 justify-center pt-8">
          <a href={social.github} target="_blank" className="p-2 rounded-full hover:bg-secondary transition-colors" aria-label="Github">
            <Github className="w-8 h-8" />
          </a>
          <a href={social.linkedin} target="_blank" className="p-2 rounded-full hover:bg-secondary transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href={`mailto:${social.email}`} className="p-2 rounded-full hover:bg-secondary transition-colors" aria-label="Email">
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
