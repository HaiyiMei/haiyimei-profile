import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { social } = portfolioData.personal;

  return (
    <footer className="bg-[#18191A] py-12 border-t border-[#242526] text-[#B0B3B8]">
      <div className="container mx-auto px-4 text-center space-y-4">
        <p className="font-serif text-sm">
            Based on <a href="https://github.com/gurusabarish/hugo-profile" target="_blank" rel="noopener noreferrer" className="text-[#8ABECC] hover:underline">Hugo Profile</a> theme.
        </p>
        <p className="font-sans text-xs opacity-60">
          © {currentYear} {portfolioData.personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
