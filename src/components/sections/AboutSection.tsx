import { Code2, Rocket, Sparkles } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "1 Ano de Experiência",
      description: "Desenvolvendo soluções web escaláveis",
    },
    {
      icon: Rocket,
      title: "Entrega Ágil",
      description: "Foco em resultados mensuráveis",
    },
    {
      icon: Sparkles,
      title: "IA no Workflow",
      description: "Produtividade 3x maior com ferramentas de IA",
    },
  ];

  return (
    <section id="sobre" className="py-24 relative">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-mono text-primary bg-primary/10 rounded-full mb-4">
              Sobre Mim
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Construindo o futuro,{" "}
              <span className="text-gradient">uma linha de código por vez</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou um desenvolvedor fullstack apaixonado por criar experiências digitais 
                excepcionais. Com sólida experiência em <span className="text-foreground font-medium">React</span>, 
                <span className="text-foreground font-medium"> Node.js</span> e 
                <span className="text-foreground font-medium"> TypeScript</span>, 
                transformo requisitos complexos em soluções elegantes e performáticas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Meu diferencial está na integração de <span className="text-primary font-medium">
                ferramentas de IA</span> ao fluxo de desenvolvimento, aumentando 
                significativamente a velocidade de entrega sem comprometer a qualidade. 
                Acredito que a combinação de expertise técnica com inteligência artificial 
                é o futuro do desenvolvimento de software.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Busco oportunidades onde possa contribuir com impacto real, 
                trabalhando em produtos que fazem diferença na vida das pessoas.
              </p>
            </div>

            {/* Highlights Cards */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
