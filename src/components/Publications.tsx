import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ExternalLink, Database } from "lucide-react";

export function Publications() {
  const { publications } = portfolioData;

  return (
    <section id="publications" className="py-24 bg-[#18191A] text-[#E4E6EB]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 font-sans text-center md:text-left relative inline-block">
          Publications
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#242526] rounded-full"></span>
          <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-[#8ABECC] rounded-full"></span>
        </h2>

        <div className="space-y-12">
          {publications.map((highlight, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row gap-8 items-start group"
            >
              <div className="w-full md:w-64 flex-shrink-0 overflow-hidden rounded-lg border border-[#242526] group-hover:border-[#8ABECC]/50 transition-colors">
                <img 
                  src={highlight.imageUrl} 
                  alt={highlight.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="flex-grow space-y-3">
                <h3 className="text-xl font-bold leading-tight font-sans text-[#E4E6EB] group-hover:text-[#8ABECC] transition-colors">
                  {highlight.title}
                </h3>
                  
                <div className="text-[#B0B3B8] text-base font-serif leading-relaxed">
                  {highlight.authors.map((author, i) => (
                    <span key={i} className={author.isMe ? "text-[#E4E6EB] font-bold underline decoration-[#8ABECC] decoration-2 underline-offset-4" : ""}>
                      {author.name}{i < highlight.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>

                <div className="items-center gap-4 text-sm font-medium text-[#8ABECC]">
                    <span className="px-3 py-1 bg-[#8ABECC]/10 rounded-full border border-[#8ABECC]/20">
                        {highlight.venue}
                    </span>
                </div>

                <p className="text-[#B0B3B8] font-serif text-sm">
                  {highlight.description}
                </p>
                
                <div className="flex gap-4 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="border-[#242526] text-[#B0B3B8] hover:text-[#8ABECC] hover:border-[#8ABECC] hover:bg-transparent"
                  >
                    <a href={highlight.paperUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Paper
                    </a>
                  </Button>
                  {highlight.codeUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="border-[#242526] text-[#B0B3B8] hover:text-[#8ABECC] hover:border-[#8ABECC] hover:bg-transparent"
                    >
                      <a href={highlight.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Database className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
