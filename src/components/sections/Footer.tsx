import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/BrenoPF", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/breno-pereira-985a49140/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:dev@email.com", label: "Email" },
  ];

  const techStack = ["React", "TypeScript", "Tailwind", "Vite"];

  return (
    <footer className="py-10 border-t border-foreground/20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="font-display uppercase text-2xl leading-none">Breno Pereira</span>
            <p className="eyebrow mt-2">Desenvolvedor Fullstack — Brasília, BR</p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-foreground/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
          <p>© {currentYear} Breno Pereira</p>
          <p>{techStack.join(" · ")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
