import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 bg-[#18191A] text-[#E4E6EB]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 font-sans text-center md:text-left relative inline-block">
          Open Source Projects
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#242526] rounded-full"></span>
          <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-[#8ABECC] rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-[rgba(255,255,255,0.05)] rounded-xl overflow-hidden border border-[#242526] hover:border-[#8ABECC]/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-[#18191A]/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold font-sans text-[#E4E6EB] group-hover:text-[#8ABECC] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.repoUrl && (
                      <a 
                        href={project.repoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#B0B3B8] hover:text-[#8ABECC] transition-colors"
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
                        className="text-[#B0B3B8] hover:text-[#8ABECC] transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-[#B0B3B8] text-sm leading-relaxed font-serif line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs font-normal text-[#8ABECC] border-[#8ABECC]/30 bg-[#8ABECC]/5"
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
