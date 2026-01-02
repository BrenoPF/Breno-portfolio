import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:dev@email.com", label: "Email" },
  ];

  const techStack = ["React", "TypeScript", "Tailwind CSS", "Vite"];

  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo / Name */}
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code2 size={20} className="text-primary" />
              </div>
              <span className="font-bold text-lg">DevName</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-border" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            {/* Copyright */}
            <p className="flex items-center gap-1">
              © {currentYear} DevName. Feito com
              <Heart size={14} className="text-destructive fill-destructive" />
              e muito café
            </p>

            {/* Tech Stack */}
            <div className="flex items-center gap-2">
              <span>Construído com:</span>
              <div className="flex gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-secondary rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
