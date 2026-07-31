import Reveal from "@/components/Reveal";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Moovus",
      role: "Suporte Técnico",
      period: "2024 — atual",
      type: "Full-time",
      description: "Análise e resolução de chamados via Jira com foco em experiência do usuário.",
      achievements: [
        "Identificação de inconsistências cadastrais e melhoria de processos internos.",
        "Forte atuação em diagnóstico de problemas e comunicação técnica.",
      ],
    },
    {
      company: "Desenvolvedor Freelancer",
      role: "Frontend Developer",
      period: "2025 — 2026",
      type: "Freelance",
      description: "Desenvolvimento de landing pages responsivas utilizando HTML, CSS e JavaScript.",
      achievements: [
        "Integração com APIs REST e consumo de dados em JSON",
        "Correção de bugs e melhorias de performance",
        "Versionamento de código com Git",
      ],
    },
  ];

  return (
    <section id="experiencia" className="py-24 lg:py-32 border-t border-foreground/20 bg-secondary/40">
      <div className="container">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-foreground/20 pb-6 mb-12">
            <div>
              <span className="eyebrow block mb-2">§ Trajetória</span>
              <h2 className="font-display text-4xl sm:text-5xl leading-[0.9]">
                Experiência
                <br />
                profissional
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Cada experiência me preparou para entregar mais valor com excelência técnica.
            </p>
          </div>
        </Reveal>

        <div className="divide-y divide-foreground/15 border-y border-foreground/15">
          {experiences.map((exp, idx) => (
            <Reveal key={exp.company} delay={idx * 100}>
              <div className="grid lg:grid-cols-12 gap-6 py-10 group transition-colors duration-500 hover:bg-background">
                <div className="lg:col-span-3">
                  <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                  <p className="eyebrow mt-1">{exp.type}</p>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-display text-2xl leading-[0.95] group-hover:translate-x-1 transition-transform duration-500">
                    {exp.role}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {exp.company}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <span className="font-mono text-[0.65rem] pt-1 text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
