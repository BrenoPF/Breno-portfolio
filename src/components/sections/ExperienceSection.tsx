import { Building2, Calendar, ChevronRight } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      role: "Senior Fullstack Developer",
      period: "2022 - Presente",
      type: "Full-time",
      description: "Liderança técnica em squad de produto, desenvolvendo features core da plataforma SaaS.",
      achievements: [
        "Arquitetou microsserviços que suportam 1M+ requisições/dia",
        "Reduziu tempo de deploy de 2h para 15min com CI/CD",
        "Mentorou 4 desenvolvedores júnior",
        "Implementou IA para automação de testes (+60% cobertura)",
      ],
    },
    {
      company: "StartupX",
      role: "Fullstack Developer",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Desenvolvimento de MVP a produto escalável em fintech de pagamentos.",
      achievements: [
        "Desenvolveu sistema de pagamentos processando R$10M+/mês",
        "Integrou 5 gateways de pagamento diferentes",
        "Criou dashboard de analytics em tempo real",
        "Reduziu bugs em produção em 70% com testes automatizados",
      ],
    },
    {
      company: "Agência Digital",
      role: "Frontend Developer",
      period: "2018 - 2020",
      type: "Full-time",
      description: "Desenvolvimento de interfaces para clientes enterprise.",
      achievements: [
        "Entregou 20+ projetos para clientes Fortune 500",
        "Migrou legacy jQuery para React, melhorando performance em 3x",
        "Implementou design system usado em 10+ projetos",
        "Treinou equipe em React e metodologias ágeis",
      ],
    },
  ];

  return (
    <section id="experiencia" className="py-24 relative bg-card/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-mono text-primary bg-primary/10 rounded-full mb-4">
              Experiência Profissional
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Trajetória de{" "}
              <span className="text-gradient">crescimento</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada experiência me preparou para entregar mais valor e liderar com excelência técnica.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, idx) => (
              <div
                key={exp.company}
                className={`relative mb-12 last:mb-0 ${
                  idx % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-1/2"
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-0 w-4 h-4 rounded-full border-4 border-background bg-primary ${
                  idx % 2 === 0 
                    ? "left-0 md:left-auto md:right-0 md:translate-x-1/2" 
                    : "left-0 md:-translate-x-1/2"
                }`} />

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 ${idx % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                  <div className="p-6 rounded-xl border border-border bg-card/80 hover:border-primary/30 transition-all duration-300 hover-lift">
                    {/* Header */}
                    <div className={`flex items-start gap-4 mb-4 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                        <Building2 size={24} />
                      </div>
                      <div className={idx % 2 === 0 ? "md:text-right" : ""}>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                          <span className="px-2 py-0.5 text-xs bg-secondary rounded-full">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className={`text-muted-foreground mb-4 ${idx % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className={`space-y-2 ${idx % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 text-sm ${
                            idx % 2 === 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <ChevronRight size={16} className="text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
