import { portfolioData } from "@/data/portfolio";
import { Github } from "lucide-react";
import ReactMarkdown from "react-markdown";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section-shell">
      <div className="content-shell">
        <h3 className="section-title">
          Open-Source Projects{" "}
          <a
            href={portfolioData.personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon inline-flex border-0 p-2 align-middle text-foreground"
            aria-label="GitHub profile"
          >
            <Github className="h-5 w-5" />
          </a>
        </h3>

        <div className="narrow-shell mt-10 flex flex-col gap-4">
          {projects.map((project) => {
            const repoPath = project.repoUrl.replace("https://github.com/", "").replace(/\/$/, "");
            const starsBadgeUrl = `https://img.shields.io/github/stars/${repoPath}`;

            return (
              <article key={project.title} className="section-card">
                <div className="section-card-body">
                <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
                  <div className="md:col-span-4 flex flex-col items-center justify-center">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full max-w-[240px] rounded"
                    />
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded bg-background px-2 py-1 text-xs text-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="mt-3">
                      <img src={starsBadgeUrl} alt={`${project.title} stars`} />
                    </a>
                  </div>

                  <div className="md:col-span-8">
                    <h3 className="secondary-heading text-base font-medium leading-[1.2]">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-accent-inline !text-[var(--text-color)]"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <div className="markdown-body projects-markdown mt-2">
                      <ReactMarkdown>{project.description}</ReactMarkdown>
                    </div>
                  </div>
                </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
