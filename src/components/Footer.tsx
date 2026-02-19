import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-12 border-t border-muted text-muted-foreground">
      <div className="container mx-auto px-4 text-center space-y-4">
        <p className="font-serif text-sm">
            Based on <a href="https://github.com/gurusabarish/hugo-profile" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Hugo Profile</a> theme.
        </p>
        <p className="font-sans text-xs opacity-60">
          © {currentYear} {portfolioData.personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
