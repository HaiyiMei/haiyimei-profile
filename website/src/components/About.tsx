import { portfolioData } from "@/data/portfolio";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export function About() {
  const { bio } = portfolioData.personal;
  const aboutImage = "/images/me-paris.jpg";

  return (
    <section id="about" className="section-shell">
      <div className="content-shell">
        <h3 className="section-title">About Me</h3>
        <div className="grid grid-cols-1 items-start justify-center gap-10 px-3 py-8 lg:grid-cols-12">
          <div className="flex justify-center lg:col-span-4">
            <img
              src={aboutImage}
              alt="Haiyi Mei in Paris"
              className="hero-image w-[253px] max-w-full"
            />
          </div>
          <div className="markdown-body lg:col-span-8">
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
              {bio}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
}
