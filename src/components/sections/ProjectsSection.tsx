import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com painel admin, gestão de produtos, pagamentos integrados e dashboard de analytics em tempo real.",
      problem: "Loja precisava escalar de 100 para 10.000 pedidos/dia sem perder performance.",
      role: "Tech Lead & Fullstack Developer",
      results: ["99.9% uptime", "Load time < 2s", "+300% conversão"],
      techs: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60",
      demo: "#",
      github: "#",
      featured: true,
    },
    {
      title: "AI Content Generator",
      description: "Ferramenta SaaS que usa GPT-4 para gerar conteúdo otimizado para SEO, com editor colaborativo e histórico de versões.",
      problem: "Agências gastavam 8h por artigo. Com a ferramenta, reduziu para 30min.",
      role: "Fullstack Developer",
      results: ["10.000+ usuários", "2M+ textos gerados", "NPS 72"],
      techs: ["React", "Python", "OpenAI API", "MongoDB", "AWS"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
      demo: "#",
      github: "#",
      featured: true,
    },
    {
      title: "Real-time Dashboard",
      description: "Dashboard de monitoramento em tempo real para operações de logística com mapas interativos e alertas inteligentes.",
      problem: "Empresa não tinha visibilidade em tempo real de sua frota de 500 veículos.",
      role: "Frontend Lead",
      results: ["-40% tempo resposta", "100% visibilidade", "-25% custos"],
      techs: ["React", "WebSockets", "Mapbox", "Node.js", "TimescaleDB"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      demo: "#",
      github: "#",
      featured: false,
    },
  ];

  return (
    <section id="projetos" className="py-24 relative">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-mono text-primary bg-primary/10 rounded-full mb-4">
              Projetos em Destaque
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Construindo soluções que{" "}
              <span className="text-gradient">geram impacto</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada projeto conta uma história de problemas reais resolvidos com tecnologia de ponta.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className={`group relative rounded-2xl border border-border bg-card/50 overflow-hidden hover:border-primary/30 transition-all duration-500 ${
                  project.featured ? "lg:grid lg:grid-cols-2" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${project.featured ? "lg:h-auto h-64" : "h-64"}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                  
                  {/* Tech Tags Overlay */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.techs.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-background/80 backdrop-blur-sm rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techs.length > 4 && (
                      <span className="px-2 py-1 text-xs font-mono bg-background/80 backdrop-blur-sm rounded border border-border">
                        +{project.techs.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-primary font-medium">{project.role}</p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="p-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.demo}
                        className="p-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="p-4 rounded-lg bg-secondary/50 border border-border mb-4">
                    <p className="text-sm">
                      <span className="font-semibold text-foreground">Problema: </span>
                      <span className="text-muted-foreground">{project.problem}</span>
                    </p>
                  </div>

                  {/* Results */}
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.results.map((result) => (
                      <span
                        key={result}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full"
                      >
                        <ArrowUpRight size={14} />
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                Ver todos os projetos no GitHub
                <ExternalLink className="ml-2" size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
