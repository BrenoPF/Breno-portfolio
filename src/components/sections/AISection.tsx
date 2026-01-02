import { 
  Sparkles, 
  Zap, 
  Code2, 
  MessageSquare, 
  FileCode, 
  Bug,
  ArrowRight
} from "lucide-react";

const AISection = () => {
  const aiTools = [
    {
      icon: Code2,
      name: "GitHub Copilot",
      usage: "Autocompletar inteligente, pair programming virtual",
    },
    {
      icon: MessageSquare,
      name: "ChatGPT & Claude",
      usage: "Arquitetura, debug, documentação, code review",
    },
    {
      icon: FileCode,
      name: "Cursor AI",
      usage: "Refatoração, testes automatizados, migrations",
    },
    {
      icon: Sparkles,
      name: "Prompt Engineering",
      usage: "Prompts otimizados para cada contexto técnico",
    },
  ];

  const benefits = [
    {
      metric: "3x",
      label: "mais rápido",
      description: "Tempo de desenvolvimento reduzido drasticamente",
    },
    {
      metric: "70%",
      label: "menos bugs",
      description: "IA ajuda a identificar problemas antes do deploy",
    },
    {
      metric: "50%",
      label: "mais cobertura",
      description: "Testes gerados automaticamente com IA",
    },
  ];

  const workflows = [
    {
      title: "Planejamento",
      description: "Uso IA para brainstorm de arquitetura, definir estrutura de projeto e antecipar edge cases.",
      icon: "💡",
    },
    {
      title: "Desenvolvimento",
      description: "Copilot acelera a escrita, Claude ajuda em decisões técnicas complexas.",
      icon: "⚡",
    },
    {
      title: "Review & Testes",
      description: "IA gera testes unitários, identifica vulnerabilidades e sugere melhorias.",
      icon: "🔍",
    },
    {
      title: "Documentação",
      description: "Documentação gerada e mantida atualizada automaticamente.",
      icon: "📚",
    },
  ];

  return (
    <section id="ia" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial opacity-30" />
      
      <div className="container relative">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono bg-primary/10 border border-primary/30 rounded-full mb-4">
              <Sparkles size={16} className="text-primary" />
              <span className="text-primary">Diferencial Competitivo</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              IA como{" "}
              <span className="text-gradient">superpoder</span>{" "}
              no desenvolvimento
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Não apenas uso IA — integro-a profundamente no meu workflow para 
              entregar código melhor, mais rápido e com menos erros.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit) => (
              <div
                key={benefit.label}
                className="text-center p-8 rounded-2xl border border-primary/30 bg-primary/5"
              >
                <div className="text-5xl font-extrabold text-gradient mb-2">
                  {benefit.metric}
                </div>
                <div className="text-xl font-semibold mb-2">{benefit.label}</div>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* AI Tools */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-center">Ferramentas que uso</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {aiTools.map((tool) => (
                <div
                  key={tool.name}
                  className="group p-5 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <tool.icon size={20} />
                    </div>
                    <span className="font-semibold">{tool.name}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{tool.usage}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Como IA está no meu fluxo</h3>
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {workflows.map((step, idx) => (
                  <div key={step.title} className="relative">
                    <div className="p-6 rounded-xl border border-border bg-card text-center hover:border-primary/30 transition-all duration-300 hover-lift">
                      <div className="text-4xl mb-4">{step.icon}</div>
                      <h4 className="font-semibold mb-2">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                    {idx < workflows.length - 1 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                        <ArrowRight size={20} className="text-primary" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-16 p-8 rounded-2xl border border-border bg-card/50 text-center">
            <blockquote className="text-xl italic text-muted-foreground max-w-3xl mx-auto">
              "A IA não substitui o desenvolvedor — ela amplifica suas capacidades. 
              Quem souber usar essas ferramentas entrega{" "}
              <span className="text-foreground font-medium">10x mais valor</span>."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
