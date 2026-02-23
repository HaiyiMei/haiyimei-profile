import { ReactTyped } from "react-typed";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail, ArrowDown, Youtube, GraduationCap } from "lucide-react";

export function Hero() {
  const { name, role, social, heroImage } = portfolioData.personal;

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative px-4 pt-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-1000">
          <h2 className="text-2xl md:text-3xl font-medium text-primary font-sans">Hi, my name is</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-sans text-foreground">{name}</h1>
          
          <div className="text-2xl md:text-4xl font-semibold text-muted-foreground font-sans flex flex-col md:flex-row items-center lg:items-start gap-2">
            <span>I'm a</span>
            <ReactTyped
              strings={role}
              typeSpeed={50}
              backSpeed={30}
              backDelay={1000}
              loop
              className="text-primary font-bold"
            />
          </div>

          <div className="flex space-x-4 justify-center lg:justify-start pt-6">
             <a href="https://chat.openai.com/g/g-YFsH43Vkt-haiyi-mei" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary px-6 py-2 rounded-xl border border-primary text-primary hover:bg-primary hover:text-background transition-colors font-medium">
                Chat <i className="fa-solid fa-chatgpt ml-2"></i>
             </a>
          </div>

          <div className="flex space-x-4 justify-center lg:justify-start pt-2">
            <SocialLink href={social.github} icon={<Github className="w-5 h-5" />} label="Github" />
            <SocialLink href={social.linkedin} icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
            <SocialLink href={social.youtube} icon={<Youtube className="w-5 h-5" />} label="YouTube" />
            <SocialLink href={social.scholar} icon={<GraduationCap className="w-5 h-5" />} label="Scholar" />
            <SocialLink href={social.email} icon={<Mail className="w-5 h-5" />} label="Email" />
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-5 duration-1000 delay-200">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <img 
              src={heroImage || "/images/avatar.png"} 
              alt={name} 
              className="rounded-full w-full h-full object-cover border-4 border-muted shadow-[0_8px_56px_rgba(15,80,100,0.16)]"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" aria-label="Scroll to About">
          <ArrowDown className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
        </a>
      </div>
      
      {/* Background SVG Pattern */}
      <div className="hidden lg:block absolute bottom-[-50px] left-[-150px] opacity-50 pointer-events-none -z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="201" height="201" viewBox="0 0 201 201">
            <defs>
              <style>{`.cls-1{fill:#282f49;}`}</style>
            </defs>
            <g transform="translate(-384 -1392)">
                {[...Array(9)].map((_, i) => (
                   [...Array(6)].map((_, j) => (
                      <rect key={`${i}-${j}`} className="cls-1" width="12" height="2" rx="1" transform={`translate(${391 + j*54} ${1392 + i*27}) rotate(90)`} />
                   ))
                ))}
            </g>
        </svg>
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
      className="p-3 rounded-full border border-primary text-primary hover:bg-background hover:opacity-80 transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
