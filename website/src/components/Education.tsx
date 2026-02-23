import { portfolioData } from "@/data/portfolio";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-shell">
      <div className="content-shell">
        <h3 className="section-title">Education</h3>
        <div className="narrow-shell mt-10 flex flex-col gap-4">
          {education.map((item) => (
            <article key={item.school} className="section-card">
              <div className="section-card-body p-8 max-md:px-4">
                <div className="float-right">
                  <small className="secondary-heading">{item.date}</small>
                </div>
                <h3 className="secondary-heading text-[1.25rem] font-medium leading-[1.2]">{item.degree}</h3>
                <a
                  href={item.schoolUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent-inline mt-1 inline-block text-base font-medium"
                >
                  {item.school}
                </a>

                <div className="markdown-body mt-3">
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      a: ({ href = "", ...props }) => (
                        <a {...props} href={href} className="link-accent-inline" target="_blank" rel="noopener noreferrer" />
                      ),
                    }}
                  >
                    {item.description}
                  </ReactMarkdown>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
