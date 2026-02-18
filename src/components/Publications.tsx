import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Database } from "lucide-react";

export function Publications() {
  const { publications } = portfolioData;

  return (
    <section id="publications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Publications</h2>
        <div className="max-w-6xl mx-auto space-y-12">
          {publications.map((highlight, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img 
                  src={highlight.imageUrl} 
                  alt={highlight.title} 
                  className="w-full h-auto rounded-lg object-cover shadow-sm border"
                />
              </div>
              <div className="flex-grow space-y-4">
                <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl font-bold leading-tight">{highlight.title}</h3>
                    <Badge variant="outline" className="whitespace-nowrap flex-shrink-0">
                        {highlight.venue}
                    </Badge>
                </div>
                
                <div className="text-muted-foreground text-sm flex flex-wrap gap-1">
                  {highlight.authors.map((author, i) => (
                    <span key={i} className={author.isMe ? "font-bold text-foreground underline decoration-primary decoration-2 underline-offset-4" : ""}>
                      {author.name}{i < highlight.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground">{highlight.description}</p>
                
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={highlight.paperUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Paper
                    </a>
                  </Button>
                  {highlight.codeUrl && (
                    <Button variant="outline" size="sm" asChild>
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
