import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail, ArrowDown, Youtube } from "lucide-react";
import { GraduationCap } from "lucide-react"; // Alternative for Scholar if needed, or stick to FA classes

export function Hero() {
  const { name, role, social } = portfolioData.personal;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = role[currentRoleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % role.length);
      } else {
        setDisplayText(
          currentRole.substring(0, displayText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, role]);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative text-center px-4">
      <div className="space-y-6 animate-in fade-in zoom-in duration-1000">
        <h2 className="text-2xl md:text-3xl font-medium text-primary font-sans">Hi, my name is</h2>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight font-sans text-[#E4E6EB]">{name}</h1>
        
        <div className="h-10 md:h-16 text-2xl md:text-4xl font-semibold text-[#B0B3B8] font-sans flex items-center justify-center gap-2">
          <span>I am a</span>
          <span className="text-white min-w-[10px]">{displayText}</span>
          <span className="animate-pulse text-primary">|</span>
        </div>

        <div className="flex space-x-6 justify-center pt-10">
          <SocialLink href={social.github} icon={<Github className="w-6 h-6" />} label="Github" />
          <SocialLink href={social.linkedin} icon={<Linkedin className="w-6 h-6" />} label="LinkedIn" />
          <SocialLink href={social.youtube} icon={<Youtube className="w-6 h-6" />} label="YouTube" />
          <SocialLink href={social.scholar} icon={<GraduationCap className="w-6 h-6" />} label="Scholar" />
          <SocialLink href={social.email} icon={<Mail className="w-6 h-6" />} label="Email" />
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <a href="#about" aria-label="Scroll to About">
          <ArrowDown className="w-8 h-8 text-[#B0B3B8] hover:text-primary transition-colors cursor-pointer" />
        </a>
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
      className="p-3 rounded-full border border-[#8ABECC] text-[#8ABECC] hover:bg-[#8ABECC] hover:text-[#18191A] transition-all duration-300 transform hover:scale-110"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
