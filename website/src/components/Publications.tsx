import { portfolioData } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export function Publications() {
  const { publications } = portfolioData;

  return (
    <section id="publications" className="section-shell">
      <div className="content-shell">
        <h3 className="section-title">
          Publications{" "}
          <a
            href={portfolioData.personal.social.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon inline-flex border-0 p-2 align-middle text-foreground"
            aria-label="Google Scholar"
          >
            <GraduationCap className="h-5 w-5" />
          </a>
        </h3>

        <div className="narrow-shell mt-10 flex flex-col gap-4">
          {publications.map((highlight) => {
            const arxivMatch = highlight.paperUrl.match(/arxiv\.org\/abs\/(.+)$/);
            const arxivBadge = arxivMatch ? `https://img.shields.io/badge/arXiv-${arxivMatch[1]}-b31b1b.svg?style=flat` : null;

            return (
              <article key={highlight.title} className="section-card">
                <div className="section-card-body">
                <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
                  <div className="md:col-span-4 flex flex-col items-center justify-center">
                    <img src={highlight.imageUrl} alt={highlight.title} className="w-full max-w-[240px] rounded" />
                    <div className="mt-3 flex flex-wrap justify-center gap-2">
                      {highlight.codeUrl && (
                        <a href={highlight.codeUrl} target="_blank" rel="noopener noreferrer">
                          <img
                            src={`https://img.shields.io/github/stars/${highlight.codeUrl.replace("https://github.com/", "")}`}
                            alt={`${highlight.title} stars`}
                          />
                        </a>
                      )}
                      {arxivBadge && (
                        <a href={highlight.paperUrl} target="_blank" rel="noopener noreferrer">
                          <img src={arxivBadge} alt="arXiv badge" />
                        </a>
                      )}
                    </div>
                    <strong className="secondary-heading mt-2">{highlight.venue}</strong>
                  </div>

                  <div className="md:col-span-8">
                    <h3 className="secondary-heading text-[1.25rem] font-medium leading-[1.2]">{highlight.title}</h3>
                    <p className="markdown-body mt-2 text-[0.95rem] leading-7">
                      {highlight.authors.map((author, i) => (
                        <span key={`${author.name}-${i}`} className={author.isMe ? "font-semibold underline decoration-primary decoration-2 underline-offset-4" : ""}>
                          {author.name}
                          {i < highlight.authors.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>
                    <p className="markdown-body mt-3 text-[0.95rem]">{highlight.description}</p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href={highlight.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-button inline-flex items-center gap-2 px-4 py-1.5 text-sm"
                      >
                        Paper
                      </a>
                      {highlight.codeUrl && (
                        <a
                          href={highlight.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hero-button inline-flex items-center gap-2 px-4 py-1.5 text-sm"
                        >
                          Code
                        </a>
                      )}
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
