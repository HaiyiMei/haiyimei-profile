import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 font-sans text-center md:text-left relative inline-block">
          Open Source Projects
          <span className="absolute bottom-0 left-0 w-full h-1 bg-muted rounded-full"></span>
          <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-card rounded-xl overflow-hidden border border-muted hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold font-sans text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.repoUrl && (
                      <a 
                        href={project.repoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub Repo"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.projectUrl && (
                      <a 
                        href={project.projectUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed font-serif line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs font-normal text-primary border-primary/30 bg-primary/5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
