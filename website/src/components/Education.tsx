import { portfolioData } from "@/data/portfolio";
import ReactMarkdown from "react-markdown";

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 font-sans text-center md:text-left relative inline-block">
          Education
          <span className="absolute bottom-0 left-0 w-full h-1 bg-muted rounded-full"></span>
          <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
        </h2>

        <div className="space-y-12 relative border-l-2 border-muted ml-3 md:ml-6 pl-8 md:pl-12 py-2">
          {education.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-0 w-6 h-6 rounded-full border-4 border-background bg-muted group-hover:bg-primary transition-colors duration-300"></div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-bold font-sans text-foreground group-hover:text-primary transition-colors">
                      {item.school}
                      <a href={item.schoolUrl} target="_blank" rel="noopener noreferrer" className="ml-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink size={16} />
                      </a>
                    </h3>
                    <p className="text-lg text-primary font-medium">{item.degree}</p>
                  </div>
                  <div className="flex items-center text-muted-foreground font-serif text-sm bg-muted/30 px-3 py-1 rounded-full w-fit">
                     <span className="font-mono">{item.date}</span>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none text-muted-foreground font-serif prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary prose-li:marker:text-primary text-sm">
                  <ReactMarkdown>{item.description}</ReactMarkdown>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExternalLink({ size = 16 }: { size?: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  )
}
