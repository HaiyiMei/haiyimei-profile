import { ReactTyped } from "react-typed";
import { portfolioData } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { SiOpenai } from "react-icons/si";
import { FaGoogleScholar } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { AsciiDonutHero } from "@/components/AsciiDonutHero";

export function Hero() {
  const { name, subtitle, role, social } = portfolioData.personal;

  return (
    <section id="hero" className="flex min-h-[calc(100vh-80px)] items-center py-0 leading-8">
      <div className="content-shell grid grid-cols-1 items-center gap-8 lg:-mt-4 lg:grid-cols-12">
        <div className="main-heading lg:col-span-7 text-center lg:text-left animate-in fade-in slide-in-from-bottom-5 duration-1000">
          <span className="main-heading text-[clamp(16px,5vw,20px)] opacity-60">Hi, my name is</span>
          <h2 className="main-heading link-accent text-[clamp(3rem,8vw,5.625rem)] font-medium leading-[1.2]">
            {name}
          </h2>
          {subtitle && (
            <h3 className="main-heading text-[clamp(3rem,8vw,4.375rem)] font-medium leading-[1.2] opacity-50">
              {subtitle}
            </h3>
          )}

          <div className="animated-text main-heading py-1 md:py-3">
            I&apos;m a{" "}
            <ReactTyped
              strings={role}
              typeSpeed={50}
              backSpeed={30}
              backDelay={1000}
              loop
              className="link-accent"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start">
            <span className="px-1">
              <a
                href="https://chat.openai.com/g/g-YFsH43Vkt-haiyi-mei"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button main-heading mt-[30px] inline-flex items-center gap-2 px-5 py-[0.45rem] text-base"
              >
                Chat <SiOpenai className="h-4 w-4" />
              </a>
            </span>
            <span className="px-1">
              <SocialLink href={social.github} icon={<FaGithub className="h-[1.2em] w-[1.2em]" />} label="Github" />
            </span>
            <span className="px-1">
              <SocialLink href={social.linkedin} icon={<FaLinkedin className="h-[1.2em] w-[1.2em]" />} label="LinkedIn" />
            </span>
            <span className="px-1">
              <SocialLink href={social.youtube} icon={<FaYoutube className="h-[1.2em] w-[1.2em]" />} label="YouTube" />
            </span>
            <span className="px-1">
              <SocialLink href={social.scholar} icon={<FaGoogleScholar className="h-[1.2em] w-[1.2em]" />} label="Scholar" />
            </span>
            <span className="px-1">
              <SocialLink href={social.email} icon={<MdEmail className="h-[1.2em] w-[1.2em]" />} label="Email" />
            </span>
          </div>
        </div>

        <div className="flex justify-center animate-in fade-in slide-in-from-right-5 duration-1000 delay-200 lg:col-span-5 lg:-ml-4 lg:justify-center">
          <div className="w-full max-w-[380px] lg:max-w-[420px]">
            <AsciiDonutHero />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="social-icon mt-[30px] inline-flex"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
