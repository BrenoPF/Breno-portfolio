import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Stack", href: "#stack" },
    { label: "Projetos", href: "#projetos" },
    { label: "Experiência", href: "#experiencia" },
    { label: "IA", href: "#ia" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled
          ? "py-3 bg-background/85 backdrop-blur-md border-b border-foreground/15"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between gap-6">
          {/* Masthead */}
          <a href="#" className="flex items-baseline gap-3 group">
            <span className="font-display uppercase text-base tracking-tight">Breno Pereira</span>
            <span className="hidden sm:inline eyebrow">Fullstack</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="link-sweep font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="mr-1.5 opacity-40">0{i + 1}</span>
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="border border-foreground px-5 py-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors duration-500"
            >
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 border border-foreground/20 bg-card animate-fade-up">
            <div className="flex flex-col divide-y divide-foreground/10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-5 py-4 font-mono text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                className="px-5 py-4 font-mono text-xs uppercase tracking-[0.2em] bg-foreground text-background"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
