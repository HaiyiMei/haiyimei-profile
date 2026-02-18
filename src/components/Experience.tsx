import { portfolioData } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from "react-markdown";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-background/50">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle className="text-xl font-bold">{item.role}</CardTitle>
                    <CardDescription className="text-lg mt-1">
                      <a href={item.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-medium text-foreground">
                        {item.company}
                      </a>
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="w-fit text-sm py-1">
                    {item.date}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="prose dark:prose-invert max-w-none prose-sm">
                  <ReactMarkdown>{item.description}</ReactMarkdown>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
