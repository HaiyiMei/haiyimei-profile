import { portfolioData } from "@/data/portfolio";
import ReactMarkdown from "react-markdown";

export function About() {
  const { bio, avatar } = portfolioData.personal;
  const { skills } = portfolioData;

  return (
    <section id="about" className="py-24 bg-[#18191A] text-[#E4E6EB]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
          {/* Profile Image - Left Side */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-[#8ABECC]/10 overlay z-10 rounded-2xl"></div>
              <img 
                src={avatar} 
                alt="Profile" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          
          {/* Bio Content - Right Side */}
          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-3xl font-bold mb-6 font-sans text-[#E4E6EB] relative inline-block">
              About Me
              <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-[#8ABECC] rounded-full"></span>
            </h2>

            <div className="prose prose-invert max-w-none text-lg leading-relaxed font-serif text-[#B0B3B8]">
              <ReactMarkdown>{bio}</ReactMarkdown>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-bold mb-6 font-sans text-[#E4E6EB]">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {[...skills.languages, ...skills.frameworks, ...skills.tools].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-[rgba(255,255,255,0.05)] text-[#8ABECC] border border-[#8ABECC]/20 rounded-lg text-sm font-medium font-sans hover:bg-[#8ABECC]/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Quote/separator if needed */}
        <div className="mt-20 border-t border-[#242526] w-1/2 mx-auto"></div>
      </div>
    </section>
  );
}
