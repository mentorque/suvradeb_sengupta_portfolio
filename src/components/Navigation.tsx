import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { FULL_NAME } from "@/config/site";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[hsl(var(--nav-bg))]/90 backdrop-blur-md transition-all duration-500 ${
        mounted ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            type="button"
            onClick={() => scrollToSection("#home")}
            className={`font-semibold text-lg tracking-tight hero-name-gradient transition-transform duration-300 hover:scale-105 ${
              mounted ? "animate-scale-in" : ""
            }`}
          >
            {FULL_NAME}
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href;
              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  style={{ animationDelay: `${index * 60}ms` }}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 nav-item-pop ${
                    mounted ? "animate-fade-in opacity-100" : "opacity-0"
                  } ${
                    isActive
                      ? "text-white bg-gradient-to-r from-cyan-500/20 to-purple-600/20 shadow-[0_0_20px_rgba(168,85,247,0.25)] scale-105"
                      : "text-white/70 hover:text-white hover:bg-white/10 hover:scale-105"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:bg-white/10">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[hsl(var(--nav-bg))] border-t border-white/10 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    className={`block px-3 py-2 rounded-md text-sm font-medium w-full text-left transition-all duration-200 ${
                      isActive ? "text-white bg-purple-600/30" : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
