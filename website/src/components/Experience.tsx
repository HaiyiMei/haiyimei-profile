import { portfolioData } from "@/data/portfolio";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-shell">
      <div className="content-shell">
        <h3 className="section-title">Experience</h3>
        <div className="mx-auto max-w-[825px] py-6">
          <div className="experience-container px-3 pt-2">
          <Tabs defaultValue={experience[0].company} className="w-full">
            <TabsList className="mb-3 h-auto w-full justify-start overflow-x-auto border-b border-[#b0b3b8]/30 bg-transparent p-0">
              {experience.map((item) => (
                <TabsTrigger
                  key={item.company}
                  value={item.company}
                  className="main-heading rounded-none border-b-2 border-transparent px-4 py-2 text-[1.2rem] font-normal text-foreground shadow-none data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground hover:border-primary hover:text-primary"
                >
                  {item.company}
                </TabsTrigger>
              ))}
            </TabsList>

            <div>
              {experience.map((item) => (
                <TabsContent
                  key={item.company}
                  value={item.company}
                  className="mt-0 animate-in fade-in slide-in-from-right-4 duration-500 p-4 ring-offset-0 focus-visible:ring-0"
                >
                  <div>
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <h4 className="secondary-heading text-[1.5rem] font-medium leading-[1.2]">
                        {item.role} -{" "}
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-accent-inline"
                        >
                          {item.company}
                        </a>
                      </h4>
                      <small className="secondary-heading text-sm opacity-80">{item.date}</small>
                    </div>
                    <hr className="my-3 border-[#b0b3b8]/25" />

                    <div className="experience-markdown markdown-body">
                      <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        components={{
                          a: ({ href = "", ...props }) => {
                            const isExternal = href.startsWith("http");
                            return (
                              <a
                                {...props}
                                href={href}
                                className="link-accent-inline"
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noopener noreferrer" : undefined}
                              />
                            );
                          },
                        }}
                      >
                        {item.description}
                      </ReactMarkdown>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
