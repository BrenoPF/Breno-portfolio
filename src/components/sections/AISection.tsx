import Reveal from "@/components/Reveal";

const AISection = () => {
  const aiTools = [
    { name: "GitHub Copilot", usage: "Autocompletar inteligente, pair programming virtual" },
    { name: "Google Gemini", usage: "Arquitetura, debug, documentação, code review" },
    { name: "Cursor AI", usage: "Refatoração, testes automatizados, migrations" },
    { name: "Prompt Engineering", usage: "Prompts otimizados para cada contexto técnico" },
  ];

  const benefits = [
    { metric: "3x", label: "mais rápido", description: "Tempo de desenvolvimento reduzido drasticamente" },
    { metric: "70%", label: "menos bugs", description: "IA ajuda a identificar problemas antes do deploy" },
    { metric: "50%", label: "mais cobertura", description: "Testes gerados automaticamente com IA" },
  ];

  const workflows = [
    { title: "Planejamento", description: "Brainstorm de arquitetura, estrutura de projeto e edge cases." },
    { title: "Desenvolvimento", description: "Copilot acelera a escrita; modelos ajudam em decisões complexas." },
    { title: "Review & Testes", description: "Testes unitários, vulnerabilidades e sugestões de melhoria." },
    { title: "Documentação", description: "Documentação gerada e mantida atualizada automaticamente." },
  ];

  return (
    <section id="ia" className="py-24 lg:py-32 border-t border-foreground/20">
      <div className="container">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-foreground/20 pb-6 mb-12">
            <div>
              <span className="eyebrow block mb-2">§ Diferencial</span>
              <h2 className="font-display text-4xl sm:text-5xl leading-[0.9]">
                IA como
                <br />
                <span className="outline-text">superpoder</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Não apenas uso IA — integro-a profundamente no meu workflow para entregar código
              melhor, mais rápido e com menos erros.
            </p>
          </div>
        </Reveal>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15 mb-16">
          {benefits.map((b, i) => (
            <Reveal key={b.label} delay={i * 100}>
              <div className="h-full bg-background p-8 hover:bg-card transition-colors duration-500">
                <div className="font-display text-6xl leading-none mb-3">{b.metric}</div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] mb-2">{b.label}</div>
                <p className="text-sm text-muted-foreground">{b.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Tools */}
          <div>
            <Reveal>
              <h3 className="eyebrow border-b border-foreground/20 pb-3 mb-2">Ferramentas</h3>
            </Reveal>
            <div className="divide-y divide-foreground/10">
              {aiTools.map((tool, i) => (
                <Reveal key={tool.name} delay={i * 80}>
                  <div className="py-5 group">
                    <h4 className="font-display text-lg group-hover:translate-x-1 transition-transform duration-500">
                      {tool.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">{tool.usage}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Workflow */}
          <div>
            <Reveal>
              <h3 className="eyebrow border-b border-foreground/20 pb-3 mb-2">No meu fluxo</h3>
            </Reveal>
            <div className="divide-y divide-foreground/10">
              {workflows.map((step, i) => (
                <Reveal key={step.title} delay={i * 80}>
                  <div className="py-5 flex gap-5 group">
                    <span className="font-mono text-xs text-muted-foreground pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="font-display text-lg group-hover:translate-x-1 transition-transform duration-500">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Pull quote */}
        <Reveal delay={120}>
          <blockquote className="mt-20 border-t border-foreground/20 pt-10 max-w-4xl">
            <p className="font-display text-2xl sm:text-3xl lg:text-4xl leading-[1.05]">
              “A IA não substitui o desenvolvedor — ela amplifica suas capacidades.”
            </p>
            <footer className="eyebrow mt-5">Breno Pereira</footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
};

export default AISection;
