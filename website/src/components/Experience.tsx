import { portfolioData } from "@/data/portfolio";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ReactMarkdown from "react-markdown";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 font-sans text-center md:text-left relative inline-block">
          Where I've Worked
          <span className="absolute bottom-0 left-0 w-full h-1 bg-muted rounded-full"></span>
          <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
        </h2>

        <div className="mt-8">
          <Tabs defaultValue={experience[0].company} orientation="vertical" className="flex flex-col md:flex-row gap-8 md:gap-12">
            <TabsList className="flex md:flex-col h-auto bg-transparent justify-start items-start p-0 w-full md:w-64 space-y-0 md:space-y-0 overflow-x-auto md:overflow-visible no-scrollbar border-b md:border-b-0 md:border-l border-muted">
              {experience.map((item) => (
                <TabsTrigger
                  key={item.company}
                  value={item.company}
                  className="w-full justify-start px-6 py-3 text-base font-sans text-muted-foreground border-l-2 border-transparent data-[state=active]:bg-primary/5 data-[state=active]:text-primary data-[state=active]:border-primary rounded-none transition-all duration-300 hover:bg-muted hover:text-foreground whitespace-nowrap shadow-none"
                >
                  {item.company}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="flex-1 min-h-[400px]">
              {experience.map((item) => (
                <TabsContent key={item.company} value={item.company} className="mt-0 animate-in fade-in slide-in-from-right-4 duration-500 ring-offset-0 focus-visible:ring-0">
                  <div className="space-y-2 mb-6">
                    <h3 className="text-2xl font-bold font-sans text-foreground">
                      {item.role} <span className="text-primary">@ <a href={item.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{item.company}</a></span>
                    </h3>
                    <p className="text-sm font-mono text-muted-foreground">{item.date}</p>
                  </div>

                  <div className="prose prose-invert max-w-none text-muted-foreground font-serif prose-headings:text-foreground prose-headings:font-sans prose-strong:text-foreground prose-a:text-primary prose-li:marker:text-primary">
                    <ReactMarkdown>{item.description}</ReactMarkdown>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
