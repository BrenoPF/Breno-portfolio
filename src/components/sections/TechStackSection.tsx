import Reveal from "@/components/Reveal";

const TechStackSection = () => {
  const categories = [
    {
      title: "Frontend",
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
    <section id="stack" className="py-24 lg:py-32 border-t border-foreground/20 bg-secondary/40">
      <div className="container">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-foreground/20 pb-6 mb-12">
            <div>
              <span className="eyebrow block mb-2">§ Stack técnica</span>
              <h2 className="font-display text-4xl sm:text-5xl leading-[0.9]">
                Tecnologias
                <br />
                que domino
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Um arsenal completo para construir aplicações modernas, escaláveis e de alta
              performance.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15">
          {categories.map((category, idx) => (
            <Reveal key={category.title} delay={(idx % 3) * 100}>
              <div
                className={`h-full p-7 transition-colors duration-500 ${
                  category.highlight ? "bg-foreground text-background" : "bg-background hover:bg-card"
                }`}
              >
                <div className="flex items-baseline justify-between mb-5">
                  <h3 className="font-display text-lg">{category.title}</h3>
                  <span className={`font-mono text-[0.7rem] ${category.highlight ? "opacity-70" : "text-muted-foreground"}`}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <ul className={`divide-y ${category.highlight ? "divide-background/25" : "divide-foreground/10"}`}>
                  {category.techs.map((tech) => (
                    <li key={tech.name} className="flex items-center justify-between py-2.5 group">
                      <span className="font-mono text-sm group-hover:translate-x-1 transition-transform duration-500">
                        {tech.name}
                      </span>
                      <span className={`text-[0.65rem] font-mono uppercase tracking-[0.14em] ${category.highlight ? "opacity-70" : "text-muted-foreground"}`}>
                        {tech.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
