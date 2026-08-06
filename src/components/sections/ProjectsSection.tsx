import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import PeelImage from "@/components/PeelImage";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Meu IPVA",
      description: "Calculadora gratuita que permite aos usuários estimar o valor do IPVA para o ano de 2026.",
      problem: "Os sites de cálculo de IPVA geralmente solicitam diversos dados do usuário para exibir o valor do imposto.",
      role: "Fullstack Developer",
      results: ["99.9% uptime", "Load time < 2s", "+300% conversão"],
      techs: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      image: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1200",
      demo: "https://www.meuipva.com/",
      github: "https://github.com/BrenoPF/ipva-2026",
    },
    {
      title: "Syntaxwear",
      description: "E-commerce de sneakers com catálogo, carrinho e checkout simplificado.",
      problem: "A marca não tinha um canal próprio para vender as sneakers.",
      role: "Fullstack Developer",
      results: ["Site funcional"],
      techs: ["JavaScript", "Node.js", "CSS", "HTML"],
      image: "",
      demo: "https://brenopf.github.io/ecommerce-syntaxwear/",
      github: "https://github.com/BrenoPF/ecommerce-syntaxwear",
    },
    {
      title: "Visualizador de Perfil GitHub",
      description: "Aplicação web minimalista que consome a API oficial do GitHub para exibir dados completos de um desenvolvedor.",
      problem: "Consultar rapidamente o perfil e os repositórios de um dev sem ruído visual.",
      role: "Frontend Developer",
      results: ["Site funcional"],
      techs: ["JavaScript", "CSS", "HTML"],
      image: "",
      demo: "https://brenopf.github.io/visualizador-perfil-github/",
      github: "https://github.com/BrenoPF/visualizador-perfil-github",
    },
  ];

  return (
    <section id="projetos" className="py-24 lg:py-32 border-t border-foreground/20">
      <div className="container">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-foreground/20 pb-6 mb-4">
            <div>
              <span className="eyebrow block mb-2">§ Selecionados</span>
              <h2 className="font-display text-4xl sm:text-5xl leading-[0.9]">
                Projetos que
                <br />
                geram impacto
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Cada projeto conta uma história de problemas reais resolvidos com tecnologia.
            </p>
          </div>
        </Reveal>

        <div className="divide-y divide-foreground/15 border-b border-foreground/15">
          {projects.map((project, idx) => (
            <Reveal key={project.title}>
              <article className="group grid lg:grid-cols-12 gap-6 lg:gap-10 py-10 transition-colors duration-500 hover:bg-card">
                {/* Index + meta */}
                <div className="lg:col-span-2">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(idx + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                  <p className="eyebrow mt-2">{project.role}</p>
                </div>

                {/* Content */}
                <div className="lg:col-span-6">
                  <h3 className="font-display text-2xl sm:text-3xl mb-3">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-sweep">
                      {project.title}
                    </a>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 max-w-xl">
                    {project.description}
                  </p>
                  <p className="text-sm border-l border-foreground/30 pl-4 mb-5 max-w-xl">
                    <span className="font-display text-xs mr-2">Problema:</span>
                    <span className="text-muted-foreground">{project.problem}</span>
                  </p>

                  <div className="flex flex-wrap gap-x-5 gap-y-2 mb-5">
                    {project.techs.map((tech) => (
                      <span key={tech} className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.results.filter(Boolean).map((result) => (
                      <span
                        key={result}
                        className="inline-flex items-center gap-1 border border-foreground/25 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em]"
                      >
                        <ArrowUpRight size={13} />
                        {result}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="lg:col-span-4">
                  <div className="relative overflow-hidden border border-foreground/15 aspect-[4/3] bg-secondary">
                    {project.image ? (
                      <PeelImage
                        src={project.image}
                        alt={`Prévia do projeto ${project.title}`}
                        className="w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-display text-4xl opacity-15 uppercase text-center px-6">
                          {project.title}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4 mt-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-sweep inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em]"
                    >
                      <Github size={14} /> Código
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-sweep inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em]"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/BrenoPF" target="_blank" rel="noopener noreferrer">
              Ver todos os projetos no GitHub
              <ExternalLink className="ml-2" size={15} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
