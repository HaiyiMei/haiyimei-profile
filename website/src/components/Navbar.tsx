import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Open-Source Projects" },
  { id: "publications", label: "Publications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);

      const checkpoint = window.scrollY + 140;
      let current = "";
      for (const item of NAV_ITEMS) {
        const section = document.getElementById(item.id);
        if (!section) {
          continue;
        }
        if (section.offsetTop <= checkpoint) {
          current = item.id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <header
      className={cn(
        "site-header transition-all duration-300 ease-in-out",
        isScrolled && "scrolled"
      )}
    >
      <nav className="content-shell flex h-[80px] items-center">
        <div className="site-nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={cn(
                "site-nav-link",
                activeSection === item.id && "nav-active"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
