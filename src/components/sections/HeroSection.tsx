import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  const techStack = ["React", "Node.js", "TypeScript", "Next.js", "AI/LLM"];
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      frame = requestAnimationFrame(() => {
        const el = titleRef.current;
        if (el) el.style.transform = `translate3d(0, ${window.scrollY * -0.05}px, 0)`;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative min-h-[92svh] flex items-center overflow-hidden pt-32 pb-20">
      {/* Editorial rules */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "calc(100% / 6) 100%",
        }}
      />

      <div className="container relative z-10">
        {/* Top meta row */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-foreground/20 pb-4 mb-10 animate-fade-up">
          <span className="eyebrow">Portfólio — Edição {new Date().getFullYear()}</span>
          <span className="eyebrow flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
            </span>
            Disponível para oportunidades
          </span>
          <span className="eyebrow">Brasília — BR</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          {/* Headline */}
          <div className="lg:col-span-7 min-w-0">
            <h1
              ref={titleRef}
              className="display-xl text-[clamp(2.6rem,12vw,4.5rem)] lg:text-[clamp(3.2rem,6.4vw,6.5rem)] [text-wrap:balance] break-words animate-fade-up will-change-transform"
              style={{ animationDelay: "0.1s" }}
            >
              Desenvolvedor
              <br />
              <span className="outline-text">Fullstack</span>
              <br />
              <span className="text-gradient text-[0.72em]">com IA no fluxo</span>
            </h1>
          </div>

          {/* Side column */}
          <div className="lg:col-span-5 min-w-0 lg:border-l lg:border-foreground/20 lg:pl-8 space-y-7 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-base leading-relaxed text-muted-foreground">
              Transformo ideias em produtos digitais escaláveis com{" "}
              <span className="text-foreground font-medium">JavaScript moderno</span> e{" "}
              <span className="text-foreground font-medium">inteligência artificial</span> —
              mais rápido, com mais qualidade.
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {techStack.map((tech) => (
                <span key={tech} className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button variant="hero" size="lg" asChild>
                <a href="#projetos">
                  Ver projetos
                  <ArrowDown className="ml-1" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://drive.google.com/file/d/1Exq-6eW2VmqlCxtMhqvjO-We4azkZEs5/view?usp=sharing" download target="_blank" rel="noopener noreferrer">
                  <Download className="mr-1" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-5 pt-2">
              <a
                href="https://github.com/BrenoPF"
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/breno-pereira-985a49140/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
