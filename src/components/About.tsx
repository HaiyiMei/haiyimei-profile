import { portfolioData } from "@/data/portfolio";
import ReactMarkdown from "react-markdown";

export function About() {
  const { bio, avatar } = portfolioData.personal;
  const { skills } = portfolioData;

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary shadow-xl">
              <img 
                src={avatar} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3 space-y-6">
            <div className="prose dark:prose-invert max-w-none text-lg leading-relaxed">
              <ReactMarkdown>{bio}</ReactMarkdown>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[...skills.languages, ...skills.frameworks, ...skills.tools].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
