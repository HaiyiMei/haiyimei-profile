import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail, Youtube, GraduationCap } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { social } = portfolioData.personal;

  return (
    <footer className="bg-muted/50 py-12 mt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <a href={social.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href={social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Youtube className="h-6 w-6" />
          </a>
          <a href={social.scholar} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <GraduationCap className="h-6 w-6" />
          </a>
          <a href={social.email} className="hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <p className="text-muted-foreground text-sm">
          © {currentYear} {portfolioData.personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
