import { ReactTyped } from "react-typed";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail, Youtube, GraduationCap, MessageCircle } from "lucide-react";

export function Hero() {
  const { name, subtitle, role, social, heroImage } = portfolioData.personal;

  return (
    <section id="hero" className="flex min-h-[calc(100vh-80px)] items-center py-0 leading-8">
      <div className="content-shell grid grid-cols-1 items-center gap-8 lg:-mt-4 lg:grid-cols-12">
        <div className="lg:col-span-7 text-center lg:text-left animate-in fade-in slide-in-from-bottom-5 duration-1000">
          <span className="main-heading text-[clamp(16px,5vw,20px)] opacity-60">Hi, my name is</span>
          <h2 className="main-heading link-accent text-[clamp(3rem,8vw,5.625rem)] font-medium leading-[1.1]">
            {name}
          </h2>
          {subtitle && (
            <h3 className="main-heading text-[clamp(3rem,8vw,4.375rem)] font-medium leading-[1.1] opacity-50">
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
                Chat <MessageCircle className="h-4 w-4" />
              </a>
            </span>
            <span className="px-1">
              <SocialLink href={social.github} icon={<Github className="h-[1.2em] w-[1.2em]" />} label="Github" />
            </span>
            <span className="px-1">
              <SocialLink href={social.linkedin} icon={<Linkedin className="h-[1.2em] w-[1.2em]" />} label="LinkedIn" />
            </span>
            <span className="px-1">
              <SocialLink href={social.youtube} icon={<Youtube className="h-[1.2em] w-[1.2em]" />} label="YouTube" />
            </span>
            <span className="px-1">
              <SocialLink href={social.scholar} icon={<GraduationCap className="h-[1.2em] w-[1.2em]" />} label="Scholar" />
            </span>
            <span className="px-1">
              <SocialLink href={social.email} icon={<Mail className="h-[1.2em] w-[1.2em]" />} label="Email" />
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 lg:-ml-4 flex justify-center lg:justify-center animate-in fade-in slide-in-from-right-5 duration-1000 delay-200">
          <div className="w-full max-w-[350px] lg:max-w-[351px]">
            <a href="https://space.bilibili.com/30424533" target="_blank" rel="noopener noreferrer">
              <img
                src={heroImage || "/images/avatar.png"}
                alt={name}
                className="hero-image w-full"
              />
            </a>
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
