import Reveal from "@/components/Reveal";

const TechStackSection = () => {
  const categories = [
    {
      title: "Frontend",
      context: "Interface",
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
      context: "Lógica & Core",
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
      context: "Persistência",
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
      context: "Infraestrutura",
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
      context: "Inteligência",
      highlight: true,
      techs: [
        { name: "ChatGPT / Claude", level: "Expert" },
        { name: "GitHub Copilot", level: "Expert" },
        { name: "Cursor AI", level: "Expert" },
        { name: "LangChain", level: "Avançado" },
        { name: "OpenAI API", level: "Avançado" },
        { name: "Prompt Engineering", level: "Expert" },
      ],
    },
    {
      title: "Outras Skills",
      context: "Híbrido",
      techs: [
        { name: "Git / GitHub", level: "Expert" },
        { name: "Agile / Scrum", level: "Avançado" },
        { name: "Code Review", level: "Expert" },
        { name: "Testing", level: "Avançado" },
        { name: "Clean Code", level: "Expert" },
        { name: "System Design", level: "Avançado" },
      ],
    },
  ];

  const levelWeight = { Expert: 3, Avançado: 2, Intermediário: 1 } as const;

  return (
    <section id="stack" className="py-24 lg:py-32 border-t border-foreground/20 bg-secondary/40">
      <div className="container">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-foreground/20 pb-6 mb-14">
            <div>
              <span className="eyebrow block mb-3">§ Stack técnica</span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.9]">
                Tecnologias
                <br />
                que domino
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground md:text-right leading-relaxed">
              Curadoria técnica focada em performance, escalabilidade e experiência do usuário final.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {categories.map((category, idx) => {
            const isHighlight = category.highlight;
            return (
              <Reveal key={category.title} delay={(idx % 3) * 100}>
                <div
                  className={`h-full p-7 lg:p-8 transition-colors duration-500 group ${
                    isHighlight
                      ? "bg-foreground text-background hover:bg-foreground/95"
                      : "bg-background hover:bg-card"
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-8">
                    <div>
                      <span
                        className={`font-mono text-[0.65rem] uppercase tracking-[0.2em] block mb-2 ${
                          isHighlight ? "opacity-60" : "text-muted-foreground"
                        }`}
                      >
                        {String(idx + 1).padStart(2, "0")} / {category.context}
                      </span>
                      <h3 className="font-display text-xl lg:text-2xl">{category.title}</h3>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {category.techs
                      .sort((a, b) => levelWeight[b.level] - levelWeight[a.level])
                      .map((tech) => {
                        const isExpert = tech.level === "Expert";
                        return (
                          <li
                            key={tech.name}
                            className="flex items-center justify-between gap-4 py-2 border-b border-current/10 group/item"
                          >
                            <span
                              className={`font-sans text-sm font-medium transition-transform duration-500 group-hover/item:translate-x-1 ${
                                isHighlight ? "text-background" : "text-foreground"
                              }`}
                            >
                              {tech.name}
                            </span>
                            <span
                              className={`shrink-0 font-mono text-[0.6rem] uppercase tracking-[0.14em] px-2 py-0.5 border transition-colors duration-300 ${
                                isHighlight
                                  ? isExpert
                                    ? "border-background/80 bg-background/10"
                                    : "border-background/30 opacity-70"
                                  : isExpert
                                    ? "border-foreground/60 bg-foreground/[0.03] group-hover/item:bg-foreground/5"
                                    : "border-foreground/15 text-muted-foreground"
                              }`}
                            >
                              {tech.level}
                            </span>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={150}>
          <div className="mt-10 flex items-center gap-6">
            <div className="h-px flex-1 bg-foreground/10" />
            <span className="eyebrow whitespace-nowrap opacity-60">
              Domínio técnico baseado em projetos reais
            </span>
            <div className="h-px flex-1 bg-foreground/10" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TechStackSection;
