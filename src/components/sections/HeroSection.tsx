import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  const techStack = ["React", "Node.js", "TypeScript", "Next.js", "AI/LLM"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial opacity-50" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground font-mono">Disponível para oportunidades</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Desenvolvedor{" "}
            <span className="text-gradient">Fullstack</span>
            <br />
            <span className="text-muted-foreground">com superpoderes de</span>{" "}
            <span className="text-gradient">IA</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Transformo ideias em produtos digitais escaláveis usando{" "}
            <span className="text-foreground font-medium">JavaScript moderno</span> e{" "}
            <span className="text-foreground font-medium">inteligência artificial</span>{" "}
            para entregar mais rápido e com mais qualidade.
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-mono rounded-md bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#projetos">
                Ver Projetos
                <ArrowDown className="ml-1" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="/cv.pdf" download>
                <Download className="mr-1" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://github.com/BrenoPF"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/breno-pereira-985a49140/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
