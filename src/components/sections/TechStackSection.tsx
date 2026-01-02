import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Sparkles,
  Layers
} from "lucide-react";

const TechStackSection = () => {
  const categories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
      techs: [
        { name: "React", level: "Expert" },
        { name: "Next.js", level: "Expert" },
        { name: "TypeScript", level: "Expert" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "React Query", level: "Avançado" },
        { name: "Zustand", level: "Avançado" },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
      techs: [
        { name: "Node.js", level: "Expert" },
        { name: "Express", level: "Expert" },
        { name: "NestJS", level: "Avançado" },
        { name: "GraphQL", level: "Avançado" },
        { name: "REST APIs", level: "Expert" },
        { name: "tRPC", level: "Intermediário" },
      ],
    },
    {
      title: "Banco de Dados",
      icon: Database,
      color: "text-amber-400",
      bgColor: "bg-amber-400/10",
      techs: [
        { name: "PostgreSQL", level: "Expert" },
        { name: "MongoDB", level: "Avançado" },
        { name: "Redis", level: "Avançado" },
        { name: "Prisma", level: "Expert" },
        { name: "Supabase", level: "Avançado" },
        { name: "Firebase", level: "Intermediário" },
      ],
    },
    {
      title: "DevOps & Infra",
      icon: Cloud,
      color: "text-violet-400",
      bgColor: "bg-violet-400/10",
      techs: [
        { name: "Docker", level: "Avançado" },
        { name: "AWS", level: "Avançado" },
        { name: "Vercel", level: "Expert" },
        { name: "GitHub Actions", level: "Avançado" },
        { name: "Linux", level: "Avançado" },
        { name: "Nginx", level: "Intermediário" },
      ],
    },
    {
      title: "IA Aplicada",
      icon: Sparkles,
      color: "text-primary",
      bgColor: "bg-primary/10",
      highlight: true,
      techs: [
        { name: "ChatGPT/Claude", level: "Expert" },
        { name: "GitHub Copilot", level: "Expert" },
        { name: "Cursor AI", level: "Expert" },
        { name: "LangChain", level: "Avançado" },
        { name: "OpenAI API", level: "Avançado" },
        { name: "Prompt Engineering", level: "Expert" },
      ],
    },
    {
      title: "Outras Skills",
      icon: Layers,
      color: "text-rose-400",
      bgColor: "bg-rose-400/10",
      techs: [
        { name: "Git/GitHub", level: "Expert" },
        { name: "Agile/Scrum", level: "Avançado" },
        { name: "Code Review", level: "Expert" },
        { name: "Testing", level: "Avançado" },
        { name: "Clean Code", level: "Expert" },
        { name: "System Design", level: "Avançado" },
      ],
    },
  ];

  return (
    <section id="stack" className="py-24 relative bg-card/30">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-mono text-primary bg-primary/10 rounded-full mb-4">
              Stack Técnica
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Tecnologias que{" "}
              <span className="text-gradient">domino</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Um arsenal completo para construir aplicações modernas, escaláveis e de alta performance.
            </p>
          </div>

          {/* Tech Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, idx) => (
              <div
                key={category.title}
                className={`group p-6 rounded-xl border transition-all duration-300 hover-lift ${
                  category.highlight 
                    ? "border-primary/50 bg-primary/5" 
                    : "border-border bg-card/50 hover:border-primary/30"
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-lg ${category.bgColor} ${category.color}`}>
                    <category.icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                  {category.highlight && (
                    <span className="ml-auto px-2 py-0.5 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                      Diferencial
                    </span>
                  )}
                </div>

                {/* Tech List */}
                <div className="space-y-3">
                  {category.techs.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center justify-between py-2 px-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <span className="font-mono text-sm">{tech.name}</span>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                        tech.level === "Expert" 
                          ? "bg-primary/20 text-primary" 
                          : tech.level === "Avançado"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {tech.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
